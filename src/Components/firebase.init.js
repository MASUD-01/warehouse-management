// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUUFPLgOrTRV1_lGUgT_QS_M5uOw8ABTs",
    authDomain: "warehouse-management-eb1af.firebaseapp.com",
    projectId: "warehouse-management-eb1af",
    storageBucket: "warehouse-management-eb1af.appspot.com",
    messagingSenderId: "670395304666",
    appId: "1:670395304666:web:5c37607228cb68854233e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;