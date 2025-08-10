const firebaseConfig = {

    apiKey: "AIzaSyDSu_rxeccY25X3eTV05SuUIFWgYqsLXfU",
    authDomain: "trial1-71040.firebaseapp.com",
    databaseURL: "https://trial1-71040-default-rtdb.firebaseio.com",
    projectId: "trial1-71040",
    storageBucket: "trial1-71040.appspot.com",
    messagingSenderId: "98260703835",
    appId: "1:98260703835:web:1e82dcad548b61543b3d7e",
    measurementId: "G-N3K59CYG8G"

};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("Passcode").value;
    if (validate_email(email) === false || validate_password(password) === false) {
        alert("Something is wrong in the email or password");
        return;
    }
    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser;
            var database_ref = database.ref();
            var user_data = {
                email: email,
                password: password,
                last_login: Date.now()
            }
            database_ref.child("users/" + user.uid).update(user_data);
            alert("Signed up, now login");
        })
        .catch(function(error) {
            var error_message = error.message;
            alert(error_message);
        });
}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) === true) {
        return true;
    } else {
        return false;
    }
}

function validate_password(password) {
    if (password.length < 6) {
        return false;
    } else {
        return true;
    }
}

function validate_field(field) {
    if (field == null) {
        return false;
    }
    if (field.length <= 0) {
        return false;
    } else {
        return true;
    }
}