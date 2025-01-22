// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2UerzSUhtFq1IdLSyWZH2Q_cJsVRMlfo",
  authDomain: "meals4terps.firebaseapp.com",
  projectId: "meals4terps",
  storageBucket: "meals4terps.firebasestorage.app",
  messagingSenderId: "48150488281",
  appId: "1:48150488281:web:522e86f37a1e4e0ef6cac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };