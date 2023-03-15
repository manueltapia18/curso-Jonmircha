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