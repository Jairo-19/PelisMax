# 🛠️ Cómo crear un proyecto Node.js + TypeScript

Pasos básicos para inicializar un backend desde cero.

---

## 1. Inicializar el proyecto

```powershell
npm init -y
```

Crea el `package.json` con valores por defecto. Es el archivo central del proyecto: guarda el nombre, versión, scripts y dependencias.

---

## 2. Instalar dependencias

```powershell
# Producción
npm install express cors dotenv

# Desarrollo
npm install -D typescript @types/express @types/node ts-node nodemon
```

| Paquete | ¿Para qué? |
|---------|------------|
| `express` | Framework web para crear la API |
| `cors` | Permite peticiones desde el frontend |
| `dotenv` | Carga variables de entorno desde `.env` |
| `typescript` | Compilador de TypeScript |
| `ts-node` | Ejecuta TypeScript directamente sin compilar |
| `nodemon` | Reinicia el servidor automáticamente al guardar |
| `@types/*` | Tipos de TypeScript para las librerías |

---

## 3. Configurar TypeScript

```powershell
npx tsc --init
```

Genera el `tsconfig.json`. Ajustar las opciones clave:

```json
{
  "compilerOptions": {
    "rootDir": "./src",     // Código fuente
    "outDir": "./dist",     // JavaScript compilado
    "module": "commonjs",
    "target": "es2020",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## 4. Agregar scripts al package.json

```json
"scripts": {
  "dev": "nodemon --exec ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

| Script | Uso |
|--------|-----|
| `npm run dev` | Desarrollo con recarga automática |
| `npm run build` | Compila TypeScript → JavaScript |
| `npm start` | Ejecuta el código compilado (producción) |

---

## 5. Crear la estructura de carpetas

```powershell
mkdir src\routes, src\controllers, src\services, src\config, src\middleware
```

```
src/
├── routes/       → Define las rutas de la API (GET /usuarios, POST /login...)
├── controllers/  → Lógica de cada ruta (qué hacer cuando llega una petición)
├── services/     → Lógica de negocio (consultas a BD, llamadas a APIs externas)
├── config/       → Configuración (base de datos, JWT...)
└── middleware/   → Funciones intermedias (autenticación, validación...)
```

---

## 6. Crear el archivo principal (src/index.ts)

Punto de entrada del servidor. Aquí se configura Express, los middlewares y se inicia el servidor en un puerto.

---

## 7. Crear .env.example

Archivo de referencia con todas las variables de entorno necesarias **sin los valores reales**. Cada desarrollador copia este archivo a `.env` y pone sus propios valores locales.

```
# Nunca subir .env a GitHub
# Siempre subir .env.example como referencia
```

---

## 8. Crear .gitignore

Evita subir archivos innecesarios o sensibles al repositorio:

```
node_modules/   → Pesa mucho, se regenera con npm install
dist/           → Código generado, no tiene sentido versionar
.env            → Contiene contraseñas y claves secretas
```

---

## Orden resumido

```
npm init -y
→ npm install ...
→ npx tsc --init
→ Ajustar tsconfig.json y package.json scripts
→ Crear estructura de carpetas
→ Crear src/index.ts
→ Crear .env.example y .gitignore
→ npm run dev ✅
```
