"use strict";






//objetos y arrays 


let preguntas = [
  {
    id: 0,
    pregunta:
      " A- ¿cual es la montaña mas grande del mundo? ",
    respuesta: "everest",
    estado: false,
  },
  {
    id: 1,
    pregunta: "B- ¿Cuántos océanos hay en la Tierra?",
    respuesta: "5",
    estado: false,
  },

  {
    id: 2,
    pregunta: "C- ¿Qué país tiene más habitantes?",
    respuesta: "china",
    estado: false,
  },
  {
    id: 3,
    pregunta:
      " A- ¿que pelicula de hollywood tuvo la mayor recaudacion? \n (pequeña pista sus personajes son azules y altos ;)",
    respuesta: "avatar",
    estado: false,
  },
  {
    id: 4,
    pregunta: "B- ¿Cómo se llamaba el cantante de Queen?",
    respuesta: "freddie mercury",
    estado: false,
  },
  {
    id: 5,
    pregunta:
      "C-¿A qué grupo musical pertenece la canción Smells like teen spirit?",
    respuesta: "nirvana",
    estado: false,
  },
  {
    id: 6,
    pregunta:
      " A- ¿cual es el actual jugador con mas balones de oro? ",
    respuesta: "messi",
    respuesta2: "lionel messi",
    estado: false,
  },
  {
    id: 7,
    pregunta: "B- ¿Qué selección ganó el Mundial de fútbol de Brasil en el 2014? ",
    respuesta: "alemania",
    estado: false,
  },
  {
    id: 8,
    pregunta: "C- ¿En qué pais nació Valentino Rossi?",
    respuesta: "italia",
    estado: false,
  },
  {
    id: 9,
    pregunta:
      " A- ¿cual es el nombre del pintor europeo del siglo XIX que es conocido por cortarse la oreja? ",
    respuesta: "van gogh",
    respuesta2: "vicent van gogh",
    estado: false,
  },
  {
    id: 10,
    pregunta: "B- ¿Quién es el autor de la Ilíada y la Odisea? ",
    respuesta: "homero",
    estado: false,
  },
  {
    id: 11,
    pregunta: "C- ¿Quién pintó la Capilla Sixtina?",
    respuesta: "miguel angel",
    estado: false,
  },

];

let usuarios = [];


//objetos


class Usuario {

  /**
   * 
   * @param {string} NombreUsuario solicita el nombre de usuario
   */

  constructor(NombreUsuario, color) {
    this.NombreUsuario = NombreUsuario,
      this.color = color,
      this.Score = 0
  }

}



//librerias utilizadas
/*

Toastify



*/


//variables
let contador=0;
let usuarioIngresado = document.getElementById("usuario");
let formulario = document.getElementById("formulario");
let nombre;
let colorInput = document.getElementById("color");
let color;
let select = document.getElementById("preguntas");
let btnP = document.getElementById("btnP");
let user
let respuestaCorrecta = "Pregunta Respondida"
const body = document.getElementById("body")




//funciones

function agregarColor() {

  color = colorInput.value;

  usuarios.push(new Usuario(nombre, color));

  return color
}
function cambiarEstado(i) {

  preguntas[i].estado = true

  labels[i].textContent = respuestaCorrecta

}

function buscarEstados() {

  const resultado = preguntas.find((es) => es.estado == true)




  return resultado

}
function mostrarUsuarios() {

  const usuariosStorage = JSON.parse(localStorage.getItem("arrayUsuarios")) || [];
  usuarios = usuariosStorage
  usuarios.forEach((e) => {

    const trjs = document.getElementById("trjs")
    trjs.innerHTML += ` 
  <td class="td">${e.NombreUsuario}       ||    -     ${e.Score}  - </td>
  `

  })




}

function agregarNombre(nombre, color) {

  const usuarioExistente = usuarios.find((el) => el.NombreUsuario == nombre)

  if (usuarioExistente) {

    console.log(nombre + " ya existe")
  } else {

    user = new Usuario(nombre, color)

    usuarios.push(user);

  }


  return user;
}

function sumarPuntaje(user) {

  user.Score += 5

}

function restarPuntaje(user) {

  user.Score -= 3
}

