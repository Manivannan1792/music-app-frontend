// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
//   appId: process.env.REACT_APP_FIREBASE_APPI_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAUu3hmMx5UHg4unSk1b0jcfJNpA6QubZw",
  authDomain: "musicapp-2ca0e.firebaseapp.com",
  projectId: "musicapp-2ca0e",
  storageBucket: "musicapp-2ca0e.appspot.com",
  messagingSenderId: "549345208887",
  appId: "1:549345208887:web:162d0cc982818790252db2",
};
console.log(firebaseConfig);
// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
console.log(storage);
console.log(app);
export { app, storage };
