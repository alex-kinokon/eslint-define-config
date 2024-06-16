#!/bin/bash
git diff "./src/rules/$1.d.ts" > "./scripts/diffs/$1.d.ts.diff"