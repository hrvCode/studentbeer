import React from 'react';
import SignOutPage from '../SignOut/SignOut'
import ReactTooltip from 'react-tooltip';

import {Link} from 'react-router-dom';
import * as ROUTES from '../../constats/routes'

import {Main} from './NavigationStyle';

const Navigation = (props) => (
    <Main>
        <ul> <li>

        <ReactTooltip/>
        </li>
             <li>
                <Link to={ROUTES.LANDING}><i data-tip="Home" className="fas fa-home"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.PROFILE}><i data-tip="Profile" className="fas fa-user"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.MAP}><i data-tip="Map" className="fas fa-map-marked-alt"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.OFFERS}><i data-tip="Offers" className="fas fa-gift"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.FRIENDLIST}><i data-tip="Friend list" className="fas fa-user-friends"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.SIGNIN}><i data-tip="Sign in" className="fas fa-sign-in-alt"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.SIGNUP}><i data-tip="Sign up" className="fas fa-user-plus"></i></Link>
            </li>
            <li>
                <SignOutPage/>
            </li>
        </ul>
    </Main>
)

export default Navigation;