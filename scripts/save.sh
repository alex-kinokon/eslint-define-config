#!/bin/bash

FILE="./src/rules/$1.d.ts"

# Check if the file is staged
if ! git diff --cached --name-only | grep -q "^src/rules/$1\.d\.ts$"; then
    echo "Error: $FILE is not staged."
    exit 1
fi

# Check if the file has modifications beyond what's staged
if git diff --quiet "$FILE"; then
    echo "Error: $FILE has no unstaged changes."
    exit 1
fi

git diff "$FILE" > "./scripts/diffs/$1.d.ts.diff"
