import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQ4DLCPxX_ATQss9HGBxcIcFhi0xITH-I",
  authDomain: "reddit-ffd3c.firebaseapp.com",
  projectId: "reddit-ffd3c",
  storageBucket: "reddit-ffd3c.appspot.com",
  messagingSenderId: "13421718507",
  appId: "1:13421718507:web:76a3e6ebd3d22f032747ae",
  measurementId: "G-VW56R1VLNF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };