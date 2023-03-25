# Práctica 15: Peticiones por POST
!['Unsplash'](https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80)
<p align="center"><h2 align="center">POST REQUESTS</h2></p>

<p align="justify">
En la práctica anterior abordamos el tema del Querystring y las peticiones GET, ahora es turno de las peticiones POST.
Cuando la petición es mediante el método POST, el query string es “movido” hacia el “body” y para acceder a su contenido es necesario “parsear” el contenido del “Body” de la petición y obtener la información. La información que “viaja” durante la petición, puede ser en formato de texto o en formato JSON, dependiendo de la necesidad.
Para “sacar” la información del “body”, debemos instalar un “middleware” que nos permita extraer su contenido, ya sea en formato de texto o en formato JSON. Para lograr ese
objetivo, instalaremos el paquete “bodyparser” desde la línea de comando
</p>

## Vistazos de ejecución
### _Menú Principal_
![Uno](./img/main.png)
### _Respuesta_
![Ams](./img/ans.png)

