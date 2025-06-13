import type { RulesObject } from '../rule-config';

/**
 * All Security rules.
 */
export interface SecurityRules {
  /**
   * Detects potentially unsafe regular expressions, which may take a very long time to run, blocking the event loop.
   * @see [detect-unsafe-regex](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-unsafe-regex.md)
   */
  'security/detect-unsafe-regex': null;

  /**
   * Detects "RegExp(variable)", which might allow an attacker to DOS your server with a long-running regular expression.
   * @see [detect-non-literal-regexp](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-non-literal-regexp.md)
   */
  'security/detect-non-literal-regexp': null;

  /**
   * Detects "require(variable)", which might allow an attacker to load and run arbitrary code, or access arbitrary files on disk.
   * @see [detect-non-literal-require](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-non-literal-require.md)
   */
  'security/detect-non-literal-require': null;

  /**
   * Detects variable in filename argument of "fs" calls, which might allow an attacker to access anything on your system.
   * @see [detect-non-literal-fs-filename](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-non-literal-fs-filename.md)
   */
  'security/detect-non-literal-fs-filename': null;

  /**
   * Detects "eval(variable)" which can allow an attacker to run arbitrary code inside your process.
   * @see [detect-eval-with-expression](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-eval-with-expression.md)
   */
  'security/detect-eval-with-expression': null;

  /**
   * Detects if "pseudoRandomBytes()" is in use, which might not give you the randomness you need and expect.
   * @see [detect-pseudoRandomBytes](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-pseudoRandomBytes.md)
   */
  'security/detect-pseudoRandomBytes': null;

  /**
   * Detects insecure comparisons (`==`, `!=`, `!==` and `===`), which check input sequentially.
   * @see [detect-possible-timing-attacks](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-possible-timing-attacks.md)
   */
  'security/detect-possible-timing-attacks': null;

  /**
   * Detects Express "csrf" middleware setup before "method-override" middleware.
   * @see [detect-no-csrf-before-method-override](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-no-csrf-before-method-override.md)
   */
  'security/detect-no-csrf-before-method-override': null;

  /**
   * Detects calls to "buffer" with "noAssert" flag set.
   * @see [detect-buffer-noassert](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-buffer-noassert.md)
   */
  'security/detect-buffer-noassert': null;

  /**
   * Detects instances of "child_process" & non-literal "exec()" calls.
   * @see [detect-child-process](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-child-process.md)
   */
  'security/detect-child-process': null;

  /**
   * Detects "object.escapeMarkup = false", which can be used with some template engines to disable escaping of HTML entities.
   * @see [detect-disable-mustache-escape](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-disable-mustache-escape.md)
   */
  'security/detect-disable-mustache-escape': null;

  /**
   * Detects "variable[key]" as a left- or right-hand assignment operand.
   * @see [detect-object-injection](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-object-injection.md)
   */
  'security/detect-object-injection': null;

  /**
   * Detects instances of new Buffer(argument) where argument is any non-literal value.
   * @see [detect-new-buffer](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-new-buffer.md)
   */
  'security/detect-new-buffer': null;

  /**
   * Detects trojan source attacks that employ unicode bidi attacks to inject malicious code.
   * @see [detect-bidi-characters](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-bidi-characters.md)
   */
  'security/detect-bidi-characters': null;
}

export type SecurityRulesObject = RulesObject<SecurityRules>;
