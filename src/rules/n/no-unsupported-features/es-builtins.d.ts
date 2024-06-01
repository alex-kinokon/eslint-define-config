import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface NoUnsupportedFeaturesEsBuiltinsOption {
  version?: string;
  ignores?: (
    | 'AggregateError'
    | 'Array'
    | 'Array.from'
    | 'Array.isArray'
    | 'Array.length'
    | 'Array.of'
    | 'Array.toLocaleString'
    | 'ArrayBuffer'
    | 'ArrayBuffer.isView'
    | 'Atomics'
    | 'Atomics.add'
    | 'Atomics.and'
    | 'Atomics.compareExchange'
    | 'Atomics.exchange'
    | 'Atomics.isLockFree'
    | 'Atomics.load'
    | 'Atomics.notify'
    | 'Atomics.or'
    | 'Atomics.store'
    | 'Atomics.sub'
    | 'Atomics.wait'
    | 'Atomics.waitAsync'
    | 'Atomics.xor'
    | 'BigInt'
    | 'BigInt.asIntN'
    | 'BigInt.asUintN'
    | 'BigInt64Array'
    | 'BigInt64Array.BYTES_PER_ELEMENT'
    | 'BigInt64Array.from'
    | 'BigInt64Array.name'
    | 'BigInt64Array.of'
    | 'BigUint64Array'
    | 'BigUint64Array.BYTES_PER_ELEMENT'
    | 'BigUint64Array.from'
    | 'BigUint64Array.name'
    | 'BigUint64Array.of'
    | 'Boolean'
    | 'DataView'
    | 'Date'
    | 'Date.UTC'
    | 'Date.now'
    | 'Date.parse'
    | 'Date.toLocaleDateString'
    | 'Date.toLocaleString'
    | 'Date.toLocaleTimeString'
    | 'Error'
    | 'Error.cause'
    | 'EvalError'
    | 'FinalizationRegistry'
    | 'Float32Array'
    | 'Float32Array.BYTES_PER_ELEMENT'
    | 'Float32Array.from'
    | 'Float32Array.name'
    | 'Float32Array.of'
    | 'Float64Array'
    | 'Float64Array.BYTES_PER_ELEMENT'
    | 'Float64Array.from'
    | 'Float64Array.name'
    | 'Float64Array.of'
    | 'Function'
    | 'Function.length'
    | 'Function.name'
    | 'Infinity'
    | 'Int16Array'
    | 'Int16Array.BYTES_PER_ELEMENT'
    | 'Int16Array.from'
    | 'Int16Array.name'
    | 'Int16Array.of'
    | 'Int32Array'
    | 'Int32Array.BYTES_PER_ELEMENT'
    | 'Int32Array.from'
    | 'Int32Array.name'
    | 'Int32Array.of'
    | 'Int8Array'
    | 'Int8Array.BYTES_PER_ELEMENT'
    | 'Int8Array.from'
    | 'Int8Array.name'
    | 'Int8Array.of'
    | 'Intl'
    | 'Intl.Collator'
    | 'Intl.DateTimeFormat'
    | 'Intl.DisplayNames'
    | 'Intl.ListFormat'
    | 'Intl.Locale'
    | 'Intl.NumberFormat'
    | 'Intl.PluralRules'
    | 'Intl.RelativeTimeFormat'
    | 'Intl.Segmenter'
    | 'Intl.Segments'
    | 'Intl.getCanonicalLocales'
    | 'Intl.supportedValuesOf'
    | 'JSON'
    | 'JSON.parse'
    | 'JSON.stringify'
    | 'Map'
    | 'Map.groupBy'
    | 'Math'
    | 'Math.E'
    | 'Math.LN10'
    | 'Math.LN2'
    | 'Math.LOG10E'
    | 'Math.LOG2E'
    | 'Math.PI'
    | 'Math.SQRT1_2'
    | 'Math.SQRT2'
    | 'Math.abs'
    | 'Math.acos'
    | 'Math.acosh'
    | 'Math.asin'
    | 'Math.asinh'
    | 'Math.atan'
    | 'Math.atan2'
    | 'Math.atanh'
    | 'Math.cbrt'
    | 'Math.ceil'
    | 'Math.clz32'
    | 'Math.cos'
    | 'Math.cosh'
    | 'Math.exp'
    | 'Math.expm1'
    | 'Math.floor'
    | 'Math.fround'
    | 'Math.hypot'
    | 'Math.imul'
    | 'Math.log'
    | 'Math.log10'
    | 'Math.log1p'
    | 'Math.log2'
    | 'Math.max'
    | 'Math.min'
    | 'Math.pow'
    | 'Math.random'
    | 'Math.round'
    | 'Math.sign'
    | 'Math.sin'
    | 'Math.sinh'
    | 'Math.sqrt'
    | 'Math.tan'
    | 'Math.tanh'
    | 'Math.trunc'
    | 'NaN'
    | 'Number.EPSILON'
    | 'Number.MAX_SAFE_INTEGER'
    | 'Number.MAX_VALUE'
    | 'Number.MIN_SAFE_INTEGER'
    | 'Number.MIN_VALUE'
    | 'Number.NEGATIVE_INFINITY'
    | 'Number.NaN'
    | 'Number.POSITIVE_INFINITY'
    | 'Number.isFinite'
    | 'Number.isInteger'
    | 'Number.isNaN'
    | 'Number.isSafeInteger'
    | 'Number.parseFloat'
    | 'Number.parseInt'
    | 'Number.toLocaleString'
    | 'Object.assign'
    | 'Object.create'
    | 'Object.defineGetter'
    | 'Object.defineProperties'
    | 'Object.defineProperty'
    | 'Object.defineSetter'
    | 'Object.entries'
    | 'Object.freeze'
    | 'Object.fromEntries'
    | 'Object.getOwnPropertyDescriptor'
    | 'Object.getOwnPropertyDescriptors'
    | 'Object.getOwnPropertyNames'
    | 'Object.getOwnPropertySymbols'
    | 'Object.getPrototypeOf'
    | 'Object.groupBy'
    | 'Object.hasOwn'
    | 'Object.is'
    | 'Object.isExtensible'
    | 'Object.isFrozen'
    | 'Object.isSealed'
    | 'Object.keys'
    | 'Object.lookupGetter'
    | 'Object.lookupSetter'
    | 'Object.preventExtensions'
    | 'Object.proto'
    | 'Object.seal'
    | 'Object.setPrototypeOf'
    | 'Object.values'
    | 'Promise'
    | 'Promise.all'
    | 'Promise.allSettled'
    | 'Promise.any'
    | 'Promise.race'
    | 'Promise.reject'
    | 'Promise.resolve'
    | 'Proxy'
    | 'Proxy.revocable'
    | 'RangeError'
    | 'ReferenceError'
    | 'Reflect'
    | 'Reflect.apply'
    | 'Reflect.construct'
    | 'Reflect.defineProperty'
    | 'Reflect.deleteProperty'
    | 'Reflect.get'
    | 'Reflect.getOwnPropertyDescriptor'
    | 'Reflect.getPrototypeOf'
    | 'Reflect.has'
    | 'Reflect.isExtensible'
    | 'Reflect.ownKeys'
    | 'Reflect.preventExtensions'
    | 'Reflect.set'
    | 'Reflect.setPrototypeOf'
    | 'RegExp'
    | 'RegExp.dotAll'
    | 'RegExp.hasIndices'
    | 'RegExp.input'
    | 'RegExp.lastIndex'
    | 'RegExp.lastMatch'
    | 'RegExp.lastParen'
    | 'RegExp.leftContext'
    | 'RegExp.n'
    | 'RegExp.rightContext'
    | 'Set'
    | 'SharedArrayBuffer'
    | 'String'
    | 'String.fromCharCode'
    | 'String.fromCodePoint'
    | 'String.length'
    | 'String.localeCompare'
    | 'String.raw'
    | 'String.toLocaleLowerCase'
    | 'String.toLocaleUpperCase'
    | 'Symbol'
    | 'Symbol.asyncIterator'
    | 'Symbol.for'
    | 'Symbol.hasInstance'
    | 'Symbol.isConcatSpreadable'
    | 'Symbol.iterator'
    | 'Symbol.keyFor'
    | 'Symbol.match'
    | 'Symbol.matchAll'
    | 'Symbol.replace'
    | 'Symbol.search'
    | 'Symbol.species'
    | 'Symbol.split'
    | 'Symbol.toPrimitive'
    | 'Symbol.toStringTag'
    | 'Symbol.unscopables'
    | 'SyntaxError'
    | 'TypeError'
    | 'URIError'
    | 'Uint16Array'
    | 'Uint16Array.BYTES_PER_ELEMENT'
    | 'Uint16Array.from'
    | 'Uint16Array.name'
    | 'Uint16Array.of'
    | 'Uint32Array'
    | 'Uint32Array.BYTES_PER_ELEMENT'
    | 'Uint32Array.from'
    | 'Uint32Array.name'
    | 'Uint32Array.of'
    | 'Uint8Array'
    | 'Uint8Array.BYTES_PER_ELEMENT'
    | 'Uint8Array.from'
    | 'Uint8Array.name'
    | 'Uint8Array.of'
    | 'Uint8ClampedArray'
    | 'Uint8ClampedArray.BYTES_PER_ELEMENT'
    | 'Uint8ClampedArray.from'
    | 'Uint8ClampedArray.name'
    | 'Uint8ClampedArray.of'
    | 'WeakMap'
    | 'WeakRef'
    | 'WeakSet'
    | 'decodeURI'
    | 'decodeURIComponent'
    | 'encodeURI'
    | 'encodeURIComponent'
    | 'escape'
    | 'eval'
    | 'globalThis'
    | 'isFinite'
    | 'isNaN'
    | 'parseFloat'
    | 'parseInt'
    | 'unescape'
  )[];
}

/**
 * Options.
 */
export type NoUnsupportedFeaturesEsBuiltinsOptions = [
  NoUnsupportedFeaturesEsBuiltinsOption?,
];

/**
 * Disallow unsupported ECMAScript built-ins on the specified version.
 *
 * @see [no-unsupported-features/es-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md)
 */
export type NoUnsupportedFeaturesEsBuiltinsRuleConfig =
  RuleConfig<NoUnsupportedFeaturesEsBuiltinsOptions>;

/**
 * Disallow unsupported ECMAScript built-ins on the specified version.
 *
 * @see [no-unsupported-features/es-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md)
 */
export interface NoUnsupportedFeaturesEsBuiltinsRule {
  /**
   * Disallow unsupported ECMAScript built-ins on the specified version.
   *
   * @see [no-unsupported-features/es-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md)
   */
  'n/no-unsupported-features/es-builtins': NoUnsupportedFeaturesEsBuiltinsRuleConfig;
}
