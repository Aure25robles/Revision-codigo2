const formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
//corregi prevent le faltaba Default
  e.preventDefault();
  //cambie var por const y let.
  const n = formulario.elements[0]
  const ege = formulario.elements[1]//cambie el nombre de la variable para no confundir
  const na = formulario.elements[2]

  let nombre = n.value.trim(); //Agrego trim para eliminar espacios en blanco
  let edad = parseInt(ege.value.trim(), 10);//estaba incompleto, debe agrarse parseInt porque debe ser un numeor entero. agrege ege y complete con trim, para los espacios en blaco.
//coloque los ; que hacian falta
  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (isNaN(edad) || edad < 18 || edad > 120) {
    ege.classList.add("error"); //cambie e por ege que asi se llama la variable
  }

if (nombre.length > 0 && (isNaN(edad) && edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);//agregue isNaN para porque es para que la edad es un numero valido.
  }
}

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados");

const elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");//en esta linea added no es correcto, el correcto es .add
lista.appendChild(elementoLista);

const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

//Cambie el nombre del botonBorrar ya que ya estaba declarado por lo que le puse botonEliminar, tambien corteLinea por lo que le puse corteLinea2
const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar invitado";
botonEliminar.id = "boton-borrar";
const corteLinea2 = document.createElement("br");
elementoLista.appendChild(corteLinea2);
elementoLista.appendChild(botonEliminar);

 botonEliminar.onclick = function() {
// this.parentNode.style.display = 'none';
botonEliminar.parentNode.remove()
  }
}