// * Módulo que exporta un objeto construido
function Greetr() {
    this.greeting = "Hello from function constructor";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr; //* El módulo regresa un objeto construido

// * Si este módulo se inyecta 2 veces, se crea una nueva instancia de Greetr, por lo que se crea un nuevo objeto en memoria. Esto puede ser un problema de rendimiento.