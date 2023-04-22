//  1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function mifuncion(string) {
  return string.length;
}
console.log(mifuncion('hola mundo'));
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function mifuncion2(string,num) {
  return string.slice(0,num);
}
console.log(mifuncion2("hola mundo",4));
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function miFuncion3(string,num) {
  return string.split(num).join();
}
console.log(miFuncion3("hola que tal"," "));

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function mifuncion4(num,num2) {
  let string = '';
  num.split("").join();
  for (let i = 0; i < num2; i++) {
    string += num;
  }
  return string;
}
console.log(mifuncion4('hola mundo',3));

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function miFuncion5(string) {
  let nuevo1 = string.split("").reverse().join(' ');
  return nuevo1;
}
console.log(miFuncion5('hola mundo'));
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function mifuntion6(text,text2) {
  let nuevo = text.split(" ");
  let contador = 0;
  for (const iterator of nuevo) {
    if (iterator === text2) {
      contador += 1;
    }
  }
  return contador;
};
console.log(mifuntion6("hola mundo adios mundo", "mundo"));
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function mifuntion7(string) {
  if (string === string.split("").reverse().join('')) {
    return "si es polidromo";
  } else {
    return "no es polidromo";
  }
}
console.log(mifuntion7("ana"));
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

let nuevo = "xyz1, xyz2, xyz3, xyz4 y xyz5";
const nue = /xyz/ig;
console.log(nuevo.replace(nue,''));

function mifuntion9(str,str1) {
  const nuevo = new RegExp(str1,"g")
  let otro = str.replace(nuevo,"");
  return otro;
}
console.log(mifuntion9("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function mifuntion10(num1,num2) {
  return Math.random()*(num2 - num1)+num1;
}
console.log(mifuntion10(501,600));
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
function mifuntion11(num) {
  let str = num.toString();
  return num.toString() === str.split('').reverse().join('') ? "si":"no"
}
console.log(mifuntion11(2002));
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function mifuntio12(num) {
  let num2 = 1;
  for (let i = 1; i <= num; i++) {
    num2 *= i;
  }
  return num2
}
console.log(mifuntio12(5));

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
function par(num) {
  if (num % 2 === 0) {
    return "Numero es par";
  } else {
    return "numero impar"
  };
}
console.log(par(2));
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
function Fahrenheit(num,str) {
  if (str === 'c') {
    return ((num - 32)/1,8) + '°f' 
  }
  if (str === 'f') {
    return ((num * 1.8)+32)+ '°c' 
  }
}
console.log(Fahrenheit(32,"c"));
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.


// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class pelicula{
  constructor(){
    
  }
}

