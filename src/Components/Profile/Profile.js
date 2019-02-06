import React from 'react';
import {withAuthorization} from '../Session';
import {Main} from './ProfileStyle';

const profile = () => (
    <Main>
       
        <header>
            <h2>Profil sidan</h2>
        </header>
    </Main>
)
const condition = authUser => authUser != null;
export default withAuthorization(condition)(profile);