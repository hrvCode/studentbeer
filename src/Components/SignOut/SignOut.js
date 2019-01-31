import { withFirebase } from '../Firebase'
import React from 'react';

const SingOutButton = ({Firebase}) => (
    <button type="button" onClick={Firebase.doSignOut}>
     Sign Out
    </button>
);

export default withFirebase(SingOutButton);