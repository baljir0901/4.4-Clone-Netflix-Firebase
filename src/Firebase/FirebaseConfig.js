import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvy5tgW7rcq2onvKjbItcgC9U97vG03CY",
  authDomain: "clone-netflix-3a117.firebaseapp.com",
  projectId: "clone-netflix-3a117",
  storageBucket: "clone-netflix-3a117.firebasestorage.app",
  messagingSenderId: "745086089465",
  appId: "1:745086089465:web:0f565c91662434e8838a28",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
