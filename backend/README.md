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
```

## Endpoints

### General

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/health` | Comprueba que el servidor está activo |

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
| `400` | Error de validación (ej: estrellas fuera de rango 0-5) |
| `404` | Película no encontrada |
| `500` | Error interno del servidor |

## API Externa

Películas importadas desde [devsapihub.com/api-movies](https://devsapihub.com/docs/api-movies) — sin clave, gratuita.
