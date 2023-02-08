# Práctica 1: Instalar un paquete de Node JS
### LECTURA
- ¿Qué es node Js?
    - Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.

- What's the V8 chrome engine? 
  - V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application.
- ¿Qué es un entorno de ejecución?
  - Entorno de tiempo de ejecución: todo lo que necesita para ejecutar un programa, pero no tiene herramientas para cambiarlo.
  - Entorno de compilación: dado un código escrito por alguien, todo lo que necesita para compilarlo o preparar un ejecutable que ponga en un entorno de tiempo de ejecución. Los entornos de compilación son bastante inútiles a menos que pueda ver las pruebas de lo que ha construido, por lo que a menudo incluyen Ejecutar también. En Build no puedes modificar el código.
  Entorno de desarrollo: todo lo que necesita para escribir código, compilarlo y probarlo. Editores de código y otras herramientas similares. Típicamente también incluye Build and Run. VM (meros meros)
- ¿What is a Module in Node.js?
  - Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application.
- Built-in Modules
  - Node.js has a set of built-in modules which you can use without any further installation. Look at our Built-in Modules Reference for a complete list of modules.
- Include Modules into your code (inyección de dependencias)
  - To include a module, use the require() function with the name of the module:
 `var http = require('http');`
- ¿What 's NPM?
  - npm is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use npm to share software. Many organizations also use npm to manage private development.
- ¿What 's a CLI?
  - Command line interface (CLI)
  - A command line interface (CLI) is a text-based user interface (UI) used to view and manage computer files. Command line interfaces are also called command-line user interfaces, console user interfaces and character user interfaces.
  
- ¿Qué es GIT?
 - Video:
   - Este video es para demostrar gráficamente la forma en que git funciona.
     Timelapse de Linux
     https://www.youtube.com/watch?v=5iFnzr73XXk
- Uso de GIT
  - Inicializar repositorio (git init, inicia el tracking de mis cambios)
  - Identificar mi rama (git branch)
  - crear nueva rama (git checkout -b nueva_rama, git branch -d nueva_rama.) ● agregar cambios (git add .)
  - commitear cambios (git commit -m “mensaje”)
  - estado de mi código (git status)
  
## PRÁCTICA
### NPM CLI
- Inicializar aplicación `NPM Init -y`
- Creación del Package.json file
- Buscar el paquete en NPM
- Instalar *celsius* 
- ¿Cómo identificar su “nivel” de confiabilidad?
- ¿Qué es lo que debo observar?

### Proceso
- Escribir una aplicación (app.js) para probar celsius
- Copiar el código de prueba
- Crear un archivo que se llame .gitignore y que su contenido sea el siguiente: ● Inyectar la dependencia
- Escribir el código de prueba
- Ejecutar el código
