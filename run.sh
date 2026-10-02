#!/bin/bash

# Dashboard Web Service Runner
# This script starts the Nuxt.js dashboard service

echo "Starting Nuxt development server..."
echo "===================================="

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "Error: pnpm is not installed. Please install pnpm first."
    echo "Run: npm install -g pnpm"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    pnpm install
fi

# Start the development server
echo "Dev URL: http://127.0.0.1:3004 (override with NUXT_PORT)"
echo "Default Nuxt dev port remains 3004 unless NUXT_PORT overrides it"
echo "Press Ctrl+C to stop the server"
echo ""

pnpm dev