// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0YZLBh470F_s4OwhYExgbDi2F1hNbVQo",
  authDomain: "reactnative-paper.firebaseapp.com",
  projectId: "reactnative-paper",
  storageBucket: "reactnative-paper.firebasestorage.app",
  messagingSenderId: "987534289891",
  appId: "1:987534289891:web:aa227b539536c3951eced6",
  measurementId: "G-1WMJHEF3D7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;