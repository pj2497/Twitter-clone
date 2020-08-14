import firebase, { firestore } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByFUc80oAn7zCduUbvscI9dMso6LBxt40",
  authDomain: "twitter-clone-a42f1.firebaseapp.com",
  databaseURL: "https://twitter-clone-a42f1.firebaseio.com",
  projectId: "twitter-clone-a42f1",
  storageBucket: "twitter-clone-a42f1.appspot.com",
  messagingSenderId: "378263741774",
  appId: "1:378263741774:web:dad34dfeee680dcdf4aa1f",
  measurementId: "G-N0ZBQ3NEF9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
