# 🎬 PelisMax - Guía de Agentes

## Descripción General

Este proyecto es una plataforma de streaming de películas construida con:
- **Frontend:** React + TypeScript + Tailwind CSS + Vite
- **Backend:** Node.js + Express + TypeScript
- **Infraestructura:** XAMPP (Apache)

## Estructura del Proyecto

```
PelisMax/
├── frontend/           # Aplicación React (Vite)
├── backend/            # API Express
├── flujos/             # Documentación de flujos/procesos
└── docker-compose.yml  # Configuración de contenedores
```

## Principios de Arquitectura

El proyecto sigue la metodología **Feature-Based Architecture** con componentes reutilizables:

### Frontend: Feature-Based
- **components/ui/** — Componentes genéricos reutilizables (Logo, Copyright, etc.)
- **components/layout/** — Estructura global (Header, Footer, Layout)
- **features/** — Lógica de dominio por característica (movies/, auth/)
- **pages/** — Páginas que ensamblan features
- **services/** — Llamadas a API y lógica compartida
- **assets/** — Imágenes, fuentes, etc.

### Backend: MVC (En desarrollo)
- **src/routes/** — Definición de endpoints
- **src/controllers/** — Lógica de negocio
- **src/services/** — Servicios reutilizables
- **src/middleware/** — Middlewares personalizados
- **src/config/** — Configuración de la app

## Convenciones de Código

| Elemento | Formato | Ejemplo |
|----------|---------|---------|
| Componentes React | `PascalCase` | `MovieCard`, `HeaderNav` |
| Variables/funciones | `camelCase` | `obtenerPelículas`, `isLoading` |
| Constantes | `UPPER_SNAKE_CASE` | `API_BASE_URL`, `MAX_ITEMS` |
| Carpetas | `kebab-case` | `movie-cards`, `footer-nav` |
| Rutas de API | `/kebab-case` | `/api/movies`, `/api/user-profile` |

## Principios SOLID Aplicados

- **S (Single Responsibility):** Cada componente tiene una única responsabilidad
  - `Logo.tsx` — Solo renderiza el logo
  - `HeaderNav.tsx` — Solo la navegación del header
  - `FooterSocial.tsx` — Solo redes sociales

- **D (Dependency Inversion):** Los componentes no llaman directamente a la API
  - Uso de servicios en `services/`
  - Props para configuración

## Color Principal

```
Rojo PelisMax: #E50914
Contraste: #FFFFFF (blanco)
Fondo: #101010 (negro)
```

## Próximas Tareas

- [ ] Setup de autenticación (JWT)
- [ ] Crear servicio de películas
- [ ] Implementar búsqueda y filtros
- [ ] Componentes de películas (MovieCard, MovieGrid)
- [ ] Sistema de recomendaciones
