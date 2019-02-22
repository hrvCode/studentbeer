import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };
// class Firebase hanterar logiken kontohanteringen 

  class Firebase {
      constructor(){
          app.initializeApp(config)
          this.auth = app.auth();
          this.db = app.database();

      }
        doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password ) =>
        this.auth.signInWithEmailAndPassword(email, password);

        doSignOut = () => this.auth.signOut();

        doPasswordReset = email =>
        this.auth.sendPasswordResetEmail(email);

        doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password)

       


        // return timestamp

        timeStamp = () => (
          app.database.ServerValue.TIMESTAMP
        )     
        
        // skapa user i databas **USER API**
        user = uid => this.db.ref(`users/${uid}`);
        users = () => this.db.ref('users');
        userOffers = uid => this.db.ref(`users/${uid}/offers`)

        // manage users state
        myConnectionRef = uid => this.db.ref(`users/${uid}/online`)
        connectedRef = () => this.db.ref(`.info/connected`)


        // Offers API

        offer = uid => this.db.ref(`offers/${uid}`);
        offers = () => this.db.ref('offers');

          // bar Api
        bar = (uid) => this.db.ref(`bars/${uid}`);
        bars = () => this.db.ref(`bars`);


        
      // MERGE AUTH AND DB USER API **


      onAuthUserListener = (next, fallback) => 
        this.auth.onAuthStateChanged(authUser => {
          if(authUser){
            this.user(authUser.uid)
            .once('value')
            .then(snapshot => {
              const dbUser = snapshot.val()

              // checks roles array or asign it empty.
              if(!dbUser.roles){
                dbUser.roles = [];
              }

              // merge authUser with dbUser
              authUser = {
                uid: authUser.uid,
                email: authUser.email,
                ...dbUser
              }
              next(authUser)
            });
          }else{
            fallback();
          }
        });
  };

  export default Firebase;