function verPuntaje(nombre) {

  const usuariosStorage = JSON.parse(localStorage.getItem("arrayUsuarios"))
  const usuarioExistente = usuariosStorage.find((u) => u.userUsuario === nombre);

  if (usuarioExistente) {

    usuariosStorage = user


  }
  /*


 

  const usuariosStorage = JSON.parse(localStorage.getItem("arrayUsuarios"))


  const usuarioExistente = usuariosStorage.find((u) => u.userUsuario === nombre);



  let buscar = usuarios.find((el) => el.NombreUsuario == nombre);



  return buscar.Score;
  */

  return user
}

function guardarUsuario(usuario) {

  const usuariosStorage = JSON.parse(localStorage.getItem("arrayUsuarios")) || [];
  const usuarioExistente = usuariosStorage.find((u) => u.NombreUsuario === usuario.NombreUsuario);
  usuarios = usuariosStorage;

  if (!usuarioExistente) {
    usuariosStorage.push(usuario);
    localStorage.setItem("arrayUsuarios", JSON.stringify(usuariosStorage));
  }
}


function loadUserData() {
  const usuariosStorage = JSON.parse(localStorage.getItem("arrayUsuarios")) || [];

  usuarios = usuariosStorage;
  const usuarioExistente = usuariosStorage.find((u) => u.NombreUsuario === user.NombreUsuario);
  if (usuarioExistente) {
    user = usuarioExistente;
    return user;
  } else {
    return null;
  }

}


function cambiarColor(vairableColor) {
  for (let i = 0; i < vairableColor.length; i++) {
    vairableColor[i].style.color = agregarColor();
  }
}



//API
function apiAnimeFondo(){


  fetch("./js/img.json")
  .then(Response=>Response.json())
  .then(data=>{

      const ruta= data.imagenes[contador].ruta
        body.style.backgroundImage = `url(${ruta})`
  
  })
  .catch(error=>console.error("error"+ error))
  

}




//variables botones

let btnVerPuntos = document.getElementById("verPuntos");
let btnGeneral = document.querySelectorAll(".buttonGe");
let btnL = document.querySelectorAll(".btnL");
let btnAgr = document.querySelector("#agregar");
const guardar = document.getElementById("Guardar")

const usuariosSection = document.querySelector("#mostrarUsuarios")
const listaUsuarios = document.querySelector("#listaUsuarios")


//inputs




//labels


let label0 = document.querySelector("#l0")
let label1 = document.querySelector("#l1")
let label2 = document.querySelector("#l2")
let label3 = document.querySelector("#l3")
let label4 = document.querySelector("#l4")
let label5 = document.querySelector("#l5")
let label6 = document.querySelector("#l6")
let label7 = document.querySelector("#l7")
let label8 = document.querySelector("#l8")
let label9 = document.querySelector("#l9")
let label10 = document.querySelector("#l10")
let label11 = document.querySelector("#l11")

let labels = [label0, label1, label2, label3, label4, label5, label6, label7, label8, label9, label10, label11]


//label geografia
label0.innerText = preguntas[0].pregunta
label1.innerText = preguntas[1].pregunta
label2.innerText = preguntas[2].pregunta

//label entretenimiento
label3.innerText = preguntas[3].pregunta
label4.innerText = preguntas[4].pregunta
label5.innerText = preguntas[5].pregunta

//label deportes

label6.innerText = preguntas[6].pregunta
label7.innerText = preguntas[7].pregunta
label8.innerText = preguntas[8].pregunta

//label arte
label9.innerText = preguntas[9].pregunta
label10.innerText = preguntas[10].pregunta
label11.innerText = preguntas[11].pregunta



//variables de etiquetas para cambiar color

let h2 = document.getElementsByTagName("h2");
let label = document.getElementsByTagName("label");
let cambiarFondo = document.getElementById("cambiarFondo")
let h1 = document.getElementsByTagName("h1");
// formularios

let formularioUsuario = document.getElementById("formulario");
const formGeo = document.getElementById("formGeo");
const formEnt = document.getElementById("formEnt");
const formDep = document.getElementById("formDep");
const formArte = document.getElementById("formArte");

