# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `@aet/eslint-define-config`, a TypeScript library that generates type definitions for various ESLint plugins and provides type-safe configuration helpers for ESLint. It's a fork of v1 of eslint-types/eslint-define-config, offering `defineConfig` for `eslint.config.js` files.

## Key Development Commands

- `pnpm run build` - Builds the project to `src` folder by running CLI script and applying diffs
- `pnpm run cli` - Generates TypeScript definitions from ESLint plugins using Node.js with security permissions
- `pnpm run adjust` - Applies patch files from `scripts/diffs/` directory after generation
- `pnpm run format` - Formats code using Prettier with caching
- `pnpm run save` - Runs the save script (likely for committing changes)
- `pnpm run do` - Bumps version, publishes to npm, and then unpublishes

## Architecture

### Code Generation System

The project uses a sophisticated code generation system centered around `scripts/cli.ts` and `scripts/index.ts`:

- **Plugin Registry** (`scripts/registry.ts`): Defines all ESLint plugins to generate types for
- **Rule Generation** (`scripts/index.ts`): Core logic that:
  - Loads ESLint plugins dynamically
  - Extracts rule schemas and metadata
  - Generates TypeScript definitions using `json-schema-to-typescript`
  - Creates strongly-typed interfaces for each plugin's rules
- **Text Processing** (`scripts/text.ts`): Utilities for formatting and manipulating generated code
- **Extends Collector** (`scripts/extends.ts`): Handles ESLint configuration inheritance

### Output Structure

Generated files are organized in `src/`:

- `src/rules/` - TypeScript definitions for each plugin's rules (e.g., `eslint.d.ts`, `react.d.ts`)
- `src/config/` - Configuration-related types (extends, overrides, plugin settings)
- `src/flat-config/` - Types for the new ESLint flat config format
- `src/index.d.ts` - Main entry point re-exporting all types

### Patch System

The project includes a patch system for customizing generated types:

- `scripts/diffs/` - Contains `.diff` files applied after generation
- `patches/` - PNPM patches for fixing upstream dependencies
- The `adjust` script applies all diffs to fine-tune generated output

## Development Workflow

1. **Modify Plugin Registry**: Add/remove plugins in `scripts/registry.ts`
2. **Run Generation**: Use `pnpm run cli` to generate new type definitions
3. **Apply Patches**: Run `pnpm run adjust` to apply custom modifications
4. **Format**: Use `pnpm run format` to ensure consistent formatting
5. **Build**: Use `pnpm run build` for the complete process

## Technical Notes

- Uses ESNext modules with bundler resolution (TypeScript 5.8+)
- Requires Node.js >=18.0.0 and npm >=9.0.0
- Heavy use of nolyfill overrides to avoid polyfills
- Code generation runs with restricted Node.js permissions for security
- The project is partially hand-written and partially generated, with manual enhancements for better types and documentation

## Important Files

- `scripts/index.ts` - Core type generation logic
- `scripts/registry.ts` - Plugin configuration registry
- `scripts/cli.ts` - Entry point for generation process
- `tsconfig.json` - TypeScript configuration for the project
- Package patches in `patches/` for fixing upstream issues
