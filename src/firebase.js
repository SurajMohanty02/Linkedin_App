import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBcxM0k5gjzUn2anNTd0-GuU5LDAjrOJ8k",
  authDomain: "linkedin-bc637.firebaseapp.com",
  projectId: "linkedin-bc637",
  storageBucket: "linkedin-bc637.appspot.com",
  messagingSenderId: "779012244472",
  appId: "1:779012244472:web:1244f5eaf8fe9a928d0c0d",
  measurementId: "G-R7HGH3J0QE",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
export default db;
