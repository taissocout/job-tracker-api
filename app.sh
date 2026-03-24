#!/bin/bash

echo "🔧 Corrigindo imports internos para ESM (.js) e preparando projeto..."

# 1️⃣ Ajusta tsconfig.json para ESNext
cat > tsconfig.json <<EOF
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "types": ["node", "jest"]
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
EOF
echo "✅ tsconfig.json atualizado"

# 2️⃣ Atualiza package.json dev script
jq '.scripts.dev="ts-node-dev --respawn --transpile-only --loader ts-node/esm src/server.ts"' package.json > package.tmp.json && mv package.tmp.json package.json
echo "✅ package.json dev script atualizado"

# 3️⃣ Ajusta todos os imports internos para terminar com .js
# Apenas arquivos .ts dentro de src/
find src -type f -name "*.ts" | while read file; do
  sed -i -E 's#(from "./.*)(\.ts)"#\1.js"#g' "$file"
  sed -i -E 's#(from '\''./.*)(\.ts)'\''#\1.js'\''#g' "$file"
done
echo "✅ Imports internos ajustados para .js"

# 4️⃣ Cria declaration para uuid (caso ainda não exista)
mkdir -p src/@types
if [ ! -f src/@types/uuid.d.ts ]; then
  echo "declare module 'uuid';" > src/@types/uuid.d.ts
  echo "✅ Declaration para uuid criada"
fi

# 5️⃣ Instala dependências e limpa node_modules
rm -rf node_modules package-lock.json
npm install
echo "✅ Dependências reinstaladas"

echo "🎉 Projeto pronto para ESM. Use: npm run dev"
