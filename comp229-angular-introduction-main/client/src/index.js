// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase/analytics';
import 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALQ0WBK_0o8AzAwdks2rfAsT3vmGqal-Y",
  authDomain: "bookstore-4f2d5.firebaseapp.com",
  projectId: "bookstore-4f2d5",
  storageBucket: "bookstore-4f2d5.appspot.com",
  messagingSenderId: "550549999489",
  appId: "1:550549999489:web:c669b893d17a96e5f6e280",
  measurementId: "G-FX8G0EBDBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);