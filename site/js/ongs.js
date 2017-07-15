var app2 = new Vue({
    el: '#app',
    data: {
        ONGs: []

    },
    methods:
    {
        
    },
    created: () => {
        getDados((ongs)=>{
            this.ONGs = ongs;
        });
        console.log(this.ONGs);
    }
});