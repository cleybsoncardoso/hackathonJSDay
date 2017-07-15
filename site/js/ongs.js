var app2 = new Vue({
    el: '#app2',
    data: {
        email: '',
        ONGs: [],
        senha: '',
        usuario: ""

    },
    methods:
    {
        login: function (event) {
            event.preventDefault();
            signIN(this.email, this.senha);
        },
        sair: function () {
            logout();
        },
    },
    created: () => {
        getDados((ongs) => {
            app2.ONGs = ongs;
        });
        getDadosUser((usuario) => {
            if (usuario) {

                app2.usuario = usuario.uid;
            }
        });
    }
});