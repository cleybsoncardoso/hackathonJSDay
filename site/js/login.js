var app3 = new Vue({
    el: '#app3',
    data: {
        email: '',
        ONG: {},
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
        getDadosUser((usuario) => {

            if (usuario) {
                app3.usuario = usuario.uid;
                getDados((ongs) => {
                    ongs.map(resp => {
                            console.log(resp);
                            console.log(usuario);
                        
                        if (resp.Email == usuario.email) {
                            app3.ONG = resp;
                        }
                    });
                    // app3.ONGs = ongs;

                });
            }
        });
    }
});