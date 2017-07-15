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

    },
    created: () => {
        getDados((ongs) => {
            app2.ONGs = ongs;
        });
        getDadosUser((usuario) => {
            app2.usuario = usuario.uid;
        });
    }
});