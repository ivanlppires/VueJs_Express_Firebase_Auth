// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "seu-api-key",
  authDomain: "fmd-aula12.firebaseapp.com",
  projectId: "fmd-aula12",
  storageBucket: "fmd-aula12.appspot.com",
  messagingSenderId: "210557112201",
  appId: "1:210557112201:web:281ba3c334a847b46adb58"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;