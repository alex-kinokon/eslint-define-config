import type { RulesObject } from '../rule-config';

export type CallbackReturnOption = string[];

export type ExportsStyleRuleConfig = [
  ('module.exports' | 'exports')?,
  {
    allowBatchAssign?: boolean;
  }?,
];

export interface FileExtensionInImportConfig {
  tryExtensions?: string[];
  [ext: `.${string}`]: 'always' | 'never';
}

export type FileExtensionInImportRuleConfig = [
  ('always' | 'never')?,
  FileExtensionInImportConfig?,
];

export type HandleCallbackErrOption = string;

export interface NoDeprecatedApiOption {
  version?: string;
  ignoreModuleItems?: (
    | '_linklist'
    | '_stream_wrap'
    | 'async_hooks.currentId'
    | 'async_hooks.triggerId'
    | 'buffer.Buffer()'
    | 'new buffer.Buffer()'
    | 'buffer.SlowBuffer'
    | 'constants'
    | 'crypto._toBuf'
    | 'crypto.Credentials'
    | 'crypto.DEFAULT_ENCODING'
    | 'crypto.createCipher'
    | 'crypto.createCredentials'
    | 'crypto.createDecipher'
    | 'crypto.fips'
    | 'crypto.prng'
    | 'crypto.pseudoRandomBytes'
    | 'crypto.rng'
    | 'domain'
    | 'events.EventEmitter.listenerCount'
    | 'events.listenerCount'
    | 'freelist'
    | 'fs.SyncWriteStream'
    | 'fs.exists'
    | 'fs.lchmod'
    | 'fs.lchmodSync'
    | 'http.createClient'
    | 'module.Module.createRequireFromPath'
    | 'module.Module.requireRepl'
    | 'module.Module._debug'
    | 'module.createRequireFromPath'
    | 'module.requireRepl'
    | 'module._debug'
    | 'net._setSimultaneousAccepts'
    | 'os.getNetworkInterfaces'
    | 'os.tmpDir'
    | 'path._makeLong'
    | 'process.EventEmitter'
    | 'process.assert'
    | 'process.binding'
    | 'process.env.NODE_REPL_HISTORY_FILE'
    | 'process.report.triggerReport'
    | 'punycode'
    | 'readline.codePointAt'
    | 'readline.getStringWidth'
    | 'readline.isFullWidthCodePoint'
    | 'readline.stripVTControlCharacters'
    | 'safe-buffer.Buffer()'
    | 'new safe-buffer.Buffer()'
    | 'safe-buffer.SlowBuffer'
    | 'sys'
    | 'timers.enroll'
    | 'timers.unenroll'
    | 'tls.CleartextStream'
    | 'tls.CryptoStream'
    | 'tls.SecurePair'
    | 'tls.convertNPNProtocols'
    | 'tls.createSecurePair'
    | 'tls.parseCertString'
    | 'tty.setRawMode'
    | 'url.parse'
    | 'url.resolve'
    | 'util.debug'
    | 'util.error'
    | 'util.isArray'
    | 'util.isBoolean'
    | 'util.isBuffer'
    | 'util.isDate'
    | 'util.isError'
    | 'util.isFunction'
    | 'util.isNull'
    | 'util.isNullOrUndefined'
    | 'util.isNumber'
    | 'util.isObject'
    | 'util.isPrimitive'
    | 'util.isRegExp'
    | 'util.isString'
    | 'util.isSymbol'
    | 'util.isUndefined'
    | 'util.log'
    | 'util.print'
    | 'util.pump'
    | 'util.puts'
    | 'util._extend'
    | 'vm.runInDebugContext'
  )[];
  ignoreGlobalItems?: (
    | 'Buffer()'
    | 'new Buffer()'
    | 'COUNTER_NET_SERVER_CONNECTION'
    | 'COUNTER_NET_SERVER_CONNECTION_CLOSE'
    | 'COUNTER_HTTP_SERVER_REQUEST'
    | 'COUNTER_HTTP_SERVER_RESPONSE'
    | 'COUNTER_HTTP_CLIENT_REQUEST'
    | 'COUNTER_HTTP_CLIENT_RESPONSE'
    | 'GLOBAL'
    | 'Intl.v8BreakIterator'
    | 'require.extensions'
    | 'root'
    | 'process.EventEmitter'
    | 'process.assert'
    | 'process.binding'
    | 'process.env.NODE_REPL_HISTORY_FILE'
    | 'process.report.triggerReport'
  )[];
  ignoreIndirectDependencies?: boolean;
}

