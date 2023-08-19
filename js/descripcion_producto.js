import { data } from "./data.js";

export function descripcion(id) {

  let producto = id - 1;

  let contenido=
     `
      <div class="cajota">
        <section class="cajota1">
          <img class="imagenes" src="${data[producto].img}" alt="${data[producto].titulo}">
        </section>
  
        <section class="cajota2">
          <h1 class="titulo_principal">${data[producto].titulo}</h1>
          <h2 class="descripciones">${data[producto].descripcion}</h2>
        
          <section class="caja_bot">
          <button class="button1"> Compra </button>
          ${
            data[producto].estado
              ? '<button class="button"> Hágalo Tu ahora.</button>'
              : ''
          }
        </section>



          <span class="precio">Q100.00</span>

          </section>


      </div>
    `;
    

    return contenido;
  }
  











  













  
  


 

