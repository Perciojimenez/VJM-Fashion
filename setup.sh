#!/bin/bash
# Script de instalación y setup de VJM Fashion

echo "🚀 Iniciando setup de VJM Fashion..."

# Ir a la carpeta mobile
cd mobile

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Crear archivo .env.local
echo "⚙️ Configurando variables de entorno..."
if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "✅ Archivo .env.local creado. Por favor, actualiza tus credenciales de Supabase."
else
  echo "ℹ️ .env.local ya existe"
fi

echo ""
echo "✨ Setup completado!"
echo ""
echo "📝 Próximos pasos:"
echo "1. Actualiza .env.local con tus credenciales de Supabase"
echo "2. Ejecuta: npm start (o expo start)"
echo "3. Presiona 'i' para iOS o 'a' para Android"
echo ""
echo "🎉 ¡Listo para desarrollar!"