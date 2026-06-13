# Esquema de Base de Datos - VJM Fashion

## Tablas Principales

### users
- id (UUID)
- email (TEXT, UNIQUE)
- full_name (TEXT)
- avatar_url (TEXT)
- role (VARCHAR: 'admin', 'customer', 'vendor')
- created_at, updated_at

### products
- id (UUID)
- name, description (TEXT)
- price (NUMERIC)
- image_url (TEXT)
- category (VARCHAR)
- stock (INTEGER)
- vendor_id (FK → users)
- created_at, updated_at

### orders
- id (UUID)
- user_id (FK → users)
- status (VARCHAR: 'pending', 'confirmed', 'shipped', 'delivered', 'cancelled')
- total_amount (NUMERIC)
- created_at, updated_at

### order_items
- id (UUID)
- order_id (FK → orders)
- product_id (FK → products)
- quantity, unit_price (NUMERIC)

## Row Level Security

Implementar RLS policies para:
- Usuarios: solo pueden ver/editar su perfil
- Productos: cualquiera puede ver, solo vendors pueden crear/editar
- Órdenes: usuarios solo ven sus propias órdenes

Ver documentación completa en Supabase Dashboard