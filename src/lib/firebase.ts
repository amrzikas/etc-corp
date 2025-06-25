
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-hWf0YZ4pIiECoGctI8_RRC9oobyQC30",
  authDomain: "etc-hub-fdf9e.firebaseapp.com",
  projectId: "etc-hub-fdf9e",
  storageBucket: "etc-hub-fdf9e.firebasestorage.app",
  messagingSenderId: "885766538362",
  appId: "1:885766538362:web:e03fac487851e870bfa7c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

export default app;