export interface NoExtraneousImportOption {
  allowModules?: string[];
  convertPath?:
    | {
        /**
         * @minItems 2
         * @maxItems 2
         *
         */
        [k: string]: [string, string];
      }
    | [
        {
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        },
        ...{
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        }[],
      ];
  resolvePaths?: string[];
  tryExtensions?: string[];
}

export interface NoExtraneousRequireOption {
  allowModules?: string[];
  convertPath?:
    | {
        /**
         * @minItems 2
         * @maxItems 2
         *
         */
        [k: string]: [string, string];
      }
    | [
        {
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        },
        ...{
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        }[],
      ];
  resolvePaths?: string[];
  tryExtensions?: string[];
}

export type NoMixedRequiresOption =
  | boolean
  | {
      grouping?: boolean;
      allowCall?: boolean;
    };

export type NoRestrictedImportOption = (
  | string
  | {
      name: string | string[];
      message?: string;
    }
)[];

export type NoRestrictedRequireOption = (
  | string
  | {
      name: string | string[];
      message?: string;
    }
)[];

export interface NoUnpublishedBinOption {
  convertPath?:
    | {
        /**
         * @minItems 2
         * @maxItems 2
         *
         */
        [k: string]: [string, string];
      }
    | [
        {
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        },
        ...{
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        }[],
      ];
  [k: string]: any;
}

export interface NoUnpublishedImportOption {
  allowModules?: string[];
  convertPath?:
    | {
        /**
         * @minItems 2
         * @maxItems 2
         *
         */
        [k: string]: [string, string];
      }
    | [
        {
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        },
        ...{
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        }[],
      ];
  resolvePaths?: string[];
  tryExtensions?: string[];
}

export interface NoUnpublishedRequireOption {
  allowModules?: string[];
  convertPath?:
    | {
        /**
         * @minItems 2
         * @maxItems 2
         *
         */
        [k: string]: [string, string];
      }
    | [
        {
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        },
        ...{
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        }[],
      ];
  resolvePaths?: string[];
  tryExtensions?: string[];
}

export interface NoUnsupportedFeaturesEsBuiltinsOption {
  version?: string;
  ignores?: (
    | 'Array.from'
    | 'Array.of'
    | 'BigInt'
    | 'Map'
    | 'Math.acosh'
    | 'Math.asinh'
    | 'Math.atanh'
    | 'Math.cbrt'
    | 'Math.clz32'
    | 'Math.cosh'
    | 'Math.expm1'
    | 'Math.fround'
    | 'Math.hypot'
    | 'Math.imul'
    | 'Math.log10'
    | 'Math.log1p'
    | 'Math.log2'
    | 'Math.sign'
    | 'Math.sinh'
    | 'Math.tanh'
    | 'Math.trunc'
    | 'Number.EPSILON'
    | 'Number.isFinite'
    | 'Number.isInteger'
    | 'Number.isNaN'
    | 'Number.isSafeInteger'
    | 'Number.MAX_SAFE_INTEGER'
    | 'Number.MIN_SAFE_INTEGER'
    | 'Number.parseFloat'
    | 'Number.parseInt'
    | 'Object.assign'
    | 'Object.fromEntries'
    | 'Object.getOwnPropertySymbols'
    | 'Object.is'
    | 'Object.setPrototypeOf'
    | 'Object.values'
    | 'Object.entries'
    | 'Object.getOwnPropertyDescriptors'
    | 'Promise'
    | 'Promise.allSettled'
    | 'Proxy'
    | 'Reflect'
    | 'Set'
    | 'String.fromCodePoint'
    | 'String.raw'
    | 'Symbol'
    | 'Int8Array'
    | 'Uint8Array'
    | 'Uint8ClampedArray'
    | 'Int16Array'
    | 'Uint16Array'
    | 'Int32Array'
    | 'Uint32Array'
    | 'BigInt64Array'
    | 'BigUint64Array'
    | 'Float32Array'
    | 'Float64Array'
    | 'DataView'
    | 'WeakMap'
    | 'WeakSet'
    | 'Atomics'
    | 'SharedArrayBuffer'
    | 'globalThis'
  )[];
}

