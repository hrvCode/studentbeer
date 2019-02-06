import React from 'react';
import SignOutPage from '../SignOut/SignOut';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../Constats/routes';
import {Main} from './NavigationStyle';

const Navigation = ({authUser}) => (
   <Main>
       {authUser ? <NavigationAuth />  : <NavigationNoneAuth/>}
   </Main> 

)
    
const NavigationNoneAuth = () => (
    
    <Main>
        <ul>
             <li>
                <Link to={ROUTES.LANDING}><i className="fas fa-home"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.SIGNIN}><i className="fas fa-sign-in-alt"></i></Link>
            </li>
        </ul>
    </Main>
)
const NavigationAuth = () => (
    <Main>
    
        <ul>
            <li>
                <Link to={ROUTES.LANDING}><i className="fas fa-home"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.PROFILE}><i className="fas fa-user"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.MAP}><i className="fas fa-map-marked-alt"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.OFFERS}><i className="fas fa-gift"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.FRIENDLIST}><i className="fas fa-user-friends"></i></Link>
            </li>
            <li>
                <SignOutPage/>
            </li>
        </ul>
    </Main>
)

export default Navigation;