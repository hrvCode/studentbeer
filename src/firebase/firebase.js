  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDiDk7wh8JBwMAInA76kCBb2xfmSeyGrjk",
    authDomain: "beerhunter-d5aab.firebaseapp.com",
    databaseURL: "https://beerhunter-d5aab.firebaseio.com",
    projectId: "beerhunter-d5aab",
    storageBucket: "beerhunter-d5aab.appspot.com",
    messagingSenderId: "257542183951"
  };

  firebase.initializeApp(config);
  firebase.firestore();
  export default firebase;