export interface NoUnsupportedFeaturesEsSyntaxOption {
  version?: string;
  ignores?: (
    | 'arrowFunctions'
    | 'binaryNumericLiterals'
    | 'blockScopedFunctions'
    | 'blockScopedVariables'
    | 'classes'
    | 'computedProperties'
    | 'defaultParameters'
    | 'destructuring'
    | 'forOfLoops'
    | 'generators'
    | 'modules'
    | 'new.target'
    | 'objectSuperProperties'
    | 'octalNumericLiterals'
    | 'propertyShorthands'
    | 'regexpU'
    | 'regexpY'
    | 'restParameters'
    | 'spreadElements'
    | 'templateLiterals'
    | 'unicodeCodePointEscapes'
    | 'exponentialOperators'
    | 'asyncFunctions'
    | 'trailingCommasInFunctions'
    | 'asyncIteration'
    | 'malformedTemplateLiterals'
    | 'regexpLookbehind'
    | 'regexpNamedCaptureGroups'
    | 'regexpS'
    | 'regexpUnicodeProperties'
    | 'restSpreadProperties'
    | 'jsonSuperset'
    | 'optionalCatchBinding'
    | 'bigint'
    | 'dynamicImport'
  )[];
}

export namespace NoUnsupportedFeaturesNodeBuiltins {
  export interface NoUnsupportedFeaturesNodeBuiltinsOption {
    version?: string;
    ignores?: (
      | 'queueMicrotask'
      | 'require.resolve.paths'
      | 'Buffer.alloc'
      | 'Buffer.allocUnsafe'
      | 'Buffer.allocUnsafeSlow'
      | 'Buffer.from'
      | 'TextDecoder'
      | 'TextEncoder'
      | 'URL'
      | 'URLSearchParams'
      | 'console.clear'
      | 'console.count'
      | 'console.countReset'
      | 'console.debug'
      | 'console.dirxml'
      | 'console.group'
      | 'console.groupCollapsed'
      | 'console.groupEnd'
      | 'console.table'
      | 'console.markTimeline'
      | 'console.profile'
      | 'console.profileEnd'
      | 'console.timeLog'
      | 'console.timeStamp'
      | 'console.timeline'
      | 'console.timelineEnd'
      | 'process.allowedNodeEnvironmentFlags'
      | 'process.argv0'
      | 'process.channel'
      | 'process.cpuUsage'
      | 'process.emitWarning'
      | 'process.getegid'
      | 'process.geteuid'
      | 'process.hasUncaughtExceptionCaptureCallback'
      | 'process.hrtime.bigint'
      | 'process.ppid'
      | 'process.release'
      | 'process.report'
      | 'process.resourceUsage'
      | 'process.setegid'
      | 'process.seteuid'
      | 'process.setUncaughtExceptionCaptureCallback'
      | 'process.stdout.getColorDepth'
      | 'process.stdout.hasColor'
      | 'process.stderr.getColorDepth'
      | 'process.stderr.hasColor'
      | 'assert.strict'
      | 'assert.strict.doesNotReject'
      | 'assert.strict.rejects'
      | 'assert.deepStrictEqual'
      | 'assert.doesNotReject'
      | 'assert.notDeepStrictEqual'
      | 'assert.rejects'
      | 'async_hooks'
      | 'async_hooks.createHook'
      | 'buffer.Buffer.alloc'
      | 'buffer.Buffer.allocUnsafe'
      | 'buffer.Buffer.allocUnsafeSlow'
      | 'buffer.Buffer.from'
      | 'buffer.kMaxLength'
      | 'buffer.transcode'
      | 'buffer.constants'
      | 'child_process.ChildProcess'
      | 'crypto.Certificate.exportChallenge'
      | 'crypto.Certificate.exportPublicKey'
      | 'crypto.Certificate.verifySpkac'
      | 'crypto.ECDH'
      | 'crypto.KeyObject'
      | 'crypto.createPrivateKey'
      | 'crypto.createPublicKey'
      | 'crypto.createSecretKey'
      | 'crypto.constants'
      | 'crypto.fips'
      | 'crypto.generateKeyPair'
      | 'crypto.generateKeyPairSync'
      | 'crypto.getCurves'
      | 'crypto.getFips'
      | 'crypto.privateEncrypt'
      | 'crypto.publicDecrypt'
      | 'crypto.randomFillSync'
      | 'crypto.randomFill'
      | 'crypto.scrypt'
      | 'crypto.scryptSync'
      | 'crypto.setFips'
      | 'crypto.sign'
      | 'crypto.timingSafeEqual'
      | 'crypto.verify'
      | 'dns.Resolver'
      | 'dns.resolvePtr'
      | 'dns.promises'
      | 'events.EventEmitter.once'
      | 'events.once'
      | 'fs.Dirent'
      | 'fs.copyFile'
      | 'fs.copyFileSync'
      | 'fs.mkdtemp'
      | 'fs.mkdtempSync'
      | 'fs.realpath.native'
      | 'fs.realpathSync.native'
      | 'fs.promises'
      | 'fs.writev'
      | 'fs.writevSync'
      | 'http2'
      | 'inspector'
      | 'module.Module.builtinModules'
      | 'module.Module.createRequireFromPath'
      | 'module.Module.createRequire'
      | 'module.Module.syncBuiltinESMExports'
      | 'module.builtinModules'
      | 'module.createRequireFromPath'
      | 'module.createRequire'
      | 'module.syncBuiltinESMExports'
      | 'os.constants'
      | 'os.constants.priority'
      | 'os.getPriority'
      | 'os.homedir'
      | 'os.setPriority'
      | 'os.userInfo'
      | 'path.toNamespacedPath'
      | 'perf_hooks'
      | 'perf_hooks.monitorEventLoopDelay'
      | 'stream.Readable.from'
      | 'stream.finished'
      | 'stream.pipeline'
      | 'trace_events'
      | 'url.URL'
      | 'url.URLSearchParams'
      | 'url.domainToASCII'
      | 'url.domainToUnicode'
      | 'util.callbackify'
      | 'util.formatWithOptions'
      | 'util.getSystemErrorName'
      | 'util.inspect.custom'
      | 'util.inspect.defaultOptions'
      | 'util.inspect.replDefaults'
      | 'util.isDeepStrictEqual'
      | 'util.promisify'
      | 'util.TextDecoder'
      | 'util.TextEncoder'
      | 'util.types'
      | 'util.types.isBoxedPrimitive'
      | 'v8'
      | 'v8.DefaultDeserializer'
      | 'v8.DefaultSerializer'
      | 'v8.Deserializer'
      | 'v8.Serializer'
      | 'v8.cachedDataVersionTag'
      | 'v8.deserialize'
      | 'v8.getHeapCodeStatistics'
      | 'v8.getHeapSnapshot'
      | 'v8.getHeapSpaceStatistics'
      | 'v8.serialize'
      | 'v8.writeHeapSnapshot'
      | 'vm.Module'
      | 'vm.compileFunction'
      | 'worker_threads'
    )[];
  }

