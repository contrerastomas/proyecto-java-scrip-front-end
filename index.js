"use strict";

//variables globales

let jugar;

let puntos = 0;

let ingresarNombre;

let opcion;

let preguntasEntretenimiento;
let preguntasDeportes;
let preguntasArte;
let preguntasGeografia;


//doom

//arrays

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

//programa
/*
do {

    ingresarNombres()


    alert("hola " + ingresarNombre + " tus puntos son  " + mostrarScore())



    jugar = prompt("bienvenido " + ingresarNombre + " !! ¿deseas jugar al juego de trivia? s/n")
    if (jugar == "s") {

        alert("preparate el juego esta por comenzar!! \ntendras que eleguir que tipo de pregunta deseas jugar \n iras acumulando puntos a medida que respondas correctamente");


        do {
            opcion = Number(prompt("eliga el tipo de pregunta : \n entretenimiento (1) \n deportes (2) \n arte (3)\n geografia (4) \n ver mis puntos(5) \n salir(6)"));

            if (opcion != 6) {

                switch (opcion) {

                    case 1:

                        if (preguntas[0].estado == false) {
                            let pregunta1 = prompt(preguntas[0].pregunta);

                            if (pregunta1 === preguntas[0].respuesta) {

                                sumarPuntos();

                                const preguntas2 = preguntas.map((el) => preguntas[0].estado = true)


                            } else {
                                restarPuntos()
                            }
                        }

                        if (preguntas[1].estado == false) {


                            let pregunta2 = prompt(preguntas[1].pregunta);

                            if (pregunta2 === preguntas[1].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[1].estado = true)


                            } else {
                                restarPuntos()

                            }
                        }
                        if (preguntas[2].estado == false) {


                            let pregunta3 = prompt(preguntas[2].pregunta);

                            if (pregunta3 === preguntas[2].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[2].estado = true)


                            } else {
                                restarPuntos()

                            }
                        }


                        break;

                    case 2:


                        if (preguntas[3].estado == false) {

                            let pregunta4 = prompt(preguntas[3].pregunta);

                            if (pregunta4 == preguntas[3].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[3].estado = true)


                            } else {
                                restarPuntos()
                            }
                        }

                        if (preguntas[4].estado == false) {

                            let pregunta5 = prompt(preguntas[4].pregunta);

                            if (pregunta5 == preguntas[4].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[4].estado = true)


                            } else {
                                restarPuntos()
                            }
                        }

                        if (preguntas[5].estado == false) {


                            let pregunta6 = prompt(preguntas[5].pregunta);

                            if (pregunta6 == preguntas[5].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[5].estado = true)


                            } else {
                                restarPuntos()
                            }
                        }

                        break;

                    case 3:
                        if (preguntas[6].estado == false) {


                            let pregunta7 = prompt(preguntas[6].pregunta);

                            if (pregunta7 == preguntas[6].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[6].estado = true)


                            } else {
                                restarPuntos()
                            }

                        }
                        if (preguntas[7].estado == false) {

                            let pregunta8 = prompt(preguntas[7].pregunta);

                            if (pregunta8 == preguntas[7].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[7].estado = true)


                            } else {
                                restarPuntos()
                            }

                        }
                        if (preguntas[8].estado == false) {


                            let pregunta9 = prompt(preguntas[8].pregunta);

                            if (pregunta9 == preguntas[8].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[8].estado = true)


                            } else {
                                restarPuntos()
                            }
                        }



                        break;

                    case 4:

                        if (preguntas[9].estado == false) {

                            let pregunta10 = prompt(preguntas[9].pregunta);


                            if (pregunta10 == preguntas[9].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[9].estado = true)


                            } else {
                                restarPuntos()
                            }

                        }

                        if (preguntas[10].estado == false) {

                            let pregunta11 = prompt(preguntas[10].pregunta);


                            if (pregunta11 == preguntas[10].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[10].estado = true)


                            } else {
                                restarPuntos()
                            }

                        }
                        if (preguntas[11].estado == false) {


                            let pregunta12 = prompt(preguntas[11].pregunta);


                            if (pregunta12 == preguntas[11].respuesta) {

                                sumarPuntos()
                                const preguntas2 = preguntas.map((el) => preguntas[11].estado = true)


                            } else {
                                restarPuntos()
                            }
                        }

                        break

                    case 5:
                        alert("hola " + ingresarNombre + " tus puntos son " + mostrarScore())

                }

            } else {
                alert("has salido del juego :(")
            }



        } while (opcion != 6)




    } else {
        alert("has salido del juego :(")
    }

} while (jugar == "s")

*/






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




