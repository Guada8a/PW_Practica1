# Práctica 17: Post Requests + JSON

![Unsplash](https://images.unsplash.com/photo-1679678691005-3815eb29bc61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)

Para dar paso a este nuevo proyecto será necesario comenzar desde cero, tener un
proyecto nuevo, debido a que la organización de los directorios y archivos es clave para el
posterior mantenimiento de nuestros servicios.
## Instrucciones:
- En tu directorio de trabajo crea el directorio
- Cambiate al directorio e inicializa NPM (npm init -y)
- Instala el paquete “express” desde la línea de comando
- Instala el paquete “ejs” desde la línea de comando (npm i ejs)
- Instala el paquete “nodemon” desde la línea de comando (npm i nodemon)
- Crea una carpeta llamada “public”
- Crea una carpeta llamada “src”
- Al nivel de la raíz crea el archivo .gitignore en incluye la referencia a la carpeta “node_modules”
- Dentro de la carpeta “src”, crea un nuevo archivo en blanco que se llame server.js y
una carpeta que se llame “routes”

- Dentro de la carpeta “routes” crea un nuevo documento en blanco que se llame
“person.js”

- En el archivo “person.js” escribiremos nuestra primera ruta, para el método `get`, en
este caso enviaremos solo un mensaje, para comprobar que el ruteo funciona
correctamente, en prácticas posteriores lo conectaremos a la base de datos:

- Ahora, en el archivo “server.js” escribe lo siguiente

- ahora accede a Google y busca “postman”:

- instala el “postman agent” e inícialo.
- ve a la línea de comando y “levanta” el servidor utilizando nodemon

- Ve al agente de postan y seleccionando el método `get`, escribe lo siguiente:

deberás obtener la respuesta “has solicitado el listado de personas”
### Hasta aquí, lo que hemos hecho es:
- Definir una estructura de directorios para nuestra nueva restful API
- Definir la ruta inicial para la clase “Persons”
- Exportar un “router” que después importamos en nuestro “server”
- “Levantar “ nuestro server y hacer una prueba de la respuesta usando “Postman
agent”

Empuja tu código al repositorio y **NO OLVIDES** agregar el archivo .gitignore (conteniendo
“node_modules”) debido a que para esta práctica se instalaron los paquetes: Express, EJS,
mongoose y Nodemon