  export type NoUnsupportedFeaturesNodeBuiltinsRuleConfig = [
    NoUnsupportedFeaturesNodeBuiltinsOption?,
  ];
}

export interface ShebangOption {
  convertPath?:
    | {
        /**
         * @minItems 2
         * @maxItems 2
         *
         */
        [k: string]: [string, string];
      }
    | [
        {
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        },
        ...{
          /**
           * @minItems 1
           */
          include: [string, ...string[]];
          exclude?: string[];
          /**
           * @minItems 2
           * @maxItems 2
           */
          replace: [string, string];
        }[],
      ];
}

export interface NoHideCoreModulesOption {
  allow?: (
    | 'assert'
    | 'buffer'
    | 'child_process'
    | 'cluster'
    | 'console'
    | 'constants'
    | 'crypto'
    | 'dgram'
    | 'dns'
    | 'events'
    | 'fs'
    | 'http'
    | 'https'
    | 'module'
    | 'net'
    | 'os'
    | 'path'
    | 'querystring'
    | 'readline'
    | 'repl'
    | 'stream'
    | 'string_decoder'
    | 'timers'
    | 'tls'
    | 'tty'
    | 'url'
    | 'util'
    | 'vm'
    | 'zlib'
  )[];
  ignoreDirectDependencies?: boolean;
  ignoreIndirectDependencies?: boolean;
}

