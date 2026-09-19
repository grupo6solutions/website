# Grupo6S Website — Instrucciones para agentes

## Alcance

Estas instrucciones aplican a todo el repositorio `website` de Grupo6S.

Este archivo es el punto de entrada para cualquier agente que analice, implemente, corrija, documente o audite el proyecto.

El repositorio es público y está desplegado en producción. Todo contenido versionado debe considerarse potencialmente visible para terceros y para buscadores e IA.

## Propósito del proyecto

Este es el sitio web institucional de **Grupo6S (Grupo 6 Solutions)**.

Debe presentar la identidad de Grupo6S como equipo de desarrollo de software, sus productos propios (GeClau y TRACAM) y su oferta de desarrollo a medida, con una web clara, rápida, accesible y fácil de mantener.

No debe convertirse en una landing centrada en un solo producto, ni exponer información privada de clientes, empleadores o repositorios no públicos.

## Stack

El stack real debe comprobarse siempre en los archivos vigentes del repositorio.

**Este repositorio no usa frameworks.** La implementación es un sitio estático compuesto por:

- `index.html` — estructura principal;
- `style.css` — estilos, responsive y modo oscuro;
- `script.js` — interacciones del menú, tema y formulario;
- `images/` — imágenes y logos;
- `robots.txt`, `sitemap.xml`, `CNAME` — SEO y despliegue.

No introducir React, Next.js, Vite, Astro, Vue, Angular, TypeScript, Tailwind, ni ningún framework, bundler o librería sin aprobación explícita del propietario.

## Arquitectura aprobada

La estructura objetivo del repositorio es:

```text
/
├── index.html
├── style.css
├── script.js
├── favicon.png
├── robots.txt
├── sitemap.xml
├── llms.txt
├── 404.html
├── CNAME
│
├── images/
│   ├── ...
│   ├── geclau/
│   └── tracam/
│       ├── dashboard.webp
│       └── menu.webp
│
├── nosotros/
│   └── index.html
│
└── productos/
    ├── geclau/
    │   └── index.html
    └── tracam/
        └── index.html
```

No crear carpetas o archivos por anticipación. Solo deben existir cuando haya una responsabilidad real que los justifique.

La estructura exacta debe validarse contra el repositorio real antes de cualquier modificación.

## Lectura obligatoria

`AGENTS.md` es el único punto de entrada. Cada documento debe leerse una sola vez por tarea.

Para cualquier tarea:

1. Aplicar las instrucciones vigentes de mayor prioridad provistas por el entorno de ejecución.
2. Leer este archivo una vez.
3. Consultar `.agents/` para determinar si existen skills o reglas aplicables a la tarea.
4. Inspeccionar los archivos reales relacionados con la tarea.
5. Revisar `PLAN_IMPLEMENTACION_WEB_GRUPO6S.md` cuando la tarea involucre arquitectura, contenido, identidad o etapas de implementación — pero ese archivo está ignorado por Git; si no existe, continuar sin él.

No es necesario recorrer todo el repositorio para una tarea puntual ni volver a abrir documentos ya leídos salvo que hayan cambiado durante la tarea.

## Fuente de verdad

### Estado técnico

El código y la configuración de la rama inspeccionada determinan qué existe realmente.

No asumir que una ruta, archivo, imagen, clase CSS, función JavaScript, variable o comportamiento existe solo porque aparezca en documentación o porque sea habitual en un tipo de proyecto. Verificar en los archivos reales.

### Comportamiento esperado

Prioridad:

1. instrucciones vigentes del entorno de ejecución (system o developer);
2. reglas de este archivo;
3. reglas y skills aplicables de `.agents/`;
4. pedido explícito y vigente del propietario, interpretado dentro de los límites anteriores;
5. `PLAN_IMPLEMENTACION_WEB_GRUPO6S.md` cuando esté disponible;
6. patrones reales del código;
7. criterio del agente.

Si dos fuentes se contradicen y la diferencia puede cambiar la implementación, informar la contradicción antes de decidir.

En esta documentación, **propietario** o **mantenedor** se refiere al equipo de Grupo6S o a la persona responsable del repositorio.

## Principios obligatorios

