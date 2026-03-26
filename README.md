# Grupo 6 Solutions - Website

Sitio web estatico de Grupo 6 Solutions para presentar el producto GeClau, el equipo, las tecnologias utilizadas y los canales de contacto.

## Stack real del repo

Este repositorio no usa React, Vite, TypeScript ni backend propio.

La implementacion actual esta compuesta por:

- `index.html`: estructura principal del sitio
- `style.css`: estilos, responsive y modo oscuro
- `script.js`: interacciones del menu, tema y formulario
- `images/`: imagenes y logos del sitio
- `robots.txt`, `sitemap.xml`, `CNAME`: archivos de SEO y despliegue

## Estructura del proyecto

```text
website/
|- .agents/
|- images/
|- CNAME
|- favicon.png
|- index.html
|- robots.txt
|- script.js
|- sitemap.xml
|- skills-lock.json
|- style.css
```

## Archivos auxiliares

- `.agents/` y `skills-lock.json` se usan para el flujo de trabajo con agentes/skills en este entorno.
- No forman parte del runtime del sitio, pero pueden mantenerse versionados si el equipo usa estas herramientas.
- Los reportes generados manualmente, como auditorias o salidas de analisis, no deberian quedar en la raiz del repo.

## Ejecucion local

Al ser un sitio estatico, puede abrirse directamente en el navegador o servirse con un servidor local simple.

### Opcion 1: abrir el archivo

Abrir `index.html` en el navegador.

### Opcion 2: servidor local

Con VS Code puede usarse Live Server. Otra opcion es:

```bash
python -m http.server 8000
```

Luego abrir `http://localhost:8000`.

## Despliegue

El repositorio esta preparado para despliegue estatico. La presencia de `CNAME` indica uso de dominio personalizado.

Antes de publicar conviene verificar:

- enlaces externos
- metadatos SEO
- `robots.txt`
- `sitemap.xml`
- carga de imagenes y responsive

## Mantenimiento recomendado

- Mantener la raiz del repo solo con archivos necesarios para publicar o mantener el sitio.
- Guardar reportes generados fuera del root o ignorarlos con `.gitignore`.
- Si se agregan nuevas secciones o recursos, reflejarlos en este README.

## Contacto

Si estas interesado en GeClau o en trabajar con Grupo 6 Solutions, usa el formulario del sitio o escribe a `grupo6solutions@gmail.com`.
