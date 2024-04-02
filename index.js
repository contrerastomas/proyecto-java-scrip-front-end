

"use strict"

//variables globales

let jugar;

let puntos = 0;

let ingresarNombre;

let opcion;

let preguntasEntretenimiento;
let preguntasDeportes;
let preguntasArte;
let preguntasGeografia;

//funciones






function sumarPuntos() {
    alert("respuesta correcta se te sumaran puntos")

    let sumatoria = usuarios.find((el) => el.NombreUsuario == ingresarNombre);

    let puntaje = sumatoria.Score += 5;

    return sumatoria;


}

function restarPuntos() {
    alert("respuesta incorrecta se te descontaran puntos")

    let resta = usuarios.find((el) => el.NombreUsuario == ingresarNombre);

    let puntaje = resta.Score -= 1;


    return resta;
}

function ingresarNombres() {

    ingresarNombre = prompt("ingrese un nombre de usuario")


    usuarios.push(new Usuario(ingresarNombre))

    return ingresarNombre

}

function mostrarScore() {

    let buscarUsuario = usuarios.find((el) => el.NombreUsuario == ingresarNombre);

    // alert("hola " + ingresarNombre + " tus puntos son  " + buscarUsuario.Score)




    return buscarUsuario.Score
}







//doom



//arrays

let preguntas = [


    {
        id: 1,
        pregunta: "elegiste entretenimiento tu pregunta es :\n¿que pelicula de hollywood tuvo la mayor recaudacion? \n (pequeña pista sus personajes son azules y altos ;)",
        respuesta: "avatar",
        estado: false
    },
    {
        id: 2,
        pregunta: "¿Cómo se llamaba el cantante de Queen?",
        respuesta: "freddie mercury",
        estado: false
    },
    {
        id: 3,
        pregunta: "¿A qué grupo musical pertenece la canción Smells like teen spirit?",
        respuesta: "nirvana",
        estado: false
    },
    {
        id: 4,
        pregunta: "elegiste deportes tu pregunta es :\n ¿cual es el actual jugador con mas balones de oro? ",
        respuesta: "messi" || "lionel messi",
        estado: false
    },
    {
        id: 5,
        pregunta: "¿Qué selección ganó el Mundial de fútbol de Brasil en el 2014? ",
        respuesta: "alemania",
        estado: false
    },
    {
        id: 6,
        pregunta: "¿En qué pais nació Valentino Rossi?",
        respuesta: "italia",
        estado: false
    },
    {
        id: 7,
        pregunta: "elegiste arte tu pregunta es :\n ¿cual es el nombre del pintor europeo del siglo XIX que es conocido por cortarse la oreja? ",
        respuesta: "van gogh" || "vicent van gogh",
        estado: false
    },
    {
        id: 8,
        pregunta: "¿Quién es el autor de la Ilíada y la Odisea? ",
        respuesta: "homero" || "Homero",
        estado: false
    },
    {
        id: 9,
        pregunta: "¿Quién pintó la Capilla Sixtina?",
        respuesta: "miguel angel",
        estado: false
    },
    {
        id: 10,
        pregunta: "elegiste geografia tu pregunta es :\n ¿cual es la montaña mas grande del mundo? ",
        respuesta: "everest" || "el everest" || "el monte everest",
        estado: false
    },
    {
        id: 11,
        pregunta: "¿Cuántos océanos hay en la Tierra?",
        respuesta: "5",
        estado: false
    },

    {
        id: 12,
        pregunta: "¿Qué país tiene más habitantes?",
        respuesta: "china",
        estado: false
    }



]

let usuarios = []


//objetos 





//programa

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








let btnAgregar = document.getElementById("agregar")
let usuarioIngresado = document.getElementById("usuario")
let nombre;
let formulario = document.getElementById("formulario")




let colorInput = document.getElementById("color")
let color;



btnAgregar.onclick = (e) => {

    e.preventDefault()

    nombre = usuarioIngresado.value
    usuarios.push(new Usuario(nombre))
    alert(usuarioIngresado.value)


    color = colorInput.value;
    alert(colorInput.value)


}


    let colorBody = document.getElementsByTagName("h2")
    console.log(colorBody.length)
    for (let i = 0; i < colorBody.length; i++){
    colorBody[i].style.Color = color

    }