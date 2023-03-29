// const btn = document.querySelector("#menu");
// const div = document.querySelector("#main")

// btn.addEventListener("click",()=>{
//   div.classList.toggle("active")
// });

export default function hamburguerMenu(panelbtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e)=>{
    if (e.target.matches(panelbtn)|| e.target.matches(`${panelbtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active")
      d.querySelector(panelbtn).classList.toggle("is-active")
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelbtn).classList.remove("is-active");
    }
  });
}
//el asterico que se coloco anteriormente hace referencia a los hijos de ese selector//

