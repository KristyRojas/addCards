const createCardNode = () => {
  const imagen = document.createElement("img");
  // debugger
  imagen.src = `./assets/images/avatar-jessica.jpeg`;
  const cabe = document.createElement("div");
  cabe.className = "cabe";
  let nombre = document.createElement("h3");
  nombre.className = "nombre";
  const tex = document.createTextNode("Jessica Randall");
  nombre.appendChild(tex);
  let pala = document.createElement("h5");
  pala.className = "pala";
  const text = document.createTextNode("London, United Kingdom");
  pala.appendChild(text);
  let parrafo = document.createElement("p");
  parrafo.className = "parrafo";
  const te = document.createTextNode(" ''Front-end developer and avid reader.'' ");
  parrafo.appendChild(te);
  const medio = document.createElement("div");
  medio.className = "medio";
  /* const parrafo = document.createElement("p")
  parrafo.className = "description"
  const text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas.')
  parrafo.appendChild(text) */

  let boton1 = document.querySelector("button");
  boton1.name = "github";
  let GitHub = document.createElement("button");
  let texto1 = document.createTextNode("GitHub");
  GitHub.appendChild(texto1);
  let boton2 = document.querySelector("button");
  boton2.name = "frontend";
  let FrontEnd = document.createElement("button");

  let texto2 = document.createTextNode("FrontEnd");
  FrontEnd.appendChild(texto2);
  let boton3 = document.querySelector("button");
  boton3.name = "linkdin";
  let LinkedIn = document.createElement("button");
  let texto3 = document.createTextNode("LinkedIn");
  LinkedIn.appendChild(texto3);
  let boton4 = document.querySelector("button");
  boton4.name = "twiteer";
  let Twiteer = document.createElement("button");
  let texto4 = document.createTextNode("Twiteer");
  Twiteer.appendChild(texto4);
  let boton5 = document.querySelector("button");
  boton5.name = "insta";
  let Instagram = document.createElement("button");
  let texto5 = document.createTextNode("Instagram");
  Instagram.appendChild(texto5);
  let final = document.createElement("div");
  final.className = "final";
  /* const parrafo = document.createElement("p")
  parrafo.className = "description" */
  const contenedor = document.createElement("div");
  contenedor.className = "contenedor";

  cabe.appendChild(imagen);
  medio.appendChild(nombre);
  medio.appendChild(pala);
  medio.appendChild(parrafo);
  final.appendChild(GitHub);
  final.appendChild(FrontEnd);
  final.appendChild(LinkedIn);
  final.appendChild(Twiteer);
  final.appendChild(Instagram);
  contenedor.appendChild(cabe);
  contenedor.appendChild(medio);
  contenedor.appendChild(final);
  return contenedor
}
const mountNode = document.querySelector("#app");
const addCardButton = document.querySelector('button');
const addCard = () => {
  mountNode.appendChild(createCardNode());
}

addCardButton.addEventListener('click', addCard);



/* console.log("hola mundo");
function suma(x, y) {
  let z;
  debugger;
  z = x + y;
  return z;
}
let boton = document.querySelector("button");
console.log(boton);
boton.name = "otroNombre";
let feisbuk = document.createElement("button");
console.log(feisbuk);
let texto = document.createTextNode("feisbuk");
console.log(texto);
feisbuk.appendChild(texto);
let contenedorDeBotones = document.querySelector(".final");
contenedorDeBotones.appendChild(feisbuk); */
