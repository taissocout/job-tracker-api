#!/bin/bash

echo "🚀 Starting Quality Pipeline..."

echo "📦 Installing dependencies (if needed)..."
npm install

echo "🎨 Formatting code (Prettier)..."
npm run format

echo "🔍 Fixing lint issues (ESLint)..."
npm run lint:fix

echo "🏗️ Building project (TypeScript)..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Fix TypeScript errors."
  exit 1
fi

echo "🧪 Running tests..."
npm run test

if [ $? -ne 0 ]; then
  echo "❌ Tests failed."
  exit 1
fi

echo "✅ All checks passed. Code is clean."