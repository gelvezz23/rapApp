import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCVo0YpEqPgC4mXfuQ9rx75pUq61C50BvI",
  authDomain: "algoritmoapp-f5b15.firebaseapp.com",
  projectId: "algoritmoapp-f5b15",
  storageBucket: "algoritmoapp-f5b15.appspot.com",
  messagingSenderId: "1091187240943",
  appId: "1:1091187240943:web:52729f365baad7e6e6901a",
  measurementId: "G-JH4JHV1HYL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default {
  firebase,
  database,
};
