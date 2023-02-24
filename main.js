// objetos
//se accede mediante puntos o corchetes

//funciones
//* cuando hacemos return el codigo que se encuentra debajo de este no se ejecuta
//hoisting

//*que lleva la declaracion arriba de cuando se llama esto pasa con var

//condicionales o estructuras de control.

//* un if else, se puede simplificar con un operador ternario siempre y cuando solo se ocupe una linea de codigo, o dicho en otras palabras tenga 3 partes
//*la sintaxis de un operador ternario es; (condicion)?prte verdadera:parte falsa;
//* estos condicionales son: swich, ternario, if

//loop o ciclos

//* en for in cuando se recorre un objeto, para acceder a los valores de un objeto se debe hacer mediante [], ya que los puntos no sirve

//Manejo de errores
//* se trata del try cach, donde el cach captura si hay algun error en el try-

try {
  console.log("en el try se agrega el codigo a evaluar");
} catch (error) {
  console.log("el catch, captura cualquier error surgido o lanzado en el try");
}finally{
  console.log("se ejecuta siempre al final de un bloque try catch");
}

// ejemplo de try catch

try {
  let numero = 10;
  if (isNaN(numero)) {
    throw new Error("el caracter introducido no es un numero")
  }
  console.log(numero*numero);
} catch (error) {
  console.log(`se produjo el siguiente error ${error}`);
}


//break & continue 

// estos no se pueden utilizar en metodos de los arreglos, se utilizan mas en ciclos

//ejemplo

const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
  if (i=== 5) {
    break;
  }
  console.log(numeros[i]);
}

for (let i = 0; i < numeros.length; i++) {
  if (i=== 5) {
    continue;
  }
  console.log(numeros[i]);
}


//destructuracion

const num = [1,2,3];
//el siguiente es sin destructurar.

let uno = num[0],
    dos = num[1],
    tres = num[2];

console.log(uno,dos,tres);
//con destructuracion.

const [one,two,three] = num;
console.log(one,two,three);

// en la destructuracion la variable a crear debe llamarse igual que como esta almacenada en el objeto o array.

//ejemplo:

let persona = {
  nombre: "Manuel",
  apellido: "tapia",
  edad: 29
}

let{nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);

//objetos literales

//esto mejora la forma de escritura ejemplo

let nombre2 = "Aurelio",
    edad2 = 7;

const perro = {
  nombre2,
  edad2,
  raza: "nucita",
  ladrar(){
    console.log("guau guao");
  }
}

console.log(perro);

// parametros REST & OPERADOR SPREAD ejemplo:

function sumar(a,b,...c) {
  let resultado = a + b;
  c.forEach(n => resultado += n);
  return resultado;
}
console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,4,7));
console.log(sumar(1,2,5,3,5));
console.log(sumar(1,2,6,7,8,0));

const arr1 =[1,2,3,4,5],
      arr2 = [6,7,8,9];

const arr3 = [...arr1,...arr2];
console.log(arr3);

//arrow funtion
//* las funciones declaradas pueden generar hoisting ejemplo de funciones declaradas: funtion nombre (){};

//* las arrow funtion tienen un return implicito, cuando tienen un solo parametro se puede omitir los parentesis, y cuando no tiene pararemtros se debe colocar los parentesisi
