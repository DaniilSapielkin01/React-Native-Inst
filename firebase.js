// Import the functions you need from the SDKs you need
// import { apps } from "firebase/app";
// import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, app, apps } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEE71n5OZF1njf3ntrPQSP4YybkFKCwKc",
  authDomain: "rn-instagram-clone-6c804.firebaseapp.com",
  projectId: "rn-instagram-clone-6c804",
  storageBucket: "rn-instagram-clone-6c804.appspot.com",
  messagingSenderId: "762813568862",
  appId: "1:762813568862:web:4dac9776ca9ef11cabe1cf",
};
const appIn = initializeApp(firebaseConfig);

export const auth = getAuth(appIn);

export default app;

// // Initialize Firebaser
// !apps.lenght ? firebase.initializeApp(firebaseConfig) : app();

// export default firebase;

// import { FirebaseApp, initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import * as firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDEE71n5OZF1njf3ntrPQSP4YybkFKCwKc",
//   authDomain: "rn-instagram-clone-6c804.firebaseapp.com",
//   projectId: "rn-instagram-clone-6c804",
//   storageBucket: "rn-instagram-clone-6c804.appspot.com",
//   messagingSenderId: "762813568862",
//   appId: "1:762813568862:web:4dac9776ca9ef11cabe1cf",
// };

// // Initialize Firebase
// export const appFb = initializeApp(firebaseConfig);

// export const dbFb = getDatabase(app);

// export const authFb = getAuth(app);