- Trabajar sobre una sola responsabilidad principal por vez.
- No inventar arquitectura, contratos, contenido, imágenes, datos del equipo, funcionalidades de productos ni comportamiento.
- Priorizar cambios pequeños, trazables y fáciles de revisar.
- No ampliar el alcance silenciosamente.
- No hacer refactors generales para resolver una tarea local.
- Toda afirmación sobre productos, clientes, implementaciones, planes o funcionalidades debe representar información real y verificable.
- No crear contenido solo para "tener más SEO"; todo contenido debe poder justificarse con información real.
- Toda nueva página debe ser comprensible para un crawler aunque JavaScript no se ejecute.

## Restricción estricta de diseño

**No rediseñar el sitio.**

La identidad visual existente es una restricción del trabajo. No modificar:

- paleta de colores;
- tipografías;
- logos e identidad gráfica;
- modo oscuro;
- sombras y animaciones existentes salvo correcciones técnicas;
- sistema de espaciado de forma arbitraria;
- apariencia general de cards y secciones.

Sí se permiten:

- reutilizar y extender componentes visuales existentes;
- crear nuevas páginas que respeten el sistema visual actual;
- reorganizar contenido;
- adaptar la navegación;
- correcciones de accesibilidad;
- optimizaciones de performance que no modifiquen la identidad visual.

Toda nueva UI debe sentirse como una extensión natural del sitio existente.

## HTML, CSS y JavaScript

- Priorizar HTML semántico; usar los elementos correctos según su propósito.
- Un único `<h1>` por página; jerarquía `h2`/`h3` coherente.
- Cada página indexable debe tener `<title>`, meta description, canonical, Open Graph y metadata de Twitter/X propios.
- CSS debe extender el sistema de clases existente. Preferir clases reutilizables entre páginas (`.product-hero`, `.product-section`, etc.) sobre clases específicas por producto cuando el patrón sea idéntico.
- No duplicar CSS idéntico para contextos equivalentes.
- No usar estilos inline salvo caso mínimo y justificado.
- No duplicar hexadecimales ni valores globales cuando existe una variable CSS disponible.
- JavaScript debe mantenerse simple y sin dependencias externas no aprobadas.
- Mantener accesibilidad, responsive y modo oscuro en cualquier página nueva.
- Soportar `prefers-reduced-motion` cuando corresponda.

## Accesibilidad

La accesibilidad es parte de la implementación, no un arreglo posterior.

Requisitos mínimos en cualquier cambio:

- navegación por teclado funcional;
- focus visible en elementos interactivos;
- `aria-expanded`, `aria-controls` correctos en elementos desplegables;
- `aria-live` en mensajes de estado del formulario;
- contraste suficiente sin modificar la paleta salvo incumplimiento crítico;
- semántica correcta de botones y enlaces;
- `alt` descriptivo en imágenes; no inventar texto alternativo sin observar la imagen real.

## Rutas de recursos

Las páginas anidadas (`/nosotros/`, `/productos/geclau/`, `/productos/tracam/`) deben referenciar recursos compartidos mediante rutas desde la raíz:

```text
/style.css
/script.js
/images/...
```

No asumir que rutas relativas como `style.css` o `images/logo.png` funcionarán igual desde todos los niveles de profundidad.

## Contacto y formulario

Mantener el sistema de contacto existente:

- Formspree;
- Cloudflare Turnstile.

No reemplazar ni modificar estos servicios sin aprobación. El formulario debe seguir siendo accesible y funcional tras cualquier cambio.

## Seguridad y privacidad

> Si existe duda sobre si un dato puede publicarse, tratarlo como privado y detener la incorporación hasta obtener confirmación.

Nunca versionar secretos, credenciales, información privada de clientes o empleadores, ni contenido copiado de repositorios privados sin autorización y saneamiento explícitos.

No exponer claves de API, tokens ni variables de entorno privadas en HTML, CSS o JavaScript del lado cliente.

## Dependencias externas

El agente no ejecuta comandos de instalación o actualización de dependencias. El proyecto es un sitio estático; la incorporación de cualquier recurso externo (scripts, fuentes, librerías CDN) debe ser aprobada explícitamente por el propietario.

Antes de proponer un recurso externo, informar:

- problema que resuelve;
- alternativa sin recurso externo;
- impacto estimado en performance y mantenimiento;
- implicancias de privacidad (datos enviados a terceros).

## Comandos

El repositorio no tiene `package.json`; no existe una lista de scripts gestionada por npm.

### Pruebas locales

El agente **no tiene permiso para probar o servir la web localmente**. Queda prohibido levantar servidores locales (como `python -m http.server`, etc.) o dejar procesos en segundo plano.

