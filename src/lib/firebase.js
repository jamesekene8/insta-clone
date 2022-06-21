import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBKZO0ZaX19-Rntg49WoCTXXId14HVWcuw",
  authDomain: "instagram-clone-c5d2a.firebaseapp.com",
  projectId: "instagram-clone-c5d2a",
  storageBucket: "instagram-clone-c5d2a.appspot.com",
  messagingSenderId: "275411057781",
  appId: "1:275411057781:web:652d8927ff5f13ada30c3c",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
