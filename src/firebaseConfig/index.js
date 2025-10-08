
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoVgLfFKKQh6qMHrmGtqoDAIbTAnX5IIA",
  authDomain: "e-commerce-5e1bc.firebaseapp.com",
  projectId: "e-commerce-5e1bc",
  storageBucket: "e-commerce-5e1bc.firebasestorage.app",
  messagingSenderId: "299686388305",
  appId: "1:299686388305:web:48d6a472d5043a584d8e70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };