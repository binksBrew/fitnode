import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8BVLKaxQVijOIzQHRp7v7uWmLq9qATDU",
  authDomain: "fitnode-1d858.firebaseapp.com",
  projectId: "fitnode-1d858",
  storageBucket: "fitnode-1d858.firebasestorage.app",
  messagingSenderId: "535225243261",
  appId: "1:535225243261:web:9de0185c25bc7fd1504314",
  measurementId: "G-4985D14ESY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
