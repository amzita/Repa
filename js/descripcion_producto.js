export function descripcion(data, index) {
  const service = data[index];

  
  const isUserFriendly = service.herramientas.length <= 3;

  return `
    <div class="base">
      <section class="cajita">
        <img class="imagen" src="${service.img}" alt="${service.titulo}">
      </section>

      <section class="cajota">
        <h1 class="titulo_principal">${service.titulo}</h1>
        <h2 class="descripciones">${service.descripcion}</h2>
        <div class="precios">
          <button class="precio-valor">Q100.00</button>
          <button class="comprar-btn">Comprar</button>
          ${isUserFriendly ? '<button class="agalo">Hágalo usted mismo</button>' : ''}
        </div>
        <ul class="lista">Herramientas: ${service.herramientas.map(herramienta => `<li>${herramienta}</li>`).join("")}</ul>
        <ul class="lista">Pasos: ${service.pasos.map(pasos => `<li>${pasos}</li>`).join("")}</ul>
      </section>
    </div>
  `;
}


  













  
  


 

