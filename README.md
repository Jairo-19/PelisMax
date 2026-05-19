# 🎬 PelisMax

## 1. Proyecto

### Descripción
**PelisMax** es una plataforma web para descubrir, buscar y gestionar tus películas favoritas. Ofrece una experiencia intuitiva donde los usuarios pueden explorar un catálogo extenso de películas, obtener recomendaciones personalizadas y mantener una lista de favoritos.

### Funcionalidades Principales

#### ✅ Implementadas
- 🔍 **Buscador de películas** — Encuentra películas por título (case-insensitive, busca en cualquier parte del título)
- 🎭 **Filtrado por categoría** — Explora películas por géneros con dropdown dinámico
- 🎬 **Catálogo paginado** — La sección de películas carga 16 películas por petición; al hacer scroll al final de la página se solicitan automáticamente las siguientes 16 al backend (infinite scroll)
- ⭐ **Mis Películas Favoritas** — Guarda/elimina películas favoritas (persistente en BD, vinculado a usuario)
- 🎫 **Bookmark Button** — Marcador interactivo para añadir/quitar favoritas
- 👤 **Autenticación JWT** — Registro e inicio de sesión seguro con tokens
- 🔐 **Perfil de usuario** — Vista de perfil con información del usuario

#### 🔄 En Progreso
- 📊 **Modal de película** — Vista detallada de películas
- 👤 **Perfil de usuario** — Edición de datos personales

#### ❌ Por Implementar
- 🎲 **Recomendador aleatorio** — Descubre películas al azar
- 📧 **Email de bienvenida** — Recibe un correo de bienvenida al registrarte
- 💬 **Comentarios y valoraciones** — Comenta y puntúa películas
- 🔔 **Notificaciones** — Alertas personalizadas

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
- **Gestión de estado:** React Hooks (`useState`, `useEffect`, `useRef`)
- **HTTP Client:** Fetch API

