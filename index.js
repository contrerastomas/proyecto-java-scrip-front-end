"use strict";

//proyecto con dom
/*
juego de preguntas y respuestas con puntaje y usuarios
*/
//objetos y arrays 


let preguntas = [
  {
    id: 1,
    pregunta:
      "elegiste entretenimiento tu pregunta es :\n¿que pelicula de hollywood tuvo la mayor recaudacion? \n (pequeña pista sus personajes son azules y altos ;)",
    respuesta: "avatar",
    estado: false,
  },
  {
    id: 2,
    pregunta: "¿Cómo se llamaba el cantante de Queen?",
    respuesta: "freddie mercury",
    estado: false,
  },
  {
    id: 3,
    pregunta:
      "¿A qué grupo musical pertenece la canción Smells like teen spirit?",
    respuesta: "nirvana",
    estado: false,
  },
  {
    id: 4,
    pregunta:
      "elegiste deportes tu pregunta es :\n ¿cual es el actual jugador con mas balones de oro? ",
    respuesta: "messi" || "lionel messi",
    estado: false,
  },
  {
    id: 5,
    pregunta: "¿Qué selección ganó el Mundial de fútbol de Brasil en el 2014? ",
    respuesta: "alemania",
    estado: false,
  },
  {
    id: 6,
    pregunta: "¿En qué pais nació Valentino Rossi?",
    respuesta: "italia",
    estado: false,
  },
  {
    id: 7,
    pregunta:
      "elegiste arte tu pregunta es :\n ¿cual es el nombre del pintor europeo del siglo XIX que es conocido por cortarse la oreja? ",
    respuesta: "van gogh" || "vicent van gogh",
    estado: false,
  },
  {
    id: 8,
    pregunta: "¿Quién es el autor de la Ilíada y la Odisea? ",
    respuesta: "homero" || "Homero",
    estado: false,
  },
  {
    id: 9,
    pregunta: "¿Quién pintó la Capilla Sixtina?",
    respuesta: "miguel angel",
    estado: false,
  },
  {
    id: 10,
    pregunta:
      "elegiste geografia tu pregunta es :\n ¿cual es la montaña mas grande del mundo? ",
    respuesta: "everest" || "el everest" || "el monte everest",
    estado: false,
  },
  {
    id: 11,
    pregunta: "¿Cuántos océanos hay en la Tierra?",
    respuesta: "5",
    estado: false,
  },

  {
    id: 12,
    pregunta: "¿Qué país tiene más habitantes?",
    respuesta: "china",
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



//librerias
/*

Toastify



*/

//variables

let usuarioIngresado = document.getElementById("usuario");
let formulario = document.getElementById("formulario");
let nombre;
let colorInput = document.getElementById("color");
let color;
let select = document.getElementById("preguntas");
let btnP = document.getElementById("btnP");
let user
//funciones

function agregarColor() {

  color = colorInput.value;

  usuarios.push(new Usuario(nombre, color));

  return color
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



//variables botones

let btnVerPuntos = document.getElementById("verPuntos");
let btnGeneral = document.querySelectorAll(".buttonGe");
let btnL = document.querySelectorAll(".btnL");
let btnAgr = document.querySelector("#agregar");
const guardar = document.getElementById("Guardar")

//variables de etiquetas para cambiar color

let h2 = document.getElementsByTagName("h2");
let label = document.getElementsByTagName("label");
let reset = document.getElementById("reset")
let h1 = document.getElementsByTagName("h1");

// formularios

let formularioUsuario = document.getElementById("formulario");
const formGeo = document.getElementById("formGeo");
const formEnt = document.getElementById("formEnt");
const formDep = document.getElementById("formDep");
const formArte = document.getElementById("formArte");

//eventos

formularioUsuario.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  nombre = form.elements.usuario.value;
  color = form.elements.color.value;

  agregarNombre(nombre, color);
  //guardarUsuario(user)

  btnAgr.innerHTML="Guardando ....."
  setTimeout(()=>{

  btnAgr.innerHTML="Guardado con exito"
      
  Toastify({
    text: "Bienvenido "+ user.NombreUsuario + "  !!\n "+"Eligue el tipo de pregunta que quieres responder 👇" ,
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
  },3000)




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





  if (respuesta0 == preguntas[9].respuesta) {
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
  if (respuesta1 == preguntas[10].respuesta) {
    sumarPuntaje(user);

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

  if (respuesta2 == preguntas[11].respuesta) {
    sumarPuntaje(user);

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
});

formEnt.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta3 = form.elements.respuesta3.value;
  const respuesta4 = form.elements.respuesta4.value;
  const respuesta5 = form.elements.respuesta5.value;

  if (respuesta3 == preguntas[0].respuesta) {
    sumarPuntaje(user);
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
  if (respuesta4 == preguntas[1].respuesta) {
    sumarPuntaje(user);
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

  if (respuesta5 == preguntas[2].respuesta) {
    sumarPuntaje(user);

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


});

formDep.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta6 = form.elements.respuesta6.value;
  const respuesta7 = form.elements.respuesta7.value;
  const respuesta8 = form.elements.respuesta8.value;

  if (respuesta6 == preguntas[3].respuesta) {
    sumarPuntaje(user);
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
  if (respuesta7 == preguntas[4].respuesta) {
    sumarPuntaje(user);
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

  if (respuesta8 == preguntas[5].respuesta) {
    sumarPuntaje(user);
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


});

formArte.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta9 = form.elements.respuesta9.value;
  const respuesta10 = form.elements.respuesta10.value;
  const respuesta11 = form.elements.respuesta11.value;

  if (respuesta9 == preguntas[6].respuesta) {
    sumarPuntaje(user);
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
  if (respuesta10 == preguntas[7].respuesta) {
    sumarPuntaje(user);

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

  if (respuesta11 == preguntas[8].respuesta) {
    sumarPuntaje(user);
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
    duration: 3000,

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

reset.addEventListener("click", function () {
  localStorage.clear()
})

