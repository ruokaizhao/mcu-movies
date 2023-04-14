#!/usr/bin/env bash
# exit on error
set -o errexit

# Build commands for front end to create the production build
npm install && npm run build