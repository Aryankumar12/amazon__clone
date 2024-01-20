// import firebase from 'firebase'
// const firebaseConfig = {
//     apiKey: "AIzaSyB4pihmQ44z_nvlBh_9xqeR8tmX_g6JigE",
//     authDomain: "clone-1ac55.firebaseapp.com",
//     projectId: "clone-1ac55",
//     storageBucket: "clone-1ac55.appspot.com",
//     messagingSenderId: "966663877653",
//     appId: "1:966663877653:web:7045317c3cc36d38668a1c"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig)
//   const db = firebaseApp.firestore();

//   const auth  = firebase.auth

//   export {db, auth};




  import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4pihmQ44z_nvlBh_9xqeR8tmX_g6JigE",
  authDomain: "clone-1ac55.firebaseapp.com",
  projectId: "clone-1ac55",
  storageBucket: "clone-1ac55.appspot.com",
  messagingSenderId: "966663877653",
  appId: "1:966663877653:web:7045317c3cc36d38668a1c"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };