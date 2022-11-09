import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ1s5nu1wJGwAEYByOm1Etp-URMkegmxI",
  authDomain: "deneme-abeaf.firebaseapp.com",
  projectId: "deneme-abeaf",
  storageBucket: "deneme-abeaf.appspot.com",
  messagingSenderId: "579305832739",
  appId: "1:579305832739:web:4f9e0459853a7be40dcc96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
