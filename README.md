# Hiperstición - Editorial Cooperativa

Sitio web de Hiperstición, una editorial cooperativa autogestionada dedicada a la reflexión filosófica y la difusión de nuevas ideas. Fundada en 2022 en la infósfera de las plataformas sociales y establecida en Santiago de Chile.

## 📖 Descripción

Este sitio web presenta el catálogo de publicaciones de Hiperstición, incluyendo libros de filosofía, ciencia y pensamiento contemporáneo. El sitio cuenta con un diseño único que refleja la identidad visual de la editorial, con navegación geométrica y una experiencia de usuario inmersiva.

### ✨ Características

- 🎨 Diseño visual único con elementos geométricos y animaciones
- 📱 Completamente responsivo (escritorio, tablet y móvil)
- 🔍 SEO optimizado con meta tags y OpenGraph
- 🌐 Soporte para múltiples idiomas (español principal)
- 📖 Sistema de blog integrado para artículos y publicaciones
- 🎯 Navegación intuitiva con menú lateral interactivo
- ⚡ Alto rendimiento con Astro

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+ o superior
- pnpm (recomendado) o npm

### Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd landing-hipersticion/extraterrestrial-eclipse
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

4. **Abrir en el navegador**
   Visita [http://localhost:4321](http://localhost:4321) para ver el sitio en desarrollo.

## 🛠️ Uso y Desarrollo

### Comandos disponibles

| Comando            | Acción                                               |
| :----------------- | :--------------------------------------------------- |
| `pnpm install`     | Instala las dependencias del proyecto                |
| `pnpm dev`         | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`       | Construye el sitio para producción en `./dist/`      |
| `pnpm preview`     | Previsualiza la versión de producción localmente     |
| `pnpm astro check` | Verifica tipos y errores en el código                |
| `pnpm astro sync`  | Sincroniza tipos de colecciones de contenido         |

### Estructura del proyecto

```
extraterrestrial-eclipse/
├── public/                 # Archivos estáticos (imágenes, fuentes, favicon)
│   └── img/               # Imágenes del sitio web
├── src/
│   ├── components/        # Componentes Astro reutilizables
│   │   ├── BaseHead.astro # Configuración del head y meta tags
│   │   ├── Footer.astro   # Pie de página con animación
│   │   ├── Menu.astro     # Navegación lateral con diseño geométrico
│   │   └── FormattedDate.astro # Formateo de fechas
│   ├── layouts/           # Layouts para páginas
│   │   └── BlogPost.astro # Layout para artículos del blog
│   ├── pages/             # Páginas del sitio web
│   │   ├── index.astro    # Página principal
│   │   ├── catalogo/      # Página de catálogo de libros
│   │   ├── contacto/      # Página de información de contacto
│   │   ├── distribucion/  # Página de puntos de distribución
│   │   ├── proyecto/      # Página del proyecto editorial
│   │   └── blog/          # Sección de blog
│   ├── styles/            # Estilos globales
│   └── content/           # Colecciones de contenido Markdown
│       └── blog/          # Artículos del blog
├── astro.config.mjs       # Configuración de Astro
├── package.json           # Dependencias y scripts
└── tsconfig.json          # Configuración de TypeScript
```

### Desarrollo

1. **Modificar contenido**: Edita los archivos `.astro` en `src/pages/`
2. **Agregar componentes**: Crea nuevos componentes en `src/components/`
3. **Estilos**: Modifica `src/styles/global.css` para cambios globales
4. **Contenido del blog**: Agrega archivos Markdown en `src/content/blog/`

### Páginas disponibles

- **/** - Página principal con diseño inmersivo
- **/catalogo** - Catálogo de libros disponibles
- **/contacto** - Información sobre la editorial
- **/distribucion** - Puntos de venta y distribución
- **/proyecto** - Detalles del proyecto editorial
- **/blog** - Lista de artículos y publicaciones
- **/blog/[artículo]** - Artículos individuales del blog

## 🎨 Personalización

### Colores de marca

El sitio utiliza colores específicos de la identidad de Hiperstición:

- **Primario**: `#d05240` (rojo editorial)
- **Secundario**: `#b04230` (rojo oscuro)
- **Fondo**: Gradiente animado con textura noise

### Tipografía

- **Principal**: Space Grotesk (Google Fonts)
- **Tamaños responsivos**: Adaptable a diferentes pantallas

## 📦 Despliegue

### Construir para producción

```bash
pnpm build
```

Los archivos generados se encontrarán en el directorio `dist/`.

### Desplegar en plataformas

El sitio está optimizado para desplegarse en:

- **Netlify**: Simplemente conecta el repositorio
- **Vercel**: Importa el proyecto desde Git
- **GitHub Pages**: Usa la acción de GitHub Pages

## 🤝 Contribución

Este proyecto es mantenido por la cooperativa Hiperstición. Para contribuciones:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📞 Contacto

**Editorial Hiperstición**

- Email: editorial@hipersticion.cl
- Instagram: [@hipersticion.editorial](https://www.instagram.com/hipersticion.editorial/)
- Web: [hipersticion.cl](https://hipersticion.cl)

---

_Hecho con ❤️ por la cooperativa Hiperstición_
