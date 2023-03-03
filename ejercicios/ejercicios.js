// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


// ejercicio 1

// function miFuncion(cadena) {
//   return cadena;
// }

// console.log(miFuncion('hola mundo').length);

//forma de realizarlo con jonmircha

let miFuncion = (cadena = '') => (!cadena)? console.warn("debes ingresar una cadena"): console.info(`el string ${cadena} que ingresaste tiene ${cadena.length}'caracteres`);


//ejercicio 2

// function miFuncion2(nombre) {
//   return nombre;
// }
// console.log(miFuncion2('hola mundo').slice(0,5));

//forma de realizarlo con jonmircha

const recortarTexto = (cadena2 = '', longitud = undefined)=>(!cadena2)?console.warn('no ingresaste ningun caracter'):console.log(cadena2.slice(0,longitud));

console.log("hola mundo",5);


//ejercicio 3

function miFuncion3(nombe) {
  return nombe.split(' ');
}
console.log(miFuncion3('hola que tal'));

//ejercicios 4

// function miFuncion4(str, value) {
  
// }
// console.log(miFuncion4("hola mundo",3));
// function Concatenar_String(A_Repetir, Num_Veces){
//   let Valor_Final = "";
// for(let i = 0; i < Num_Veces; i ++){
// 		Valor_Final += A_Repetir;
// 	} 
// 	return Valor_Final;
// }

// console.log(Concatenar_String("hola mundo ",3));

//forma de realizarlo con jonmircha

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) {
    return console.warn("no ingresaste ningun texto");
  }
  if (veces === undefined) {
    return console.warn("no ingresaste valor para repetir");
  }
  if (Math.sign(veces)=== -1) {
    return console.error("el numero no puede ser negativo");
  }

  for (let i = 0; i <= veces; i++) {
    console.log(`${texto},${i}`);
    
  }
}


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

//ejercicio 5

function miFuncion5(str2) {

  return str2.split("").reverse().join("");
}

console.log(miFuncion5('hola mundo'));

// ejercicio 6
