// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnYcHLAvMa33ZHgZzP4E27mnQS2OFjFNI",
  authDomain: "in-an-hoang-gia.firebaseapp.com",
  projectId: "in-an-hoang-gia",
  storageBucket: "in-an-hoang-gia.firebasestorage.app",
  messagingSenderId: "142361023425",
  appId: "1:142361023425:web:e0dee7ad6def4a5a589540",
  measurementId: "G-D0CMZ59T25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);
