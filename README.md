# Práctica #2

### First class functions:
Todo lo que puedes hacer con otros tipos de datos, puedes hacerlo con una función en
Javascript, puedes pasarlas como parámetros, asignarlas a una variable, ponerlas dentro de
un array e invocarlas

1. Modifica el código en la forma en la que se te indica, una vez terminadas las modificaciones y comprobando que tu código funciona,agrega los cambios (git add .)
2. Haz commit de los cambios (git commit -m “mensaje)
3. Empuja los cambios (git push repoRemoto master)
## Practica 2 | Instrucciones:
En su directorio de trabajo,
1. Crea una nueva rama en tu repositorio
2. Crear un directorio llamado “first_class”
3. Dentro de ese directorio crear uno llamado “funciones”
4. Abrir el directorio “funciones” con visual studio code
5. Crear un nuevo archivo llamado “app.js” y escribir los siguiente:
![5](/img/Captura%20de%20pantalla%202023-02-10%20074931.png)
6. Salvar el archivo, abrir la terminal en el directorio “funciones” y escribir en la línea de
comando: `node app`
7. El mensaje “Hello” debe aparecer en la pantalla
8. Regresar al visual studio code y escribir lo siguiente, después de invocar a greet();
![8](/img/Captura%20de%20pantalla%202023-02-10%20075137.png)
9. Salvar el archivo, abrir la terminal en el directorio “funciones” y escribir en la línea de
comando: node app
10. La función greet ha sido pasada como parámetro a logGreeting(). El mensaje “Hello”
debe aparecer 2 veces en la pantalla

11. Regresar al visual studio code y escribir lo siguiente, después de la línea
`logGreeting(greet);`
![11](/img/Captura%20de%20pantalla%202023-02-10%20075223.png)
12. Salvar el archivo, abrir la terminal en el directorio “funciones” y escribir en la línea de
comando: node app
13. El mensaje “Hello” debe aparecer 2 veces en la pantalla y el mensaje ‘Hello from the
function expression’ 1 vez
14. Regresar al visual studio code y escribir lo siguiente, después de la línea
`greetMe();`
![14](/img/Captura%20de%20pantalla%202023-02-10%20075234.png)
15. Salvar el archivo, abrir la terminal en el directorio “funciones” y escribir en la línea de
comando: node app
16. El mensaje “Hello” debe aparecer 2 veces en la pantalla y el mensaje ‘Hello from the
function expression’ 2 veces
17. Lectura: Revisa el siguiente contenido y refactoriza las funciones de acuerdo a la
especificación de ES6 para arrow functions

## ¿Qué son las funciones flecha, arrow functions o fat arrow functions, disponibles en Javascript a partir de la actualización ES6 del lenguaje?
Las "arrow functions" de ES6 son una nueva manera de expresar las funciones de siempre,
de un modo resumido y con algunas características nuevas. Aunque son comúnmente
conocidas como arrow functions, también podrás oír hablar de ellas con su denominación
en español, funciones flecha, o como "fat arrow functions", ya que para formar la flecha se
usa una línea doble, del signo matemático igual "=". Además de servir como azúcar
sintáctico, son además una de las novedades más representativas de ES6, y que nos
soluciona uno de los problemas más representativos y clásicos de Javascript en su versión
ES5, el nuevo contexto generado por las funciones normales.

### Cómo expresar una función con las arrow functions
Esta parte es muy simple, en vez de usar la palabra clave function se utiliza el símbolo de la
flecha gorda, como se puede ver en el siguiente código:

Como has visto, no solo se usa la flecha, sino que los paréntesis donde se colocarían los
parámetros de la función también se mueven de lado, colocándolos antes de la flecha. La
invocación de la función se realizaría como ya conoces.

### Parámetros de las funciones flecha
El tratamiento de los parámetros se realiza como hasta ahora, simplemente se colocan
entre los paréntesis. Veamos este segundo ejemplo.

El único detalle es que, en el caso que tengamos un único parámetro, podemos ahorrarnos
colocar esos paréntesis.

### Ausencia de las llaves de la función
Existe otro caso especial, en el que podemos también ahorrarnos algún carácter extra, en
este caso las llaves de apertura y cierre de la función. Sería cuando solamente tenemos una
línea de código en nuestra función. La función del saludo la podrías ver así también:

### Ausencia de la palabra return
Si tenemos una única línea de código y la función devuelve un valor también nos podríamos
ahorrar la palabra return, además de las llaves como se dijo antes. La función del cuadrado
de un número podría expresarse así.

### Código más compacto
Como ves, explotando todas las posibilidades de las funciones flecha, podemos obtener un
código muy compacto. Para observar este hecho puedes compararlo con la declaración de
una función de una manera tradicional en ES5:

Quizás en la declaración de una función así sola en el código no se llegue a ver tanta
ventaja, pero al tratarse Javascript de un lenguaje lleno de funciones callback se consigue
bastante ahorro de líneas de código.

18. Realiza un refactor para la función greet(), de acuerdo a las especificación de ES6
para las funciones flecha
19. Realiza un refactor para la función logGretting(), de acuerdo a las especificación de
ES6 para las funciones flecha
20. Realiza un refactor para la función greetMe(), de acuerdo a las especificación de
ES6 para las funciones flecha