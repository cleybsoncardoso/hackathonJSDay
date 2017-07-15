
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

function createONG(uid, nome, Descricao, tokenPagSeguro, imagem) {
    firebase.database().ref('/ONG/' + uid).set({
        uid: uid,
        Nome: nome,
        Descricao: Descricao,
        Toekn: tokenPagSeguro,
        Imagem: imagem
    });

}

function createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        console.log(error);
    });
}

function signIN(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        console.log(error);
    });
}

function getDadosUser() {
    // var firebase = inicialize();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            console.log(uid);
            var providerData = user.providerData;
        } else {
        }
    });
}

function getDados() {

    var arr = [];
    var starCountRef = firebase.database().ref('/ONG/');
    starCountRef.on('value', function (snapshot) {
        for (var key in snapshot.val()) {
            arr.push(snapshot.val()[key]);
        }
    });
    return arr;
}
