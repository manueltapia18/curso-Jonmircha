import hamburguerMenu from "./menu_hamburguesa.js";

const d = document;
const reloj = document.getElementById("reloj");
const date = document.getElementById("date");


d.addEventListener("DOMContentLoaded", (e)=>{
  hamburguerMenu(".panel-btn",".panel", ".menu a");
})

function numero() {
  let fecha = new date('December 17, 1995 03:24:00');
  fecha.toLocaleTimeSTring('en-US');
  date.appendChild(fecha);
  console.log(date);
}

reloj.addEventListener("click",numero);

// export default function name(params) {
//   const reloj = document.getElementById("reloj");

//   let hora = new Date();
//   hora.toLocaleTimeString();
//   const Date = document.getElementById("Date");
//   Date.addEventListener("click", (e)=>{
  
//   })
// }




