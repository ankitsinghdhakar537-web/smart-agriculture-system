import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDXxjQrG69jIUHyO--Ct4RSdzPiJKCdyc",
  authDomain: "smart-agriculture-system-31057.firebaseapp.com",
  projectId: "smart-agriculture-system-31057",
  storageBucket: "smart-agriculture-system-31057.firebasestorage.app",
  messagingSenderId: "52975799756",
  appId: "1:52975799756:web:40549d75667b5764406169",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default app;