### Backend
- **Runtime:** Node.js
- **Framework:** Express
- **Lenguaje:** TypeScript
- **Autenticación:** JWT (JSON Web Tokens)
- **Hashing de contraseñas:** bcryptjs
- **Base de datos:** MySQL 2/Promise (Connection Pool)

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
│   │   │   │   ├── SearchComponent.tsx
│   │   │   │   └── FilterComponents.tsx
│   │   │   └── layout/                ← Estructura global de la app
│   │   │       ├── header/
│   │   │       │   ├── HeaderNav.tsx
│   │   │       │   ├── HeaderActions.tsx
│   │   │       │   └── UserDropdown.tsx
│   │   │       ├── footer/
│   │   │       │   ├── FooterNav.tsx
│   │   │       │   ├── FooterCopyright.tsx
│   │   │       │   └── FooterSocial.tsx
│   │   │       ├── Header.tsx
│   │   │       ├── Footer.tsx
│   │   │       └── Layout.tsx
│   │   ├── features/                  ← Lógica de dominio por característica
│   │   │   ├── movies/                ← Características de películas
│   │   │   │   ├── MovieGrid.tsx
│   │   │   │   ├── MovieModal.tsx
│   │   │   │   ├── MovieCarousel.tsx
│   │   │   │   ├── BookmarkButton.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── TopMovieCard.tsx
│   │   │   │   ├── FeaturesSection.tsx
│   │   │   │   ├── TopByGenre.tsx
│   │   │   │   ├── FeatureCard.tsx
│   │   │   │   └── *.css (estilos)
│   │   │   ├── auth/                  ← Características de autenticación
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   ├── AuthImagePanel.tsx
│   │   │   │   └── UserDropdown.tsx
│   │   │   ├── favorites/             ← Características de favoritas
│   │   │   │   ├── FavoritesHero.tsx
│   │   │   │   ├── FavoritesGrid.tsx
│   │   │   │   └── FavoritesHero.css
│   │   │   └── profile/               ← Características de perfil
│   │   ├── pages/                     ← Páginas que ensamblan features
│   │   │   ├── home/
│   │   │   │   └── Home.tsx
│   │   │   ├── login/
│   │   │   │   └── Login.tsx
│   │   │   ├── register/
│   │   │   │   └── Register.tsx
│   │   │   ├── profile/
│   │   │   │   └── Profile.tsx
│   │   │   ├── movies/
│   │   │   │   └── Movies.tsx
│   │   │   ├── favorites/
│   │   │   │   └── Favorites.tsx
│   │   │   └── transition/
│   │   │       ├── Transition.tsx
│   │   │       └── Transition.css
│   │   ├── services/                  ← Llamadas a API y lógica compartida
│   │   │   ├── authService.ts
│   │   │   ├── peliculasService.ts
│   │   │   └── favoritasService.ts
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
│   │   ├── application/               ← Casos de uso (lógica de negocio)
│   │   │   └── use-cases/
│   │   │       ├── CasoDeUsoAuth.ts
│   │   │       ├── CasoDeUsoPeliculas.ts
│   │   │       └── CasoDeUsoFavoritas.ts
│   │   ├── domain/                    ← Entidades y puertos (contratos)
│   │   │   ├── entities/              ← Modelos de dominio
│   │   │   │   ├── usuario.ts
│   │   │   │   ├── peliculas.ts
│   │   │   │   └── favorita.ts
│   │   │   ├── exceptions/            ← Excepciones de dominio
│   │   │   │   ├── UsuarioException.ts
│   │   │   │   └── PeliculaException.ts
│   │   │   └── ports/                 ← Interfaces (contratos)
│   │   │       ├── in/                ← Puertos de entrada (casos de uso)
│   │   │       │   ├── ICasoDeUsoAuth.ts
│   │   │       │   ├── ICasoDeUsoPeliculas.ts
│   │   │       │   └── ICasoDeUsoFavoritas.ts
│   │   │       └── out/               ← Puertos de salida (repositorios)
│   │   │           ├── IRepositorioUsuarios.ts
│   │   │           ├── IRepositorioPeliculas.ts
│   │   │           └── IRepositorioFavoritas.ts
│   │   └── infrastructure/            ← Adaptadores (implementaciones concretas)
│   │       ├── adapters/
│   │       │   ├── in/                ← Adaptadores de entrada (HTTP)
│   │       │   │   └── http/
│   │       │   │       ├── controllers/← Manejadores de peticiones
│   │       │   │       │   ├── ControladorAuth.ts
│   │       │   │       │   ├── ControladorPeliculas.ts
│   │       │   │       │   └── ControladorFavoritas.ts
│   │       │   │       ├── routes/    ← Definición de rutas
│   │       │   │       │   ├── authRoutes.ts
│   │       │   │       │   ├── peliculasRoutes.ts
│   │       │   │       │   └── favoritasRoutes.ts
│   │       │   │       └── middleware/← Middleware personalizado
│   │       │   │           └── authMiddleware.ts
│   │       │   └── out/               ← Adaptadores de salida
│   │       │       ├── persistence/   ← Repositorios (MySQL)
│   │       │       │   ├── RepositorioUsuarios.ts
│   │       │       │   ├── RepositorioPeliculas.ts
│   │       │       │   └── RepositorioFavoritas.ts
│   │       │       └── external/      ← APIs externas
│   │       │           └── ServicioAPIExterna.ts
│   │       └── config/                ← Configuración del servidor
│   │           └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── flujos/                            ← Documentación de procesos
├── agents.md                          ← Guía de arquitectura
├── README.md
└── docker-compose.yml
```

### Explicación de la Estructura

**`components/ui/`** — Componentes sin lógica de negocio, reutilizables en cualquier parte:
- `Logo.tsx` — Logo con tamaño personalizable
- `SearchComponent.tsx` — Buscador de películas por título
- `FilterComponents.tsx` — Dropdown para filtrar por categoría

**`components/layout/`** — Estructura fija de la aplicación:
- `Header.tsx` / `Footer.tsx` / `Layout.tsx` — Componentes padres que ensamblan hijos
- `header/` y `footer/` — Componentes específicos del layout
- `UserDropdown.tsx` — Menú desplegable del usuario autenticado

**`features/`** — Cada característica es independiente y autónoma:
- `movies/` — Todo lo relacionado con películas (grid, modal, carrusel, etc.)
- `auth/` — Todo lo relacionado con autenticación (login, registro, sesión)
- `favorites/` — Todo lo relacionado con películas favoritas (hero, grid)
- `profile/` — Gestión del perfil del usuario

**`pages/`** — Páginas que solo ensamblan `features` sin lógica propia:
- `home/` — Landing page principal
- `login/` — Página de autenticación
- `register/` — Página de registro
- `movies/` — Catálogo de películas con búsqueda y filtros
- `favorites/` — Mis películas favoritas
- `profile/` — Perfil del usuario

**`services/`** — Servicios que hacen llamadas a la API:
- `authService.ts` — Registro, login, recuperación de usuario
- `peliculasService.ts` — Obtener películas paginadas
- `favoritasService.ts` — Agregar, eliminar, obtener favoritas

---

## 4. Instalación y Configuración

### Prerrequisitos

- **Node.js** (v18+)
- **Docker** (para MySQL y n8n)
- **Git**
- **Visual Studio Code** (recomendado)

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/tu-repo/PelisMax.git
cd PelisMax
```

### Paso 2: Configurar Docker (Base de datos)

