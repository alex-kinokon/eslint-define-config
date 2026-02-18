#!/bin/bash

if [[ "$OSTYPE" != "linux-gnu"* ]]; then
  echo "Error: This script requires Linux platform. Current platform: $OSTYPE" >&2
  exit 1
fi
