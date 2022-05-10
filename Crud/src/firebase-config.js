import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJBGp452VNQ-QkrjMrIBbb1Qf7N5MEVXg",
    authDomain: "progressive-2d975.firebaseapp.com",
    databaseURL: "https://progressive-2d975-default-rtdb.firebaseio.com",
    projectId: "progressive-2d975",
    storageBucket: "progressive-2d975.appspot.com",
    messagingSenderId: "109974914368",
    appId: "1:109974914368:web:4b9ab4d33376a4de7ca6a5",
    measurementId: "G-G4S52J42E4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }