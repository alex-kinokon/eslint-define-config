import type { RulesObject } from '../rule-config';

export interface NoMathF16RoundOption {
  allowTestedProperty?: boolean;
}

export interface NoMathLog1POption {
  allowTestedProperty?: boolean;
}

/**
 * All EsX rules.
 */
export interface EsXRules {
  /**
   * Disallow accessor properties.
   * @see [no-accessor-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-accessor-properties.html)
   */
  'es-x/no-accessor-properties': null;

  /**
   * Disallow arbitrary module namespace names.
   * @see [no-arbitrary-module-namespace-names](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-arbitrary-module-namespace-names.html)
   */
  'es-x/no-arbitrary-module-namespace-names': null;

  /**
   * Disallow the `Array.from` method.
   * @see [no-array-from](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-from.html)
   */
  'es-x/no-array-from': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.fromAsync` method.
   * @see [no-array-fromasync](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-fromasync.html)
   */
  'es-x/no-array-fromasync': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.isArray` method.
   * @see [no-array-isarray](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-isarray.html)
   */
  'es-x/no-array-isarray': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.of` method.
   * @see [no-array-of](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-of.html)
   */
  'es-x/no-array-of': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.at()` methods.
   * @see [no-array-prototype-at](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-at.html)
   */
  'es-x/no-array-prototype-at': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.copyWithin` method.
   * @see [no-array-prototype-copywithin](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-copywithin.html)
   */
  'es-x/no-array-prototype-copywithin': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.entries` method.
   * @see [no-array-prototype-entries](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-entries.html)
   */
  'es-x/no-array-prototype-entries': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.every` method.
   * @see [no-array-prototype-every](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-every.html)
   */
  'es-x/no-array-prototype-every': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.fill` method.
   * @see [no-array-prototype-fill](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-fill.html)
   */
  'es-x/no-array-prototype-fill': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.filter` method.
   * @see [no-array-prototype-filter](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-filter.html)
   */
  'es-x/no-array-prototype-filter': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.find` method.
   * @see [no-array-prototype-find](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-find.html)
   */
  'es-x/no-array-prototype-find': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.findIndex` method.
   * @see [no-array-prototype-findindex](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-findindex.html)
   */
  'es-x/no-array-prototype-findindex': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.{findLast,findLastIndex}` methods.
   * @see [no-array-prototype-findlast-findlastindex](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-findlast-findlastindex.html)
   */
  'es-x/no-array-prototype-findlast-findlastindex': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.{flat,flatMap}` method.
   * @see [no-array-prototype-flat](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-flat.html)
   */
  'es-x/no-array-prototype-flat': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.forEach` method.
   * @see [no-array-prototype-foreach](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-foreach.html)
   */
  'es-x/no-array-prototype-foreach': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.includes` method.
   * @see [no-array-prototype-includes](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-includes.html)
   */
  'es-x/no-array-prototype-includes': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.indexOf` method.
   * @see [no-array-prototype-indexof](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-indexof.html)
   */
  'es-x/no-array-prototype-indexof': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.keys` method.
   * @see [no-array-prototype-keys](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-keys.html)
   */
  'es-x/no-array-prototype-keys': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.lastIndexOf` method.
   * @see [no-array-prototype-lastindexof](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-lastindexof.html)
   */
  'es-x/no-array-prototype-lastindexof': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.map` method.
   * @see [no-array-prototype-map](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-map.html)
   */
  'es-x/no-array-prototype-map': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.reduce` method.
   * @see [no-array-prototype-reduce](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-reduce.html)
   */
  'es-x/no-array-prototype-reduce': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.reduceRight` method.
   * @see [no-array-prototype-reduceright](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-reduceright.html)
   */
  'es-x/no-array-prototype-reduceright': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.some` method.
   * @see [no-array-prototype-some](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-some.html)
   */
  'es-x/no-array-prototype-some': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.toReversed` method.
   * @see [no-array-prototype-toreversed](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-toreversed.html)
   */
  'es-x/no-array-prototype-toreversed': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.toSorted` method.
   * @see [no-array-prototype-tosorted](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-tosorted.html)
   */
  'es-x/no-array-prototype-tosorted': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.toSpliced` method.
   * @see [no-array-prototype-tospliced](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-tospliced.html)
   */
  'es-x/no-array-prototype-tospliced': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.values` method.
   * @see [no-array-prototype-values](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-values.html)
   */
  'es-x/no-array-prototype-values': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Array.prototype.with` method.
   * @see [no-array-prototype-with](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-prototype-with.html)
   */
  'es-x/no-array-prototype-with': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `{Array,String}.prototype.at()` methods.
   * @deprecated
   * @see [no-array-string-prototype-at](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-array-string-prototype-at.html)
   */
  'es-x/no-array-string-prototype-at': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `ArrayBuffer.prototype.transfer` method.
   * @see [no-arraybuffer-prototype-transfer](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-arraybuffer-prototype-transfer.html)
   */
  'es-x/no-arraybuffer-prototype-transfer': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow arrow function expressions.
   * @see [no-arrow-functions](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-arrow-functions.html)
   */
  'es-x/no-arrow-functions': null;

  /**
   * Disallow async function declarations.
   * @see [no-async-functions](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-async-functions.html)
   */
  'es-x/no-async-functions': null;

  /**
   * Disallow async iteration.
   * @see [no-async-iteration](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-async-iteration.html)
   */
  'es-x/no-async-iteration': null;

  /**
   * Disallow the `AsyncDisposableStack` class.
   * @see [no-asyncdisposablestack](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-asyncdisposablestack.html)
   */
  'es-x/no-asyncdisposablestack': null;

  /**
   * Disallow the `Atomics` class.
   * @see [no-atomics](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-atomics.html)
   */
  'es-x/no-atomics': null;

  /**
   * Disallow the `Atomics.waitAsync` method.
   * @see [no-atomics-waitasync](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-atomics-waitasync.html)
   */
  'es-x/no-atomics-waitasync': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow `bigint` syntax and built-ins.
   * @see [no-bigint](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-bigint.html)
   */
  'es-x/no-bigint': null;

  /**
   * Disallow binary numeric literals.
   * @see [no-binary-numeric-literals](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-binary-numeric-literals.html)
   */
  'es-x/no-binary-numeric-literals': null;

  /**
   * Disallow block-scoped function declarations.
   * @see [no-block-scoped-functions](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-block-scoped-functions.html)
   */
  'es-x/no-block-scoped-functions': null;

  /**
   * Disallow block-scoped variable declarations.
   * @see [no-block-scoped-variables](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-block-scoped-variables.html)
   */
  'es-x/no-block-scoped-variables': null;

  /**
   * Disallow class fields.
   * @deprecated
   * @see [no-class-fields](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-fields.html)
   */
  'es-x/no-class-fields': null;

  /**
   * Disallow instance class fields.
   * @see [no-class-instance-fields](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-instance-fields.html)
   */
  'es-x/no-class-instance-fields': null;

  /**
   * Disallow private class fields.
   * @see [no-class-private-fields](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-private-fields.html)
   */
  'es-x/no-class-private-fields': null;

  /**
   * Disallow private class methods.
   * @see [no-class-private-methods](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-private-methods.html)
   */
  'es-x/no-class-private-methods': null;

  /**
   * Disallow class static block.
   * @see [no-class-static-block](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-static-block.html)
   */
  'es-x/no-class-static-block': null;

  /**
   * Disallow static class fields.
   * @see [no-class-static-fields](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-class-static-fields.html)
   */
  'es-x/no-class-static-fields': null;

  /**
   * Disallow class declarations.
   * @see [no-classes](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-classes.html)
   */
  'es-x/no-classes': null;

  /**
   * Disallow computed properties.
   * @see [no-computed-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-computed-properties.html)
   */
  'es-x/no-computed-properties': null;

  /**
   * Disallow the `DataView.prototype.{getFloat16,setFloat16}` methods.
   * @see [no-dataview-prototype-getfloat16-setfloat16](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-dataview-prototype-getfloat16-setfloat16.html)
   */
  'es-x/no-dataview-prototype-getfloat16-setfloat16': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Date.now` method.
   * @see [no-date-now](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-date-now.html)
   */
  'es-x/no-date-now': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Date.prototype.{getYear,setYear}` methods.
   * @see [no-date-prototype-getyear-setyear](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-date-prototype-getyear-setyear.html)
   */
  'es-x/no-date-prototype-getyear-setyear': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Date.prototype.toGMTString` method.
   * @see [no-date-prototype-togmtstring](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-date-prototype-togmtstring.html)
   */
  'es-x/no-date-prototype-togmtstring': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow default parameters.
   * @see [no-default-parameters](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-default-parameters.html)
   */
  'es-x/no-default-parameters': null;

  /**
   * Disallow destructuring.
   * @see [no-destructuring](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-destructuring.html)
   */
  'es-x/no-destructuring': null;

  /**
   * Disallow the `DisposableStack` class.
   * @see [no-disposablestack](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-disposablestack.html)
   */
  'es-x/no-disposablestack': null;

  /**
   * Disallow `import()` syntax.
   * @see [no-dynamic-import](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-dynamic-import.html)
   */
  'es-x/no-dynamic-import': null;

  /**
   * Disallow the second parameter to `import()`.
   * @see [no-dynamic-import-options](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-dynamic-import-options.html)
   */
  'es-x/no-dynamic-import-options': null;

  /**
   * Disallow Error Cause.
   * @see [no-error-cause](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-error-cause.html)
   */
  'es-x/no-error-cause': null;

  /**
   * Disallow the `Error.isError` method.
   * @see [no-error-iserror](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-error-iserror.html)
   */
  'es-x/no-error-iserror': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow `escape` and `unescape`.
   * @see [no-escape-unescape](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-escape-unescape.html)
   */
  'es-x/no-escape-unescape': null;

  /**
   * Disallow exponential operators.
   * @see [no-exponential-operators](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-exponential-operators.html)
   */
  'es-x/no-exponential-operators': null;

  /**
   * Disallow `export * as ns`.
   * @see [no-export-ns-from](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-export-ns-from.html)
   */
  'es-x/no-export-ns-from': null;

  /**
   * Disallow the `Float16Array` class.
   * @see [no-float16array](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-float16array.html)
   */
  'es-x/no-float16array': null;

  /**
   * Disallow `for-of` statements.
   * @see [no-for-of-loops](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-for-of-loops.html)
   */
  'es-x/no-for-of-loops': null;

  /**
   * Disallow function declarations in if statement clauses without using blocks.
   * @see [no-function-declarations-in-if-statement-clauses-without-block](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-function-declarations-in-if-statement-clauses-without-block.html)
   */
  'es-x/no-function-declarations-in-if-statement-clauses-without-block': null;

  /**
   * Disallow the `Function.prototype.bind` method.
   * @see [no-function-prototype-bind](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-function-prototype-bind.html)
   */
  'es-x/no-function-prototype-bind': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow generator function declarations.
   * @see [no-generators](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-generators.html)
   */
  'es-x/no-generators': null;

  /**
   * Disallow the `globalThis` variable.
   * @see [no-global-this](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-global-this.html)
   */
  'es-x/no-global-this': null;

  /**
   * Disallow Hashbang comments.
   * @see [no-hashbang](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-hashbang.html)
   */
  'es-x/no-hashbang': null;

  /**
   * Disallow Import Attributes.
   * @see [no-import-attributes](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-import-attributes.html)
   */
  'es-x/no-import-attributes': null;

  /**
   * Disallow `import.meta` meta property.
   * @see [no-import-meta](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-import-meta.html)
   */
  'es-x/no-import-meta': null;

  /**
   * Disallow initializers in for-in heads.
   * @see [no-initializers-in-for-in](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-initializers-in-for-in.html)
   */
  'es-x/no-initializers-in-for-in': null;

  /**
   * Disallow the `Intl.DateTimeFormat.prototype.formatRange` method.
   * @see [no-intl-datetimeformat-prototype-formatrange](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-datetimeformat-prototype-formatrange.html)
   */
  'es-x/no-intl-datetimeformat-prototype-formatrange': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `DateTimeFormat.prototype.formatToParts` method.
   * @see [no-intl-datetimeformat-prototype-formattoparts](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-datetimeformat-prototype-formattoparts.html)
   */
  'es-x/no-intl-datetimeformat-prototype-formattoparts': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Intl.DisplayNames` object.
   * @see [no-intl-displaynames](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-displaynames.html)
   */
  'es-x/no-intl-displaynames': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Intl.DurationFormat` object.
   * @see [no-intl-durationformat](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-durationformat.html)
   */
  'es-x/no-intl-durationformat': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Intl.getCanonicalLocales` method.
   * @see [no-intl-getcanonicallocales](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-getcanonicallocales.html)
   */
  'es-x/no-intl-getcanonicallocales': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Intl.ListFormat` object.
   * @see [no-intl-listformat](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-listformat.html)
   */
  'es-x/no-intl-listformat': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Intl.Locale` object.
   * @see [no-intl-locale](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-locale.html)
   */
  'es-x/no-intl-locale': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `NumberFormat.prototype.formatRange` method.
   * @see [no-intl-numberformat-prototype-formatrange](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-numberformat-prototype-formatrange.html)
   */
  'es-x/no-intl-numberformat-prototype-formatrange': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `NumberFormat.prototype.formatRangeToParts` method.
   * @see [no-intl-numberformat-prototype-formatrangetoparts](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-numberformat-prototype-formatrangetoparts.html)
   */
  'es-x/no-intl-numberformat-prototype-formatrangetoparts': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `NumberFormat.prototype.formatToParts` method.
   * @see [no-intl-numberformat-prototype-formattoparts](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-numberformat-prototype-formattoparts.html)
   */
  'es-x/no-intl-numberformat-prototype-formattoparts': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Intl.PluralRules` object.
   * @see [no-intl-pluralrules](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-pluralrules.html)
   */
  'es-x/no-intl-pluralrules': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `PluralRules.prototype.selectRange` method.
   * @see [no-intl-pluralrules-prototype-selectrange](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-pluralrules-prototype-selectrange.html)
   */
  'es-x/no-intl-pluralrules-prototype-selectrange': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Intl.RelativeTimeFormat` object.
   * @see [no-intl-relativetimeformat](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-relativetimeformat.html)
   */
  'es-x/no-intl-relativetimeformat': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Intl.Segmenter` object.
   * @see [no-intl-segmenter](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-segmenter.html)
   */
  'es-x/no-intl-segmenter': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Intl.supportedValuesOf` method.
   * @see [no-intl-supportedvaluesof](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-intl-supportedvaluesof.html)
   */
  'es-x/no-intl-supportedvaluesof': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator` class.
   * @see [no-iterator](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator.html)
   */
  'es-x/no-iterator': null;

  /**
   * Disallow the `Iterator.prototype.drop` method.
   * @see [no-iterator-prototype-drop](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-drop.html)
   */
  'es-x/no-iterator-prototype-drop': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.every` method.
   * @see [no-iterator-prototype-every](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-every.html)
   */
  'es-x/no-iterator-prototype-every': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.filter` method.
   * @see [no-iterator-prototype-filter](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-filter.html)
   */
  'es-x/no-iterator-prototype-filter': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.find` method.
   * @see [no-iterator-prototype-find](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-find.html)
   */
  'es-x/no-iterator-prototype-find': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.flatMap` method.
   * @see [no-iterator-prototype-flatmap](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-flatmap.html)
   */
  'es-x/no-iterator-prototype-flatmap': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.forEach` method.
   * @see [no-iterator-prototype-foreach](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-foreach.html)
   */
  'es-x/no-iterator-prototype-foreach': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.map` method.
   * @see [no-iterator-prototype-map](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-map.html)
   */
  'es-x/no-iterator-prototype-map': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.reduce` method.
   * @see [no-iterator-prototype-reduce](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-reduce.html)
   */
  'es-x/no-iterator-prototype-reduce': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.some` method.
   * @see [no-iterator-prototype-some](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-some.html)
   */
  'es-x/no-iterator-prototype-some': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.take` method.
   * @see [no-iterator-prototype-take](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-take.html)
   */
  'es-x/no-iterator-prototype-take': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Iterator.prototype.toArray` method.
   * @see [no-iterator-prototype-toarray](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-iterator-prototype-toarray.html)
   */
  'es-x/no-iterator-prototype-toarray': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `JSON` class.
   * @see [no-json](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-json.html)
   */
  'es-x/no-json': null;

  /**
   * Disallow JSON Modules.
   * @see [no-json-modules](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-json-modules.html)
   */
  'es-x/no-json-modules': null;

  /**
   * Disallow `\u2028` and `\u2029` in string literals.
   * @see [no-json-superset](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-json-superset.html)
   */
  'es-x/no-json-superset': null;

  /**
   * Disallow reserved words as property names.
   * @see [no-keyword-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-keyword-properties.html)
   */
  'es-x/no-keyword-properties': null;

  /**
   * Disallow labelled function declarations.
   * @see [no-labelled-function-declarations](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-labelled-function-declarations.html)
   */
  'es-x/no-labelled-function-declarations': null;

  /**
   * Disallow legacy `Object.prototype` accessor methods.
   * @see [no-legacy-object-prototype-accessor-methods](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-legacy-object-prototype-accessor-methods.html)
   */
  'es-x/no-legacy-object-prototype-accessor-methods': null;

  /**
   * Disallow logical assignment operators.
   * @see [no-logical-assignment-operators](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-logical-assignment-operators.html)
   */
  'es-x/no-logical-assignment-operators': null;

  /**
   * Disallow template literals with invalid escape sequences.
   * @see [no-malformed-template-literals](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-malformed-template-literals.html)
   */
  'es-x/no-malformed-template-literals': null;

  /**
   * Disallow the `Map` class.
   * @see [no-map](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-map.html)
   */
  'es-x/no-map': null;

  /**
   * Disallow the `Map.groupBy()` method.
   * @see [no-map-groupby](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-map-groupby.html)
   */
  'es-x/no-map-groupby': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.acosh` method.
   * @see [no-math-acosh](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-acosh.html)
   */
  'es-x/no-math-acosh': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.asinh` method.
   * @see [no-math-asinh](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-asinh.html)
   */
  'es-x/no-math-asinh': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.atanh` method.
   * @see [no-math-atanh](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-atanh.html)
   */
  'es-x/no-math-atanh': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.cbrt` method.
   * @see [no-math-cbrt](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-cbrt.html)
   */
  'es-x/no-math-cbrt': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.clz32` method.
   * @see [no-math-clz32](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-clz32.html)
   */
  'es-x/no-math-clz32': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.cosh` method.
   * @see [no-math-cosh](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-cosh.html)
   */
  'es-x/no-math-cosh': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.expm1` method.
   * @see [no-math-expm1](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-expm1.html)
   */
  'es-x/no-math-expm1': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.f16round` method.
   * @see [no-math-f16round](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-f16round.html)
   */
  'es-x/no-math-f16round': [NoMathF16roundOption?];

