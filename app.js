// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declara el Array para almacenar los nombres de amigos
let amigos = [];

// Fuunción para agregar amigo
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let  nombreAmigo = inputAmigo.value.toUpperCase().trim(); // "toUpperCase()": Convierte una cadena en letra mayúscula, mientra "trim()": elimina los espacios en blanco del principio y del final de una cadena.  
    //console.log(nombreAmigo);
    if (validarLaEntrada(nombreAmigo)) {
      asignarTextoElemento("h4", "");
      // Agregar los nombres al array de amigos
      amigos.push(nombreAmigo);
      //console.log(amigos);
      //limpia el campo donde se captura el nombre del amigo
      inputAmigo.value="";
      inputAmigo.focus();
      actualizarListaAmigos();
    }
}  

// Función para validar entrada de datos
function validarLaEntrada(nombreAmigo) {
  let bandera = false;
  let mensaje = "";
  let nombre1 = document.getElementById("amigo");
  nombre1.value = ""; //Limpia el campo donde se captura el nombre del amigo
  // Validar que el campo no este vacio
  if (nombreAmigo.length < 1) {
    mensaje = "Por favor, inserte un nombre.";
    // Validar que el nombre no este duplicado
  } else if (amigos.includes(nombreAmigo)) {
     mensaje = `El amigo [${nombreAmigo}] ya existe.`;
     // Validar que ingrese caracteres válidos
    } else if (!sonCaracteresValidos(nombreAmigo)) {
       mensaje = `[${nombreAmigo}] No es válido. Sólo se admiten letras y espacio.`;
      } else {
       bandera = true;
      }
  if (!bandera) {
    asignarTextoElemento("h4", mensaje);
  }
  return bandera;
}

// Función permite ingresar solo caracteres válidos al input
function sonCaracteresValidos(nombreAmigo) {
  //valida si es numero = /(^[0-9])*$/.test(nombreAmigo)
  //valida si es una cadena de caracteres = /^[A-Z]+$/i  
  // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
  // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
  return /^[A-Z|\u00D1| |\u00F1]+$/i.test(nombreAmigo); //false= No es una Letra, true = es una letra
}

// Función Asignar Texto
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

// Función Actualizar Lista de Amigos
function actualizarListaAmigos(){
  let listaAmigos = document.getElementById("listaAmigos")
  listaAmigos.innerHTML = "";
  // Recorre el array con un ciclo FOR
  for(let i = 0; i < amigos.length; i++){
    let item = document.createElement("li");
    item.textContent = amigos[i];
    listaAmigos.appendChild(item);
  }
}

// Función Sortear Amigo
function sortearAmigo(){
  asignarTextoElemento ("h4", "");
  if (amigos.length === 0) { // Comprueba si el array [amigos] está vacio
    asignarTextoElementoById("mensaje-sorteado", "No hay amigos registrados.");
  return;
  }
   // Para seleccionar un índice aleatorio del arreglo Math.floor(Math.random()).
  let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
  // Mostrar el resultado en el HTML
  let resultado = document.getElementById("resultado");
  resultado.innerHTML= `El amigo sorteado es: ${amigoSorteado}`;

  let limpiarLista = document.getElementById("listaAmigos");
  limpiarLista.innerHTML = "";
} 

function asignarTextoElementoById(elemento, texto) {
  let elementoHTML = document.getElementById(elemento);
  elementoHTML.innerHTML = texto;
  return;
}