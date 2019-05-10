import Rebase from "re-base";
import firebase from "firebase";

//1. configure our application, first disable the auth in firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBln9Wo99jL_9PYf24BGfihkydllbj6lKo",
    authDomain: "catch-of-the-day-sebas-1.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-sebas-1.firebaseio.com",
    // projectId: "catch-of-the-day-sebas-1",
    // storageBucket: "catch-of-the-day-sebas-1.appspot.com",
    // messagingSenderId: "53869283644",
    // appId: "1:53869283644:web:0573a5a98ae337fc"
});

//2. create a rebase binding - we pass a function that return the dabase that we have

const base = Rebase.createClass(firebaseApp.database());

//3. export all of them from here

// this is a named export
export { firebaseApp };

//this is a default export - bring it into our other file
export default base;