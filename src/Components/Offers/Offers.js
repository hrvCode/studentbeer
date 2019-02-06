import React from 'react';
import {withAuthorization} from '../Session'
import * as Styles from './OffersStyle';
const map = () => (
    <Styles.Main>
        <header>
            <h2>Offers sidan</h2>
        </header>
    </Styles.Main>
)
const condition = authUser => authUser != null;
export default withAuthorization(condition)(map);