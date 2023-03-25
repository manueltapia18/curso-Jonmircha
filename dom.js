// console.log(document.getElementsByTagName("li"));

// //interaccion con los atributos//

// console.log(document.documentElement.lang);

// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom").href);
// //la manera correcta o mas recomendada es la siguiente//
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang = "en";
// document.documentElement.setAttribute("lang","es-MX");

// //se le antepone un signo de dolar a los elemento del dom guardados en cariables para saber que se esta trabajando en el dom ejemplo://

// const $linkDOM = document.querySelector(".link-dom");

// $linkDOM.setAttribute("target","_blank")
// $linkDOM.setAttribute("href","https://youtube.com/jonmircha")
// console.log($linkDOM.hasAttribute("target"));
// $linkDOM.removeAttribute("_blank")
// console.log($linkDOM.hasAttribute("_blank"));

//data-attribute//


const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "5rem";

//variables css -custom properties CSS//

const $html = document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");


$body.style.setProperty("background-color",varDarkColor);

//clases css DOM//

const $card =document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
// el metodo toggle si tiene una clase, se la quita, y si la tiene se la agrega ejemplo//
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
//el metodo replace reemplaza una clase por otra//
$card.classList.replace("rotate-45", "rotate-135");
//para agregar o eliminar varias clases a la vez solo basta con agregar una coma entre ellas ejemplo:
$card.classList.add("opacity-80","sepia");
console.log($card.classList.contains("opacity-80","sepia"));

// DOM texto y html//

const $whatIsDom = document.getElementById("que-es")



let text = `
    <p>
    El modelo de objetos del documento(<b><i>DOM- document Object model</i></b>)es un API para documentos HTML y XML.
    </p>
    <p>
    este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
    </p>
    <p>
    <mark> el DOM no es parte de la espesificacion de javascript, es una API para los navegadores, </mark>
    </p>
`;

// el innerText no hace parte del estandar fue creado solo para internet explorer y agrega con todo y etiquetas
$whatIsDom.innerText = text;
//tenemos tambien textContent que al igual que innerText no agrega las etiquetas respeta los espaciados y es mas utilizado ejemplo:
$whatIsDom.textContent = text;
//mientras que innerHTML si reenderiza las etiquetas colocadas ejemplo p, br etx etiquetas de html ejmplo:
$whatIsDom.innerHTML = text;

//la diferencia entre textContent y InnerHTML es que textContent se debe usas cuando se vaya a ingresar solo texto e innerthtml cuando se vaya a ingresar html 

//tambien podemos usar la propiedad outerHTML esta reemplaza de mejor manera lo colocado de html//
$whatIsDom.outerHTML = text;

const $cards = document.querySelector(".cards");

console.log($cards);

//para obtener algun elemento seleccionado//

//para obtener el elemento padre del elemento seleccionado
console.log($cards.parentElement);
//para obtener el primer elemento se hace lo siguiente//
console.log($cards.firstElementChild);

const $figure = document.createElement("figure"),
        $img = document.createElement("img"),
        $figcaption = document.createElement("figcaption"),
        $figcaptionText = document.createTextNode("Animals new");

//aqui se agregara atributos en este caso SRC Y ALT//
$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
//aqui se agregara una clase en este caso CARD//
$figure.classList.add("card");
//aqui se agregara el texto colocado en figcaptionText llamado ANIMALS//
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);

$cards.appendChild($figure);
        
const estaciones = ['primavera','otono','verano','invierno'],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del anio</h3>");
document.body.appendChild($ul);

estaciones.forEach((el)=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

//tambien se puede hacer con innnertHTML//

const continentes = ['africa','america','asia','europa','oceania'];
const $ul2 = document.createElement("ul");

document.write("<h3>continentes del mundo</h3>");
document.body.appendChild($ul2);


$ul2.innerHTML = "";
continentes.forEach((el)=>($ul2.innerHTML += `<li>${el}</li>`))

//para trabajar con este tipo de cosas se recomienda usar fragmentos esto ayudara a mejorar el rendimineto de nuestra aplicacion ejemplo//

const meses = ['enero','febrero','marzo','abril','mayo', 'junio', 'julio','agosto','septiembre','obtubre','noviembre','diciembre'];
const $ul3 = document.createElement('ul');
const $fragment = document.createDocumentFragment();

meses.forEach((el)=>{
    const $li = document.createElement('li');
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del anio </h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);














