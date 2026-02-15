"use client";

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPjZTEcMYwc25BNtkzwzUNFaMa4Nwzpvw",
  authDomain: "nudge-e8a0d.firebaseapp.com",
  projectId: "nudge-e8a0d",
  storageBucket: "nudge-e8a0d.firebasestorage.app",
  messagingSenderId: "42322066479",
  appId: "1:42322066479:web:4192a256adaee0f8041ada",
  measurementId: "G-4PVV962GYP",
};

// Initialize Firebase only if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
