# Práctica 20: Agregar un documento a la colección de MongoDB

!["Mongo"](https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png)

En esta práctica, utilizaremos una parte del código de la práctica anterior y necesitaremos la base de datos de MongoDB creada en la sesión anterior con documentos insertados:

## Instrucciones:
- Utilizaremos TODO el codigo de la practica anterior y agregaremos 2 nuevos
endpoints, uno por GET para mostrar el formulario donde se agrega un nuevo
documento y otro por POST para agregar el documento a la colección

### Schema MongoDB: Persons
```
nombre: String,
edad: Number,
tipoSangre: String,
nss: String
```
# Vista Previa
!["Index"](./src/img/index.png)
*Database*: Datos usados en la colección de MongoDB

!["Add"](./src/img/addPersons.png)
*Agregar*: Interfaz para agregar nuevas personas a la colección
