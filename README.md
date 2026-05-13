# 🎬 PelisMax

## 1. Proyecto

### Descripción
**PelisMax** es una plataforma web para descubrir, buscar y gestionar tus películas favoritas. Ofrece una experiencia intuitiva donde los usuarios pueden explorar un catálogo extenso de películas, obtener recomendaciones personalizadas y mantener una lista de favoritos.

### Funcionalidades Principales
- 🔍 **Buscador de películas** — Encuentra películas por título
- 🎲 **Recomendador aleatorio** — Descubre películas al azar
- 🎭 **Categorías** — Explora películas por géneros
- 👤 **Perfil de usuario** — Gestiona tu cuenta personal
- ⭐ **Mi lista / Favoritos** — Guarda tus películas preferidas
- 📧 **Email de bienvenida** — Recibe un correo de bienvenida al registrarte

### Identidad Visual
| Elemento | Valor |
|----------|-------|
| **Color Principal** | `#E50914` |
| **Color Secundario** | `#FFFFFF` |
| **Color Fondo** | `#101010` |
| **Tipografía** | Open Sans, sans-serif |

### Convenciones de Código
- **Formato:** `CamelCase` (ej: `MiComponente`, `obtenerDatos`)
- **Variables:** `camelCase` (ej: `miVariable`, `contador`)
- **Constantes:** `UPPER_SNAKE_CASE` (ej: `API_URL`, `MAX_ITEMS`)
- **Directorios:** `kebab-case` (ej: `api-routes`, `ui-components`)

---

## 2. Tecnologías Empleadas

### Frontend
- **Framework:** Vite + React 18
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Gestión de estado:** (Por definir)
- **HTTP Client:** (Por definir)

### Backend
- **Runtime:** Node.js
- **Framework:** Express
- **Lenguaje:** TypeScript
- **Autenticación:** JWT (JSON Web Tokens)
- **Validación:** (Por definir)
- **ORM/Query Builder:** (Por definir)

### Infraestructura & DevOps
- **Servidor Local:** XAMPP (Apache)
- **Base de Datos:** MySQL (Docker)
- **Automatización:** n8n (Docker)
- **Email:** Mailtrap

### APIs Externas
- 🎬 [DevS API Hub — Movies API](https://devsapihub.com/docs/api-movies)

---

## 3. Estructura de Carpetas

```
PelisMax/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                    ← Componentes genéricos reutilizables
│   │   │   │   ├── Logo.tsx
│   │   │   │   └── Copyright.tsx
│   │   │   └── layout/                ← Estructura global de la app
│   │   │       ├── header/
│   │   │       │   ├── HeaderNav.tsx
│   │   │       │   └── HeaderActions.tsx
│   │   │       ├── footer/
│   │   │       │   ├── FooterNav.tsx
│   │   │       │   └── FooterSocial.tsx
│   │   │       ├── Header.tsx
│   │   │       ├── Footer.tsx
│   │   │       └── Layout.tsx
│   │   ├── features/                  ← Lógica de dominio por característica
│   │   │   ├── movies/                ← Características de películas
│   │   │   │   ├── MovieCard.tsx
│   │   │   │   └── MovieGrid.tsx
│   │   │   └── auth/                  ← Características de autenticación
│   │   │       ├── LoginForm.tsx
│   │   │       └── RegisterForm.tsx
│   │   ├── pages/                     ← Páginas que ensamblan features
│   │   │   └── home/
│   │   │       ├── Home.tsx
│   │   │       └── Home.css
│   │   ├── services/                  ← Llamadas a API y lógica compartida
│   │   │   └── movieService.ts
│   │   ├── assets/                    ← Imágenes, fuentes, etc.
│   │   │   ├── imagenes/
│   │   │   └── ...
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── routes/                    ← Definición de endpoints
│   │   ├── controllers/               ← Lógica de negocio
│   │   ├── services/                  ← Servicios reutilizables
│   │   ├── middleware/                ← Middlewares personalizados
│   │   ├── config/                    ← Configuración de la app
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── flujos/                            ← Documentación de procesos
├── agents.md                          ← Guía de arquitectura
├── README.md
└── docker-compose.yml
```

### Explicación de la Estructura

**`components/ui/`** — Componentes sin lógica de negocio, reutilizables en cualquier parte:
- `Logo.tsx` — Logo personalizable por tamaño
- `Copyright.tsx` — Pie de página personalizable

**`components/layout/`** — Estructura fija de la aplicación:
- `Header.tsx` / `Footer.tsx` / `Layout.tsx` — Padres que ensamblan hijos
- `header/` y `footer/` — Componentes específicos del layout

**`features/`** — Cada característica es independiente y autónoma:
- `movies/` — Todo lo relacionado con películas
- `auth/` — Todo lo relacionado con autenticación

**`pages/`** — Páginas que solo ensamblan `features` sin lógica propia

---

## 4. Instalación

Por definir...

