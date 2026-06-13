# VJM Fashion 👗

Aplicación móvil de asistencia en compras para **VJM Fashion**. Desarrollada con **React Native**, **Expo** y **Supabase**.

## 📱 Características

- ✅ Autenticación de usuarios (email/contraseña)
- ✅ Catálogo de productos con búsqueda y filtros
- ✅ Detalles detallados de cada producto
- ✅ Gestión de órdenes de compra
- ✅ Perfil de usuario
- ✅ Integración con Supabase (PostgreSQL + Auth + Storage)

## 🛠️ Tech Stack

- **Mobile**: React Native + Expo
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **State Management**: React Context + Custom Hooks
- **Navigation**: React Navigation
- **UI Components**: React Native Paper

## 📋 Requisitos Previos

- Node.js >= 16
- npm o yarn
- Expo CLI: `npm install -g expo-cli`
- Cuenta en [Supabase](https://supabase.com)
- Android Emulator, iOS Simulator o Expo Go en dispositivo físico

## 🚀 Quick Start

### 1. Clonar el repositorio

```bash
git clone https://github.com/Perciojimenez/VJM-Fashion.git
cd VJM-Fashion
```

### 2. Ejecutar script de instalación

```bash
# En macOS/Linux
bash setup.sh

# En Windows
npm install
cd mobile
cp .env.example .env.local
```

### 3. Configurar Supabase

1. Ve a [Supabase](https://supabase.com) y crea un nuevo proyecto
2. Obtén tu `SUPABASE_URL` y `SUPABASE_ANON_KEY`
3. Actualiza el archivo `mobile/.env.local`:

```env
EXPO_PUBLIC_SUPABASE_URL=tu_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

### 4. Iniciar la aplicación

```bash
cd mobile
npm start
```

Luego presiona:
- `i` para iOS Simulator
- `a` para Android Emulator
- Escanea el código QR con Expo Go (dispositivo físico)

## 📁 Estructura del Proyecto

```
mobile/
├── navigation/          # Sistema de navegación
│   ├── RootNavigator.js
│   ├── AuthStack.js
│   └── AppStack.js
├── screens/             # Pantallas de la aplicación
│   ├── SplashScreen.js
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── CatalogScreen.js
│   ├── ProductDetailScreen.js
│   ├── OrdersScreen.js
│   ├── OrderDetailScreen.js
│   └── ProfileScreen.js
├── components/          # Componentes reutilizables
│   ├── ProductCard.js
│   ├── OrderCard.js
│   ├── LoadingSpinner.js
│   └── ErrorMessage.js
├── services/            # Servicios (API, Supabase)
│   ├── authService.js
│   ├── productService.js
│   └── orderService.js
├── context/             # Context API
│   └── AuthContext.js
├── hooks/               # Custom Hooks
│   ├── useAuth.js
│   ├── useProducts.js
│   └── useOrders.js
├── utils/               # Utilidades
│   ├── supabaseClient.js
│   ├── theme.js
│   └── constants.js
├── App.js              # Punto de entrada
├── app.json            # Configuración Expo
├── package.json        # Dependencias
└── .env.example        # Template de variables
```

## 📱 Pantallas Principales

### 🔐 Autenticación
- **LoginScreen**: Iniciar sesión con email/contraseña
- **RegisterScreen**: Registrarse como nuevo usuario

### 🛍️ Tienda
- **CatalogScreen**: Catálogo de productos con búsqueda y filtros
- **ProductDetailScreen**: Detalles completos del producto

### 📦 Órdenes
- **OrdersScreen**: Lista de órdenes del usuario
- **OrderDetailScreen**: Detalles de una orden específica

### 👤 Usuario
- **ProfileScreen**: Información del perfil y configuración

## 🗄️ Estructura de Base de Datos

Ver documentación completa en [`docs/DATABASE_SCHEMA.md`](./docs/DATABASE_SCHEMA.md)

### Tablas Principales:
- **users**: Perfiles de usuario
- **products**: Catálogo de productos
- **orders**: Órdenes de compra
- **order_items**: Detalles de items en órdenes

## 🔐 Autenticación

La aplicación utiliza **Supabase Auth** para:
- Registro e inicio de sesión
- Gestión de sesiones
- Autenticación persistente
- Recuperación de contraseña

## 🎨 Tema y Estilos

El proyecto utiliza **React Native Paper** con un tema personalizado:
- Color primario: `#6200EE`
- Color secundario: `#03DAC6`
- Colores de estado: éxito, error, advertencia

Ver configuración en [`mobile/utils/theme.js`](./mobile/utils/theme.js)

## 📦 Dependencias Principales

```json
{
  "expo": "^50.0.0",
  "react-native": "0.73.6",
  "react": "^18.2.0",
  "@react-navigation/native": "^6.1.10",
  "@react-navigation/bottom-tabs": "^6.5.11",
  "@supabase/supabase-js": "^2.38.0",
  "react-native-paper": "^5.11.1"
}
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Con coverage
npm test -- --coverage
```

## 📝 Convenciones de Código

- **Componentes**: PascalCase (`ProductCard.js`)
- **Variables/Funciones**: camelCase (`handleAddToCart`)
- **Archivos**: PascalCase para componentes, camelCase para utilidades
- **Componentes**: Funcionales con Hooks (no clases)
- **Estilos**: StyleSheet de React Native

## 🚀 Deployment

### Expo Go (Desarrollo)
```bash
npm start
```

### EAS Build (Producción)
```bash
# Instalar EAS CLI
npm install -g eas-cli

# Build para iOS
eas build --platform ios

# Build para Android
eas build --platform android
```

## 🤝 Contribuir

1. Crea una rama: `git checkout -b feature/tu-feature`
2. Haz commits descriptivos: `git commit -m "feat: descripción"`
3. Push a la rama: `git push origin feature/tu-feature`
4. Abre un Pull Request

## 📄 Licencia

MIT License - Ver [`LICENSE`](./LICENSE)

## 🆘 Soporte

Para reportar problemas o sugerencias, abre un issue en GitHub.

## 👥 Contacto

- **Proyecto**: VJM Fashion
- **Desarrollador**: Percio Jimenez
- **GitHub**: [@Perciojimenez](https://github.com/Perciojimenez)

---

**Última actualización**: Junio 2026 | **Versión**: 1.0.0