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

const $template = document.getElementById("template-card").content,
        $fragment2 = document.createDocumentFragment(),
        cardContent =[
            {
                title: "Tecnologia",
                img:"https://placeimg.com/200/200/tech",
            },
            {
                title: "Animal",
                img:"https://placeimg.com/200/200/Animals",
            },
            {
                title: "Gente",
                img:"https://placeimg.com/200/200/people",
            },
            {
                title: "Arquitectura",
                img:"https://placeimg.com/200/200/arch",
            },
            {
                title: "Naturaleza",
                img:"https://placeimg.com/200/200/Nature",
            },
        ]

cardContent.forEach(el2 => {
    $template.querySelector("img").setAttribute("src", el2.img);
    $template.querySelector("img").setAttribute("alt", el2.title);
    $template.querySelector("figcaption").textContent = el2.title;

    // el importNode es para clonar un template o un nodo el true se utiliza para, este se le agregara todo lo que se le agrego antes as como la img, el src etc, este ademas funciona como algo parecido a una clase constructora//
    let $clone = document.importNode($template,true);
    $fragment2.appendChild($clone);
})

$cards.appendChild($fragment2);
2

// const $newCard = document.createElement(".card");

// $newCard.innerHTML = `<img src="https://placeimg.com/200/200/any" alt="Any">
// <figcaption>Any</figcaption>`;
// $newCard.classList.add("card");
//el clone node nos sirve para clonar al igual que el importNode, se le debe colocar true para qe colene todo//
// const $cloneCards = $cards.cloneNode(true)


// para reemplazar algun elemento del html mediante el dom se puede hacer de la siguiente forma//

// $cards.replaceChild($newCard,$cards.children[2]);

//hay un metodo para agregar un elemento antes de cualquiera por ejemplo en el siguiente ejemplo, se agregara una card antes de la primera tarjeta//

// $cards.insertBefore($newCard,$cards.firstElementChild);
//para eliminar tambien tenemos el siguiente numero//
// $cards.removeChild($newCard.lastElementChild);

//con el cloneNode ya tendriamos una seccion de card iguales acontinuacion//
// document.appendChild($cloneCards);


//de la siguiente forma se modifican elementos de forma nueva y mas facil //

// insertAdjacent...
// .insertAdjacentElement(position,el) este agrega un elemento vendria ser como un appendChild
// .insertAdjacentHtml(position,html) este agrega un html, vendria ser como un innertHTML
// .insertAdjacentText(position,text) este agrega texto vendria ser un textContent

// posiciones osea posiciones que se le colocarian a los insertAdjacent:
// beforeBegin(hermano anterior)
// afterbegion(primer hijo)
// beforeend(ultimo hijo)
// afterend(hermano siguiente)


// $newCard.classList.add("card");

const $cloneCards = $cards.cloneNode(true)
const $newCard2 = document.createElement("figure");

let $contenCard = `<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>`;
// $newCard.classList.add("card");
//aqui se agregaria un elemento antes de la $newcard que vendria siendo la primera carta//
// $cards.insertAdjacentElement("beforebegin",$newCard);

//acontinuacion se agregara el elemento imagen con todo su contenido//
// $newCard.insertAdjacentHTML("beforeend", $contenCard);
//acontinuacion se insertara la nueva card que seria $newCard2 a las cartas en la posicion dada.
$cards.insertAdjacentElement("afterbegin",$newCard2);
//acontinuacion se agega un texto al html des pues del elemento con la palabra any.
// $newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "any")

                                        //MANEJO DE EVENTOS/

//la siguiente funcion se le llama un manejador la cual se va a ejecutar mientras el boton o el usuario haga algo.//
function holaMundo() {
    alert("mi primer evento");
    // console.log(Event);
}

//de la siguiente forma semantica, de esta forma por cada evento solo se le puede colocar una funcioon/

const $eventoSemantico = document.getElementById("evento-2");
$eventoSemantico.onclick = holaMundo;


//nota: cuando se hace una funcion se convierte en un manejador de evento, no se le puede colcar parametros
//en algunos casos se le agrega la (e) como parametro que hace referencia a EVENTO, igual al que se paso por el console.log anterior

$eventoSemantico.onclick = function (e) {
    alert("segundo evento");
    console.log(e);
}

//NOTA existen los manejadores multiples, a estos se les puede agregar diferentes funciones se hace con un AddEventListen ejemplo

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e)=>{alert("holis")});


//cuando se necesita pasar un parametro a una funcion manejadora se hace lo siguiente//

function saludar(nombre = "desconocid@") {
    alert(`hola ${nombre}`)
}

//lo anterior me dara una especie de error, para evitarlo esta funcion "saludar", se ivoca en el addeventlistener en una arrowfuntion ejemplo//

$eventoMultiple.addEventListener("click",()=>saludar());

//para remover eventos//

const $eventoRemover = document.getElementById("evento-remover");

$eventoRemover.addEventListener("dblclick",(e)=>{
    alert(`removiendo el evento de tipo ${e.type}`);
    console.log(e);
})

//para remover un evento se debe hacer de la siguiente forma//

// const  removerDobleClick = (e)=>{
//     alert(`removiendo el evento de tipo ${e.type}`);
//     console.log(e);
//     $eventoRemover.removeEventListener("dblclick",removerDobleClick);
//     $eventoRemover.disabled =  true;
// }

// $eventoRemover.addEventListener("dblclick", removerDobleClick);

const $divsEventos =document.querySelectorAll(".eventos-flujo div");

console.log($divsEventos);

//para agregar eventos dinamicos nos podemos apoyar con los loops ejemplo 

// function flujoEvento(e) {
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
// };

$divsEventos.forEach((div)=>{
    //este es el efecto burbuja que se propaga del mas pequenio al mas grande en este caso del 3 al uno, cuando el 3 item del addeventlistener esta en true es efecto captura, del mas grande al mas pequenio, a esto tambien se le llama propagacion
    div.addEventListener("click",flujoEvento, false)
});



//stopPropagation & preventDefault esto se utiliza cuando no queremos que se propague el evento tomaremos como referencia el ejemplo pasado 

//storpPropagation es para evitar la propagacion del evento ejemplo:

function flujoEvento(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    //acontinuacion el stop propagation evitara que se propague el evento
    e.stopPropagation()
};

$divsEventos.forEach((div)=>{
    div.addEventListener("click",flujoEvento, false)
});

const $linkEvento = document.querySelector(".eventos-flujo a");

$linkEvento.addEventListener("click",(e)=>{
    alert("hola soy tu amigo y docente digital Jonathan MirCha");

    //el preventDefault lo que hace es quitar lo que viene por defecto en este caso seria la direccion o pagina que nos envia este link y solo ejecuta la alert
    e.preventDefault();
})






















