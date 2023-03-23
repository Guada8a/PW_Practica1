# Práctica 14: Query String

!['Unsplash'](https://images.unsplash.com/photo-1676676701269-65de47175adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)

<p align="justify">
El query string o “cadena de consulta” es un mecanismo comúnmente utilizado para pasar
información en peticiones HTTP. Podemos identificar un query string de la siguiente forma:
</p>

!['Img1'](/img/1.png)

<p align="justify"> 
en el encabezado, podemos identificar elementos que hemos abordado previamente, como
el protocolo (HTTP/HTTPS), el URL, la ruta (path) para el cual hemos escrito un “route
handler”, y después, seguido del signo de interrogación “?”, el “query string”.
Cuando la petición HTTP es del tipo GET, el query string es enviado en el “Header” del
paquete HTTP
</p>

!['Img1'](/img/2.png)

<p align="justify">
En cambio, cuando la petición es mediante POST, el query string es “movido” hacia el
“body” y para acceder a su contenido es necesario “parsear” el contenido del “Body” de la
petición y obtener la información. La información que “viaja” durante la petición, puede ser
en formato de texto o en formato JSON, dependiendo de la necesidad.

Para “sacar” la información del Query string, en el caso de un método GET, es relativamente
sencillo debido a que “Express” ya hace el “parseo” de lo query string y nos permite acceder
a la colección de parámetros mediante la notación del “.” punto.
</p>