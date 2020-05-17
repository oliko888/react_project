import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANGQocUBZ_g8igzamq0lEK-83aGeAtMQ0",
  authDomain: "catch-of-the-day-fredoin-357dc.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-fredoin-357dc.firebaseio.com"
});


const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
