import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB_D0x-FpLGzPGMvcl9fD4rFMjNQinyCCw",
  authDomain: "user-auth-377f2.firebaseapp.com",
  projectId: "user-auth-377f2",
  storageBucket: "user-auth-377f2.appspot.com",
  messagingSenderId: "464430836438",
  appId: "1:464430836438:web:907874aceed8328fd57777",
});

export const auth = app.auth();

export default app;
