class Usuario {

    /**
     * 
     * @param {string} NombreUsuario solicita el nombre de usuario
     */

    constructor(NombreUsuario,color) {
        this.NombreUsuario = NombreUsuario,
        this.color=color,
            this.Score = 0
    }



    sumarPuntos() {
        this.Score += 3;
    }

    restarPuntos() {
        this.Score -= 2;

    }
}

