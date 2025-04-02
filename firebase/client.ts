import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB6uKewrqRanyqX1qyHMooXkwt6G4uXq6E",
  authDomain: "ai-agent-a58f8.firebaseapp.com",
  projectId: "ai-agent-a58f8",
  storageBucket: "ai-agent-a58f8.firebasestorage.app",
  messagingSenderId: "437523577763",
  appId: "1:437523577763:web:584e33830d5b12cd2e3816",
  measurementId: "G-LVCG7XF7LS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);