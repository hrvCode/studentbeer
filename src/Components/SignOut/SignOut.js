import { withFirebase } from '../Firebase'
import React from 'react';
import {Button} from './SignOutStyle';

const SingOutButton = ({Firebase}) => (
    <Button type="button" onClick={Firebase.doSignOut}>
    <i data-tip="Sign out" class="fas fa-sign-out-alt"></i>
    </Button>
);

export default withFirebase(SingOutButton);