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

// try {
//   console.log("en el try se agrega el codigo a evaluar");
// } catch (error) {
//   console.log("el catch, captura cualquier error surgido o lanzado en el try");
// }finally{
//   console.log("se ejecuta siempre al final de un bloque try catch");
// }

// ejemplo de try catch

// try {
//   let numero = 10;
//   if (isNaN(numero)) {
//     throw new Error("el caracter introducido no es un numero")
//   }
//   console.log(numero*numero);
// } catch (error) {
//   console.log(`se produjo el siguiente error ${error}`);
// }


//break & continue 

// estos no se pueden utilizar en metodos de los arreglos, se utilizan mas en ciclos

//ejemplo

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < numeros.length; i++) {
//   if (i=== 5) {
//     break;
//   }
//   console.log(numeros[i]);
// }

// for (let i = 0; i < numeros.length; i++) {
//   if (i=== 5) {
//     continue;
//   }
//   console.log(numeros[i]);
// }


//destructuracion

// const num = [1,2,3];
//el siguiente es sin destructurar.

// let uno = num[0],
//     dos = num[1],
//     tres = num[2];

// console.log(uno,dos,tres);
// //con destructuracion.

// const [one,two,three] = num;
// console.log(one,two,three);

// en la destructuracion la variable a crear debe llamarse igual que como esta almacenada en el objeto o array.

//ejemplo:

// let persona = {
//   nombre: "Manuel",
//   apellido: "tapia",
//   edad: 29
// }

// let{nombre,apellido,edad} = persona;
// console.log(nombre,apellido,edad);

//objetos literales

//esto mejora la forma de escritura ejemplo

// let nombre2 = "Aurelio",
//     edad2 = 7;

// const perro = {
//   nombre2,
//   edad2,
//   raza: "nucita",
//   ladrar(){
//     console.log("guau guao");
//   }
// }

// console.log(perro);

// parametros REST & OPERADOR SPREAD ejemplo:

// function sumar(a,b,...c) {
//   let resultado = a + b;
//   c.forEach(n => resultado += n);
//   return resultado;
// }
// console.log(sumar(1,2));
// console.log(sumar(1,2,3));
// console.log(sumar(1,2,4,7));
// console.log(sumar(1,2,5,3,5));
// console.log(sumar(1,2,6,7,8,0));

// const arr1 =[1,2,3,4,5],
//       arr2 = [6,7,8,9];

// const arr3 = [...arr1,...arr2];
// console.log(arr3);

//arrow funtion
//* las funciones declaradas pueden generar hoisting ejemplo de funciones declaradas: funtion nombre (){};

//* las arrow funtion tienen un return implicito, cuando tienen un solo parametro se puede omitir los parentesis, y cuando no tiene pararemtros se debe colocar los parentesisi

// prototipos

/* clases = modelo a seguir
*objetos = una instancia de una clase,
*atributo= caracteristica o propiedad de un objeto,(variable dentro de un objeto)
*metodo = son acciones que un objeto puede realizar*/

//funcion constructura

/*function animal(nombre,genero) {
  this.nombre = nombre;
  this.genero = genero;
  this.sonar = function() {
    console.log("guau guau");
  }
  this.saludar = function() {
    console.log(`hola mi nombre es ${this.nombre}`);
  }
}*/

// const abril = new animal("abril", "hembra"),
//         aurelito = new animal("aurelio","macho");

//lo ideal es que los metodos en una funcion contructora queden por fuera de la funcion ejemplo

// function animal(nombre,genero) {
//   this.nombre = nombre;
//   this.genero = genero;
// }

// animal.prototype.sonar = function() {
//     console.log("guau guau");
//   }
// animal.prototype.saludar = function() {
//     console.log(`hola mi nombre es ${this.nombre}`);
//   }

  

//herencia prototipica//

// function perro(nombre,genero,tamanio) {
//   this.super = animal;
//   this.super(nombre,genero);
//   this.tamanio = tamanio;
// }
// //perro esta heredando de animal
// perro.prototype = new animal();
// perro.prototype.constructor = perro;

// //sobreescritura de metodo del prototipo padre en el hijo

// perro.prototype.sonar = function() {
//   console.log('soy un perro y mi sonido es ladrar');
// };
// perro.prototype.ladrar = function () {
//   console.log('guau guauuuu!!!');
// };

//clases en javascript//

class animal{
  // el constructor es un metodo especial que se ejecuta en el momento de instanciar la clase//
  constructor(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
  }
  //metodos//
  sonar(){
    console.log('hago sonidos porque estoy vivo');
  }
  saludar(){
    console.log(`hola me llamo ${this.nombre}`);
  }
}

// const mimi = new animal('mimi', 'hembra'),
//       scooby = new animal('scooby','machito');

//para heredar con las clases  se hace con la palabra extends, ejemplo:

class perro extends animal{
  constructor(nombre,genero,tamanio){
    //con el metodo super() se manda a llamar el constructor de la clase padre.
    super(nombre,genero);
    //tamanio como no pertenece al constructor lo llamamos con el this, ejemplo:
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar(){
    console.log('soy un perro y mi sonido es el ladrido');
  }
  ladrar(){
    console.log('guau guauuuuuu uuu');
  }
  static queEres(){
    console.log('los perros somos animales mamiferos que pertenecemos a la familia de los caninos. somos considerados el mejor amigo de los hombres.');
  };

  //los setters y getter son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase, donde getter es obtenedor y setter es establecedor
  get getRaza(){
    return this.raza;
  }
  set setRaza(raza){
    this.raza = raza;
  }
}

const mimi = new animal('mimi', 'hembra'),
      scooby = new perro('scooby','machito','gigante');

//ejemplo de como acceder a getraza es como si fuera un atributo ejemplo

scooby.getRaza = 'gran danes';
console.log(scooby.getRaza);


//metodos estaticos, getters y setters//
//estaticos.

// son metodos que se pueden utilizar sin necesidad de instanciarlos, para esto se le debe agregar a esta funcion la palabra static ejemplo: esto esta ejemplificado arriba 


//objeto date//

console.log(Date);
let fecha = new Date();
console.log(fecha);

//objeto math//

// math es utilizado para operaciones matematicas.

console.log(math.pi); //te da el valor de pi.
console.log(math.abs);// devuelve el valor tal como esta en positivo.
console.log(math.ceil); //devuelve el siguiente numero.
console.log(math.floor);//redondea al numero anterior
console.log(math.raund); //redonde el numero.
console.log(math.sqrt); // te da la raiz cuadrada
console.log(math.pow); //eleva un numero al exponente
console.log(math.randon); //devuelve un numero aleatorio entre el 0 y el 1, para hcer un numero aleatorio mayor se hace de la siguiente forma ejemplo: math.randon()*1000;
//para que el numero que me de sea un entero se puede hacer lo siguiente math.raund(math.randon()*1000)


//expresiones regulares//

//son una secuencia de caracteres que forma un patron de busqueda, principalmente utilizada para busqueda de patrones de cadenas de caracteres//



let cadena = 'lorem ipsum';

let expReg2 = new RegExp('lorem','ig');
console.log(expReg2.test(cadena));

//tambien se puede hacer de la siguiente forma

let exreg3 = /lorem{1}/g;

//tenemos opciones como

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

//funciones anonimas//

//funcion anonima auto ejecutable

// setTimeout y setInterval//
//*esto hace que cierta accion se ejecute al tiempo que queramos*//

let temporizador = setTimeout(() => {
  console.log("ejecutando un setTimeOut, ");
},3000);


let temporizador2 = setInterval(()=>{
  console.log("esto se ejecuta indefinidamente, cada cierto intervalo de tiempo");
},1000)

//ejemplo 

setInterval(()=>{
  console.log(new Date().toTimeString());
},1000)

// asincronia y el event loop//

