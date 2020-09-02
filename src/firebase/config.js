import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCBtM4LPv1TteBY3AfdViGonYrLj1YWwd4",
  authDomain: "gallery-react-c260a.firebaseapp.com",
  databaseURL: "https://gallery-react-c260a.firebaseio.com",
  projectId: "gallery-react-c260a",
  storageBucket: "gallery-react-c260a.appspot.com",
  messagingSenderId: "815405326382",
  appId: "1:815405326382:web:49111939a43a06676bffbf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };