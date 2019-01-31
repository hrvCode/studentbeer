import app from 'firebase/app'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDiDk7wh8JBwMAInA76kCBb2xfmSeyGrjk",
    authDomain: "beerhunter-d5aab.firebaseapp.com",
    databaseURL: "https://beerhunter-d5aab.firebaseio.com",
    projectId: "beerhunter-d5aab",
    storageBucket: "beerhunter-d5aab.appspot.com",
    messagingSenderId: "257542183951"
  };

  class Firebase {
      constructor(){
          app.initializeApp(config)
      }

        doCreateUserWIthEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password ) =>
        this.auth.doSignInWithEmailAndPassword(email, password);

        doSignOut = () => this.auth.signOut();

        doPasswordReset = email =>
        this.auth.sendPasswordResetEmail(email);

        doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password)
  }

  export default Firebase;
