import Rebase from "re-base"
import firebase from "firebase/app";
import "firebase/database";


const config = {
    apiKey: "xxxxxx",
    authDomain: "xxxxxx",
    databaseURL: "xxxxxx",
    projectId: "xxxxxx",
    storageBucket: "xxxxxx",
    messagingSenderId: "xxxxxx",
    appId: "xxxxxx"
  };
  const firebaseApp = firebase.initializeApp(config);
  const base = Rebase.createClass(firebaseApp.database());

  export { firebaseApp };
  export default base
