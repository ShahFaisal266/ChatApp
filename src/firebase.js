// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Create a root reference
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO-kukqW3PM2O3R4s3YX7U6WzsUljXoRM",
  authDomain: "chat-d5fa0.firebaseapp.com",
  projectId: "chat-d5fa0",
  storageBucket: "chat-d5fa0.appspot.com",
  messagingSenderId: "985967482159",
  appId: "1:985967482159:web:aa5c42cfd663bae71e7dda"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db= getFirestore();