// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
export default app;