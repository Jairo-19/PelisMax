# PelisMax — Backend API

API REST construida con **Node.js + Express + TypeScript** siguiendo arquitectura hexagonal.

## Requisitos

- Node.js 18+
- Docker (para MySQL)

## Arrancar

```bash
# 1. Levantar base de datos
docker-compose up -d mysql

# 2. Instalar dependencias
npm install

# 3. Arrancar en desarrollo
npm run dev
```

El servidor arranca en `http://localhost:3000`

## Variables de entorno

Archivo `.env` en la raíz del backend:

```env
DB_HOST=127.0.0.1
DB_PORT=3310
DB_USER=root
DB_PASSWORD=root
DB_NAME=pelismax
PORT=3000
FRONTEND_URL=http://localhost:5173
JWT_SECRET=pelismax_super_secret_key_2026
JWT_EXPIRES_IN=7d
```

## Dependencias principales

| Paquete | Versión | Uso |
|---------|---------|-----|
| **express** | ^5.2.1 | Framework web para crear la API REST |
| **jsonwebtoken** | ^9.0.3 | Genera y verifica JWT para autenticación de usuarios |
| **bcryptjs** | ^3.0.3 | Hashea contraseñas de forma segura con salt |
| **mysql2** | ^3.22.3 | Driver de MySQL para conectar a la base de datos |
| **cors** | ^2.8.6 | Habilita CORS para permitir requests desde el frontend (`http://localhost:5173`) |
| **dotenv** | ^17.4.2 | Carga variables de entorno desde el archivo `.env` |

## Endpoints

### General

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/health` | Comprueba que el servidor está activo |

### Autenticación

| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/auth/registro` | Registra un nuevo usuario (nombre, email, contraseña) |
| `POST` | `/api/auth/login` | Inicia sesión y devuelve JWT + datos del usuario |

### Películas

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/peliculas` | Obtiene todas las películas |
| `GET` | `/api/peliculas/:id` | Obtiene una película por ID |
| `POST` | `/api/peliculas` | Crea una película manualmente |
| `POST` | `/api/peliculas/importar` | Importa películas desde la API externa |
| `PUT` | `/api/peliculas/:id` | Actualiza una película existente |
| `DELETE` | `/api/peliculas/:id` | Elimina una película |

### Ejemplos de body

**POST /api/auth/registro** — Registrar nuevo usuario:
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "MiContraseña123"
}
```

**Respuesta 201:**
```json
{
  "mensaje": "Usuario registrado correctamente",
  "usuario": {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "creadoAt": "2026-05-15T10:30:00.000Z"
  }
}
```

**POST /api/auth/login** — Iniciar sesión:
```json
{
  "email": "juan@example.com",
  "password": "MiContraseña123"
}
```

**Respuesta 200:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "creadoAt": "2026-05-15T10:30:00.000Z"
  }
}
```

**POST /api/peliculas** — Crear película manual:
```json
{
  "titulo": "Inception",
  "descripcion": "Un ladrón que roba secretos a través de los sueños.",
  "imagen": "https://devsapihub.com/img-movies/inception.jpg",
  "anio": 2010,
  "estrellas": 4.8,
  "id_externo": "ext-001"
}
```

**PUT /api/peliculas/:id** — Actualizar película:
```json
{
  "titulo": "Inception Editada",
  "descripcion": "Descripción actualizada.",
  "imagen": "https://devsapihub.com/img-movies/inception.jpg",
  "anio": 2010,
  "estrellas": 5.0,
  "id_externo": "ext-001"
}
```

### Códigos de respuesta

| Código | Significado |
|--------|-------------|
| `200` | OK |
| `201` | Creado correctamente |
| `400` | Error de validación (ej: estrellas fuera de rango 0-5, campos requeridos faltando) |
| `401` | No autorizado / Credenciales inválidas |
| `404` | Recurso no encontrado |
| `409` | Conflicto (ej: email ya registrado) |
| `500` | Error interno del servidor |

## API Externa

Películas importadas desde [devsapihub.com/api-movies](https://devsapihub.com/docs/api-movies) — sin clave, gratuita.
