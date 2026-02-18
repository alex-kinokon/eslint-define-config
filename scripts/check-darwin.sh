#!/bin/bash

if [[ "$OSTYPE" != "darwin"* ]]; then
  echo "Error: This script requires macOS platform. Current platform: $OSTYPE" >&2
  exit 1
fi