  /**
   * Disallow the `Math.fround` method.
   * @see [no-math-fround](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-fround.html)
   */
  'es-x/no-math-fround': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.hypot` method.
   * @see [no-math-hypot](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-hypot.html)
   */
  'es-x/no-math-hypot': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.imul` method.
   * @see [no-math-imul](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-imul.html)
   */
  'es-x/no-math-imul': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.log1p` method.
   * @see [no-math-log1p](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-log1p.html)
   */
  'es-x/no-math-log1p': [NoMathLog1pOption?];

  /**
   * Disallow the `Math.log2` method.
   * @see [no-math-log2](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-log2.html)
   */
  'es-x/no-math-log2': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.log10` method.
   * @see [no-math-log10](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-log10.html)
   */
  'es-x/no-math-log10': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.sign` method.
   * @see [no-math-sign](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-sign.html)
   */
  'es-x/no-math-sign': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.sinh` method.
   * @see [no-math-sinh](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-sinh.html)
   */
  'es-x/no-math-sinh': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.tanh` method.
   * @see [no-math-tanh](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-tanh.html)
   */
  'es-x/no-math-tanh': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Math.trunc` method.
   * @see [no-math-trunc](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-math-trunc.html)
   */
  'es-x/no-math-trunc': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow modules.
   * @see [no-modules](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-modules.html)
   */
  'es-x/no-modules': null;

  /**
   * Disallow `new.target` meta property.
   * @see [no-new-target](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-new-target.html)
   */
  'es-x/no-new-target': null;

