# NOTAS DE JAVASCRIPT (Curso Udemy - JavaScript - Fernando Herrera)
___
## Introducción a JavaScript
**Tipos de variables**
1. Variables Locales: una variable local es aquella que está declarada dentro de un bloque de código, por lo general dentro de una función (aunque puede estar declarada también dentro de un condicional o una estructura repetitiva), se caracteriza por que se declara usando la palabra reservada var o let.
2. Variables Globales: una variable global es toda aquella que está definida fuera de todo bloque de código.
*Un bloque de código es aquel que está delimitado por llaves.*
- var era la forma antigua de crear variables
- var se sigue usando porque js requiere ser compatible con las viejas versiones

### ¿qué versión usar?
1. **ES5S:**
    - Soportado en todos los navegadores web 
2. **ES6/ES2015, ES7/ES2016, ES8/ES2017:**
    - Soportados por la mayoría de navegadores modernos, pero no por todos los navegadores web

- javaScript es un lenguaje interpretado, eso quiere decir que al compilar el código el orden en que lo hace es de manera secuencial de inicio a fin

## Fundamentos de JavaScript

### Primitivos

**Tipo de dato de una variable**
Javascript es un lenguaje débilmente tipado ya que javascript lo va a tipar dependiendo sin que nosotros lo tengamos que hacer de manera explicita, esto quiere decir que podemos declarar un string o números sin necesidad de hacerlo manualmente.

El tipo de dato de una variable describe el contenido del valor que tienen la varaible en si. 


**¿Qué son los primitivos?**
Es información que no es un objeto y son inmutables.
Hay 6 tipos de datos primitivos.
| Datos Primitivos | - |
| ----------- | ------------- |
| boolean | true/false |
| null | sin valor en lo absoluto |
| undefined | una variable declarada que aún no se le asigna valor |
| number | integers, floats, etc. |
| string | una cadena de caracteres |
| symbol | es un valor único que no es igual a ningún otro valor |

### Palabras reservadas
Son palabras que tienen un uso específico para el que fueron creadas.

**Lista de palabras reservadas**
| - | Palabras reservadas | - |
| ----------- | ------------- | ----------- |
| break | export | super |
| case | extends | switch |
| catch | finally | this |
| class | for | throw |
| const | function | try |
| continue | if | typeof |
| debugger | import | var |
| default | in | void |
| delete | instanceof | while |
| do | new | with |
| else | return | yield |
| let | | |

**Lista de palabras reservadas en un futuro**
| - | Palabras reservadas en un futuro | - |
| --- | --- | --- |
| enum | package | public |
| implements | private | static |
| interface | protected | await |

**Lista de palabras que hay que evitar usar**
| - | Evitar usar | - |
| --- | --- | --- |
| null | undefined | true |
| false | hasOwnProperty | undefined |
| isNaN | Infinity | isFinite |
| NaN | length | Math |
| isPrototypeOf | prototype | valueOf |
| name | Number | Object |
| String | toString | prompt |
| alert | conform | |

### Arreglos
Son un objeto parecido a una lista de información, que contienen un grupo de elementos. Usualmente toda la información o grupo de elementos dentro del arreglo es del mismo tipo de dato (no siempre sucede).

~~~
let videoJuegos = ['Mario 3', 'Zelda', 'Halo'];
videoJuegos[1]; // Zelda
~~~

### Objetos literales
La definición de literal alude a algo textual, por ejemplo, si declaramos una variable de la siguiente manera:
~~~
let colorDelSol = 'Amarillo';
~~~

Podemos decir que la variable ***colorDelSol*** tiene asignada un string literal ya que se asigna el valor textualmente.

- Un objeto es la estructura de datos más usada en javascript, compuesta de pares ordenados y agrupados en claves y valores.
- Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.
- Los objetos pueden almacenar métodos en su interior.
- Para acceder a las propiedades de un objeto dentro de un método es necesario usar la palabra reservada this por scope de las variables.
- A diferencia de otros lenguajes de programación se pueden añadir, actualizar, o eliminar propiedades de una manera muy poco usual pero bastante simple.

### Funciones básicas y flecha.
- Funciones por declaración:
    Esta forma permite declarar una función que existirá a lo largo de todo el código
- Funciones por expresión **funciones anónimas** (o *funciones lambda*).
    Estamos creando una función en el interior de una variable, lo que nos permitirá posteriormente ejecutar la variable (como si fuera una función).
    Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable y haciendo referencia a ella cada vez que queramos utilizarla:
    > **La diferencia fundamental entre las funciones por declaración y las funciones por expresión es que estas últimas sólo están disponibles a partir de la inicialización de la variable. Si «ejecutamos la variable» antes de declararla, nos dará un error.**
- Arrow functions.
    Las Arrow functions, funciones flecha o «fat arrow» son una forma corta de escribir funciones que aparece en Javascript a partir de ECMAScript 6. Básicamente, se trata de reemplazar eliminar la palabra **function** y añadir **=>** antes de abrir las llaves:
    ~~~
    const func = function () {
        return "Función tradicional.";
    };

    const func = () => {
        return "Función flecha.";
    };
    ~~~
    Las fnciones flechas tienen algunas ventajas a la hora de simplificar código bastante interesantes:
    - Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
    > Además, en ese caso, automáticamente se hace un return de esa única línea, por lo que podemos omitir también el return.
    - En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =>.
    - En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>.
    - En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
    - Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).
    Por lo tanto, el ejemplo anterior se puede simplificar aún más:
    ~~~
    const func = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
    const func = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
    const func = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b
    ~~~
    Más info en [Manz.dev](https://lenguajejs.com/javascript/fundamentos/funciones/)

Retorno de las funciones

Ejercicios y ejemplos con cada tipo expuesto

___
## Ciclos y estrucutras de control
- En primitivos cualquier tipo de asignación o cuando es enviado como argumento a una función este es enviado por VALOR 
> TODOS LOS PRIMITIVOS SON PASADOS POR VALOR Y TODOS LOS OBJETOS SON PASADOS POR REFERENCIA.

Las estructuras de control nos permiten alterar el orden de ejecución de JavaScript.

## Patrón módulo

El patrón módulo consiste en un módulo donde se encapsulará toda la lógica de nuestra aplicación o proyecto. Dentro de este módulo estarán declaradas todas las variables o funciones privadas y sólo serán visibles dentro del mismo.

Ventajas del patrón módulo:
- Gran potencia y flexibilidad que permite mantener el contexto global limpio de variables y funciones.
- Evita un montón de problemas que pueden surgir cuando tenemos un código lleno de variables globales
- Muy útil para generar componentes re-utilizables y sobre todo modulares.

~~~
    const miModulo = (() => {
        // Privado
        // Público
        return {

        }
    });
~~~
