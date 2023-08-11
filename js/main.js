import { data } from "./data.js";
import { descripcion } from "./descripcion_producto.js";

let main_DOM = document.querySelector("#main");

data.forEach((cada_item) => {
  let item = document.createElement("div");
  item.className = "item";

  item.innerHTML = `
    <div class="caja_img">
        <img src="${cada_item.img}"/>
    </div>
    <h2>${cada_item.titulo}</h2>
    <p>${cada_item.descripcion}</p>
    <span>Q100.00</span>
  `;
  main_DOM.appendChild(item);
});

let productos = document.querySelectorAll(".item");
let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");

function mostrarDescripcion(event) {
  caja_descripcion_DOM.innerHTML = '';

  let index = Array.from(productos).indexOf(event.currentTarget);

  let productDescriptionHTML = descripcion(data, index);
  caja_descripcion_DOM.innerHTML = productDescriptionHTML;

  // Ocultar todos los productos
  productos.forEach((producto) => {
    producto.style.display = "none";
  });
}

productos.forEach((cada_elemento) => {
  cada_elemento.addEventListener("click", mostrarDescripcion);
});

/**-------------------------------------------------------------------------- */









