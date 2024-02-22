// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlt3SIS0DciXNC33VopJ5VH2ZtKnwKhKo",
  authDomain: "react-auth-90a03.firebaseapp.com",
  projectId: "react-auth-90a03",
  storageBucket: "react-auth-90a03.appspot.com",
  messagingSenderId: "181432490431",
  appId: "1:181432490431:web:611680e87eb9a487fda90a",
  measurementId: "G-28CNN9GH9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;


