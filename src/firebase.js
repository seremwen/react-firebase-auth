// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "your-key",
  authDomain: "react*************.firebaseapp.com",
  projectId: "react-auth-****",
  storageBucket: "react-auth-90a03.appspot.com",
  messagingSenderId: "************",
  appId: "**********************",
  measurementId: "**************"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;


