import firebase from 'firebase';

require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyC5njmnLjGmqYQcvwZ98_7UEmRsfHbORcs",
  authDomain: "bartersystemapp-48f20.firebaseapp.com",
  projectId: "bartersystemapp-48f20",
  storageBucket: "bartersystemapp-48f20.appspot.com",
  messagingSenderId: "637989506928",
  appId: "1:637989506928:web:6cdb624c3ded54ee6ec9b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();