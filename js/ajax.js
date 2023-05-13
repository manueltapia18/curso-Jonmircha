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
          // console.log(xhr);

          if (xhr.status >= 200 && xhr.status < 300) {
            // console.log('exito');
            let json = JSON.parse(xhr.responseText);
            // console.log(json);
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
  // .finally(()=> console.log("esto se ejecutara si o no"))
  
})(); 


//async y await
(()=>{
  const $async = document.getElementById("fetch-async");
  const $fragment = document.createDocumentFragment();

async function getData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();
      if (!res.ok) {
        throw{status: res.status, statusText: res.statusText};
      }
      json.forEach(element => {
        const $li = document.createElement('li');
        $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
        $fragment.appendChild($li);
      });
      $async.appendChild($fragment);
      console.log($async);
  } catch (error) {
    let message = $async.status||"ocurrio un error";
    $async.innerHTML = `${$async.status}: ${message}`   
  }
}
})();

//axios//
(()=>{
  const $axios = document.getElementById("axios");
  const $fragment = document.createDocumentFragment();

  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    console.log(res);
    let json = res.data;
  })
  .catch((err)=>{
    console.log(err);
  })
  .finalli(()=>{
    console.log("esto se ejecutara siempre");
  })
})();

//axios con async await//
(()=>{
  const $axiosAsync = document.getElementById("axios-async");
  const $fragment = document.createDocumentFragment();

  axios
  .get("https://jsonplaceholder.typicode.com/users")
  
  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      let json = await res.data;

      json.forEach(element => {
        const $li = document.createElement('li');
        $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
      console.log($async);

    } catch (err) {
      let message = $axiosAsync.status||"ocurrio un error";
    $axiosAsync.innerHTML = `${$axiosAsync.status}: ${message}`
    }
  } 
  
})();

