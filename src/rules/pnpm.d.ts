import type { RulesObject } from '../rule-config';

export interface JsonEnforceCatalogOption {
  /**
   * Allowed protocols in specifier to not be converted to catalog
   */
  allowedProtocols?: string[];
  /**
   * Whether to autofix the linting error
   */
  autofix?: boolean;
  /**
   * Default catalog to use when moving version to catalog with autofix
   */
  defaultCatalog?: string;
  /**
   * Whether to reuse existing catalog when moving version to catalog with autofix
   */
  reuseExistingCatalog?: boolean;
  /**
   * Strategy to handle conflicts when adding packages to catalogs
   */
  conflicts?: 'new-catalog' | 'overrides' | 'error';
  /**
   * Fields to check for catalog
   */
  fields?: string[];
  /**
   * Ignore certain packages that require version specification
   */
  ignores?: string[];
}

export interface JsonValidCatalogOption {
  /**
   * Whether to auto insert to catalog if missing
   */
  autoInsert?: boolean;
  /**
   * Default specifier to use when auto inserting to catalog
   */
  autoInsertDefaultSpecifier?: string;
  /**
   * Whether to autofix the linting error
   */
  autofix?: boolean;
  /**
   * Whether to enforce no conflicts when adding packages to catalogs (will create version-specific catalogs)
   */
  enforceNoConflict?: boolean;
  /**
   * Fields to check for catalog
   */
  fields?: any[];
}

export interface JsonPreferWorkspaceSettingsOption {
  /**
   * Whether to autofix the linting error
   */
  autofix?: boolean;
}

export interface YamlNoDuplicateCatalogItemOption {
  allow?: string[];
  /**
   * Determines what constitutes a duplicate: "name-only" errors on any duplicate package name, "exact-version" only errors on identical version strings
   */
  checkDuplicates?: 'name-only' | 'exact-version';
}

export interface YamlEnforceSettingsOption {
  /**
   * Whether to autofix the linting error
   */
  autofix?: boolean;
  /**
   * Exact settings to enforce, for both keys and values. Auto-fixable.
   */
  settings?: {
    [k: string]: any;
  };
  /**
   * Required settings fields to enforce, regardless of their values. Not-autofixable.
   */
  requiredFields?: string[];
  /**
   * Forbidden settings fields to enforce, regardless of their values. Not-autofixable.
   */
  forbiddenFields?: string[];
}

/**
 * All Pnpm rules.
 */
export interface PnpmRules {
  /**
   * Enforce using "catalog:" in `package.json`.
   * @preset `pnpm/recommended`, `pnpm/json`
   * @see [json-enforce-catalog](https://github.com/antfu/pnpm-workspace-utils/tree/main/packages/eslint-plugin-pnpm/src/rules/json/json-enforce-catalog.test.ts)
   */
  'pnpm/json-enforce-catalog': [JsonEnforceCatalogOption?];

  /**
   * Enforce using valid catalog in `package.json`.
   * @preset `pnpm/recommended`, `pnpm/json`
   * @see [json-valid-catalog](https://github.com/antfu/pnpm-workspace-utils/tree/main/packages/eslint-plugin-pnpm/src/rules/json/json-valid-catalog.test.ts)
   */
  'pnpm/json-valid-catalog': [JsonValidCatalogOption?];

  /**
   * Prefer having pnpm settings in `pnpm-workspace.yaml` instead of `package.json`. This requires pnpm v10.6+, see https://github.com/orgs/pnpm/discussions/9037.
   * @preset `pnpm/recommended`, `pnpm/json`
   * @see [json-prefer-workspace-settings](https://github.com/antfu/pnpm-workspace-utils/tree/main/packages/eslint-plugin-pnpm/src/rules/json/json-prefer-workspace-settings.test.ts)
   */
  'pnpm/json-prefer-workspace-settings': [JsonPreferWorkspaceSettingsOption?];

  /**
   * Disallow unused catalogs in `pnpm-workspace.yaml`.
   * @preset `pnpm/yaml`
   * @see [yaml-no-unused-catalog-item](https://github.com/antfu/pnpm-workspace-utils/tree/main/packages/eslint-plugin-pnpm/src/rules/yaml/yaml-no-unused-catalog-item.test.ts)
   */
  'pnpm/yaml-no-unused-catalog-item': null;

  /**
   * Disallow duplicate catalog items in `pnpm-workspace.yaml`.
   * @preset `pnpm/yaml`
   * @see [yaml-no-duplicate-catalog-item](https://github.com/antfu/pnpm-workspace-utils/tree/main/packages/eslint-plugin-pnpm/src/rules/yaml/yaml-no-duplicate-catalog-item.test.ts)
   */
  'pnpm/yaml-no-duplicate-catalog-item': [YamlNoDuplicateCatalogItemOption?];

  /**
   * Ensure all package patterns in `pnpm-workspace.yaml` match at least one directory.
   * @preset `pnpm/yaml`
   * @see [yaml-valid-packages](https://github.com/antfu/pnpm-workspace-utils/tree/main/packages/eslint-plugin-pnpm/src/rules/yaml/yaml-valid-packages.test.ts)
   */
  'pnpm/yaml-valid-packages': null;

  /**
   * Enforce settings in `pnpm-workspace.yaml`.
   * @see [yaml-enforce-settings](https://github.com/antfu/pnpm-workspace-utils/tree/main/packages/eslint-plugin-pnpm/src/rules/yaml/yaml-enforce-settings.test.ts)
   */
  'pnpm/yaml-enforce-settings': [YamlEnforceSettingsOption?];
}

export type PnpmRulesObject = RulesObject<PnpmRules>;
