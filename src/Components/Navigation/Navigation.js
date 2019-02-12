import React from 'react';
import SignOutPage from '../SignOut/SignOut';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../Constats/routes';
import {Main,MainNoneAuth} from './NavigationStyle';

//Kollar om användaren är godkänd och anger navbar beroende på
const Navigation = ({authUser}) => (
   <Main>
       {authUser ? <NavigationAuth />  : <NavigationNoneAuth/>}
   </Main> 

)
    
const NavigationNoneAuth = () => (
    
    <MainNoneAuth>
                <Link to={ROUTES.SIGNUP}><button>Sign up</button></Link>
    </MainNoneAuth>
)
const NavigationAuth = () => (
    <Main>
    
        <ul>
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