export type NoUnsupportedFeaturesOption =
  | (0.1 | 0.12 | 4 | 5 | 6 | 6.5 | 7 | 7.6 | 8 | 8.3 | 9 | 10)
  | string
  | {
      version?:
        | (0.1 | 0.12 | 4 | 5 | 6 | 6.5 | 7 | 7.6 | 8 | 8.3 | 9 | 10)
        | string;
      ignores?: (
        | 'syntax'
        | 'defaultParameters'
        | 'restParameters'
        | 'spreadOperators'
        | 'objectLiteralExtensions'
        | 'objectPropertyShorthandOfGetSet'
        | 'forOf'
        | 'binaryNumberLiterals'
        | 'octalNumberLiterals'
        | 'templateStrings'
        | 'regexpY'
        | 'regexpU'
        | 'destructuring'
        | 'unicodeCodePointEscapes'
        | 'new.target'
        | 'const'
        | 'let'
        | 'blockScopedFunctions'
        | 'arrowFunctions'
        | 'generatorFunctions'
        | 'classes'
        | 'modules'
        | 'exponentialOperators'
        | 'asyncAwait'
        | 'trailingCommasInFunctions'
        | 'templateLiteralRevision'
        | 'regexpS'
        | 'regexpNamedCaptureGroups'
        | 'regexpLookbehind'
        | 'regexpUnicodeProperties'
        | 'restProperties'
        | 'spreadProperties'
        | 'asyncGenerators'
        | 'forAwaitOf'
        | 'runtime'
        | 'globalObjects'
        | 'typedArrays'
        | 'Int8Array'
        | 'Uint8Array'
        | 'Uint8ClampedArray'
        | 'Int16Array'
        | 'Uint16Array'
        | 'Int32Array'
        | 'Uint32Array'
        | 'Float32Array'
        | 'Float64Array'
        | 'DataView'
        | 'Map'
        | 'Set'
        | 'WeakMap'
        | 'WeakSet'
        | 'Proxy'
        | 'Reflect'
        | 'Promise'
        | 'Symbol'
        | 'SharedArrayBuffer'
        | 'Atomics'
        | 'staticMethods'
        | 'Object.*'
        | 'Object.assign'
        | 'Object.is'
        | 'Object.getOwnPropertySymbols'
        | 'Object.setPrototypeOf'
        | 'Object.values'
        | 'Object.entries'
        | 'Object.getOwnPropertyDescriptors'
        | 'String.*'
        | 'String.raw'
        | 'String.fromCodePoint'
        | 'Array.*'
        | 'Array.from'
        | 'Array.of'
        | 'Number.*'
        | 'Number.isFinite'
        | 'Number.isInteger'
        | 'Number.isSafeInteger'
        | 'Number.isNaN'
        | 'Number.EPSILON'
        | 'Number.MIN_SAFE_INTEGER'
        | 'Number.MAX_SAFE_INTEGER'
        | 'Math.*'
        | 'Math.clz32'
        | 'Math.imul'
        | 'Math.sign'
        | 'Math.log10'
        | 'Math.log2'
        | 'Math.log1p'
        | 'Math.expm1'
        | 'Math.cosh'
        | 'Math.sinh'
        | 'Math.tanh'
        | 'Math.acosh'
        | 'Math.asinh'
        | 'Math.atanh'
        | 'Math.trunc'
        | 'Math.fround'
        | 'Math.cbrt'
        | 'Math.hypot'
        | 'Symbol.*'
        | 'Symbol.hasInstance'
        | 'Symbol.isConcatSpreadablec'
        | 'Symbol.iterator'
        | 'Symbol.species'
        | 'Symbol.replace'
        | 'Symbol.search'
        | 'Symbol.split'
        | 'Symbol.match'
        | 'Symbol.toPrimitive'
        | 'Symbol.toStringTag'
        | 'Symbol.unscopables'
        | 'Atomics.*'
        | 'Atomics.add'
        | 'Atomics.and'
        | 'Atomics.compareExchange'
        | 'Atomics.exchange'
        | 'Atomics.wait'
        | 'Atomics.wake'
        | 'Atomics.isLockFree'
        | 'Atomics.load'
        | 'Atomics.or'
        | 'Atomics.store'
        | 'Atomics.sub'
        | 'Atomics.xor'
        | 'extends'
        | 'extendsArray'
        | 'extendsRegExp'
        | 'extendsFunction'
        | 'extendsPromise'
        | 'extendsBoolean'
        | 'extendsNumber'
        | 'extendsString'
        | 'extendsMap'
        | 'extendsSet'
        | 'extendsNull'
      )[];
    };