### Comandos de Git

- **Inspección de Git:** Comandos de lectura como `git status`, `git diff`, `git log`, `git show`, `git branch --show-current` o `git remote -v` **únicamente pueden ejecutarse cuando el propietario/usuario lo indique de forma explícita**. El agente no debe ejecutarlos por iniciativa propia.
- **Operaciones de escritura o sincronización (prohibidas siempre):** El agente no ejecuta operaciones Git de escritura, sincronización remota o cambio de historia/ramas, incluyendo:

```text
git add
git commit
git push
git pull
git fetch
git merge
git rebase
git reset
git clean
git restore
git checkout
git switch
git stash
git cherry-pick
git revert
git tag
```

### Comandos de filesystem prohibidos

Queda prohibido ejecutar comandos destructivos de filesystem (`Remove-Item`, `rm`, `del`, `erase`, `rmdir` o equivalentes) mediante shell. Toda eliminación necesaria de archivos debe realizarse mediante herramientas de edición del IDE. La aprobación del propietario no habilita estos comandos.

## Documentación

La documentación debe:

- tener una responsabilidad clara;
- reflejar decisiones reales, no intenciones futuras;
- no declarar funcionalidades futuras como implementadas;
- no contener secretos ni información privada;
- actualizarse cuando cambie lo que documenta.

`README.md` es documentación pública para personas. `AGENTS.md` y `.agents/` contienen instrucciones operativas para agentes. No duplicar información entre ambos sin necesidad.

## Información aprobada del proyecto

Esta sección recoge hechos verificados para uso del agente. No usarlos como fuente única; siempre contrastar con el código real.

### Identidad de marca

- Nombre formal: **Grupo 6 Solutions**
- Nombre habitual: **Grupo6S**
- Dominio: `grupo6s.com`
- Email de contacto: `grupo6solutions@gmail.com`

### Equipo

Cinco integrantes. El nombre "Grupo 6" nació porque el equipo coincidió repetidamente como el grupo número 6 en trabajos universitarios. No afirmar que hubo seis integrantes.

| Nombre | Rol público |
|---|---|
| Ariel Ayala | Backend Developer · Database Designer |
| Bárbara Ponce | Frontend Developer · Design Contributor |
| Calipto Martinez | Backend Developer · System Integrator |
| Nahuel Roman | Fullstack Developer · Versatile Contributor |
| Nicolas Kaminski | Frontend Developer · UI/UX Designer |

### Productos

#### GeClau

Software de gestión académica orientado a universidades. Implementado en la **Universidad Tecnológica Nacional — Facultad Regional Mar del Plata** (`https://aulas.mdp.utn.edu.ar/`).

Demo pública: `https://demo.geclau.grupo6s.com/`

Modelos comerciales: SaaS · On-Premise. No inventar precios.

#### TRACAM

Aplicación web para la gestión y trazabilidad de operaciones de transporte de cargas.

Desarrollado para: **Asociación Civil Transportistas Unidos de Melincué**.

No afirmar uso operativo actual si no está confirmado. No colocar el dominio `tracam.grupo6s.com` como enlace navegable hasta que resuelva a una aplicación o demo funcional.

### URLs canónicas

```text
https://grupo6s.com/
https://grupo6s.com/productos/geclau/
https://grupo6s.com/productos/tracam/
https://grupo6s.com/nosotros/
```

## Cierre obligatorio de tarea

Para una tarea con cambios, la entrega debe informar como mínimo:

1. objetivo trabajado;
2. archivos creados, modificados y eliminados;
3. cambios realizados por responsabilidad;
4. validaciones ejecutadas y resultados;
5. validaciones relevantes no ejecutadas;
6. impacto de seguridad o privacidad, si aplica;
7. riesgos, dudas o limitaciones;
8. cambios fuera de alcance detectados;
9. mensaje de commit recomendado en formato Conventional Commits, con descripción en español, sin ejecutar el commit.

Para un análisis, diagnóstico o consulta sin cambios, usar un cierre breve con: objetivo, hallazgos o respuesta, evidencia revisada, limitaciones relevantes y confirmación de que el árbol no fue modificado. No incluir apartados vacíos por rutina.

No declarar una tarea "lista", "resuelta" o "sin errores" si falta evidencia necesaria o existe una validación pendiente relevante.