Asegúrate de que Docker Desktop esté ejecutándose, luego inicia los contenedores:

```bash
docker-compose up -d
```

Esto levantará:
- **MySQL** en puerto `3310` (usuario: `root`, sin contraseña por defecto)
- **n8n** en puerto `5678` (opcional, para automatización)

Verifica que MySQL esté corriendo:
```bash
docker ps
```

### Paso 3: Crear la tabla `favoritos` en MySQL

Abre **phpMyAdmin** en [http://localhost:8080](http://localhost:8080) y ejecuta:

```sql
CREATE TABLE IF NOT EXISTS favoritos (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id  INT NOT NULL,
    pelicula_id INT NOT NULL,
    creado_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_favorito (usuario_id, pelicula_id),
    FOREIGN KEY (usuario_id)  REFERENCES usuarios(id)  ON DELETE CASCADE,
    FOREIGN KEY (pelicula_id) REFERENCES peliculas(id) ON DELETE CASCADE
);
```

### Paso 4: Configurar Backend

```bash
cd backend
npm install
```

Crea un archivo `.env` en la raíz del `backend/`:

```env
# Base de datos
DB_HOST=localhost
DB_PORT=3310
DB_USER=root
DB_PASSWORD=
DB_NAME=pelismax

# JWT
JWT_SECRET=tu_clave_secreta_aqui
JWT_EXPIRES_IN=7d

# Frontend
FRONTEND_URL=http://localhost:5173

# Puerto del servidor
PORT=3000
```

Inicia el backend:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

### Paso 5: Configurar Frontend

```bash
cd ../frontend
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`

### Paso 6: Importar películas desde API externa (Opcional)

Ejecuta en postman o curl:

```bash
POST http://localhost:3000/api/peliculas/importar
```

---

## 5. Variables de Entorno

### Backend (`.env`)

```env
# MySQL (Docker)
DB_HOST=localhost
DB_PORT=3310
DB_USER=root
DB_PASSWORD=
DB_NAME=pelismax

# JWT
JWT_SECRET=tu_clave_secreta_aqui_minimo_32_caracteres
JWT_EXPIRES_IN=7d

# Frontend
FRONTEND_URL=http://localhost:5173

# Servidor
PORT=3000
```

### Frontend (`.env.local`)

```env
VITE_API_URL=http://localhost:3000/api
```

---

## 6. Arquitectura

### Backend — Hexagonal (Puertos y Adaptadores)

La aplicación backend sigue la **arquitectura hexagonal** (tambien llamada puertos y adaptadores):

```
Domain (Dominio)
  ├── entities/       — Modelos de negocio
  ├── exceptions/     — Excepciones de dominio
  └── ports/          — Interfaces (contratos)

Application (Aplicación)
  └── use-cases/      — Lógica de negocio

Infrastructure (Infraestructura)
  └── adapters/       — Implementaciones concretas
      ├── in/         — HTTP Controllers
      └── out/        — Repositorios, APIs externas
```

**Ventajas:**
- ✅ Desacoplado de frameworks externos
- ✅ Fácil de testear
- ✅ Flexible para cambiar BD, API, etc.
- ✅ Código limpio y mantenible

### Frontend — Feature-Based Architecture

Cada característica (feature) es independiente y autónoma:

- `features/auth/` — Todo sobre autenticación
- `features/movies/` — Todo sobre películas
- `features/favorites/` — Todo sobre favoritas
- `features/profile/` — Todo sobre perfil

---

## 7. Rutas API

### Autenticación (`/api/auth`)
- `POST /registro` — Crear nueva cuenta
- `POST /login` — Iniciar sesión

### Películas (`/api/peliculas`)
- `GET /` — Listar todas (o paginadas con `?pagina=1&limite=16`)
- `GET /:id` — Obtener película por ID
- `POST /importar` — Importar desde API externa

### Favoritas (`/api/favoritas`) — ⚠️ Requiere autenticación
- `GET /` — Obtener mis favoritas
- `POST /:peliculaId` — Añadir a favoritas
- `DELETE /:peliculaId` — Quitar de favoritas

---

## 8. Scripts Útiles

### Frontend

```bash
npm run dev       # Iniciar desarrollo (Vite)
npm run build     # Construir para producción
npm run preview   # Previsualizar build
npm run lint      # Ejecutar ESLint
```

### Backend

```bash
npm run dev       # Iniciar en modo desarrollo (ts-node)
npm run build     # Compilar TypeScript a JavaScript
npm run start     # Ejecutar código compilado
```

---

## 9. Contacto y Contribuciones

**PelisMax** es un proyecto educativo. Para reportar bugs o sugerir mejoras, crea un issue en el repositorio.