/**
 * All Node rules.
 */
export interface NodeRules {
  /**
   * Require `return` statements after callbacks.
   * @see [callback-return](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/callback-return.md)
   */
  'node/callback-return': [CallbackReturnOption?];

  /**
   * Enforce either `module.exports` or `exports`.
   * @see [exports-style](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/exports-style.md)
   */
  'node/exports-style': ExportsStyleRuleConfig;

  /**
   * Enforce the style of file extensions in `import` declarations.
   * @see [file-extension-in-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/file-extension-in-import.md)
   */
  'node/file-extension-in-import': FileExtensionInImportRuleConfig;

  /**
   * Require `require()` calls to be placed at top-level module scope.
   * @see [global-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/global-require.md)
   */
  'node/global-require': null;

  /**
   * Require error handling in callbacks.
   * @see [handle-callback-err](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/handle-callback-err.md)
   */
  'node/handle-callback-err': [HandleCallbackErrOption?];

  /**
   * Ensure Node.js-style error-first callback pattern is followed.
   * @see [no-callback-literal](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-callback-literal.md)
   */
  'node/no-callback-literal': null;

  /**
   * Disallow deprecated APIs.
   * @see [no-deprecated-api](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-deprecated-api.md)
   */
  'node/no-deprecated-api': [NoDeprecatedApiOption?];

  /**
   * Disallow the assignment to `exports`.
   * @see [no-exports-assign](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-exports-assign.md)
   */
  'node/no-exports-assign': null;

  /**
   * Disallow `import` declarations which import extraneous modules.
   * @see [no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-extraneous-import.md)
   */
  'node/no-extraneous-import': [NoExtraneousImportOption?];

  /**
   * Disallow `require()` expressions which import extraneous modules.
   * @see [no-extraneous-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-extraneous-require.md)
   */
  'node/no-extraneous-require': [NoExtraneousRequireOption?];

  /**
   * Disallow `import` declarations which import non-existence modules.
   * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-import.md)
   */
  'node/no-missing-import': [
    {
      allowModules?: string[];
      tryExtensions?: string[];
      resolvePaths?: string[];
    }?,
  ];

  /**
   * Disallow `require()` expressions which import non-existence modules.
   * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-require.md)
   */
  'node/no-missing-require': [
    {
      allowModules?: string[];
      tryExtensions?: string[];
      resolvePaths?: string[];
    }?,
  ];

  /**
   * Disallow `require` calls to be mixed with regular variable declarations.
   * @see [no-mixed-requires](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-mixed-requires.md)
   */
  'node/no-mixed-requires': [NoMixedRequiresOption?];

  /**
   * Disallow `new` operators with calls to `require`.
   * @see [no-new-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-new-require.md)
   */
  'node/no-new-require': null;

  /**
   * Disallow string concatenation with `__dirname` and `__filename`.
   * @see [no-path-concat](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-path-concat.md)
   */
  'node/no-path-concat': null;

  /**
   * Disallow the use of `process.env`.
   * @see [no-process-env](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-env.md)
   */
  'node/no-process-env': null;

  /**
   * Disallow the use of `process.exit()`.
   * @see [no-process-exit](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-exit.md)
   */
  'node/no-process-exit': null;

  /**
   * Disallow specified modules when loaded by `require`.
   * @see [no-restricted-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-import.md)
   */
  'node/no-restricted-import': [NoRestrictedImportOption?];

  /**
   * Disallow specified modules when loaded by `require`.
   * @see [no-restricted-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-require.md)
   */
  'node/no-restricted-require': [NoRestrictedRequireOption?];

