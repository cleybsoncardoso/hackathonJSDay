var app = new Vue({
    el: '#app',
    data: {
        ONG: {
            email: "",
            senha: "",
            pagSeguro: "",
            nome: "",
            descricao: "",
            site: "",
            imagem: ""
        },
        email: '',
        ONGs: [],
        senha: ''
    },
    methods:
    {
        cadatrar: function (event) {
            event.preventDefault();
            createONG(this.ONG.email, this.ONG.senha, this.ONG.nome, this.ONG.descricao, this.ONG.pagSeguro, this.ONG.imagem);
            this.ONG.email = "";
            this.ONG.senha = "";
            this.ONG.nome = "";
            this.ONG.descricao = "";
            this.ONG.pagSeguro = "";
            this.ONG.imagem = "";
        },
        login: function () {
            event.preventDefault();
            signIN(this.email, this.senha);
        },
        handleUpload: function (e, clear) {
            var files = e.target.files;
            var reader = new FileReader();

            var tipos = ['png', 'jpeg', 'jpg', 'gif'], permitido = false;
            var extensao = files[0].type.split('/')[1];

            tipos.map((value) => {
                permitido = value == extensao ? true : permitido;
            });

            if (permitido) {
                reader.addEventListener('load', () => {
                    this.ONG.imagem = reader.result;
                    // this.error.message = "";
                });
                reader.readAsDataURL(files[0]);
            } else {
                // this.error.message = "Formato de imagem inválido";
            }
        },
    }
});