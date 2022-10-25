// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS5bH0hxlW6p4Esm_Tf0i8Hmsg03Ujxn4",
  authDomain: "code-spartans-client.firebaseapp.com",
  projectId: "code-spartans-client",
  storageBucket: "code-spartans-client.appspot.com",
  messagingSenderId: "798169583734",
  appId: "1:798169583734:web:2c6ac097dca5f82c9fcf57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;