import React from 'react';
import Styled from 'styled-components';
import {withAuthorization} from '../Session'
import {Main} from './FriendListStyle';


const FriendList = () => (
    <Main>
        <header>
            <h2>FriendList sidan</h2>
        </header>
    </Main>
)

// condition kollar om användaren är behörig då "authUser" inte ska vara null

const condition = authUser => authUser != null;
export default withAuthorization(condition)(FriendList);