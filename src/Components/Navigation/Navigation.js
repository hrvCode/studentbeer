import React from 'react';
import SignOutPage from '../SignOut/SignOut';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';
import {Main,MainNoneAuth} from './NavigationStyle';
import {withAuthorization} from '../Session'

//Kollar om användaren är godkänd och anger navbar beroende på
const Navigation = ({authUser}) => (
   <Main>
       {authUser ? <NavigationAuth authUser = {authUser}  />  : <NavigationNoneAuth/>}
   </Main> 

)
    
const NavigationNoneAuth = () => (
    
    <MainNoneAuth>
               
    </MainNoneAuth>
)
const NavigationAuth = ({authUser}) => (
    <Main>
        {/* om man är inloggad som admin har man en begränsad Navigation */}
        {authUser.roles.includes('ADMIN') ? 
        <ul>
            <li>
                <Link to={{pathname:  `/profile/${authUser.username}`}}>
                <i className="fas fa-user"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.MAP}><i className="fas fa-map-marked-alt"></i></Link>
            </li>
            <li>
                <Link to={ROUTES.OFFERS}><i className="fas fa-gift"></i></Link>
            </li>
            <li>
                <SignOutPage userId={authUser.uid}/>
            </li>
        </ul>
        :
        /* det här är navigationen som en vanlig user har */
        <ul>
            <li>
                <Link to={{pathname: `/profile/${authUser.username}`,
                state: {user: authUser, myProfile:true}
            }}><i className="fas fa-user"></i></Link>
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
                <SignOutPage userId={authUser.uid}/>
            </li>
        </ul> }
    </Main>
)
const condition = authUser => authUser;
export default withAuthorization(condition)(Navigation);