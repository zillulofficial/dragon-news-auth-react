// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL_93dIB_F2p1xlo5KHJ_x9YtjQ8AQ_gE",
  authDomain: "dragon-news-auth-react-93ee1.firebaseapp.com",
  projectId: "dragon-news-auth-react-93ee1",
  storageBucket: "dragon-news-auth-react-93ee1.appspot.com",
  messagingSenderId: "983551777873",
  appId: "1:983551777873:web:86e69c16be1e3e30162c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app