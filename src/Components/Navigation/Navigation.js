import React from 'react';
import SignOutPage from '../SignOut/SignOut'

import {Link} from 'react-router-dom';
import * as ROUTES from '../../Constats/routes'


const Navigation = ({authUser}) => (
   <div>
       {authUser ? <NavigationAuth />  : <NavigationNoneAuth/>}
       {console.log(authUser)}
   </div> 

)
    
const NavigationNoneAuth = () => (
    <div>
        <ul>
             <li>
                <Link to={ROUTES.LANDING}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGNIN}>Sign in</Link>
            </li>
        </ul>
    </div>
)
const NavigationAuth = () => (
    <div>
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
                <SignOutPage/>
            </li>
        </ul>
    </div>
)

export default Navigation;