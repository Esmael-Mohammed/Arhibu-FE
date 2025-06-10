import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnh39tHtJmzLd3ugqn00EH5HCwu1oe330",
  authDomain: "arhibu-8f98a.firebaseapp.com",
  projectId: "arhibu-8f98a",
  storageBucket: "arhibu-8f98a.appspot.com",
  messagingSenderId: "1089759890602",
  appId: "1:1089759890602:web:d89549c3c1e6e63f8654d3",
  measurementId: "G-MVW67ZC0H2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
