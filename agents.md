# 🤖 PelisMax — Agentes y Directrices

## Contexto del Proyecto

**PelisMax** es una plataforma web para descubrir, buscar y gestionar películas favoritas.
Monorepo con frontend y backend separados, conectados mediante una API REST.

---

## Identidad Visual (OBLIGATORIO respetar siempre)

| Elemento | Valor |
|----------|-------|
| Color principal | `#E50914` |
| Color secundario | `#FFFFFF` |
| Color fondo | `#101010` |
| Tipografía | `"Open Sans", sans-serif` |

Cualquier componente o página generada **debe respetar** estos colores y tipografía.
No usar fuentes ni paletas alternativas aunque las skills sugieran creatividad libre.

---

## Convenciones de Código

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| Componentes / Clases | `PascalCase` | `MovieCard`, `UserService` |
| Variables / Funciones | `camelCase` | `fetchMovies`, `userId` |
| Constantes | `UPPER_SNAKE_CASE` | `API_URL`, `JWT_SECRET` |
| Directorios | `kebab-case` | `api-routes`, `ui-components` |
| Archivos de componente | `PascalCase.tsx` | `MovieCard.tsx` |
| Archivos de servicio/util | `camelCase.ts` | `movieService.ts` |

---

## Stack Tecnológico

### Frontend (`/frontend`)
- **Vite + React 18 + TypeScript**
- **Tailwind CSS** para estilos
- **React Router DOM** para navegación
- **Axios** para llamadas a la API

### Backend (`/backend`)
- **Node.js + Express + TypeScript**
- **Arquitectura Hexagonal** (Ports & Adapters)
- **JWT** para autenticación
- **MySQL** con XAMPP local
- **n8n + Mailtrap** para email de bienvenida

### API Externa
- [DevS API Hub — Movies](https://devsapihub.com/docs/api-movies)

---

## Arquitectura del Backend — Hexagonal

```
src/
├── domain/           → Entidades y reglas de negocio puras (sin frameworks)
├── application/      → Casos de uso + interfaces de puertos
│   ├── ports/
│   │   ├── inbound/  → Contratos de entrada (ICrearUsuario, IBuscarPelicula...)
│   │   └── outbound/ → Contratos de salida (IUsuarioRepository, IMovieGateway...)
│   └── use-cases/    → Implementación de casos de uso
├── infrastructure/   → Adaptadores concretos
│   ├── http/         → Controladores Express (adapters de entrada)
│   ├── db/           → Repositorios MySQL (adapters de salida)
│   └── external/     → Llamadas a APIs externas
├── config/           → Variables de entorno, conexión BD
├── middleware/       → Auth, validación, errores
└── index.ts          → Punto de entrada + composition root
```

**Regla de dependencias:** Los adaptadores dependen de la aplicación, nunca al revés.

---

## Funcionalidades del Proyecto

1. **Buscador de películas** — Búsqueda por título via API externa
2. **Recomendador aleatorio** — Película aleatoria
3. **Categorías** — Listado por género
4. **Perfil de usuario** — Registro, login con JWT
5. **Mi lista / Favoritos** — CRUD en MySQL
6. **Email de bienvenida** — Automatizado con n8n + Mailtrap al registrarse

---

## Ramas Git

| Rama | Propósito |
|------|-----------|
| `main` | Producción |
| `dev` | Desarrollo |

**Flujo:** `dev` → PR → `main`

---

## Skills Disponibles

### Frontend (`/frontend/.agents/skills/`)
| Skill | Cuándo usar |
|-------|-------------|
| `react-components` | Crear componentes React modulares |
| `frontend-design` | Diseño visual de páginas/componentes (**respetar siempre la identidad visual del proyecto**) |

### Backend (`/backend/.agents/skills/`)
| Skill | Cuándo usar |
|-------|-------------|
| `hexagonal-architecture` | Diseñar o implementar cualquier feature del backend |
| `nodejs-best-practices` | Decisiones de arquitectura, async, seguridad |

---

## Reglas para el Agente

1. **Nunca modificar `main` directamente** — siempre trabajar en `dev` o ramas `feature/*`
2. **Respetar la arquitectura hexagonal** en todo el backend — usar la skill correspondiente
3. **Respetar la identidad visual** — `#E50914`, `#101010`, `#FFFFFF`, Open Sans
4. **No añadir dependencias** sin justificación — consultar antes si no está en el stack definido
5. **Variables de entorno** — nunca hardcodear valores, siempre usar `.env`
6. **Un commit por funcionalidad** — no mezclar cambios de frontend y backend en el mismo commit
