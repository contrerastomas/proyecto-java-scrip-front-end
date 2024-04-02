class Usuario {

    /**
     * 
     * @param {string} NombreUsuario solicita el nombre de usuario
     */

    constructor(NombreUsuario) {
        this.NombreUsuario = NombreUsuario,
            this.Score = 0
    }



    sumarPuntos() {
        this.Score += 3;
    }

    restarPuntos() {
        this.Score -= 2;

    }
}

