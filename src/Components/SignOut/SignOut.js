import { withFirebase } from '../Firebase'
import React from 'react';
import {Button} from './SignOutStyle';

const SignOutButton = (props) =>
        (
            <Button type="button" onClick={props.Firebase.doSignOut}>
            <i data-tip="Sign out" className="fas fa-sign-out-alt"></i>
            </Button>  
        )

export default withFirebase(SignOutButton);
