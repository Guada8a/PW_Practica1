# Práctica 21: Editar un documento a la colección de MongoDB

!["Mongo"](https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png)
*Imagen Ilustrativa*

En esta práctica, utilizaremos una parte del código de la práctica anterior y necesitaremos la base de datos de MongoDB creada en la sesión anterior con documentos insertados:

## Instrucciones:

- Utilizaremos TODO el código de la práctica anterior y agregaremos 2 nuevos
endpoints, uno por GET para mostrar el formulario donde se edita un nuevo
documento y otro por POST para actualizar el documento en la colección

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

!["Update"](./src/img/update.png)
*Modificar*: Interfaz para editar los datos

!["Delete"](./src/img/delete.png)
*Eliminar*: Modal de eliminación