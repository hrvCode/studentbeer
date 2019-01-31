import React from 'react';
import SignOutPage from '../SignOut/SignOut'

import {Link} from 'react-router-dom';
import * as ROUTES from '../../constats/routes'

import {Main} from './NavigationStyle';

const Navigation = (props) => (
    <Main>
        <ul>
             <li>
                <Link to={ROUTES.LANDING}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.PROFILE}>Profile</Link>
            </li>
            <li>
                <Link to={ROUTES.MAP}>Map</Link>
            </li>
            <li>
                <Link to={ROUTES.OFFERS}>Offers</Link>
            </li>
            <li>
                <Link to={ROUTES.FRIENDLIST}>Friendlist</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGNIN}>Sign in</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGNUP}>Sign up</Link>
            </li>
            <li>
                <SignOutPage/>
            </li>
        </ul>
    </Main>
)

export default Navigation;