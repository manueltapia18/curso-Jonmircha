// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


// ejercicio 1

function miFuncion(cadena) {
  return cadena;
}

console.log(miFuncion('hola mundo').length);


//ejercicio 2

function miFuncion2(nombre) {
  return nombre;
}
console.log(miFuncion2('hola mundo').slice(0,5));


//ejercicio 3

function miFuncion3(nombe) {
  return nombe.split(' ');
}
console.log(miFuncion3('hola que tal'));

//ejercicios 4

