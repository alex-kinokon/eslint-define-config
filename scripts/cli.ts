#!/usr/bin/env bun
import { run } from './index';

const selectedPlugins: string[] | undefined = process.argv
  .slice(2)
  .find((arg) => arg.startsWith('--plugins='))
  ?.replace('--plugins=', '')
  .split(',');

run({ plugins: selectedPlugins }).catch((err) => console.error(err));