//doom

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





function sumarPuntaje(nombre) {
  alert("respuesta correcta se te sumaran puntos");

  let sumatoria = usuarios.find((el) => el.NombreUsuario == nombre);

  let puntaje = (sumatoria.Score += 5);

  return puntaje;
}

function restarPuntaje(nombre) {
  let sumatoria = usuarios.find((el) => el.NombreUsuario == nombre);

  let puntaje = (sumatoria.Score -= 3);

  return puntaje;
}

function verPuntaje(nombre) {
  let buscar = usuarios.find((el) => el.NombreUsuario == nombre);

  return buscar.Score;
}

/*


*/

//variables botones

let btnVerPuntos = document.getElementById("verPuntos");
let btnGeneral = document.querySelectorAll(".buttonGe");
let btnL = document.querySelectorAll(".btnL");

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
  guardarUsuario(user)

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
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta " +
      respuesta0 +
      " no es la montaña mas grande del mundo"
    );
  }
  if (respuesta1 == preguntas[10].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta " +
      respuesta1 +
      " no es la cantidad de oceanos que existen"
    );
  }

  if (respuesta2 == preguntas[11].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta  " +
      respuesta2 +
      " no es el pias con mas habitantes "
    );
  }

  alert(
    "tus respuestas son " + respuesta0 + " " + respuesta1 + " " + respuesta2
  );
});

formEnt.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta3 = form.elements.respuesta3.value;
  const respuesta4 = form.elements.respuesta4.value;
  const respuesta5 = form.elements.respuesta5.value;

  if (respuesta3 == preguntas[0].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta " + respuesta3 + " no es la pelicula mas taquillera"
    );
  }
  if (respuesta4 == preguntas[1].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert("respuesta incorrecta " + respuesta4 + " no es el cantante de queen");
  }

  if (respuesta5 == preguntas[2].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta  " +
      respuesta5 +
      " la cancion no pertenece a ese grupo "
    );
  }

  alert(
    "tus respuestas son " + respuesta3 + " " + respuesta4 + " " + respuesta5
  );
});

formDep.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta6 = form.elements.respuesta6.value;
  const respuesta7 = form.elements.respuesta7.value;
  const respuesta8 = form.elements.respuesta8.value;

  if (respuesta6 == preguntas[3].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta " + respuesta6 + " no tiene mas balones de oro"
    );
  }
  if (respuesta7 == preguntas[4].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta " + respuesta7 + " no gano el mundial del 2014"
    );
  }

  if (respuesta8 == preguntas[5].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta  " +
      respuesta8 +
      " no es el pais de nacimiento de valentino rossi "
    );
  }

  alert(
    "tus respuestas son " + respuesta6 + " " + respuesta7 + " " + respuesta8
  );
});

formArte.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const respuesta9 = form.elements.respuesta9.value;
  const respuesta10 = form.elements.respuesta10.value;
  const respuesta11 = form.elements.respuesta11.value;

  if (respuesta9 == preguntas[6].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta " + respuesta9 + " no fue quien se corto la oreja "
    );
  }
  if (respuesta10 == preguntas[7].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert("respuesta incorrecta " + respuesta10 + " no escribio esos libros");
  }

  if (respuesta11 == preguntas[8].respuesta) {
    sumarPuntaje(nombre);
  } else {
    restarPuntaje(nombre);
    alert(
      "respuesta incorrecta  " + respuesta11 + " no pinto la capilla sixtina "
    );
  }

  alert(
    "tus respuestas son " + respuesta9 + " " + respuesta10 + " " + respuesta11
  );
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
}


btnVerPuntos.onclick = (e) => {
  e.preventDefault();

  loadUserData()

  alert(
    "hola " +
    nombre +
    " tus puntos son : " +
    verPuntaje(nombre) +
    " y tu color es :" +
    user.color
  );
};


reset.addEventListener("click", function () {
  localStorage.clear()
})


function cambiarColor(vairableColor) {
  for (let i = 0; i < vairableColor.length; i++) {
    vairableColor[i].style.color = agregarColor();
  }
}


