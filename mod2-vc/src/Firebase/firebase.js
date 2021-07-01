import firebase from 'firebase';
import 'firebase/firebase-storage'

const firebaseConfig = {
    apiKey: "AIzaSyCLGPG5k8FOKN3eHCp78VeMVl5PLnUHuzw",
    authDomain: "virtual-campus-799bc.firebaseapp.com",
    projectId: "virtual-campus-799bc",
    storageBucket: "virtual-campus-799bc.appspot.com",
    messagingSenderId: "677722971930",
    appId: "1:677722971930:web:a2ab398d3deda25251d6a3",
    measurementId: "G-2J2C21C3N7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, firebaseApp};

  export default db;