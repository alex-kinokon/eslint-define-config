# eslint-define-config

Fork from v1 of [eslint-types/eslint-define-config](https://github.com/eslint-types/eslint-define-config).

Provide a `defineConfig` function for `.eslintrc.js`, and a `defineFlatConfig` function for `eslint.config.js` files.

> This project is written by a human and only partially automatically generated!  
> Some rules are even enhanced by hand!  
> Unfortunately, this has the disadvantage that not everything is immediately defined. For example, if a rule is not defined, it falls back to a basic definition.  
> However, the advantage is that you get documentation for pretty much everything in the code and usually get a direct link to the respective plugin or eslint rule. The types are also strictly typed.
>
> So if you are missing something like a rule or a plugin that should also be supported or a rule definition is e.g. out of date, feel free to open an issue or PR for it.

# Installation

```bash
yarn add --dev eslint eslint-define-config
pnpm add --save-dev eslint eslint-define-config
```

# Usage

`.eslintrc.js`

```ts
// @ts-check
/** @type {import('eslint-define-config').ESLintConfig} */
const config = defineConfig({
  root: true,
  rules: {
    // rules...
  },
});

module.exports = config;
```
