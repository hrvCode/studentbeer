import React from 'react';
import {withAuthorization} from '../Session'
import {Main} from './OffersStyle';
const map = () => (
    <Main>
        <header>
            <h2>Offers sidan</h2>
        </header>
    </Main>
)
const condition = authUser => authUser != null;
export default withAuthorization(condition)(map);