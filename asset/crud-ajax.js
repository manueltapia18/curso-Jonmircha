const d = document,
      $table = d.querySelector('.crud-table'),
      $form = d.querySelector(".crud-form"),
      $title = d.querySelector(".crud-title"),
      $template = d.getElementById("crud-template").content,
      $fragment = d.createDocumentFragment();

 const ajax = (option)=>{
  let{url,method,success,error,data} = option;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", e=>{
    if (xhr.readyState !== 4) {
      return;
    }
  });

  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type","application/json; charset =utf-8");
  xhr.send(JSON.stringify(data));
 }

console.log(object);

      