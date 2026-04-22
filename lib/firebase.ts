import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_KcQ4Dt3BfpJouQtHNXw38uJ0J3jrXYg",
  authDomain: "vaagai-f22d4.firebaseapp.com",
  databaseURL: "https://vaagai-f22d4-default-rtdb.firebaseio.com",
  projectId: "vaagai-f22d4",
  storageBucket: "vaagai-f22d4.firebasestorage.app",
  messagingSenderId: "888303040556",
  appId: "1:888303040556:web:b2172bc5d0d8ec42bf7989"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);

export default app;