  /**
   * Disallow non-standard static properties on `Array` class.
   * @see [no-nonstandard-array-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-array-properties.html)
   */
  'es-x/no-nonstandard-array-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Array instance.
   * @see [no-nonstandard-array-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-array-prototype-properties.html)
   */
  'es-x/no-nonstandard-array-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `ArrayBuffer` class.
   * @see [no-nonstandard-arraybuffer-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-arraybuffer-properties.html)
   */
  'es-x/no-nonstandard-arraybuffer-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on ArrayBuffer instance.
   * @see [no-nonstandard-arraybuffer-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-arraybuffer-prototype-properties.html)
   */
  'es-x/no-nonstandard-arraybuffer-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `AsyncDisposableStack` class.
   * @see [no-nonstandard-asyncdisposablestack-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-asyncdisposablestack-properties.html)
   */
  'es-x/no-nonstandard-asyncdisposablestack-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on AsyncDisposableStack instance.
   * @see [no-nonstandard-asyncdisposablestack-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-asyncdisposablestack-prototype-properties.html)
   */
  'es-x/no-nonstandard-asyncdisposablestack-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Atomics`.
   * @see [no-nonstandard-atomics-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-atomics-properties.html)
   */
  'es-x/no-nonstandard-atomics-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `BigInt` class.
   * @see [no-nonstandard-bigint-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-bigint-properties.html)
   */
  'es-x/no-nonstandard-bigint-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on BigInt instance.
   * @see [no-nonstandard-bigint-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-bigint-prototype-properties.html)
   */
  'es-x/no-nonstandard-bigint-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Boolean` class.
   * @see [no-nonstandard-boolean-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-boolean-properties.html)
   */
  'es-x/no-nonstandard-boolean-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Boolean instance.
   * @see [no-nonstandard-boolean-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-boolean-prototype-properties.html)
   */
  'es-x/no-nonstandard-boolean-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `DataView` class.
   * @see [no-nonstandard-dataview-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-dataview-properties.html)
   */
  'es-x/no-nonstandard-dataview-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on DataView instance.
   * @see [no-nonstandard-dataview-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-dataview-prototype-properties.html)
   */
  'es-x/no-nonstandard-dataview-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Date` class.
   * @see [no-nonstandard-date-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-date-properties.html)
   */
  'es-x/no-nonstandard-date-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Date instance.
   * @see [no-nonstandard-date-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-date-prototype-properties.html)
   */
  'es-x/no-nonstandard-date-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `DisposableStack` class.
   * @see [no-nonstandard-disposablestack-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-disposablestack-properties.html)
   */
  'es-x/no-nonstandard-disposablestack-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on DisposableStack instance.
   * @see [no-nonstandard-disposablestack-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-disposablestack-prototype-properties.html)
   */
  'es-x/no-nonstandard-disposablestack-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Error` class.
   * @see [no-nonstandard-error-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-error-properties.html)
   */
  'es-x/no-nonstandard-error-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `FinalizationRegistry` class.
   * @see [no-nonstandard-finalizationregistry-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-finalizationregistry-properties.html)
   */
  'es-x/no-nonstandard-finalizationregistry-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on FinalizationRegistry instance.
   * @see [no-nonstandard-finalizationregistry-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-finalizationregistry-prototype-properties.html)
   */
  'es-x/no-nonstandard-finalizationregistry-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Function` class.
   * @see [no-nonstandard-function-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-function-properties.html)
   */
  'es-x/no-nonstandard-function-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.Collator` class.
   * @see [no-nonstandard-intl-collator-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-collator-properties.html)
   */
  'es-x/no-nonstandard-intl-collator-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.Collator instance.
   * @see [no-nonstandard-intl-collator-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-collator-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-collator-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.DateTimeFormat` class.
   * @see [no-nonstandard-intl-datetimeformat-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-datetimeformat-properties.html)
   */
  'es-x/no-nonstandard-intl-datetimeformat-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.DateTimeFormat instance.
   * @see [no-nonstandard-intl-datetimeformat-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-datetimeformat-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-datetimeformat-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.DisplayNames` class.
   * @see [no-nonstandard-intl-displaynames-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-displaynames-properties.html)
   */
  'es-x/no-nonstandard-intl-displaynames-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.DisplayNames instance.
   * @see [no-nonstandard-intl-displaynames-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-displaynames-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-displaynames-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.DurationFormat` class.
   * @see [no-nonstandard-intl-durationformat-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-durationformat-properties.html)
   */
  'es-x/no-nonstandard-intl-durationformat-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.DurationFormat instance.
   * @see [no-nonstandard-intl-durationformat-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-durationformat-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-durationformat-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.ListFormat` class.
   * @see [no-nonstandard-intl-listformat-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-listformat-properties.html)
   */
  'es-x/no-nonstandard-intl-listformat-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.ListFormat instance.
   * @see [no-nonstandard-intl-listformat-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-listformat-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-listformat-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.Locale` class.
   * @see [no-nonstandard-intl-locale-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-locale-properties.html)
   */
  'es-x/no-nonstandard-intl-locale-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.Locale instance.
   * @see [no-nonstandard-intl-locale-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-locale-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-locale-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.NumberFormat` class.
   * @see [no-nonstandard-intl-numberformat-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-numberformat-properties.html)
   */
  'es-x/no-nonstandard-intl-numberformat-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.NumberFormat instance.
   * @see [no-nonstandard-intl-numberformat-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-numberformat-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-numberformat-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.PluralRules` class.
   * @see [no-nonstandard-intl-pluralrules-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-pluralrules-properties.html)
   */
  'es-x/no-nonstandard-intl-pluralrules-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.PluralRules instance.
   * @see [no-nonstandard-intl-pluralrules-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-pluralrules-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-pluralrules-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl`.
   * @see [no-nonstandard-intl-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-properties.html)
   */
  'es-x/no-nonstandard-intl-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.RelativeTimeFormat` class.
   * @see [no-nonstandard-intl-relativetimeformat-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-relativetimeformat-properties.html)
   */
  'es-x/no-nonstandard-intl-relativetimeformat-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.RelativeTimeFormat instance.
   * @see [no-nonstandard-intl-relativetimeformat-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-relativetimeformat-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-relativetimeformat-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Intl.Segmenter` class.
   * @see [no-nonstandard-intl-segmenter-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-segmenter-properties.html)
   */
  'es-x/no-nonstandard-intl-segmenter-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Intl.Segmenter instance.
   * @see [no-nonstandard-intl-segmenter-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-intl-segmenter-prototype-properties.html)
   */
  'es-x/no-nonstandard-intl-segmenter-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Iterator` class.
   * @see [no-nonstandard-iterator-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-iterator-properties.html)
   */
  'es-x/no-nonstandard-iterator-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Iterator instance.
   * @see [no-nonstandard-iterator-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-iterator-prototype-properties.html)
   */
  'es-x/no-nonstandard-iterator-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `JSON`.
   * @see [no-nonstandard-json-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-json-properties.html)
   */
  'es-x/no-nonstandard-json-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Map` class.
   * @see [no-nonstandard-map-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-map-properties.html)
   */
  'es-x/no-nonstandard-map-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Map instance.
   * @see [no-nonstandard-map-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-map-prototype-properties.html)
   */
  'es-x/no-nonstandard-map-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Math`.
   * @see [no-nonstandard-math-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-math-properties.html)
   */
  'es-x/no-nonstandard-math-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Number` class.
   * @see [no-nonstandard-number-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-number-properties.html)
   */
  'es-x/no-nonstandard-number-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Number instance.
   * @see [no-nonstandard-number-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-number-prototype-properties.html)
   */
  'es-x/no-nonstandard-number-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Object` class.
   * @see [no-nonstandard-object-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-object-properties.html)
   */
  'es-x/no-nonstandard-object-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Promise` class.
   * @see [no-nonstandard-promise-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-promise-properties.html)
   */
  'es-x/no-nonstandard-promise-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Promise instance.
   * @see [no-nonstandard-promise-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-promise-prototype-properties.html)
   */
  'es-x/no-nonstandard-promise-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Proxy` class.
   * @see [no-nonstandard-proxy-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-proxy-properties.html)
   */
  'es-x/no-nonstandard-proxy-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Reflect`.
   * @see [no-nonstandard-reflect-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-reflect-properties.html)
   */
  'es-x/no-nonstandard-reflect-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `RegExp` class.
   * @see [no-nonstandard-regexp-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-regexp-properties.html)
   */
  'es-x/no-nonstandard-regexp-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on RegExp instance.
   * @see [no-nonstandard-regexp-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-regexp-prototype-properties.html)
   */
  'es-x/no-nonstandard-regexp-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Set` class.
   * @see [no-nonstandard-set-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-set-properties.html)
   */
  'es-x/no-nonstandard-set-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Set instance.
   * @see [no-nonstandard-set-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-set-prototype-properties.html)
   */
  'es-x/no-nonstandard-set-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `SharedArrayBuffer` class.
   * @see [no-nonstandard-sharedarraybuffer-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-sharedarraybuffer-properties.html)
   */
  'es-x/no-nonstandard-sharedarraybuffer-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on SharedArrayBuffer instance.
   * @see [no-nonstandard-sharedarraybuffer-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-sharedarraybuffer-prototype-properties.html)
   */
  'es-x/no-nonstandard-sharedarraybuffer-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `String` class.
   * @see [no-nonstandard-string-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-string-properties.html)
   */
  'es-x/no-nonstandard-string-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on String instance.
   * @see [no-nonstandard-string-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-string-prototype-properties.html)
   */
  'es-x/no-nonstandard-string-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `Symbol` class.
   * @see [no-nonstandard-symbol-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-symbol-properties.html)
   */
  'es-x/no-nonstandard-symbol-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on Symbol instance.
   * @see [no-nonstandard-symbol-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-symbol-prototype-properties.html)
   */
  'es-x/no-nonstandard-symbol-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on typed array class.
   * @see [no-nonstandard-typed-array-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-typed-array-properties.html)
   */
  'es-x/no-nonstandard-typed-array-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on typed array instance.
   * @see [no-nonstandard-typed-array-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-typed-array-prototype-properties.html)
   */
  'es-x/no-nonstandard-typed-array-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `WeakMap` class.
   * @see [no-nonstandard-weakmap-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakmap-properties.html)
   */
  'es-x/no-nonstandard-weakmap-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on WeakMap instance.
   * @see [no-nonstandard-weakmap-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakmap-prototype-properties.html)
   */
  'es-x/no-nonstandard-weakmap-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `WeakRef` class.
   * @see [no-nonstandard-weakref-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakref-properties.html)
   */
  'es-x/no-nonstandard-weakref-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on WeakRef instance.
   * @see [no-nonstandard-weakref-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakref-prototype-properties.html)
   */
  'es-x/no-nonstandard-weakref-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard static properties on `WeakSet` class.
   * @see [no-nonstandard-weakset-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakset-properties.html)
   */
  'es-x/no-nonstandard-weakset-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard properties on WeakSet instance.
   * @see [no-nonstandard-weakset-prototype-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nonstandard-weakset-prototype-properties.html)
   */
  'es-x/no-nonstandard-weakset-prototype-properties': [
    {
      allow?: string[];
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow nullish coalescing operators.
   * @see [no-nullish-coalescing-operators](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-nullish-coalescing-operators.html)
   */
  'es-x/no-nullish-coalescing-operators': null;

  /**
   * Disallow the `Number.EPSILON` property.
   * @see [no-number-epsilon](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-epsilon.html)
   */
  'es-x/no-number-epsilon': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Number.isFinite` method.
   * @see [no-number-isfinite](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-isfinite.html)
   */
  'es-x/no-number-isfinite': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Number.isInteger` method.
   * @see [no-number-isinteger](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-isinteger.html)
   */
  'es-x/no-number-isinteger': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Number.isNaN` method.
   * @see [no-number-isnan](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-isnan.html)
   */
  'es-x/no-number-isnan': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Number.isSafeInteger` method.
   * @see [no-number-issafeinteger](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-issafeinteger.html)
   */
  'es-x/no-number-issafeinteger': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Number.MAX_SAFE_INTEGER` property.
   * @see [no-number-maxsafeinteger](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-maxsafeinteger.html)
   */
  'es-x/no-number-maxsafeinteger': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Number.MIN_SAFE_INTEGER` property.
   * @see [no-number-minsafeinteger](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-minsafeinteger.html)
   */
  'es-x/no-number-minsafeinteger': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Number.parseFloat` method.
   * @see [no-number-parsefloat](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-parsefloat.html)
   */
  'es-x/no-number-parsefloat': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Number.parseInt` method.
   * @see [no-number-parseint](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-number-parseint.html)
   */
  'es-x/no-number-parseint': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow numeric separators.
   * @see [no-numeric-separators](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-numeric-separators.html)
   */
  'es-x/no-numeric-separators': null;

  /**
   * Disallow the `Object.assign` method.
   * @see [no-object-assign](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-assign.html)
   */
  'es-x/no-object-assign': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.create` method.
   * @see [no-object-create](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-create.html)
   */
  'es-x/no-object-create': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.defineProperties` method.
   * @see [no-object-defineproperties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-defineproperties.html)
   */
  'es-x/no-object-defineproperties': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.defineProperty` method.
   * @see [no-object-defineproperty](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-defineproperty.html)
   */
  'es-x/no-object-defineproperty': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.entries` method.
   * @see [no-object-entries](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-entries.html)
   */
  'es-x/no-object-entries': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.freeze` method.
   * @see [no-object-freeze](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-freeze.html)
   */
  'es-x/no-object-freeze': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.fromEntries` method.
   * @see [no-object-fromentries](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-fromentries.html)
   */
  'es-x/no-object-fromentries': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.getOwnPropertyDescriptor` method.
   * @see [no-object-getownpropertydescriptor](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getownpropertydescriptor.html)
   */
  'es-x/no-object-getownpropertydescriptor': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.getOwnPropertyDescriptors` method.
   * @see [no-object-getownpropertydescriptors](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getownpropertydescriptors.html)
   */
  'es-x/no-object-getownpropertydescriptors': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.getOwnPropertyNames` method.
   * @see [no-object-getownpropertynames](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getownpropertynames.html)
   */
  'es-x/no-object-getownpropertynames': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.getOwnPropertySymbols` method.
   * @see [no-object-getownpropertysymbols](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getownpropertysymbols.html)
   */
  'es-x/no-object-getownpropertysymbols': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.getPrototypeOf` method.
   * @see [no-object-getprototypeof](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-getprototypeof.html)
   */
  'es-x/no-object-getprototypeof': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.groupBy()` method.
   * @see [no-object-groupby](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-groupby.html)
   */
  'es-x/no-object-groupby': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.hasOwn` method.
   * @see [no-object-hasown](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-hasown.html)
   */
  'es-x/no-object-hasown': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.is` method.
   * @see [no-object-is](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-is.html)
   */
  'es-x/no-object-is': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.isExtensible` method.
   * @see [no-object-isextensible](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-isextensible.html)
   */
  'es-x/no-object-isextensible': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.isFrozen` method.
   * @see [no-object-isfrozen](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-isfrozen.html)
   */
  'es-x/no-object-isfrozen': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.isSealed` method.
   * @see [no-object-issealed](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-issealed.html)
   */
  'es-x/no-object-issealed': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.keys` method.
   * @see [no-object-keys](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-keys.html)
   */
  'es-x/no-object-keys': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `{Object,Map}.groupBy()` function (array grouping).
   * @deprecated
   * @see [no-object-map-groupby](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-map-groupby.html)
   */
  'es-x/no-object-map-groupby': null;

  /**
   * Disallow the `Object.preventExtensions` method.
   * @see [no-object-preventextensions](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-preventextensions.html)
   */
  'es-x/no-object-preventextensions': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.seal` method.
   * @see [no-object-seal](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-seal.html)
   */
  'es-x/no-object-seal': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Object.setPrototypeOf` method.
   * @see [no-object-setprototypeof](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-setprototypeof.html)
   */
  'es-x/no-object-setprototypeof': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow `super` property accesses in object literals.
   * @see [no-object-super-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-super-properties.html)
   */
  'es-x/no-object-super-properties': null;

  /**
   * Disallow the `Object.values` method.
   * @see [no-object-values](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-object-values.html)
   */
  'es-x/no-object-values': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow octal numeric literals.
   * @see [no-octal-numeric-literals](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-octal-numeric-literals.html)
   */
  'es-x/no-octal-numeric-literals': null;

  /**
   * Disallow optional `catch` binding.
   * @see [no-optional-catch-binding](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-optional-catch-binding.html)
   */
  'es-x/no-optional-catch-binding': null;

  /**
   * Disallow optional chaining.
   * @see [no-optional-chaining](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-optional-chaining.html)
   */
  'es-x/no-optional-chaining': null;

  /**
   * Disallow `#x in obj`.
   * @see [no-private-in](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-private-in.html)
   */
  'es-x/no-private-in': null;

  /**
   * Disallow the `Promise` class.
   * @see [no-promise](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise.html)
   */
  'es-x/no-promise': null;

  /**
   * Disallow `Promise.allSettled` function.
   * @see [no-promise-all-settled](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-all-settled.html)
   */
  'es-x/no-promise-all-settled': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow `Promise.any` function and `AggregateError` class.
   * @see [no-promise-any](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-any.html)
   */
  'es-x/no-promise-any': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Promise.prototype.finally` method.
   * @see [no-promise-prototype-finally](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-prototype-finally.html)
   */
  'es-x/no-promise-prototype-finally': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow `Promise.try` function.
   * @see [no-promise-try](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-try.html)
   */
  'es-x/no-promise-try': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Promise.withResolvers()` method.
   * @see [no-promise-withresolvers](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-promise-withresolvers.html)
   */
  'es-x/no-promise-withresolvers': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow property shorthands.
   * @see [no-property-shorthands](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-property-shorthands.html)
   */
  'es-x/no-property-shorthands': null;

  /**
   * Disallow the `Proxy` class.
   * @see [no-proxy](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-proxy.html)
   */
  'es-x/no-proxy': null;

  /**
   * Disallow the `Reflect` class.
   * @see [no-reflect](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-reflect.html)
   */
  'es-x/no-reflect': null;

  /**
   * Disallow RegExp `d` flag.
   * @see [no-regexp-d-flag](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-d-flag.html)
   */
  'es-x/no-regexp-d-flag': null;

  /**
   * Disallow RegExp duplicate named capturing groups.
   * @see [no-regexp-duplicate-named-capturing-groups](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-duplicate-named-capturing-groups.html)
   */
  'es-x/no-regexp-duplicate-named-capturing-groups': null;

  /**
   * Disallow `RegExp.escape` function.
   * @see [no-regexp-escape](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-escape.html)
   */
  'es-x/no-regexp-escape': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow RegExp lookbehind assertions.
   * @see [no-regexp-lookbehind-assertions](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-lookbehind-assertions.html)
   */
  'es-x/no-regexp-lookbehind-assertions': null;

  /**
   * Disallow RegExp Modifiers.
   * @see [no-regexp-modifiers](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-modifiers.html)
   */
  'es-x/no-regexp-modifiers': null;

  /**
   * Disallow RegExp named capture groups.
   * @see [no-regexp-named-capture-groups](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-named-capture-groups.html)
   */
  'es-x/no-regexp-named-capture-groups': null;

  /**
   * Disallow the `RegExp.prototype.compile` method.
   * @see [no-regexp-prototype-compile](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-prototype-compile.html)
   */
  'es-x/no-regexp-prototype-compile': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `RegExp.prototype.flags` property.
   * @see [no-regexp-prototype-flags](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-prototype-flags.html)
   */
  'es-x/no-regexp-prototype-flags': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow RegExp `s` flag.
   * @see [no-regexp-s-flag](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-s-flag.html)
   */
  'es-x/no-regexp-s-flag': null;

  /**
   * Disallow RegExp `u` flag.
   * @see [no-regexp-u-flag](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-u-flag.html)
   */
  'es-x/no-regexp-u-flag': null;

  /**
   * Disallow RegExp Unicode property escape sequences.
   * @see [no-regexp-unicode-property-escapes](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes.html)
   */
  'es-x/no-regexp-unicode-property-escapes': null;

  /**
   * Disallow the new values of RegExp Unicode property escape sequences in ES2019.
   * @see [no-regexp-unicode-property-escapes-2019](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2019.html)
   */
  'es-x/no-regexp-unicode-property-escapes-2019': null;

  /**
   * Disallow the new values of RegExp Unicode property escape sequences in ES2020.
   * @see [no-regexp-unicode-property-escapes-2020](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2020.html)
   */
  'es-x/no-regexp-unicode-property-escapes-2020': null;

  /**
   * Disallow the new values of RegExp Unicode property escape sequences in ES2021.
   * @see [no-regexp-unicode-property-escapes-2021](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2021.html)
   */
  'es-x/no-regexp-unicode-property-escapes-2021': null;

  /**
   * Disallow the new values of RegExp Unicode property escape sequences in ES2022.
   * @see [no-regexp-unicode-property-escapes-2022](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2022.html)
   */
  'es-x/no-regexp-unicode-property-escapes-2022': null;

  /**
   * Disallow the new values of RegExp Unicode property escape sequences in ES2023.
   * @see [no-regexp-unicode-property-escapes-2023](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-unicode-property-escapes-2023.html)
   */
  'es-x/no-regexp-unicode-property-escapes-2023': null;

  /**
   * Disallow RegExp `v` flag.
   * @see [no-regexp-v-flag](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-v-flag.html)
   */
  'es-x/no-regexp-v-flag': null;

  /**
   * Disallow RegExp `y` flag.
   * @see [no-regexp-y-flag](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-regexp-y-flag.html)
   */
  'es-x/no-regexp-y-flag': null;

  /**
   * Disallow resizable and growable ArrayBuffers.
   * @see [no-resizable-and-growable-arraybuffers](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-resizable-and-growable-arraybuffers.html)
   */
  'es-x/no-resizable-and-growable-arraybuffers': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow rest parameters.
   * @see [no-rest-parameters](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-rest-parameters.html)
   */
  'es-x/no-rest-parameters': null;

  /**
   * Disallow rest/spread properties.
   * @see [no-rest-spread-properties](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-rest-spread-properties.html)
   */
  'es-x/no-rest-spread-properties': null;

  /**
   * Disallow the `Set` class.
   * @see [no-set](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set.html)
   */
  'es-x/no-set': null;

  /**
   * Disallow the `Set.prototype.difference` method.
   * @see [no-set-prototype-difference](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-difference.html)
   */
  'es-x/no-set-prototype-difference': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Set.prototype.intersection` method.
   * @see [no-set-prototype-intersection](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-intersection.html)
   */
  'es-x/no-set-prototype-intersection': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Set.prototype.isDisjointFrom` method.
   * @see [no-set-prototype-isdisjointfrom](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-isdisjointfrom.html)
   */
  'es-x/no-set-prototype-isdisjointfrom': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Set.prototype.isSubsetOf` method.
   * @see [no-set-prototype-issubsetof](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-issubsetof.html)
   */
  'es-x/no-set-prototype-issubsetof': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Set.prototype.isSupersetOf` method.
   * @see [no-set-prototype-issupersetof](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-issupersetof.html)
   */
  'es-x/no-set-prototype-issupersetof': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Set.prototype.symmetricDifference` method.
   * @see [no-set-prototype-symmetricdifference](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-symmetricdifference.html)
   */
  'es-x/no-set-prototype-symmetricdifference': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Set.prototype.union` method.
   * @see [no-set-prototype-union](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-set-prototype-union.html)
   */
  'es-x/no-set-prototype-union': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow identifiers from shadowing catch parameter names.
   * @see [no-shadow-catch-param](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-shadow-catch-param.html)
   */
  'es-x/no-shadow-catch-param': null;

  /**
   * Disallow the `SharedArrayBuffer` class.
   * @see [no-shared-array-buffer](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-shared-array-buffer.html)
   */
  'es-x/no-shared-array-buffer': null;

  /**
   * Disallow spread elements.
   * @see [no-spread-elements](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-spread-elements.html)
   */
  'es-x/no-spread-elements': null;

  /**
   * Disallow HTML creation methods of string instances.
   * @see [no-string-create-html-methods](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-create-html-methods.html)
   */
  'es-x/no-string-create-html-methods': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.fromCodePoint` method.
   * @see [no-string-fromcodepoint](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-fromcodepoint.html)
   */
  'es-x/no-string-fromcodepoint': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.at()` methods.
   * @see [no-string-prototype-at](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-at.html)
   */
  'es-x/no-string-prototype-at': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.codePointAt` method.
   * @see [no-string-prototype-codepointat](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-codepointat.html)
   */
  'es-x/no-string-prototype-codepointat': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.endsWith` method.
   * @see [no-string-prototype-endswith](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-endswith.html)
   */
  'es-x/no-string-prototype-endswith': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.includes` method.
   * @see [no-string-prototype-includes](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-includes.html)
   */
  'es-x/no-string-prototype-includes': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.isWellFormed` methods.
   * @see [no-string-prototype-iswellformed](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-iswellformed.html)
   */
  'es-x/no-string-prototype-iswellformed': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.{isWellFormed,toWellFormed}` methods.
   * @deprecated
   * @see [no-string-prototype-iswellformed-towellformed](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-iswellformed-towellformed.html)
   */
  'es-x/no-string-prototype-iswellformed-towellformed': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.matchAll` method.
   * @see [no-string-prototype-matchall](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-matchall.html)
   */
  'es-x/no-string-prototype-matchall': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.normalize` method.
   * @see [no-string-prototype-normalize](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-normalize.html)
   */
  'es-x/no-string-prototype-normalize': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.{padStart,padEnd}` methods.
   * @see [no-string-prototype-padstart-padend](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-padstart-padend.html)
   */
  'es-x/no-string-prototype-padstart-padend': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.repeat` method.
   * @see [no-string-prototype-repeat](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-repeat.html)
   */
  'es-x/no-string-prototype-repeat': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.replaceAll` method.
   * @see [no-string-prototype-replaceall](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-replaceall.html)
   */
  'es-x/no-string-prototype-replaceall': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.startsWith` method.
   * @see [no-string-prototype-startswith](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-startswith.html)
   */
  'es-x/no-string-prototype-startswith': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.substr` method.
   * @see [no-string-prototype-substr](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-substr.html)
   */
  'es-x/no-string-prototype-substr': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.toWellFormed` methods.
   * @see [no-string-prototype-towellformed](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-towellformed.html)
   */
  'es-x/no-string-prototype-towellformed': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.trim` method.
   * @see [no-string-prototype-trim](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-trim.html)
   */
  'es-x/no-string-prototype-trim': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.{trimLeft,trimRight}` methods.
   * @see [no-string-prototype-trimleft-trimright](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-trimleft-trimright.html)
   */
  'es-x/no-string-prototype-trimleft-trimright': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.prototype.{trimStart,trimEnd}` methods.
   * @see [no-string-prototype-trimstart-trimend](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-prototype-trimstart-trimend.html)
   */
  'es-x/no-string-prototype-trimstart-trimend': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `String.raw` method.
   * @see [no-string-raw](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-string-raw.html)
   */
  'es-x/no-string-raw': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the subclassing of the built-in classes.
   * @see [no-subclassing-builtins](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-subclassing-builtins.html)
   */
  'es-x/no-subclassing-builtins': null;

  /**
   * Disallow the `SuppressedError` class.
   * @see [no-suppressederror](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-suppressederror.html)
   */
  'es-x/no-suppressederror': null;

  /**
   * Disallow the `Symbol` class.
   * @see [no-symbol](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-symbol.html)
   */
  'es-x/no-symbol': null;

  /**
   * Disallow the `Symbol.asyncDispose` property.
   * @see [no-symbol-asyncdispose](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-symbol-asyncdispose.html)
   */
  'es-x/no-symbol-asyncdispose': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Symbol.dispose` property.
   * @see [no-symbol-dispose](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-symbol-dispose.html)
   */
  'es-x/no-symbol-dispose': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Symbol.matchAll` property.
   * @see [no-symbol-matchall](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-symbol-matchall.html)
   */
  'es-x/no-symbol-matchall': [
    {
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow the `Symbol.prototype.description` property.
   * @see [no-symbol-prototype-description](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-symbol-prototype-description.html)
   */
  'es-x/no-symbol-prototype-description': [
    {
      aggressive?: boolean;
      allowTestedProperty?: boolean;
    }?,
  ];

  /**
   * Disallow template literals.
   * @see [no-template-literals](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-template-literals.html)
   */
  'es-x/no-template-literals': null;

  /**
   * Disallow top-level `await`.
   * @see [no-top-level-await](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-top-level-await.html)
   */
  'es-x/no-top-level-await': null;

  /**
   * Disallow trailing commas in array/object literals.
   * @see [no-trailing-commas](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-trailing-commas.html)
   */
  'es-x/no-trailing-commas': null;

  /**
   * Disallow trailing commas in `import()`.
   * @see [no-trailing-dynamic-import-commas](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-trailing-dynamic-import-commas.html)
   */
  'es-x/no-trailing-dynamic-import-commas': null;

  /**
   * Disallow trailing commas in parameter/argument lists.
   * @see [no-trailing-function-commas](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-trailing-function-commas.html)
   */
  'es-x/no-trailing-function-commas': null;

  /**
   * Disallow ES2015 typed arrays.
   * @see [no-typed-arrays](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-typed-arrays.html)
   */
  'es-x/no-typed-arrays': null;

  /**
   * Disallow Unicode code point escape sequences.
   * @see [no-unicode-codepoint-escapes](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-unicode-codepoint-escapes.html)
   */
  'es-x/no-unicode-codepoint-escapes': null;

  /**
   * Disallow `using` and `await using` declarations.
   * @see [no-using-declarations](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-using-declarations.html)
   */
  'es-x/no-using-declarations': null;

  /**
   * Disallow the `WeakMap` class.
   * @see [no-weak-map](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-weak-map.html)
   */
  'es-x/no-weak-map': null;

  /**
   * Disallow the `WeakSet` class.
   * @see [no-weak-set](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-weak-set.html)
   */
  'es-x/no-weak-set': null;

  /**
   * Disallow the `WeakRef` and `FinalizationRegistry` class.
   * @see [no-weakrefs](http://eslint-community.github.io/eslint-plugin-es-x/rules/no-weakrefs.html)
   */
  'es-x/no-weakrefs': null;
}

export type EsXRulesObject = RulesObject<EsXRules>;
