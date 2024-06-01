import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export interface NoUnsupportedFeaturesNodeBuiltinsOption {
  version?: string;
  allowExperimental?: boolean;
  ignores?: (
    | '__filename'
    | '__dirname'
    | 'require'
    | 'require.cache'
    | 'require.extensions'
    | 'require.main'
    | 'require.resolve'
    | 'require.resolve.paths'
    | 'module'
    | 'module.children'
    | 'module.exports'
    | 'module.filename'
    | 'module.id'
    | 'module.isPreloading'
    | 'module.loaded'
    | 'module.parent'
    | 'module.path'
    | 'module.paths'
    | 'module.require'
    | 'exports'
    | 'AbortController'
    | 'AbortSignal'
    | 'AbortSignal.abort'
    | 'AbortSignal.timeout'
    | 'AbortSignal.any'
    | 'DOMException'
    | 'FormData'
    | 'Headers'
    | 'MessageEvent'
    | 'Navigator'
    | 'Request'
    | 'Response'
    | 'WebAssembly'
    | 'WebSocket'
    | 'fetch'
    | 'global'
    | 'queueMicrotask'
    | 'navigator'
    | 'navigator.hardwareConcurrency'
    | 'navigator.language'
    | 'navigator.languages'
    | 'navigator.platform'
    | 'navigator.userAgent'
    | 'structuredClone'
    | 'Blob'
    | 'new Buffer()'
    | 'Buffer'
    | 'Buffer.alloc'
    | 'Buffer.allocUnsafe'
    | 'Buffer.allocUnsafeSlow'
    | 'Buffer.byteLength'
    | 'Buffer.compare'
    | 'Buffer.concat'
    | 'Buffer.copyBytesFrom'
    | 'Buffer.from'
    | 'Buffer.isBuffer'
    | 'Buffer.isEncoding'
    | 'File'
    | 'atob'
    | 'btoa'
    | 'console'
    | 'console.profile'
    | 'console.profileEnd'
    | 'console.timeStamp'
    | 'console.Console'
    | 'console.assert'
    | 'console.clear'
    | 'console.count'
    | 'console.countReset'
    | 'console.debug'
    | 'console.dir'
    | 'console.dirxml'
    | 'console.error'
    | 'console.group'
    | 'console.groupCollapsed'
    | 'console.groupEnd'
    | 'console.info'
    | 'console.log'
    | 'console.table'
    | 'console.time'
    | 'console.timeEnd'
    | 'console.timeLog'
    | 'console.trace'
    | 'console.warn'
    | 'crypto'
    | 'crypto.subtle'
    | 'crypto.subtle.decrypt'
    | 'crypto.subtle.deriveBits'
    | 'crypto.subtle.deriveKey'
    | 'crypto.subtle.digest'
    | 'crypto.subtle.encrypt'
    | 'crypto.subtle.exportKey'
    | 'crypto.subtle.generateKey'
    | 'crypto.subtle.importKey'
    | 'crypto.subtle.sign'
    | 'crypto.subtle.unwrapKey'
    | 'crypto.subtle.verify'
    | 'crypto.subtle.wrapKey'
    | 'crypto.getRandomValues'
    | 'crypto.randomUUID'
    | 'Crypto'
    | 'CryptoKey'
    | 'SubtleCrypto'
    | 'CustomEvent'
    | 'Event'
    | 'EventTarget'
    | 'PerformanceEntry'
    | 'PerformanceMark'
    | 'PerformanceMeasure'
    | 'PerformanceObserver'
    | 'PerformanceObserverEntryList'
    | 'PerformanceResourceTiming'
    | 'performance'
    | 'process'
    | 'process.allowedNodeEnvironmentFlags'
    | 'process.availableMemory'
    | 'process.arch'
    | 'process.argv'
    | 'process.argv0'
    | 'process.channel'
    | 'process.config'
    | 'process.connected'
    | 'process.debugPort'
    | 'process.env'
    | 'process.execArgv'
    | 'process.execPath'
    | 'process.exitCode'
    | 'process.mainModule'
    | 'process.noDeprecation'
    | 'process.permission'
    | 'process.pid'
    | 'process.platform'
    | 'process.ppid'
    | 'process.release'
    | 'process.report'
    | 'process.sourceMapsEnabled'
    | 'process.stdin'
    | 'process.stdin.isRaw'
    | 'process.stdin.isTTY'
    | 'process.stdin.setRawMode'
    | 'process.stdout'
    | 'process.stdout.clearLine'
    | 'process.stdout.clearScreenDown'
    | 'process.stdout.columns'
    | 'process.stdout.cursorTo'
    | 'process.stdout.getColorDepth'
    | 'process.stdout.getWindowSize'
    | 'process.stdout.hasColors'
    | 'process.stdout.isTTY'
    | 'process.stdout.moveCursor'
    | 'process.stdout.rows'
    | 'process.stderr'
    | 'process.stderr.clearLine'
    | 'process.stderr.clearScreenDown'
    | 'process.stderr.columns'
    | 'process.stderr.cursorTo'
    | 'process.stderr.getColorDepth'
    | 'process.stderr.getWindowSize'
    | 'process.stderr.hasColors'
    | 'process.stderr.isTTY'
    | 'process.stderr.moveCursor'
    | 'process.stderr.rows'
    | 'process.throwDeprecation'
    | 'process.title'
    | 'process.traceDeprecation'
    | 'process.version'
    | 'process.versions'
    | 'process.abort'
    | 'process.chdir'
    | 'process.constrainedMemory'
    | 'process.cpuUsage'
    | 'process.cwd'
    | 'process.disconnect'
    | 'process.dlopen'
    | 'process.emitWarning'
    | 'process.exit'
    | 'process.getActiveResourcesInfo'
    | 'process.getegid'
    | 'process.geteuid'
    | 'process.getgid'
    | 'process.getgroups'
    | 'process.getuid'
    | 'process.hasUncaughtExceptionCaptureCallback'
    | 'process.hrtime'
    | 'process.hrtime.bigint'
    | 'process.initgroups'
    | 'process.kill'
    | 'process.loadEnvFile'
    | 'process.memoryUsage'
    | 'process.rss'
    | 'process.nextTick'
    | 'process.resourceUsage'
    | 'process.send'
    | 'process.setegid'
    | 'process.seteuid'
    | 'process.setgid'
    | 'process.setgroups'
    | 'process.setuid'
    | 'process.setSourceMapsEnabled'
    | 'process.setUncaughtExceptionCaptureCallback'
    | 'process.umask'
    | 'process.uptime'
    | 'ReadableStream'
    | 'ReadableStream.from'
    | 'ReadableStreamDefaultReader'
    | 'ReadableStreamBYOBReader'
    | 'ReadableStreamDefaultController'
    | 'ReadableByteStreamController'
    | 'ReadableStreamBYOBRequest'
    | 'WritableStream'
    | 'WritableStreamDefaultWriter'
    | 'WritableStreamDefaultController'
    | 'TransformStream'
    | 'TransformStreamDefaultController'
    | 'ByteLengthQueuingStrategy'
    | 'CountQueuingStrategy'
    | 'TextEncoderStream'
    | 'TextDecoderStream'
    | 'CompressionStream'
    | 'DecompressionStream'
    | 'setInterval'
    | 'clearInterval'
    | 'setTimeout'
    | 'clearTimeout'
    | 'setImmediate'
    | 'clearImmediate'
    | 'URL'
    | 'URL.canParse'
    | 'URL.createObjectURL'
    | 'URL.revokeObjectURL'
    | 'URLSearchParams'
    | 'TextDecoder'
    | 'TextEncoder'
    | 'BroadcastChannel'
    | 'MessageChannel'
    | 'MessagePort'
    | 'assert'
    | 'assert.assert'
    | 'assert.deepEqual'
    | 'assert.deepStrictEqual'
    | 'assert.doesNotMatch'
    | 'assert.doesNotReject'
    | 'assert.doesNotThrow'
    | 'assert.equal'
    | 'assert.fail'
    | 'assert.ifError'
    | 'assert.match'
    | 'assert.notDeepEqual'
    | 'assert.notDeepStrictEqual'
    | 'assert.notEqual'
    | 'assert.notStrictEqual'
    | 'assert.ok'
    | 'assert.rejects'
    | 'assert.strictEqual'
    | 'assert.throws'
    | 'assert.CallTracker'
    | 'assert.strict'
    | 'assert.strict.assert'
    | 'assert.strict.deepEqual'
    | 'assert.strict.deepStrictEqual'
    | 'assert.strict.doesNotMatch'
    | 'assert.strict.doesNotReject'
    | 'assert.strict.doesNotThrow'
    | 'assert.strict.equal'
    | 'assert.strict.fail'
    | 'assert.strict.ifError'
    | 'assert.strict.match'
    | 'assert.strict.notDeepEqual'
    | 'assert.strict.notDeepStrictEqual'
    | 'assert.strict.notEqual'
    | 'assert.strict.notStrictEqual'
    | 'assert.strict.ok'
    | 'assert.strict.rejects'
    | 'assert.strict.strictEqual'
    | 'assert.strict.throws'
    | 'assert.strict.CallTracker'
    | 'assert/strict'
    | 'assert/strict.assert'
    | 'assert/strict.deepEqual'
    | 'assert/strict.deepStrictEqual'
    | 'assert/strict.doesNotMatch'
    | 'assert/strict.doesNotReject'
    | 'assert/strict.doesNotThrow'
    | 'assert/strict.equal'
    | 'assert/strict.fail'
    | 'assert/strict.ifError'
    | 'assert/strict.match'
    | 'assert/strict.notDeepEqual'
    | 'assert/strict.notDeepStrictEqual'
    | 'assert/strict.notEqual'
    | 'assert/strict.notStrictEqual'
    | 'assert/strict.ok'
    | 'assert/strict.rejects'
    | 'assert/strict.strictEqual'
    | 'assert/strict.throws'
    | 'assert/strict.CallTracker'
    | 'async_hooks'
    | 'async_hooks.createHook'
    | 'async_hooks.executionAsyncResource'
    | 'async_hooks.executionAsyncId'
    | 'async_hooks.triggerAsyncId'
    | 'async_hooks.AsyncLocalStorage'
    | 'async_hooks.AsyncLocalStorage.bind'
    | 'async_hooks.AsyncLocalStorage.snapshot'
    | 'async_hooks.AsyncResource'
    | 'async_hooks.AsyncResource.bind'
    | 'buffer'
    | 'buffer.constants'
    | 'buffer.INSPECT_MAX_BYTES'
    | 'buffer.kMaxLength'
    | 'buffer.kStringMaxLength'
    | 'buffer.atob'
    | 'buffer.btoa'
    | 'buffer.isAscii'
    | 'buffer.isUtf8'
    | 'buffer.resolveObjectURL'
    | 'buffer.transcode'
    | 'buffer.SlowBuffer'
    | 'buffer.Blob'
    | 'new buffer.Buffer()'
    | 'buffer.Buffer'
    | 'buffer.Buffer.alloc'
    | 'buffer.Buffer.allocUnsafe'
    | 'buffer.Buffer.allocUnsafeSlow'
    | 'buffer.Buffer.byteLength'
    | 'buffer.Buffer.compare'
    | 'buffer.Buffer.concat'
    | 'buffer.Buffer.copyBytesFrom'
    | 'buffer.Buffer.from'
    | 'buffer.Buffer.isBuffer'
    | 'buffer.Buffer.isEncoding'
    | 'buffer.File'
    | 'child_process'
    | 'child_process.exec'
    | 'child_process.execFile'
    | 'child_process.fork'
    | 'child_process.spawn'
    | 'child_process.execFileSync'
    | 'child_process.execSync'
    | 'child_process.spawnSync'
    | 'child_process.ChildProcess'
    | 'cluster'
    | 'cluster.isMaster'
    | 'cluster.isPrimary'
    | 'cluster.isWorker'
    | 'cluster.schedulingPolicy'
    | 'cluster.settings'
    | 'cluster.worker'
    | 'cluster.workers'
    | 'cluster.disconnect'
    | 'cluster.fork'
    | 'cluster.setupMaster'
    | 'cluster.setupPrimary'
    | 'cluster.Worker'
    | 'crypto.constants'
    | 'crypto.fips'
    | 'crypto.webcrypto'
    | 'crypto.webcrypto.subtle'
    | 'crypto.webcrypto.subtle.decrypt'
    | 'crypto.webcrypto.subtle.deriveBits'
    | 'crypto.webcrypto.subtle.deriveKey'
    | 'crypto.webcrypto.subtle.digest'
    | 'crypto.webcrypto.subtle.encrypt'
    | 'crypto.webcrypto.subtle.exportKey'
    | 'crypto.webcrypto.subtle.generateKey'
    | 'crypto.webcrypto.subtle.importKey'
    | 'crypto.webcrypto.subtle.sign'
    | 'crypto.webcrypto.subtle.unwrapKey'
    | 'crypto.webcrypto.subtle.verify'
    | 'crypto.webcrypto.subtle.wrapKey'
    | 'crypto.webcrypto.getRandomValues'
    | 'crypto.webcrypto.randomUUID'
    | 'crypto.checkPrime'
    | 'crypto.checkPrimeSync'
    | 'crypto.createCipher'
    | 'crypto.createCipheriv'
    | 'crypto.createDecipher'
    | 'crypto.createDecipheriv'
    | 'crypto.createDiffieHellman'
    | 'crypto.createDiffieHellmanGroup'
    | 'crypto.createECDH'
    | 'crypto.createHash'
    | 'crypto.createHmac'
    | 'crypto.createPrivateKey'
    | 'crypto.createPublicKey'
    | 'crypto.createSecretKey'
    | 'crypto.createSign'
    | 'crypto.createVerify'
    | 'crypto.diffieHellman'
    | 'crypto.generateKey'
    | 'crypto.generateKeyPair'
    | 'crypto.generateKeyPairSync'
    | 'crypto.generateKeySync'
    | 'crypto.generatePrime'
    | 'crypto.generatePrimeSync'
    | 'crypto.getCipherInfo'
    | 'crypto.getCiphers'
    | 'crypto.getCurves'
    | 'crypto.getDiffieHellman'
    | 'crypto.getFips'
    | 'crypto.getHashes'
    | 'crypto.hash'
    | 'crypto.hkdf'
    | 'crypto.hkdfSync'
    | 'crypto.pbkdf2'
    | 'crypto.pbkdf2Sync'
    | 'crypto.privateDecrypt'
    | 'crypto.privateEncrypt'
    | 'crypto.publicDecrypt'
    | 'crypto.publicEncrypt'
    | 'crypto.randomBytes'
    | 'crypto.randomFillSync'
    | 'crypto.randomFill'
    | 'crypto.randomInt'
    | 'crypto.scrypt'
    | 'crypto.scryptSync'
    | 'crypto.secureHeapUsed'
    | 'crypto.setEngine'
    | 'crypto.setFips'
    | 'crypto.sign'
    | 'crypto.timingSafeEqual'
    | 'crypto.verify'
    | 'crypto.Certificate'
    | 'crypto.Certificate.exportChallenge'
    | 'crypto.Certificate.exportPublicKey'
    | 'crypto.Certificate.verifySpkac'
    | 'crypto.Cipher'
    | 'crypto.Decipher'
    | 'crypto.DiffieHellman'
    | 'crypto.DiffieHellmanGroup'
    | 'crypto.ECDH'
    | 'crypto.ECDH.convertKey'
    | 'crypto.Hash()'
    | 'new crypto.Hash()'
    | 'crypto.Hash'
    | 'crypto.Hmac()'
    | 'new crypto.Hmac()'
    | 'crypto.Hmac'
    | 'crypto.KeyObject'
    | 'crypto.KeyObject.from'
    | 'crypto.Sign'
    | 'crypto.Verify'
    | 'crypto.X509Certificate'
    | 'dgram'
    | 'dgram.createSocket'
    | 'dgram.Socket'
    | 'diagnostics_channel'
    | 'diagnostics_channel.hasSubscribers'
    | 'diagnostics_channel.channel'
    | 'diagnostics_channel.subscribe'
    | 'diagnostics_channel.unsubscribe'
    | 'diagnostics_channel.tracingChannel'
    | 'diagnostics_channel.Channel'
    | 'diagnostics_channel.TracingChannel'
    | 'dns'
    | 'dns.Resolver'
    | 'dns.getServers'
    | 'dns.lookup'
    | 'dns.lookupService'
    | 'dns.resolve'
    | 'dns.resolve4'
    | 'dns.resolve6'
    | 'dns.resolveAny'
    | 'dns.resolveCname'
    | 'dns.resolveCaa'
    | 'dns.resolveMx'
    | 'dns.resolveNaptr'
    | 'dns.resolveNs'
    | 'dns.resolvePtr'
    | 'dns.resolveSoa'
    | 'dns.resolveSrv'
    | 'dns.resolveTxt'
    | 'dns.reverse'
    | 'dns.setDefaultResultOrder'
    | 'dns.getDefaultResultOrder'
    | 'dns.setServers'
    | 'dns.promises'
    | 'dns.promises.Resolver'
    | 'dns.promises.cancel'
    | 'dns.promises.getServers'
    | 'dns.promises.lookup'
    | 'dns.promises.lookupService'
    | 'dns.promises.resolve'
    | 'dns.promises.resolve4'
    | 'dns.promises.resolve6'
    | 'dns.promises.resolveAny'
    | 'dns.promises.resolveCaa'
    | 'dns.promises.resolveCname'
    | 'dns.promises.resolveMx'
    | 'dns.promises.resolveNaptr'
    | 'dns.promises.resolveNs'
    | 'dns.promises.resolvePtr'
    | 'dns.promises.resolveSoa'
    | 'dns.promises.resolveSrv'
    | 'dns.promises.resolveTxt'
    | 'dns.promises.reverse'
    | 'dns.promises.setDefaultResultOrder'
    | 'dns.promises.getDefaultResultOrder'
    | 'dns.promises.setServers'
    | 'dns/promises'
    | 'dns/promises.Resolver'
    | 'dns/promises.cancel'
    | 'dns/promises.getServers'
    | 'dns/promises.lookup'
    | 'dns/promises.lookupService'
    | 'dns/promises.resolve'
    | 'dns/promises.resolve4'
    | 'dns/promises.resolve6'
    | 'dns/promises.resolveAny'
    | 'dns/promises.resolveCaa'
    | 'dns/promises.resolveCname'
    | 'dns/promises.resolveMx'
    | 'dns/promises.resolveNaptr'
    | 'dns/promises.resolveNs'
    | 'dns/promises.resolvePtr'
    | 'dns/promises.resolveSoa'
    | 'dns/promises.resolveSrv'
    | 'dns/promises.resolveTxt'
    | 'dns/promises.reverse'
    | 'dns/promises.setDefaultResultOrder'
    | 'dns/promises.getDefaultResultOrder'
    | 'dns/promises.setServers'
    | 'domain'
    | 'domain.create'
    | 'domain.Domain'
    | 'events'
    | 'events.Event'
    | 'events.EventTarget'
    | 'events.CustomEvent'
    | 'events.NodeEventTarget'
    | 'events.EventEmitter'
    | 'events.EventEmitter.defaultMaxListeners'
    | 'events.EventEmitter.errorMonitor'
    | 'events.EventEmitter.captureRejections'
    | 'events.EventEmitter.captureRejectionSymbol'
    | 'events.EventEmitter.getEventListeners'
    | 'events.EventEmitter.getMaxListeners'
    | 'events.EventEmitter.once'
    | 'events.EventEmitter.listenerCount'
    | 'events.EventEmitter.on'
    | 'events.EventEmitter.setMaxListeners'
    | 'events.EventEmitter.addAbortListener'
    | 'events.EventEmitterAsyncResource'
    | 'events.EventEmitterAsyncResource.defaultMaxListeners'
    | 'events.EventEmitterAsyncResource.errorMonitor'
    | 'events.EventEmitterAsyncResource.captureRejections'
    | 'events.EventEmitterAsyncResource.captureRejectionSymbol'
    | 'events.EventEmitterAsyncResource.getEventListeners'
    | 'events.EventEmitterAsyncResource.getMaxListeners'
    | 'events.EventEmitterAsyncResource.once'
    | 'events.EventEmitterAsyncResource.listenerCount'
    | 'events.EventEmitterAsyncResource.on'
    | 'events.EventEmitterAsyncResource.setMaxListeners'
    | 'events.EventEmitterAsyncResource.addAbortListener'
    | 'events.defaultMaxListeners'
    | 'events.errorMonitor'
    | 'events.captureRejections'
    | 'events.captureRejectionSymbol'
    | 'events.getEventListeners'
    | 'events.getMaxListeners'
    | 'events.once'
    | 'events.listenerCount'
    | 'events.on'
    | 'events.setMaxListeners'
    | 'events.addAbortListener'
    | 'fs'
    | 'fs.promises'
    | 'fs.promises.FileHandle'
    | 'fs.promises.access'
    | 'fs.promises.appendFile'
    | 'fs.promises.chmod'
    | 'fs.promises.chown'
    | 'fs.promises.constants'
    | 'fs.promises.copyFile'
    | 'fs.promises.cp'
    | 'fs.promises.glob'
    | 'fs.promises.lchmod'
    | 'fs.promises.lchown'
    | 'fs.promises.link'
    | 'fs.promises.lstat'
    | 'fs.promises.lutimes'
    | 'fs.promises.mkdir'
    | 'fs.promises.mkdtemp'
    | 'fs.promises.open'
    | 'fs.promises.opendir'
    | 'fs.promises.readFile'
    | 'fs.promises.readdir'
    | 'fs.promises.readlink'
    | 'fs.promises.realpath'
    | 'fs.promises.rename'
    | 'fs.promises.rm'
    | 'fs.promises.rmdir'
    | 'fs.promises.stat'
    | 'fs.promises.statfs'
    | 'fs.promises.symlink'
    | 'fs.promises.truncate'
    | 'fs.promises.unlink'
    | 'fs.promises.utimes'
    | 'fs.promises.watch'
    | 'fs.promises.writeFile'
    | 'fs.access'
    | 'fs.appendFile'
    | 'fs.chmod'
    | 'fs.chown'
    | 'fs.close'
    | 'fs.copyFile'
    | 'fs.cp'
    | 'fs.createReadStream'
    | 'fs.createWriteStream'
    | 'fs.exists'
    | 'fs.fchmod'
    | 'fs.fchown'
    | 'fs.fdatasync'
    | 'fs.fstat'
    | 'fs.fsync'
    | 'fs.ftruncate'
    | 'fs.futimes'
    | 'fs.glob'
    | 'fs.lchmod'
    | 'fs.lchown'
    | 'fs.link'
    | 'fs.lstat'
    | 'fs.lutimes'
    | 'fs.mkdir'
    | 'fs.mkdtemp'
    | 'fs.native'
    | 'fs.open'
    | 'fs.openAsBlob'
    | 'fs.opendir'
    | 'fs.read'
    | 'fs.readdir'
    | 'fs.readFile'
    | 'fs.readlink'
    | 'fs.readv'
    | 'fs.realpath'
    | 'fs.realpath.native'
    | 'fs.rename'
    | 'fs.rm'
    | 'fs.rmdir'
    | 'fs.stat'
    | 'fs.statfs'
    | 'fs.symlink'
    | 'fs.truncate'
    | 'fs.unlink'
    | 'fs.unwatchFile'
    | 'fs.utimes'
    | 'fs.watch'
    | 'fs.watchFile'
    | 'fs.write'
    | 'fs.writeFile'
    | 'fs.writev'
    | 'fs.accessSync'
    | 'fs.appendFileSync'
    | 'fs.chmodSync'
    | 'fs.chownSync'
    | 'fs.closeSync'
    | 'fs.copyFileSync'
    | 'fs.cpSync'
    | 'fs.existsSync'
    | 'fs.fchmodSync'
    | 'fs.fchownSync'
    | 'fs.fdatasyncSync'
    | 'fs.fstatSync'
    | 'fs.fsyncSync'
    | 'fs.ftruncateSync'
    | 'fs.futimesSync'
    | 'fs.globSync'
    | 'fs.lchmodSync'
    | 'fs.lchownSync'
    | 'fs.linkSync'
    | 'fs.lstatSync'
    | 'fs.lutimesSync'
    | 'fs.mkdirSync'
    | 'fs.mkdtempSync'
    | 'fs.opendirSync'
    | 'fs.openSync'
    | 'fs.readdirSync'
    | 'fs.readFileSync'
    | 'fs.readlinkSync'
    | 'fs.readSync'
    | 'fs.readvSync'
    | 'fs.realpathSync'
    | 'fs.realpathSync.native'
    | 'fs.renameSync'
    | 'fs.rmdirSync'
    | 'fs.rmSync'
    | 'fs.statfsSync'
    | 'fs.statSync'
    | 'fs.symlinkSync'
    | 'fs.truncateSync'
    | 'fs.unlinkSync'
    | 'fs.utimesSync'
    | 'fs.writeFileSync'
    | 'fs.writeSync'
    | 'fs.writevSync'
    | 'fs.constants'
    | 'fs.Dir'
    | 'fs.Dirent'
    | 'fs.FSWatcher'
    | 'fs.StatWatcher'
    | 'fs.ReadStream'
    | 'fs.Stats()'
    | 'new fs.Stats()'
    | 'fs.Stats'
    | 'fs.StatFs'
    | 'fs.WriteStream'
    | 'fs.common_objects'
    | 'fs/promises'
    | 'fs/promises.FileHandle'
    | 'fs/promises.access'
    | 'fs/promises.appendFile'
    | 'fs/promises.chmod'
    | 'fs/promises.chown'
    | 'fs/promises.constants'
    | 'fs/promises.copyFile'
    | 'fs/promises.cp'
    | 'fs/promises.glob'
    | 'fs/promises.lchmod'
    | 'fs/promises.lchown'
    | 'fs/promises.link'
    | 'fs/promises.lstat'
    | 'fs/promises.lutimes'
    | 'fs/promises.mkdir'
    | 'fs/promises.mkdtemp'
    | 'fs/promises.open'
    | 'fs/promises.opendir'
    | 'fs/promises.readFile'
    | 'fs/promises.readdir'
    | 'fs/promises.readlink'
    | 'fs/promises.realpath'
    | 'fs/promises.rename'
    | 'fs/promises.rm'
    | 'fs/promises.rmdir'
    | 'fs/promises.stat'
    | 'fs/promises.statfs'
    | 'fs/promises.symlink'
    | 'fs/promises.truncate'
    | 'fs/promises.unlink'
    | 'fs/promises.utimes'
    | 'fs/promises.watch'
    | 'fs/promises.writeFile'
    | 'http2'
    | 'http2.constants'
    | 'http2.sensitiveHeaders'
    | 'http2.createServer'
    | 'http2.createSecureServer'
    | 'http2.connect'
    | 'http2.getDefaultSettings'
    | 'http2.getPackedSettings'
    | 'http2.getUnpackedSettings'
    | 'http2.performServerHandshake'
    | 'http2.Http2Session'
    | 'http2.ServerHttp2Session'
    | 'http2.ClientHttp2Session'
    | 'http2.Http2Stream'
    | 'http2.ClientHttp2Stream'
    | 'http2.ServerHttp2Stream'
    | 'http2.Http2Server'
    | 'http2.Http2SecureServer'
    | 'http2.Http2ServerRequest'
    | 'http2.Http2ServerResponse'
    | 'http'
    | 'http.globalAgent'
    | 'http.createServer'
    | 'http.get'
    | 'http.request'
    | 'http.Agent'
    | 'http.Server'
    | 'inspector'
    | 'inspector.Session'
    | 'inspector.console'
    | 'inspector.close'
    | 'inspector.open'
    | 'inspector.url'
    | 'inspector.waitForDebugger'
    | 'inspector/promises'
    | 'inspector/promises.Session'
    | 'inspector/promises.console'
    | 'inspector/promises.close'
    | 'inspector/promises.open'
    | 'inspector/promises.url'
    | 'inspector/promises.waitForDebugger'
    | 'module.builtinModules'
    | 'module.createRequire'
    | 'module.createRequireFromPath'
    | 'module.isBuiltin'
    | 'module.register'
    | 'module.syncBuiltinESMExports'
    | 'module.findSourceMap'
    | 'module.SourceMap'
    | 'module.Module.builtinModules'
    | 'module.Module.createRequire'
    | 'module.Module.createRequireFromPath'
    | 'module.Module.isBuiltin'
    | 'module.Module.register'
    | 'module.Module.syncBuiltinESMExports'
    | 'module.Module.findSourceMap'
    | 'module.Module.SourceMap'
    | 'net'
    | 'net.connect'
    | 'net.createConnection'
    | 'net.createServer'
    | 'net.getDefaultAutoSelectFamily'
    | 'net.setDefaultAutoSelectFamily'
    | 'net.getDefaultAutoSelectFamilyAttemptTimeout'
    | 'net.setDefaultAutoSelectFamilyAttemptTimeout'
    | 'net.isIP'
    | 'net.isIPv4'
    | 'net.isIPv6'
    | 'net.BlockList'
    | 'net.SocketAddress'
    | 'net.Server'
    | 'net.Socket'
    | 'os'
    | 'os.EOL'
    | 'os.constants'
    | 'os.constants.priority'
    | 'os.devNull'
    | 'os.availableParallelism'
    | 'os.arch'
    | 'os.cpus'
    | 'os.endianness'
    | 'os.freemem'
    | 'os.getPriority'
    | 'os.homedir'
    | 'os.hostname'
    | 'os.loadavg'
    | 'os.machine'
    | 'os.networkInterfaces'
    | 'os.platform'
    | 'os.release'
    | 'os.setPriority'
    | 'os.tmpdir'
    | 'os.totalmem'
    | 'os.type'
    | 'os.uptime'
    | 'os.userInfo'
    | 'os.version'
    | 'path'
    | 'path.posix'
    | 'path.posix.delimiter'
    | 'path.posix.sep'
    | 'path.posix.basename'
    | 'path.posix.dirname'
    | 'path.posix.extname'
    | 'path.posix.format'
    | 'path.posix.isAbsolute'
    | 'path.posix.join'
    | 'path.posix.normalize'
    | 'path.posix.parse'
    | 'path.posix.relative'
    | 'path.posix.resolve'
    | 'path.posix.toNamespacedPath'
    | 'path.win32'
    | 'path.win32.delimiter'
    | 'path.win32.sep'
    | 'path.win32.basename'
    | 'path.win32.dirname'
    | 'path.win32.extname'
    | 'path.win32.format'
    | 'path.win32.isAbsolute'
    | 'path.win32.join'
    | 'path.win32.normalize'
    | 'path.win32.parse'
    | 'path.win32.relative'
    | 'path.win32.resolve'
    | 'path.win32.toNamespacedPath'
    | 'path.delimiter'
    | 'path.sep'
    | 'path.basename'
    | 'path.dirname'
    | 'path.extname'
    | 'path.format'
    | 'path.isAbsolute'
    | 'path.join'
    | 'path.normalize'
    | 'path.parse'
    | 'path.relative'
    | 'path.resolve'
    | 'path.toNamespacedPath'
    | 'path/posix'
    | 'path/posix.delimiter'
    | 'path/posix.sep'
    | 'path/posix.basename'
    | 'path/posix.dirname'
    | 'path/posix.extname'
    | 'path/posix.format'
    | 'path/posix.isAbsolute'
    | 'path/posix.join'
    | 'path/posix.normalize'
    | 'path/posix.parse'
    | 'path/posix.relative'
    | 'path/posix.resolve'
    | 'path/posix.toNamespacedPath'
    | 'path/win32'
    | 'path/win32.delimiter'
    | 'path/win32.sep'
    | 'path/win32.basename'
    | 'path/win32.dirname'
    | 'path/win32.extname'
    | 'path/win32.format'
    | 'path/win32.isAbsolute'
    | 'path/win32.join'
    | 'path/win32.normalize'
    | 'path/win32.parse'
    | 'path/win32.relative'
    | 'path/win32.resolve'
    | 'path/win32.toNamespacedPath'
    | 'perf_hooks'
    | 'perf_hooks.performance'
    | 'perf_hooks.createHistogram'
    | 'perf_hooks.monitorEventLoopDelay'
    | 'perf_hooks.PerformanceEntry'
    | 'perf_hooks.PerformanceMark'
    | 'perf_hooks.PerformanceMeasure'
    | 'perf_hooks.PerformanceNodeEntry'
    | 'perf_hooks.PerformanceNodeTiming'
    | 'perf_hooks.PerformanceResourceTiming'
    | 'perf_hooks.PerformanceObserver'
    | 'perf_hooks.PerformanceObserverEntryList'
    | 'perf_hooks.Histogram'
    | 'perf_hooks.IntervalHistogram'
    | 'perf_hooks.RecordableHistogram'
    | 'punycode'
    | 'punycode.ucs2'
    | 'punycode.version'
    | 'punycode.decode'
    | 'punycode.encode'
    | 'punycode.toASCII'
    | 'punycode.toUnicode'
    | 'querystring'
    | 'querystring.decode'
    | 'querystring.encode'
    | 'querystring.escape'
    | 'querystring.parse'
    | 'querystring.stringify'
    | 'querystring.unescape'
    | 'readline'
    | 'readline.promises'
    | 'readline.promises.createInterface'
    | 'readline.promises.Interface'
    | 'readline.promises.Readline'
    | 'readline.clearLine'
    | 'readline.clearScreenDown'
    | 'readline.createInterface'
    | 'readline.cursorTo'
    | 'readline.moveCursor'
    | 'readline.Interface'
    | 'readline.emitKeypressEvents'
    | 'readline.InterfaceConstructor'
    | 'readline/promises'
    | 'readline/promises.createInterface'
    | 'readline/promises.Interface'
    | 'readline/promises.Readline'
    | 'sea'
    | 'sea.isSea'
    | 'sea.getAsset'
    | 'sea.getAssetAsBlob'
    | 'sea.getRawAsset'
    | 'sea.test.isSea'
    | 'sea.test.getAsset'
    | 'sea.test.getAssetAsBlob'
    | 'sea.test.getRawAsset'
    | 'stream'
    | 'stream.promises'
    | 'stream.promises.pipeline'
    | 'stream.promises.finished'
    | 'stream.finished'
    | 'stream.pipeline'
    | 'stream.compose'
    | 'stream.Readable'
    | 'stream.Readable.from'
    | 'stream.Readable.isDisturbed'
    | 'stream.Readable.fromWeb'
    | 'stream.Readable.toWeb'
    | 'stream.Writable'
    | 'stream.Writable.fromWeb'
    | 'stream.Writable.toWeb'
    | 'stream.Duplex'
    | 'stream.Duplex.from'
    | 'stream.Duplex.fromWeb'
    | 'stream.Duplex.toWeb'
    | 'stream.Transform'
    | 'stream.isErrored'
    | 'stream.isReadable'
    | 'stream.addAbortSignal'
    | 'stream.getDefaultHighWaterMark'
    | 'stream.setDefaultHighWaterMark'
    | 'stream/promises.pipeline'
    | 'stream/promises.finished'
    | 'stream/web'
    | 'stream/web.ReadableStream'
    | 'stream/web.ReadableStream.from'
    | 'stream/web.ReadableStreamDefaultReader'
    | 'stream/web.ReadableStreamBYOBReader'
    | 'stream/web.ReadableStreamDefaultController'
    | 'stream/web.ReadableByteStreamController'
    | 'stream/web.ReadableStreamBYOBRequest'
    | 'stream/web.WritableStream'
    | 'stream/web.WritableStreamDefaultWriter'
    | 'stream/web.WritableStreamDefaultController'
    | 'stream/web.TransformStream'
    | 'stream/web.TransformStreamDefaultController'
    | 'stream/web.ByteLengthQueuingStrategy'
    | 'stream/web.CountQueuingStrategy'
    | 'stream/web.TextEncoderStream'
    | 'stream/web.TextDecoderStream'
    | 'stream/web.CompressionStream'
    | 'stream/web.DecompressionStream'
    | 'stream/consumers'
    | 'stream/consumers.arrayBuffer'
    | 'stream/consumers.blob'
    | 'stream/consumers.buffer'
    | 'stream/consumers.json'
    | 'stream/consumers.text'
    | 'string_decoder'
    | 'string_decoder.StringDecoder'
    | 'test'
    | 'test.run'
    | 'test.skip'
    | 'test.todo'
    | 'test.only'
    | 'test.describe'
    | 'test.describe.skip'
    | 'test.describe.todo'
    | 'test.describe.only'
    | 'test.it'
    | 'test.it.skip'
    | 'test.it.todo'
    | 'test.it.only'
    | 'test.suite'
    | 'test.suite.skip'
    | 'test.suite.todo'
    | 'test.suite.only'
    | 'test.before'
    | 'test.after'
    | 'test.beforeEach'
    | 'test.afterEach'
    | 'test.MockFunctionContext'
    | 'test.MockTracker'
    | 'test.MockTimers'
    | 'test.TestsStream'
    | 'test.TestContext'
    | 'test.SuiteContext'
    | 'test.test.run'
    | 'test.test.skip'
    | 'test.test.todo'
    | 'test.test.only'
    | 'test.test.describe'
    | 'test.test.it'
    | 'test.test.suite'
    | 'test.test.before'
    | 'test.test.after'
    | 'test.test.beforeEach'
    | 'test.test.afterEach'
    | 'test.test.MockFunctionContext'
    | 'test.test.MockTracker'
    | 'test.test.MockTimers'
    | 'test.test.TestsStream'
    | 'test.test.TestContext'
    | 'test.test.SuiteContext'
    | 'timers'
    | 'timers.Immediate'
    | 'timers.Timeout'
    | 'timers.setImmediate'
    | 'timers.clearImmediate'
    | 'timers.setInterval'
    | 'timers.clearInterval'
    | 'timers.setTimeout'
    | 'timers.clearTimeout'
    | 'timers.promises'
    | 'timers.promises.setTimeout'
    | 'timers.promises.setImmediate'
    | 'timers.promises.setInterval'
    | 'timers.promises.scheduler.wait'
    | 'timers.promises.scheduler.yield'
    | 'timers/promises'
    | 'timers/promises.setTimeout'
    | 'timers/promises.setImmediate'
    | 'timers/promises.setInterval'
    | 'tls'
    | 'tls.rootCertificates'
    | 'tls.DEFAULT_ECDH_CURVE'
    | 'tls.DEFAULT_MAX_VERSION'
    | 'tls.DEFAULT_MIN_VERSION'
    | 'tls.DEFAULT_CIPHERS'
    | 'tls.checkServerIdentity'
    | 'tls.connect'
    | 'tls.createSecureContext'
    | 'tls.createSecurePair'
    | 'tls.createServer'
    | 'tls.getCiphers'
    | 'tls.SecureContext'
    | 'tls.CryptoStream'
    | 'tls.SecurePair'
    | 'tls.Server'
    | 'tls.TLSSocket'
    | 'trace_events'
    | 'trace_events.createTracing'
    | 'trace_events.getEnabledCategories'
    | 'tty'
    | 'tty.isatty'
    | 'tty.ReadStream'
    | 'tty.WriteStream'
    | 'url'
    | 'url.domainToASCII'
    | 'url.domainToUnicode'
    | 'url.fileURLToPath'
    | 'url.format'
    | 'url.pathToFileURL'
    | 'url.urlToHttpOptions'
    | 'url.URL'
    | 'url.URL.canParse'
    | 'url.URL.createObjectURL'
    | 'url.URL.revokeObjectURL'
    | 'url.URLSearchParams'
    | 'url.Url'
    | 'util.promisify'
    | 'util.promisify.custom'
    | 'util.callbackify'
    | 'util.debuglog'
    | 'util.debug'
    | 'util.deprecate'
    | 'util.format'
    | 'util.formatWithOptions'
    | 'util.getSystemErrorName'
    | 'util.getSystemErrorMap'
    | 'util.inherits'
    | 'util.inspect'
    | 'util.inspect.custom'
    | 'util.inspect.defaultOptions'
    | 'util.inspect.replDefaults'
    | 'util.isDeepStrictEqual'
    | 'util.parseArgs'
    | 'util.parseEnv'
    | 'util.stripVTControlCharacters'
    | 'util.styleText'
    | 'util.toUSVString'
    | 'util.transferableAbortController'
    | 'util.transferableAbortSignal'
    | 'util.aborted'
    | 'util.MIMEType'
    | 'util.MIMEParams'
    | 'util.TextDecoder'
    | 'util.TextEncoder'
    | 'util.types'
    | 'util.types.isExternal'
    | 'util.types.isDate'
    | 'util.types.isArgumentsObject'
    | 'util.types.isBigIntObject'
    | 'util.types.isBooleanObject'
    | 'util.types.isNumberObject'
    | 'util.types.isStringObject'
    | 'util.types.isSymbolObject'
    | 'util.types.isNativeError'
    | 'util.types.isRegExp'
    | 'util.types.isAsyncFunction'
    | 'util.types.isGeneratorFunction'
    | 'util.types.isGeneratorObject'
    | 'util.types.isPromise'
    | 'util.types.isMap'
    | 'util.types.isSet'
    | 'util.types.isMapIterator'
    | 'util.types.isSetIterator'
    | 'util.types.isWeakMap'
    | 'util.types.isWeakSet'
    | 'util.types.isArrayBuffer'
    | 'util.types.isDataView'
    | 'util.types.isSharedArrayBuffer'
    | 'util.types.isProxy'
    | 'util.types.isModuleNamespaceObject'
    | 'util.types.isAnyArrayBuffer'
    | 'util.types.isBoxedPrimitive'
    | 'util.types.isArrayBufferView'
    | 'util.types.isTypedArray'
    | 'util.types.isUint8Array'
    | 'util.types.isUint8ClampedArray'
    | 'util.types.isUint16Array'
    | 'util.types.isUint32Array'
    | 'util.types.isInt8Array'
    | 'util.types.isInt16Array'
    | 'util.types.isInt32Array'
    | 'util.types.isFloat32Array'
    | 'util.types.isFloat64Array'
    | 'util.types.isBigInt64Array'
    | 'util.types.isBigUint64Array'
    | 'util.types.isKeyObject'
    | 'util.types.isCryptoKey'
    | 'util.types.isWebAssemblyCompiledModule'
    | 'util._extend'
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
    | 'util'
    | 'util/types'
    | 'util/types.isExternal'
    | 'util/types.isDate'
    | 'util/types.isArgumentsObject'
    | 'util/types.isBigIntObject'
    | 'util/types.isBooleanObject'
    | 'util/types.isNumberObject'
    | 'util/types.isStringObject'
    | 'util/types.isSymbolObject'
    | 'util/types.isNativeError'
    | 'util/types.isRegExp'
    | 'util/types.isAsyncFunction'
    | 'util/types.isGeneratorFunction'
    | 'util/types.isGeneratorObject'
    | 'util/types.isPromise'
    | 'util/types.isMap'
    | 'util/types.isSet'
    | 'util/types.isMapIterator'
    | 'util/types.isSetIterator'
    | 'util/types.isWeakMap'
    | 'util/types.isWeakSet'
    | 'util/types.isArrayBuffer'
    | 'util/types.isDataView'
    | 'util/types.isSharedArrayBuffer'
    | 'util/types.isProxy'
    | 'util/types.isModuleNamespaceObject'
    | 'util/types.isAnyArrayBuffer'
    | 'util/types.isBoxedPrimitive'
    | 'util/types.isArrayBufferView'
    | 'util/types.isTypedArray'
    | 'util/types.isUint8Array'
    | 'util/types.isUint8ClampedArray'
    | 'util/types.isUint16Array'
    | 'util/types.isUint32Array'
    | 'util/types.isInt8Array'
    | 'util/types.isInt16Array'
    | 'util/types.isInt32Array'
    | 'util/types.isFloat32Array'
    | 'util/types.isFloat64Array'
    | 'util/types.isBigInt64Array'
    | 'util/types.isBigUint64Array'
    | 'util/types.isKeyObject'
    | 'util/types.isCryptoKey'
    | 'util/types.isWebAssemblyCompiledModule'
    | 'v8'
    | 'v8.serialize'
    | 'v8.deserialize'
    | 'v8.Serializer'
    | 'v8.Deserializer'
    | 'v8.DefaultSerializer'
    | 'v8.DefaultDeserializer'
    | 'v8.promiseHooks'
    | 'v8.promiseHooks.onInit'
    | 'v8.promiseHooks.onSettled'
    | 'v8.promiseHooks.onBefore'
    | 'v8.promiseHooks.onAfter'
    | 'v8.promiseHooks.createHook'
    | 'v8.startupSnapshot'
    | 'v8.startupSnapshot.addSerializeCallback'
    | 'v8.startupSnapshot.addDeserializeCallback'
    | 'v8.startupSnapshot.setDeserializeMainFunction'
    | 'v8.startupSnapshot.isBuildingSnapshot'
    | 'v8.cachedDataVersionTag'
    | 'v8.getHeapCodeStatistics'
    | 'v8.getHeapSnapshot'
    | 'v8.getHeapSpaceStatistics'
    | 'v8.getHeapStatistics'
    | 'v8.queryObjects'
    | 'v8.setFlagsFromString'
    | 'v8.stopCoverage'
    | 'v8.takeCoverage'
    | 'v8.writeHeapSnapshot'
    | 'v8.setHeapSnapshotNearHeapLimit'
    | 'v8.GCProfiler'
    | 'vm.constants'
    | 'vm.compileFunction'
    | 'vm.createContext'
    | 'vm.isContext'
    | 'vm.measureMemory'
    | 'vm.runInContext'
    | 'vm.runInNewContext'
    | 'vm.runInThisContext'
    | 'vm.Script'
    | 'vm.Module'
    | 'vm.SourceTextModule'
    | 'vm.SyntheticModule'
    | 'vm'
    | 'wasi.WASI'
    | 'wasi'
    | 'worker_threads'
    | 'worker_threads.isMainThread'
    | 'worker_threads.parentPort'
    | 'worker_threads.resourceLimits'
    | 'worker_threads.SHARE_ENV'
    | 'worker_threads.threadId'
    | 'worker_threads.workerData'
    | 'worker_threads.getEnvironmentData'
    | 'worker_threads.markAsUntransferable'
    | 'worker_threads.isMarkedAsUntransferable'
    | 'worker_threads.moveMessagePortToContext'
    | 'worker_threads.receiveMessageOnPort'
    | 'worker_threads.setEnvironmentData'
    | 'worker_threads.BroadcastChannel'
    | 'worker_threads.MessageChannel'
    | 'worker_threads.MessagePort'
    | 'worker_threads.Worker'
    | 'zlib.constants'
    | 'zlib.createBrotliCompress'
    | 'zlib.createBrotliDecompress'
    | 'zlib.createDeflate'
    | 'zlib.createDeflateRaw'
    | 'zlib.createGunzip'
    | 'zlib.createGzip'
    | 'zlib.createInflate'
    | 'zlib.createInflateRaw'
    | 'zlib.createUnzip'
    | 'zlib.brotliCompress'
    | 'zlib.brotliCompressSync'
    | 'zlib.brotliDecompress'
    | 'zlib.brotliDecompressSync'
    | 'zlib.deflate'
    | 'zlib.deflateSync'
    | 'zlib.deflateRaw'
    | 'zlib.deflateRawSync'
    | 'zlib.gunzip'
    | 'zlib.gunzipSync'
    | 'zlib.gzip'
    | 'zlib.gzipSync'
    | 'zlib.inflate'
    | 'zlib.inflateSync'
    | 'zlib.inflateRaw'
    | 'zlib.inflateRawSync'
    | 'zlib.unzip'
    | 'zlib.unzipSync'
    | 'zlib.BrotliCompress'
    | 'zlib.BrotliDecompress'
    | 'zlib.Deflate'
    | 'zlib.DeflateRaw'
    | 'zlib.Gunzip'
    | 'zlib.Gzip'
    | 'zlib.Inflate'
    | 'zlib.InflateRaw'
    | 'zlib.Unzip'
    | 'zlib'
  )[];
}

/**
 * Options.
 */
export type NoUnsupportedFeaturesNodeBuiltinsOptions = [
  NoUnsupportedFeaturesNodeBuiltinsOption?,
];

/**
 * Disallow unsupported Node.js built-in APIs on the specified version.
 *
 * @see [no-unsupported-features/node-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md)
 */
export type NoUnsupportedFeaturesNodeBuiltinsRuleConfig =
  RuleConfig<NoUnsupportedFeaturesNodeBuiltinsOptions>;

/**
 * Disallow unsupported Node.js built-in APIs on the specified version.
 *
 * @see [no-unsupported-features/node-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md)
 */
export interface NoUnsupportedFeaturesNodeBuiltinsRule {
  /**
   * Disallow unsupported Node.js built-in APIs on the specified version.
   *
   * @see [no-unsupported-features/node-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md)
   */
  'n/no-unsupported-features/node-builtins': NoUnsupportedFeaturesNodeBuiltinsRuleConfig;
}
