(()=>{
  //instanciar//
  const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment();

        
        //manejo de los eventos//
        xhr.addEventListener("readystatechange",(e)=>{
          if (xhr.readyState !== 4) {
            return;
          }
          console.log(xhr);

          if (xhr.status >= 200 && xhr.status < 300) {
            console.log('exito');
            let json = JSON.parse(xhr.responseText);
            console.log(json);
            json.forEach(element => {
              const $li = document.createElement('li');
              $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
              $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
          } else {
            let message = xhr.status||"ocurrio un error";
          xhr.innerHTML = `${xhr.status}: ${message}`          }
        });
        //apertura// 
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
        //envio//
        xhr.send();
})();
//los tres pasos de XMLHttpRequest() son: instanciar el XMLHttpRequest(), el manejo de los eventos, apertura, envio 

//fetch

(()=>{
  const $fetch = document.getElementById('fetch'),
  $fragment = document.createDocumentFragment();
  
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=> (res.ok ? res.json():Promise.reject(res)))
  .then((respom)=>{
    respom.foreach((el)=>{
      const $li = document.createElement('li');
      $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
      $fragment.appendChild($li);
    });

    $fetch.appendChild($fragment);
  })
  .catch((err)=>{
    let message = err.statusText ||"Ocurrio un error";
    $fetch.innerHTML = `Error ${err.status}: ${message}`
  })
  .finally(()=> console.log("esto se ejecutara si o no"))
  
})(); 
