// * Módulo que expone un constructor
module.exports = function Greetr() {
    this.greeting = "Hello from de constructor greet4";
    this.greet = function() {
        console.log(this.greeting);
    }
}