import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3vqwWmIXZy5m7mpqS1QFo1iBrKPGdJco",
  authDomain: "fasthosts-clone.firebaseapp.com",
  projectId: "fasthosts-clone",
  storageBucket: "fasthosts-clone.appspot.com",
  messagingSenderId: "450841165326",
  appId: "1:450841165326:web:39ded130ddbc49904b065f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
