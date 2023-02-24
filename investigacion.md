# Práctica 8 
## Definiciones

### HTTP
HTTP, de sus siglas en inglés: "Hypertext Transfer Protocol", es el nombre de un protocolo el cual nos permite realizar una petición de datos y recursos, como pueden ser documentos HTML.
### Servidor HTTP
En cuanto a software, un servidor web tiene muchas partes que controlan cómo los usuarios de la web obtienen acceso a los archivos alojados en el servidor; es decir, mínimamente, un servidor HTTP. Un servidor HTTP es una pieza de software capaz de comprender URLs (direcciones web) y HTTP (el protocolo que tu navegador usa para obtener las páginas web). Un servidor HTTP puede ser accedido a través de los nombres de dominio de los sitios web que aloja, y entrega el contenido de esos sitios web alojados al dispositivo del usuario final.
### Formato del paquete HTTP 
![Esquema](https://www.cleantutorials.com/wp-content/uploads/2015/11/http-header-and-body.png)
### HTTP Request
En la web, los clientes, como un navegador, por ejemplo, se comunican con los distintos servidores web con ayuda del protocolo HTTP, el cual regula cómo ha de formular sus peticiones el cliente y cómo ha de responder el servidor. El protocolo HTTP emplea varios métodos de petición diferentes. En esta guía conocerás los detalles de los más comunes.
### HTTP Response
Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- y errores de los servidores (500–599).

### Puerto TCP
El Protocolo TCP/IP o Transfer Control Protocol consiste en un acuerdo estandarizado sobre el que se realiza la transmisión de datos entre los participantes de una red informática.

### Métodos HTTP
HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs. Cada uno de ellos implementan una semántica diferente, pero algunas características similares son compartidas por un grupo de ellos: ej. un request method puede ser safe, idempotent (en-US), o cacheable.

GET:<br>
El método GET solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.

HEAD (en-US):<br>
El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.

POST:<br>
El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.

PUT:<br>
El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

DELETE (en-US): <br>
El método DELETE borra un recurso en específico.

CONNECT: <br>
El método CONNECT establece un túnel hacia el servidor identificado por el recurso.

OPTIONS (en-US): <br>
El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.

TRACE: <>
El método TRACE realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

PATCH: <br>
El método PATCH es utilizado para aplicar modificaciones parciales a un recurso.