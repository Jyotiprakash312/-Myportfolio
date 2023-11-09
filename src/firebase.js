import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD77mlxGJ4oTs-1_DBIeCffOU999RSd7wc",
  authDomain: "jyoti-portfolio-12589.firebaseapp.com",
  projectId: "jyoti-portfolio-12589",
  storageBucket: "jyoti-portfolio-12589.appspot.com",
  messagingSenderId: "792535900276",
  appId: "1:792535900276:web:ec252e2c4bc96d7c287121"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
