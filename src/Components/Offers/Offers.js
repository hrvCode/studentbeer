import React from 'react';
import {withAuthorization} from '../Session'

const map = () => (
    <div>
        <header>
            <h2>Offers sidan</h2>
        </header>
    </div>
)
const condition = authUser => authUser != null;
export default withAuthorization(condition)(map);