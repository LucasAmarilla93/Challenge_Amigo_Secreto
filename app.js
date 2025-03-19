// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/

let listaAmigosArray = [];

/*Obtengo el valor de la lista del html*/
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");
let clickSorteo = 0;

function obtenerNombre() {
  let nombre = document.getElementById("amigo").value;
  return nombre;
}

function validarNombre(nombre) {
  if (nombre == "") {
    //console.log("Por favor, inserte un nombre."); //cambiar por un alert.
    alert("Ingrese un nombre por favor");
  } else {
    return nombre;
  }
}

function agregarAmigo() {
  let nombre = obtenerNombre();
  if (validarNombre(nombre)) {
    //Agrega el nombre y limpia la caja de texto.
    listaAmigosArray.push(nombre);
    console.log(listaAmigosArray); //--> deberia de mostrarlos en la pantalla con una funcion cada vez que se agrega.
    ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
    limpiarCajaDeTexto();
  }
  return listaAmigos;
}

function sortearAmigo() {
  //selecciona un nombre de la lista y lo muestra por pantalla.
  let indiceAleatorio = Math.floor(
    Math.random() * determinarCantidadNombres(listaAmigosArray)
  );
  
  if (validarListaAmigos(listaAmigosArray)) {
    //Aca deberia cambiar el texto del html por `La persona sorteada es: ${lista[indiceAleatorio]}`.
    clickSorteo++;
    ulListaAmigos.innerHTML = "";
    ulResultado.innerHTML = `<li>El amigo sorteado es: ${listaAmigosArray[indiceAleatorio]}`;
    /*Se inhabilita el boton para seguir agregando personas*/
    document.querySelector('#agregar').setAttribute('disabled', 'true');
    if (clickSorteo > 1){
      alert('¡Ya has sorteado un nombre! ¡Refresca la página para sortear otro!');
    }
  }
}

function validarListaAmigos(lista) {
  if (determinarCantidadNombres(lista) <= 0) {
    //Cambiar por alert
    alert("¡Primero debe ingresar nombres para sortearlos!");
  } else {
    return true;
  }
}

function determinarCantidadNombres(lista) {
  return lista.length;
}

function limpiarCajaDeTexto() {
  document.querySelector("#amigo").value = "";
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.getElementById(elemento).value;
  elementoHTML.innerHTML = texto;
}

//sortearAmigo()
