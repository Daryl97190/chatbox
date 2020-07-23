import Rebase from "re-base"
import firebase from "firebase/app";
import "firebase/database";


const config = {
    apiKey: "AIzaSyAamA9YI7mihzuuM_Vj3Hlhnw1NiOPVA6Q",
    authDomain: "chatbox-app-a34a7.firebaseapp.com",
    databaseURL: "https://chatbox-app-a34a7.firebaseio.com",
    projectId: "chatbox-app-a34a7",
    storageBucket: "chatbox-app-a34a7.appspot.com",
    messagingSenderId: "1088885232088",
    appId: "1:1088885232088:web:a5e84f4e86003bb81322ad"
  };
  const firebaseApp = firebase.initializeApp(config);
  const base = Rebase.createClass(firebaseApp.database());

  export { firebaseApp };
  export default base