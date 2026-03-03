# Grupo 6 Solutions - Sitio Web

Este repositorio contiene el código fuente del sitio web de Grupo 6 Solutions, un equipo de desarrolladores especializados en soluciones de software a medida para la gestión académica. El sitio presenta nuestro proyecto principal, GeClau, nuestro stack tecnológico y a los miembros de nuestro equipo.

## Tabla de Contenidos

- [Acerca de GeClau](#acerca-de-geclau)
- [Características del Sitio Web](#características-del-sitio-web)
- [Stack Tecnológico](#stack-tecnológico)
- [El Equipo](#el-equipo)
- [Contacto](#contacto)

## Acerca de GeClau

GeClau (Gestión de Clases y Aulas) es una solución de software desarrollada por Grupo 6 Solutions para optimizar la gestión académica. Nació de la necesidad de automatizar y centralizar la asignación de horarios y aulas en instituciones educativas, eliminando las ineficiencias de los sistemas manuales basados en hojas de cálculo.

Actualmente, GeClau es un producto consolidado e implementado con éxito en la UTN Facultad Regional Mar del Plata, listo y preparado para su adopción comercial (vía SaaS o licencias On-Premise) en otras sedes regionales y universidades del país. El proyecto sigue incorporando funciones innovadoras orientadas a la automatización inteligente.

## Características del Sitio Web

- **Información del Proyecto GeClau**: Detalles sobre el origen, desarrollo y futuro de GeClau.
- **Stack Tecnológico**: Una sección dedicada a las tecnologías utilizadas en nuestros proyectos.
- **Presentación del Equipo**: Información sobre los miembros de Grupo 6 Solutions, incluyendo sus roles y enlaces a sus perfiles profesionales.
- **Formulario de Contacto**: Un formulario para que los interesados puedan comunicarse con el equipo (integrado con Formspree).
- **Modo Claro/Oscuro**: Funcionalidad para alternar entre un tema de interfaz claro y oscuro, mejorando la accesibilidad y la experiencia del usuario.
- **Diseño Responsivo**: Adaptado para una visualización óptima en dispositivos móviles y de escritorio.

## Stack Tecnológico

El sitio web de Grupo 6 Solutions y el proyecto GeClau utilizan las siguientes tecnologías:

**Frontend:**

- **React 19**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción rápida para proyectos web modernos.
- **Chakra UI**: Framework de componentes UI modernos y accesibles.
- **React Router**: Para el manejo de navegación y ruteo interno.

**Backend y Arquitectura:**

- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **Express.js**: Framework web para Node.js.
- **TypeScript**: Para garantizar integridad estructural profunda en el código del servidor.
- **Zod**: Biblioteca de declaración y validación estricta de esquemas y payloads.
- **TypeORM**: ORM (Object-Relational Mapper) para TypeScript y JavaScript.
- **MySQL**: Sistema de gestión de bases de datos relacionales.
- **Docker**: Contenerización de servicios para escalabilidad y facilidad de despliegue.
- **JWT y Autenticación**: Sesiones seguras a través de cookies httpOnly en una API REST blindada.
- **Cloudflare Turnstile**: Integración de captcha y capa anti-bots en endpoints críticos de login.

## El Equipo

Somos un equipo de graduados de la Tecnicatura Universitaria en Desarrollo de Software, apasionados por crear soluciones tecnológicas robustas y eficientes.

- **Nicolas Kaminski**: Desarrollador Frontend, Diseñador UI/UX
  - [LinkedIn](https://www.linkedin.com/in/nkaminski-profile/)
  - [GitHub](https://github.com/nicoKaminski)
- **Ariel Ayala**: Desarrollador Backend, Diseñador de Base de Datos
  - [LinkedIn](https://www.linkedin.com/in/ariel-ayala-49006823a/)
  - [GitHub](https://github.com/ariel7171)
- **Barbara Ponce**: Desarrolladora Frontend, Colaboradora de Diseño
  - [LinkedIn](https://www.linkedin.com/in/b%C3%A1rbara-ponce/)
  - [GitHub](https://github.com/barbaraponce93)
- **Nahuel Roman**: Desarrollador Fullstack, Colaborador Versátil
  - [LinkedIn](https://www.linkedin.com/in/nahuel-roman-168320287/)
  - [GitHub](https://github.com/NahuelRoman1990)
- **Calipto Martinez**: Desarrollador Backend, Integrador de Sistemas
  - [LinkedIn](https://www.linkedin.com/in/calipto-martinez-4a2754276/)
  - [GitHub](https://github.com/calipto722)

## Instalación y Uso

Este es un sitio web estático, por lo que su instalación y uso son muy sencillos:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Grupo6Solutions/website.git
    cd website
    ```
2.  **Abrir `index.html`:**
    Simplemente abre el archivo `index.html` en tu navegador web preferido.

    Alternativamente, puedes usar un servidor web local para servir los archivos (por ejemplo, con Live Server en VS Code o `python -m http.server`):

    ```bash
    # Si tienes Python instalado
    python -m http.server 8000
    ```

    Luego, navega a `http://localhost:8000` en tu navegador.

## Contacto

Si estás interesado en GeClau o tienes un proyecto en mente, no dudes en contactarnos:

- **Formulario de Contacto**: Utiliza el formulario disponible en la sección de contacto del sitio web.
- **Email**: Envíanos un correo electrónico a [mail](mailto:grupo6solutions@gmail.com).
