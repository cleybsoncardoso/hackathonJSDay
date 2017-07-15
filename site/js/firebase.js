
var firebase;
var config = {
    apiKey: "AIzaSyABTEl6_3AvNsTb2FcXXMLeUtDRXhPRWe4",
    authDomain: "larus-99fde.firebaseapp.com",
    databaseURL: "https://larus-99fde.firebaseio.com",
    projectId: "larus-99fde",
    storageBucket: "",
    messagingSenderId: "679918967078"
};
firebase.initializeApp(config);

function createONG(email, senha, nome, Descricao, tokenPagSeguro, imagem) {
    createUser(email, senha);
    createElemento(nome, email, Descricao, tokenPagSeguro, imagem);
}

function createElemento(nome, email, Descricao, tokenPagSeguro, imagem) {
    firebase.database().ref('/ONG/' + nome).set({
        Nome: nome,
        Email: email,
        Descricao: Descricao,
        Token: tokenPagSeguro,
        Imagem: imagem
    });
}

function createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        console.log(error);
        createUser(email, password);
    });
}

function signIN(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                window.location.href = "loged.html";
            } else {
                console.log('não logado');
                // No user is signed in.
            }
        });
    });
}

function getDadosUser(callback) {
    // var firebase = inicialize();
    firebase.auth().onAuthStateChanged(function (user) {
        callback(user);
    });
}

function getDados(callback) {

    var arr = [];
    var starCountRef = firebase.database().ref('/ONG/');
    starCountRef.on('value', function (snapshot) {
        for (var key in snapshot.val()) {
            arr.push(snapshot.val()[key]);
        }
        console.log(arr);
        callback(arr);

    });
}

function logout() {
    firebase.auth().signOut().then(function () {
        window.location.href = "index.html";
    }, function (error) {
        console.log(error.message);
    });
}