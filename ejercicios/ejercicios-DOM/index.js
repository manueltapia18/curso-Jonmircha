import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
  hamburguerMenu(".panel-btn",".panel", ".menu a");
  digitalClock("#Reloj","#activar-reloj","#Desactivar-reloj");
})



