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
