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

const invertirCadena = (cadena3="") => (!cadena3) ? console.warn('no ingresaste una cadena de texto'):console.info(cadena3.split("").reverse().join(""))

console.log(invertirCadena('javascript es un lenguaje increible'));

// ejercicio 6

const textoEnCadena =(cadena4 = "", texto2 = "") => {
  if (!cadena4) {
    return console.warn("no ingresaste el texto largo");
  };

  if (!texto2) {
    return console.warn("no ingresaste la palabra a evaluar")
  };

  let i = 0,
      contador = 0;

  while (i!== -1) {
    i = cadena4.indexOf(texto2,i)
    if (i!==-1) {
      i++;
      contador++;
    }
  }
  return console.info(`la palabra ${texto2} se repite ${contador} veces`);
}

textoEnCadena();

//ejercicio 8

const eliminarCaracteres = (texto6="", patron="") => (!texto6)?console.log("no ingresaste un texto"):(!patron)? console.warn("no ingresaste un patron de caracteres"):console.info(texto6.replace(new RegExp(patron,"ig"),""));

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const numeroAleatorio = (max = 0 ,min = 0) => {
if (!min) {
  return console.log('coloca un valor minmo');
};
if (!max) {
  return console.log("colca un maximo");
};

return Math.random() * (max - min)+min;
}

console.log(numeroAleatorio(8,9));

//ejercicios 10

const capicua =(numero9= 0) => {
  if(!numero9)return console.warn("no ingresaste un numero");
  if(typeof numero9 !== "number")return console.error( `el valor ${numero9} ingresado no es un numero`);

  numero9 = numero9.toString();
  let alRevez = numero9.split("").reverse().join("");

  return (numero9 === alRevez)
  ?console.info(`si es capicua, numero original ${numero9}, numero al revez ${alRevez}`)
  :console.info(`no es capicua numero original ${numero9} numero al reves ${alRevez}`)
}

//ejercicio 11

const factorial = (numero7 = undefined) => {
  if(numero7 === undefined) return console.error("no ingresaste nungun valor");
  if(typeof numero7 !== "number") return console.error(`el valor ${numero7} ingresado no es un numero`);

  if(Math.sign(numero7)=== -1)return console.error("el numero ingresado no puede ser negativo");

  let factorial2 = 1;
  for (let i = numero7; i > 1; i--) {
    factorial2*=i;
  }
  return console.info (`el factorial de ${numero7} es ${factorial2}`)
}

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.






















































