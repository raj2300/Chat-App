import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBOc89qvqszYj1Ozk_6qcBmpNz8EcjPAh8",
  authDomain: "chat-84e82.firebaseapp.com",
  projectId: "chat-84e82",
  storageBucket: "chat-84e82.appspot.com",
  messagingSenderId: "46124827185",
  appId: "1:46124827185:web:fa55d5ed3b87be8e888b10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();