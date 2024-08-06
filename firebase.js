// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDriLR-bS7gmaDTQvj3SDF_WyZ5rI2aaiY",
  authDomain: "pantry-2d0e8.firebaseapp.com",
  projectId: "pantry-2d0e8",
  storageBucket: "pantry-2d0e8.appspot.com",
  messagingSenderId: "460685884121",
  appId: "1:460685884121:web:e80484979fb91fae029cc8",
  measurementId: "G-3EHWWFHC43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}