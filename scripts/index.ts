import { Logger } from '@poppinss/cliui';
import { kebabCase, pascalCase } from 'change-case';
import type { Rule } from 'eslint';
import type { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import colors from 'picocolors';
import { format as prettierFormat } from 'prettier';

const logger = new Logger();

type PluginRules = Record<string, Rule.RuleModule>;

interface Plugin {
  name: string;
  prefix?: string;
  module: string;
  rules?: PluginRules;
}

/**
 * Format the given content with Prettier.
 */
function format(content: string) {
  return prettierFormat(content, {
    plugins: ['prettier-plugin-organize-imports'],
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });
}

function concatDoc(lines: string[]) {
  lines = lines.filter(Boolean);
  if (!lines.length || lines.every((line) => !line.trim())) {
    return '';
  }

  return ['/**', ...lines.map((line) => ` * ${line}`), ' */'].join('\n');
}

/**
 * Map of plugins for which the script will generate rule files.
 */
export const PLUGIN_REGISTRY: Readonly<Record<string, Plugin>> = {
  deprecation: {
    name: 'Deprecation',
    module: 'eslint-plugin-deprecation',
  },
  eslint: {
    name: 'Eslint',
    module: 'eslint',
  },
  'typescript-eslint': {
    name: 'TypeScript',
    prefix: '@typescript-eslint',
    module: '@typescript-eslint/eslint-plugin',
  },
  import: {
    name: 'Import',
    module: 'eslint-plugin-import',
  },
  'eslint-comments': {
    name: 'EslintComments',
    module: 'eslint-plugin-eslint-comments',
  },
  'graphql-eslint': {
    name: 'GraphQL',
    prefix: '@graphql-eslint',
    module: '@graphql-eslint/eslint-plugin',
  },
  jsdoc: {
    name: 'JSDoc',
    prefix: 'jsdoc',
    module: 'eslint-plugin-jsdoc',
  },
  jsonc: {
    name: 'Jsonc',
    module: 'eslint-plugin-jsonc',
  },
  'jsx-a11y': {
    name: 'JsxA11y',
    module: 'eslint-plugin-jsx-a11y',
  },
  mdx: {
    name: 'Mdx',
    module: 'eslint-plugin-mdx',
  },
  n: {
    name: 'N',
    module: 'eslint-plugin-n',
  },
  node: {
    name: 'Node',
    module: 'eslint-plugin-node',
  },
  promise: {
    name: 'Promise',
    module: 'eslint-plugin-promise',
  },
  react: {
    name: 'React',
    module: 'eslint-plugin-react',
  },
  'react-hooks': {
    name: 'ReactHooks',
    module: 'eslint-plugin-react-hooks',
  },
  sonarjs: {
    name: 'SonarJS',
    prefix: 'sonarjs',
    module: 'eslint-plugin-sonarjs',
  },
  spellcheck: {
    name: 'Spellcheck',
    module: 'eslint-plugin-spellcheck',
  },
  'testing-library': {
    name: 'TestingLibrary',
    module: 'eslint-plugin-testing-library',
  },
  unicorn: {
    name: 'Unicorn',
    module: 'eslint-plugin-unicorn',
  },
  vitest: {
    name: 'Vitest',
    module: 'eslint-plugin-vitest',
  },
  vue: {
    name: 'Vue',
    module: 'eslint-plugin-vue',
  },
  'vue-i18n': {
    name: 'VueI18n',
    prefix: '@intlify/vue-i18n',
    module: '@intlify/eslint-plugin-vue-i18n',
  },
  'vue-pug': {
    name: 'VuePug',
    module: 'eslint-plugin-vue-pug',
  },
  yml: {
    name: 'Yml',
    module: 'eslint-plugin-yml',
  },
  'import-x': {
    name: 'ImportX',
    module: 'eslint-plugin-import-x',
  },
} as const;

async function loadPlugin(plugin: Plugin): Promise<Plugin> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mod: any = await import(plugin.module);
  const rules: PluginRules =
    plugin.module === 'eslint'
      ? Object.fromEntries(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          new mod.Linter().getRules().entries(),
        )
      : mod.rules ?? mod.default.rules;
  return { ...plugin, rules };
}

