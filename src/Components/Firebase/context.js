import React from 'react';
// skapar en react context
const FirebaseContext = React.createContext(null);

// variabel withfirebase skapas och retunera firebase context mellan olika delar i appen.
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {Firebase => <Component {...props} Firebase={Firebase} />}
    </FirebaseContext.Consumer>
)

export default FirebaseContext;