//eventos
setTimeout(() => {

  Toastify({
    text: "Bienvenido!! antes de responder tienes que crear un usuario \n👇",
    duration: 10000,

    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      width: "60rem",
      fontSize: "2rem",
      background: "linear-gradient(to right, #C1292E,#C1292E)",
    },
    onClick: function () { } // Callback after click
  }).showToast();
}, 1000)

colorInput.addEventListener("mouseover", () => {
  setTimeout(() => {

    Toastify({
      text: "eligue tu color y las letras lo tendran  ",
      duration: 10000,

      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        width: "20rem",
        fontSize: "1rem",
        background: "linear-gradient(to right, #C1292E,#C1292E)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }, 1000)

})


formularioUsuario.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  nombre = form.elements.usuario.value;
  color = form.elements.color.value;

  agregarNombre(nombre, color);
  //guardarUsuario(user)

  btnAgr.innerHTML = "Guardando ....."
  setTimeout(() => {

    btnAgr.innerHTML = "Guardado con exito"

    Toastify({
      text: "Bienvenido " + user.NombreUsuario + "  !!\n " + "Eligue el tipo de pregunta que quieres responder 👇",
      duration: 2000,

      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        width: "60rem",
        fontSize: "2rem",
        background: "linear-gradient(to right, #C1292E,#C1292E)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
  }, 3000)




  cambiarColor(h2);
  cambiarColor(label);
  cambiarColor(reset);
  cambiarColor(h1);
});

formGeo.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta0 = form.elements.respuesta0.value;
  const respuesta1 = form.elements.respuesta1.value;
  const respuesta2 = form.elements.respuesta2.value;

  if (preguntas[0].estado == false) {
    if (respuesta0.toLowerCase() == preguntas[0].respuesta) {
      cambiarEstado(0)
      sumarPuntaje(user);
      Toastify({
        text: "¨" + respuesta0 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right,  #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    } else {
      restarPuntaje(user);

      Toastify({
        text: "respuesta incorrecta " +
          " ¨" + respuesta0 + "¨ " +
          " no es la montaña mas grande del mundo",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();




    }
  }
  if (preguntas[1].estado == false) {
    if (respuesta1.toLowerCase() == preguntas[1].respuesta) {
      sumarPuntaje(user);
      cambiarEstado(1)

      Toastify({
        text: "¨" + respuesta1 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right,  #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta " +
          " ¨" + respuesta1 + "¨ " +
          " no es la cantidad de oceanos que existen",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    }
  }
  if (preguntas[2].estado == false) {
    if (respuesta2.toLowerCase() == preguntas[2].respuesta) {
      sumarPuntaje(user);
      cambiarEstado(2)

      Toastify({
        text: "¨" + respuesta2 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right,  #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();

    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta  " +
          " ¨" + respuesta2 + "¨ " +
          " no es el pais con mas habitantes ",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    }
  }
});

formEnt.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta3 = form.elements.respuesta3.value;
  const respuesta4 = form.elements.respuesta4.value;
  const respuesta5 = form.elements.respuesta5.value;

  if (preguntas[3].estado == false) {

    if (respuesta3.toLowerCase() == preguntas[3].respuesta) {
      sumarPuntaje(user);
      cambiarEstado(3)

      Toastify({
        text: "¨" + respuesta3 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();

    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta " + " ¨" + respuesta3 + "¨ " + " no es la pelicula mas taquillera",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();

    }
  }
  if (preguntas[4].estado == false) {
    if (respuesta4.toLowerCase() == preguntas[4].respuesta) {
      sumarPuntaje(user);
      cambiarEstado(4)

      Toastify({
        text: "¨" + respuesta4 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();

    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta " + " ¨" + respuesta4 + "¨ " + " no es el cantante de queen",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();

    }
  }
  if (preguntas[5].estado == false) {
    if (respuesta5.toLowerCase() == preguntas[5].respuesta) {
      sumarPuntaje(user);
      cambiarEstado(5)


      Toastify({
        text: "¨" + respuesta5 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right,  #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta  " +
          " ¨" + respuesta5 + "¨ " +
          " la cancion no pertenece a ese grupo ",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();

    }
  }
});

formDep.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta6 = form.elements.respuesta6.value;
  const respuesta7 = form.elements.respuesta7.value;
  const respuesta8 = form.elements.respuesta8.value;

  if (preguntas[6].estado == false) {
    if (respuesta6.toLowerCase() == preguntas[6].respuesta || preguntas[6].respuesta2) {
      sumarPuntaje(user);
      cambiarEstado(6)

      Toastify({
        text: "¨" + respuesta6 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right,  #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();

    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta " +
          " ¨" + respuesta6 + "¨ " +
          " no tiene mas balones de oro",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    }

  }
  if (preguntas[7].estado == false) {
    if (respuesta7.toLowerCase() == preguntas[7].respuesta) {
      sumarPuntaje(user);
      cambiarEstado(7)

      Toastify({
        text: "¨" + respuesta7 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right,  #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta " + " ¨" + respuesta6 + "¨ " + " no gano el mundial del 2014",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    }

  }
  if (preguntas[8].estado == false) {
    if (respuesta8.toLowerCase() == preguntas[8].respuesta) {
      sumarPuntaje(user);
      cambiarEstado(8)

      Toastify({
        text: "¨" + respuesta8 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right,  #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta  " +
          " ¨" + respuesta8 + "¨ " +
          " no es el pais de nacimiento de valentino rossi ",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    }

  }




});

formArte.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta9 = form.elements.respuesta9.value;
  const respuesta10 = form.elements.respuesta10.value;
  const respuesta11 = form.elements.respuesta11.value;

  if (preguntas[9].estado == false) {
    if (respuesta9.toLowerCase() == preguntas[9].respuesta || preguntas[9].respuesta2) {
      sumarPuntaje(user);
      cambiarEstado(9)

      Toastify({
        text: "¨" + respuesta9 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right,  #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta " + " ¨" + respuesta9 + "¨ " + " no fue quien se corto la oreja ",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    }
  }
  if (preguntas[10].estado == false) {
    if (respuesta10.toLowerCase() == preguntas[10].respuesta) {
      sumarPuntaje(user);
      cambiarEstado(10)


      Toastify({
        text: "¨" + respuesta10 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right,  #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta " + " ¨" + respuesta10 + "¨ " + " no escribio esos libros",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    }
  }
  if (preguntas[11].estado == false) {
    if (respuesta11.toLowerCase() == preguntas[11].respuesta) {
      sumarPuntaje(user);
      cambiarEstado(11)

      Toastify({
        text: "¨" + respuesta11 + "¨" + " es la respuesta correcta",
        duration: 3000,

        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #96c93d, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    } else {
      restarPuntaje(user);
      Toastify({
        text: "respuesta incorrecta  " + " ¨" + respuesta11 + "¨ " + " no pinto la capilla sixtina ",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          width: "40rem",
          fontSize: "1.5rem",
          background: "linear-gradient(to right, #000, #BB0A21)",
        },
        onClick: function () { } // Callback after click
      }).showToast();


    }
  }
});

select.addEventListener("change", function () {
  document.querySelectorAll(".contenido").forEach(function (div) {
    div.style.display = "none";
  });

  let selectedOption = select.value;

  if (selectedOption) {
    document.getElementById(selectedOption).style.display = "block";
    document.getElementById("contenedorP").style.display = "none";
  } else {
    document.getElementById("contenedorP").style.display = "block";
  }

  btnL.forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".contenido").forEach(function (div) {
        div.style.display = "none";
      });
      document.getElementById("contenedorP").style.display = "block";
    });
  });
});


guardar.onclick = (e) => {
  e.preventDefault()
  guardar.innerHTML = "Usuario Guardado"
  guardarUsuario(user)
}

btnVerPuntos.onclick = (e) => {
  e.preventDefault();
  loadUserData(user)

  Toastify({
    text: "hola " + "¨" +
      user.NombreUsuario + "¨" +
      " tus puntos son : " +
      user.Score
      + " y tu color es: " +
      user.color,
    duration: 2000,

    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      width: "40rem",
      fontSize: "2rem",
      background: "linear-gradient(to right, #000,#000)",
    },
    onClick: function () { } // Callback after click
  }).showToast();



};

cambiarFondo.addEventListener("click", function () {
contador+=1

apiAnimeFondo()

})

mostrarUsuarios()






//usar solo para limpiar el local storage 

/*
localStorage.clear()

*/