/**
 * Remove unnecessary comments that are generated by `json-schema-to-typescript`.
 */
function cleanJsDoc(content: string): string {
  const patterns: RegExp[] = [
    /\* This interface was referenced by .+ JSON-Schema definition/,
    /\* via the `.+` "/,
  ];

  return content
    .split('\n')
    .filter((line) => !patterns.some((ignoredLine) => ignoredLine.test(line)))
    .join('\n');
}

/**
 * Replace some types that are generated by `json-schema-to-typescript`.
 */
function patchTypes(content: string): string {
  const replacements: Array<[pattern: RegExp, replacement: string]> = [
    [
      /\(string & \{\s*\[k: string\]: any\s*\} & \{\s*\[k: string\]: any\s*\}\)\[\]/,
      'string[]',
    ],
    [/\(string & \{\s*\[k: string\]: any\s*\}\)\[\]/, 'string[]'],
    [/;\n\s*\[k: string\]: any;/, '; & {\n  [k: string]: any;'],
  ];

  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }

  if (/^export type \w+Option = \(\[\]\|/.test(content)) {
    content = content.replaceAll('| []|', '|');
  }

  return content;
}

/**
 * Generate a type from the given JSON schema.
 */
async function generateTypeFromSchema(
  schema: JSONSchema4,
  typeName: string,
): Promise<string> {
  schema = JSON.parse(
    JSON.stringify(schema).replace(/#\/items\/0\/\$defs\//g, '#/$defs/'),
  );
  let result = await compile(schema, typeName, {
    format: false,
    bannerComment: '',
    unknownAny: false,
  });

  result = cleanJsDoc(result);
  result = patchTypes(result);

  return result;
}

const __dirname: string = fileURLToPath(new URL('.', import.meta.url));

async function generateRule(
  plugin: Plugin,
  ruleName: string,
  rule: Rule.RuleModule,
) {
  let content = '';
  let optionText = '';
  let configText = '';
  let settingText = '';

  const pascalName = pascalCase(ruleName);

  const schema = rule.meta?.schema;
  const isArray = Array.isArray(schema);

  const mainSchema = isArray ? schema[0] : schema;
  const sideSchema = isArray && schema.length > 1 ? schema[1] : undefined;
  const thirdSchema = isArray && schema.length > 2 ? schema[2] : undefined;
  const isSchemaArray = isArray;

  /**
   * Generate a JSDoc with the rule description and `@see` url.
   */
  function generateTypeJsDoc(): string {
    const { meta } = rule;

    /**
     * Build the rule description to append to the JSDoc.
     */
    let description = rule.meta?.docs?.description ?? '';
    description = description.charAt(0).toUpperCase() + description.slice(1);
    if (description.length && !description.endsWith('.')) {
      description += '.';
    }

    /**
     * Build the `@see` url to the rule documentation to append to the JSDoc.
     */
    const seeDocLink = meta?.docs?.url
      ? `@see [${ruleName}](${meta.docs.url})`
      : '';

    return concatDoc([
      description.replace('*/', ''),
      rule.meta?.deprecated ? '@deprecated' : '',
      seeDocLink,
    ]);
  }

  /**
   * Generate a type from a JSON schema and append it to the file content.
   */
  async function appendJsonSchemaType(schema: JSONSchema4, name: string) {
    const type = await generateTypeFromSchema(schema, pascal(name));
    return `\n${type}\n`;
  }

  /**
   * Scoped rule name ESLint config uses.
   */
  function prefixedRuleName(): string {
    const { prefix, name } = plugin;
    let rulePrefix = (prefix ?? kebabCase(name)) + '/';

    if (name === 'Eslint') {
      rulePrefix = '';
    }

    return `${rulePrefix}${ruleName}`;
  }

  const pascal = (name: string) => pascalName + pascalCase(name);

  function writeMember(
    name: 'option' | 'config' | 'setting',
    nullable: boolean,
  ) {
    const text = {
      option: optionText,
      config: configText,
      setting: settingText,
    }[name];

    const stripped = text
      .replace(`export type ${pascal(name)} =`, '')
      .replace(`export interface ${pascal(name)} `, '')
      .trim()
      .replace(/^\(/, '')
      .replace(/\)$/, '')
      .trim();

    // if (text.includes('exceptions')) {
    //   console.log({
    //     name: this.ruleName,
    //     text: text.slice(0, 50),
    //     stripped,
    //     is: isSimpleType(stripped),
    //   });
    // }

    if (isSimpleType(stripped)) {
      return {
        simple: true as const,
        raw: stripped,
        text: `(${stripped})?`,
      };
    } else {
      content += text;
      return {
        simple: false as const,
        text: `${pascal(name)}${nullable ? '?' : ''}`,
      };
    }
  }

  /**
   * Generate and append types for the rule schemas.
   */
  if (thirdSchema) {
    settingText += await appendJsonSchemaType(thirdSchema, 'Setting');
  }

  if (sideSchema) {
    configText += await appendJsonSchemaType(sideSchema, 'Config');
  }

  if (mainSchema) {
    optionText += await appendJsonSchemaType(mainSchema, 'Option');
  }

  /**
   * Append the rule type options to the file content.
   */
  let type = '';
  let isSingleOptional: string | undefined;

  if (mainSchema) {
    if (!isSchemaArray) {
      type = writeMember('option', false).text;
    } else if (thirdSchema) {
      type = arr(
        writeMember('option', true),
        writeMember('config', true),
        writeMember('setting', true),
      );
    } else if (sideSchema) {
      type = arr(writeMember('option', true), writeMember('config', true));
    } else if (mainSchema) {
      const result = writeMember('option', true);
      type = arr(result);
      if (result.simple) {
        isSingleOptional = result.raw;
      }
    }
  }

  const needsNamespace = occurrences(content, 'export') > 1;
  let ruleType: string;

  if (!needsNamespace && isSingleOptional) {
    ruleType = `[(${isSingleOptional})?]`;
  } else if (needsNamespace || (mainSchema && type.length > 50)) {
    content += `export type ${pascalName}RuleConfig = ${type};\n`;
    type = `${pascalName}RuleConfig`;
  }

  let prefix = '';
  let suffix = '';
  if (needsNamespace) {
    prefix += `export namespace ${pascalName} {`;
    suffix += '}';
  }

  ruleType ??= mainSchema
    ? `${needsNamespace ? `${pascalName}.${type}` : type}`
    : 'null';

  /**
   * Append the final rule interface to the file content.
   */
  let property = `${generateTypeJsDoc()}\n`;
  property += `'${prefixedRuleName()}': ${ruleType};`;

  return {
    content: [prefix, content, suffix].join('\n'),
    property,
  };
}

interface FailedRule {
  ruleName: string;
  err: unknown;
}

/**
 * Generate the `index.d.ts` file for the plugin's rules that will re-export all rules.
 */
async function generateRuleFile(
  outDir: string,
  filename: string,
  { rules, name }: Plugin,
  { failedRules, ruleDetails }: RulesFile,
): Promise<void> {
  if (!rules) {
    throw new Error(
      `Plugin ${name} doesn't have any rules. Did you forget to load them?`,
    );
  }

  /**
   * Write the final `index.d.ts` file.
   */
  const fileContent = `
    import type { RuleConfig, RulesObject } from '../rule-config';

    ${Array.from(ruleDetails.values())
      .map((r) => r.content)
      .join('\n')}

    ${concatDoc([`All ${name} rules.`])}
    export interface ${name}Rules {
      ${Object.keys(rules)
        .filter(
          (ruleName) =>
            !failedRules.some((failedRule) => failedRule.ruleName === ruleName),
        )
        .map((name) => ruleDetails.get(name)!.property)
        .join('\n\n')}
    }

    export type ${name}RulesObject = RulesObject<${name}Rules>;
  `;

  const rulePath = join(outDir, filename);
  try {
    writeFileSync(rulePath, await format(fileContent));
  } catch (e) {
    console.error(e);
    writeFileSync(rulePath, fileContent);
  }

  /**
   * Apply a patch to the generated content if a diff file exists for it.
   *
   * Must be called after `generate()`.
   */
  const diffFile = resolve(__dirname, 'diffs', `${filename}.diff`);
  if (existsSync(diffFile)) {
    logger.logUpdate(colors.yellow(`  🧹 Adjusting ${name}`));
    logger.logUpdatePersist();
    try {
      execSync(`git apply ${diffFile}`);
    } catch (e) {
      console.error(`Failed to apply diff file for ${name}`);
    }
  }
}

/**
 * Print a report after having generated rules files for a plugin.
 */
function printGenerationReport(
  rules: Array<[string, Rule.RuleModule]>,
  failedRules: FailedRule[],
): void {
  const msg = `  ✅ Generated ${rules.length - failedRules.length} rules`;
  logger.logUpdate(colors.green(msg));
  logger.logUpdatePersist();

  if (failedRules.length) {
    logger.log(colors.red(`  ❌ Failed ${failedRules.length} rules`));
    failedRules.forEach(({ ruleName, err }) => {
      logger.log(colors.red(`    - ${ruleName}: ${String(err)}`));
    });
  }

  logger.log('');
}

function occurrences(source: string, find: string) {
  let count = 0;
  let pos = -find.length;
  while ((pos = source.indexOf(find, pos + find.length)) > -1) {
    count++;
  }

  return count;
}

const isSimpleType = (type: string) =>
  /^("[^"]+" \| )*"[^"]+"$/.test(type) ||
  /^\{(\s*\w+\??: [\w[\]]+\n)+\s*\}$/.test(type);

const arr = (...members: Array<{ text: string }>): string =>
  `[${members.map((x) => x.text).join(', ')}]`;

type RuleDetail = Awaited<ReturnType<typeof generateRule>>;
type RulesFile = Awaited<ReturnType<typeof generateRulesFile>>;

/**
 * Generate a `.d.ts` file for each rule in the given plugin.
 */
async function generateRulesFile(plugin: Plugin) {
  const failedRules: FailedRule[] = [];
  const ruleDetails = new Map</* ruleName */ string, RuleDetail>();

  const pluginRules = plugin.rules;
  if (!pluginRules) {
    throw new Error(
      `Plugin ${plugin.name} doesn't have any rules. Did you forget to load them?`,
    );
  }

  const rules: Array<[string, Rule.RuleModule]> = Object.entries(pluginRules);
  for (const [ruleName, rule] of rules) {
    logger.logUpdate(colors.yellow(`  Generating > ${ruleName}`));

    try {
      ruleDetails.set(ruleName, await generateRule(plugin, ruleName, rule));
    } catch (err) {
      failedRules.push({ ruleName, err });
    }
  }

  printGenerationReport(rules, failedRules);

  return { failedRules, ruleDetails };
}

export interface RunOptions {
  plugins?: string[];
  targetDirectory?: string;
}

export async function run(options: RunOptions = {}): Promise<void> {
  const { plugins, targetDirectory } = options;

  const wantedPlugins = plugins ?? Object.keys(PLUGIN_REGISTRY);

  const outDir = targetDirectory ?? join(__dirname, '../src/rules');
  mkdirSync(outDir, { recursive: true });

  for (const pluginName of wantedPlugins) {
    const plugin = PLUGIN_REGISTRY[pluginName];
    if (!plugin) {
      throw new Error(`Plugin ${pluginName} doesn't exist.`);
    }

    logger.info(`Generating ${plugin.name} rules.`);
    logger.logUpdate(colors.yellow(`  Loading plugin > ${plugin.module}`));
    const loadedPlugin = await loadPlugin(plugin);
    await generateRuleFile(
      outDir,
      `${pluginName}.d.ts`,
      loadedPlugin,
      await generateRulesFile(loadedPlugin),
    );
  }
}
