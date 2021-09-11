import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6_A8B_uIiGoxhjGke8PyNuL_B9cdYIM4",
  authDomain: "messenger-clone-babcc.firebaseapp.com",
  databaseURL: "https://messenger-clone-babcc-default-rtdb.firebaseio.com",
  projectId: "messenger-clone-babcc",
  storageBucket: "messenger-clone-babcc.appspot.com",
  messagingSenderId: "788773941510",
  appId: "1:788773941510:web:204781660ca11e74386e87",
  measurementId: "G-5XY9KQQ53K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
