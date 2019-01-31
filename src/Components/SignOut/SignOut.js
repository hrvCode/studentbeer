import { withFirebase } from '../Firebase'
import React from 'react';
import ReactTooltip from 'react-tooltip';
import {Button} from './SignUpStyle';

const SingOutButton = ({Firebase}) => (
    
    <Button type="button" onClick={Firebase.doSignOut}>
    <ReactTooltip/>
    <i data-tip="Sign out" class="fas fa-sign-out-alt"></i>
    </Button>
);

export default withFirebase(SingOutButton);