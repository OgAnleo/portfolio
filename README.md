# Portfolio

Portfolio personal de Óscar González-Anleo Lozano, hecho con React, TypeScript y Vite.
Disponible en español e inglés (react-i18next) y desplegado en GitHub Pages.

## Tecnologías

- React 19 + TypeScript
- Vite
- React Router (`HashRouter`)
- react-i18next
- CSS plano

## Estructura

```
src/
  components/   Navbar, Footer y ProyectoCard
  pages/        SobreMi, Educacion, Proyectos y NotFound
  data/         Proyectos, habilidades y contacto
  locales/      Traducciones (es.json y en.json)
```

## Scripts

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo
npm run lint      # comprobar el código con ESLint
npm run build     # compilar para producción
npm run preview   # ver la build en local
```

## Despliegue

Cada push a `main` ejecuta el workflow de `.github/workflows/deploy.yml`,
que compila el proyecto y lo publica en GitHub Pages.
