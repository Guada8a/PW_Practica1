// * Declarar objeto
let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',
    keypress: function() {
        return 'Se ha presionado una tecla';
    },
    mouseOver: function () {
        return 'El puntero del mouse está arriba';
    }
};
// * Acceder a propiedades del objeto con notación de punto
console.log(obj.nombre);
// * Acceder a propiedades del objeto con notación de corchetes
console.log(obj['nombre']);

// * Acceder a propiedades del objeto con notación de corchetes y variable
let myKey = 'nombre';
console.log(obj[myKey]);

myKey = 'keypress';
console.log(obj[myKey]()); // Sería lo mismo a => obj[myKey](); => obj['keypress'](); => obj.keypress();
myKey = 'mouseOver';
console.log(obj[myKey]());

/**
 * ? Explicación del código de arriba
 *  Cuando se accede a una función de un objeto, se debe poner los paréntesis al final de la notación de corchetes para que se ejecute la función y no se devuelva la función en sí. Asimismo, dentro de la función se debe devolver el valor que se desea mostrar con un return, ya que si no se hace así, se devolverá undefined.
 */

// * Arrays en JavaScript
// * Declarar array
let myArray = [];

// * Agregar elementos al array
myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    return "Hola desde el array";
});
console.log(myArray);
console.log(myArray[myArray.length - 1]());
/** 
 * ? 2. Explicación del código de arriba 
 * Al momento de ejecutar el código, se mostrará en consola el array con los elementos que se agregaron. Sin embargo, si se agregado una función al array, no se ejecutará la función, sino que se mostrará la función en sí. Si se desea ejecutar la función, solo se debe agregar los paréntesis al final. Y al igual que en los objetos, si la función no tiene un return, se devolverá undefined.
 */

let funcArray = [];

// * Agregar funciones al array
funcArray.push(() => {
    console.log("Función 1");
});

funcArray.push(() => {
    console.log("Función 2");
});

funcArray.push(() => {
    console.log("Función 3");
});

// * Ejecutar funciones del array
funcArray.forEach((item)=> {
    item();
});

/**
 * ? 3.Explicación del código de arriba
 * En este caso, se agregaron funciones al array y se ejecutaron con un forEach. El forEach recibe una función como parámetro, la cual recibe como parámetro cada uno de los elementos del array. Dentro del foreach se ejecutará la función que se agregó al array y se mostrará en consola el mensaje que se haya puesto en la función.
*/

// * Invocar la función mouseOver del objeto obj dentro del array myArray
console.log(myArray[2].mouseOver());
//Comment: Para acceder a la función que se encuentra en el objeto alojado en el array, se debe acceder a la posición del objeto y luego a la función.

// * Invocar la función anonima que se encuentra en el array myArray
console.log(myArray[3]());
//Comment: Para acceder a la función que se encuentra en el array, se debe acceder a la posición de la función, y luego ejecutarla con los paréntesis.