
let obj = {};
// * Definición del objeto persona
let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function () {
        return `${this.nombre} ${this.apellido}`;
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
        getDomicilio: function() {
            return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`;
        }
    }
};

// * Mostrar objeto
console.log(persona);
// * Mostrar objeto por propiedades
console.log(persona.nombre);
console.log(persona.apellido);
// * Mostrar objeto por método
console.log(persona.getName());
// * Mostrar sub-objeto
console.log(persona.domicilio);

// TODO: Ejercicio | Modificar el objeto persona para que tenga un método que devuelva el domicilio completo

// * Mostrar domicilio completo
console.log(persona.domicilio.getDomicilio());