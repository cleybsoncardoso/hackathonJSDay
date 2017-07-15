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
        }

    },
    methods:
    {
        cadatrar: function (event) {
            event.preventDefault();
            createONG('uid3', this.ONG.nome, this.ONG.descricao, this.ONG.pagSeguro, 'imagem');
        }
    }
});