  /**
   * Disallow synchronous methods.
   * @see [no-sync](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-sync.md)
   */
  'node/no-sync': [
    {
      allowAtRootLevel?: boolean;
    }?,
  ];

  /**
   * Disallow `bin` files that npm ignores.
   * @see [no-unpublished-bin](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-bin.md)
   */
  'node/no-unpublished-bin': [NoUnpublishedBinOption?];

  /**
   * Disallow `import` declarations which import private modules.
   * @see [no-unpublished-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-import.md)
   */
  'node/no-unpublished-import': [NoUnpublishedImportOption?];

  /**
   * Disallow `require()` expressions which import private modules.
   * @see [no-unpublished-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unpublished-require.md)
   */
  'node/no-unpublished-require': [NoUnpublishedRequireOption?];

  /**
   * Disallow unsupported ECMAScript built-ins on the specified version.
   * @see [no-unsupported-features/es-builtins](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/es-builtins.md)
   */
  'node/no-unsupported-features/es-builtins': [
    NoUnsupportedFeaturesEsBuiltinsOption?,
  ];

  /**
   * Disallow unsupported ECMAScript syntax on the specified version.
   * @see [no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/es-syntax.md)
   */
  'node/no-unsupported-features/es-syntax': [
    NoUnsupportedFeaturesEsSyntaxOption?,
  ];

  /**
   * Disallow unsupported Node.js built-in APIs on the specified version.
   * @see [no-unsupported-features/node-builtins](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/node-builtins.md)
   */
  'node/no-unsupported-features/node-builtins': NoUnsupportedFeaturesNodeBuiltins.NoUnsupportedFeaturesNodeBuiltinsRuleConfig;

  /**
   * Enforce either `Buffer` or `require("buffer").Buffer`.
   * @see [prefer-global/buffer](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/buffer.md)
   */
  'node/prefer-global/buffer': [('always' | 'never')?];

  /**
   * Enforce either `console` or `require("console")`.
   * @see [prefer-global/console](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/console.md)
   */
  'node/prefer-global/console': [('always' | 'never')?];

  /**
   * Enforce either `process` or `require("process")`.
   * @see [prefer-global/process](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/process.md)
   */
  'node/prefer-global/process': [('always' | 'never')?];

  /**
   * Enforce either `TextDecoder` or `require("util").TextDecoder`.
   * @see [prefer-global/text-decoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-decoder.md)
   */
  'node/prefer-global/text-decoder': [('always' | 'never')?];

  /**
   * Enforce either `TextEncoder` or `require("util").TextEncoder`.
   * @see [prefer-global/text-encoder](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/text-encoder.md)
   */
  'node/prefer-global/text-encoder': [('always' | 'never')?];

  /**
   * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
   * @see [prefer-global/url-search-params](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url-search-params.md)
   */
  'node/prefer-global/url-search-params': [('always' | 'never')?];

  /**
   * Enforce either `URL` or `require("url").URL`.
   * @see [prefer-global/url](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url.md)
   */
  'node/prefer-global/url': [('always' | 'never')?];

  /**
   * Enforce `require("dns").promises`.
   * @see [prefer-promises/dns](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/dns.md)
   */
  'node/prefer-promises/dns': null;

  /**
   * Enforce `require("fs").promises`.
   * @see [prefer-promises/fs](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/fs.md)
   */
  'node/prefer-promises/fs': null;

  /**
   * Make `process.exit()` expressions the same code path as `throw`.
   * @see [process-exit-as-throw](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/process-exit-as-throw.md)
   */
  'node/process-exit-as-throw': null;

  /**
   * Suggest correct usage of shebang.
   * @see [shebang](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/shebang.md)
   */
  'node/shebang': [ShebangOption?];

  /**
   * Disallow third-party modules which are hiding core modules.
   * @deprecated
   * @see [no-hide-core-modules](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-hide-core-modules.md)
   */
  'node/no-hide-core-modules': [NoHideCoreModulesOption?];

  /**
   * Disallow unsupported ECMAScript features on the specified version.
   * @deprecated
   * @see [no-unsupported-features](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features.md)
   */
  'node/no-unsupported-features': [NoUnsupportedFeaturesOption?];
}

export type NodeRulesObject = RulesObject<NodeRules>;
