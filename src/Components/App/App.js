import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import * as ROUTES from '../../constats/routes';
import Navigation from '../Navigation/Navigation'
import Profile from '../Profile/Profile'
import GeoMap from '../Map/Map'
import Offers from '../Offers/Offers'
import Friendlist from '../FriendList/FriendList'
import Landing from '../Landing/Landing'
import SignIn from '../SignIn/Signin'
import SignUp from '../SignUp/SignUp'
import {withAuthentication} from '../Session';


const  App = (props) =>( 
        <Router>
            <div>
            <Navigation authUser={props.authUser}/>
            <hr />
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route path={ROUTES.PROFILE} component={Profile} />
                <Route path={ROUTES.MAP} component={GeoMap} />
                <Route path={ROUTES.OFFERS} component={Offers} />
                <Route path={ROUTES.FRIENDLIST} component={Friendlist} />
                <Route path={ROUTES.SIGNIN} component={SignIn} />
                <Route path={ROUTES.SIGNUP} component={SignUp} />
    {/*             <Route render={() => <h1>404 page doesnt exist</h1>} /> */}
            </div>
        </Router>
    
        )
export default withAuthentication(App);