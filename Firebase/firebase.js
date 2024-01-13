import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBtb8uPmRtU5niK8r0wOKLwxe9pDXxyAgQ",
    authDomain: "goals-e4ffd.firebaseapp.com",
    projectId: "goals-e4ffd",
    storageBucket: "goals-e4ffd.appspot.com",
    messagingSenderId: "602478862886",
    appId: "1:602478862886:web:d5ac47206d5f8a7ddcfce7",
    measurementId: "G-EB3V8P9H2E"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth }

