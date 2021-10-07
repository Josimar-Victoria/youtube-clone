import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDf5-mWO2MXS_pesn2iSV1ArwMmTbSMTlA",
  authDomain: "clone-57065.firebaseapp.com",
  projectId: "clone-57065",
  storageBucket: "clone-57065.appspot.com",
  messagingSenderId: "314904794215",
  appId: "1:314904794215:web:3de3d47fb80ed606fff0c2",
  measurementId: "G-6VJPBZ9TY4",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();
