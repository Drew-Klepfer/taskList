const { admin, db } = require('../util/admin');

// Import the functions you need from the SDKs you need
const firebase = require('firebase/app')
require('firebase/auth')
const firebaseConfig = {
    apiKey: "AIzaSyBfJCYEZ5El-CShP3An4Osv1e-3jnKG2G4",
    authDomain: "tasklist-ec855.firebaseapp.com",
    projectId: "tasklist-ec855",
    storageBucket: "tasklist-ec855.appspot.com",
    messagingSenderId: "192679942187",
    appId: "1:192679942187:web:94080c89e9dff1ce95726e",
    measurementId: "G-HWFLQ4NBJQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const { validateLoginData, validateSignUpData } = require('../util/validators');

// Login
exports.loginUser = (request, response) => {
    const user = {
        email: request.body.email,
        password: request.body.password
    }

    const { valid, errors } = validateLoginData(user);
    if (!valid) return response.status(400).json(errors);

    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return response.json({ token });
        })
        .catch((error) => {
            console.error(error);
            return response.status(403).json({ general: 'Wrong credentials, please try again.' });
        })
};