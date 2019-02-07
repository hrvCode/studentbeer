import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import * as ROUTES from '../../Constats/routes';
import Navigation from '../Navigation/Navigation'
import Profile from '../Profile/Profile'
import GeoMap from '../Map/Map'
import Offers from '../Offers/Offers'
import Friendlist from '../FriendList/FriendList'
import Landing from '../Landing/Landing'
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp'
import NewOffer from '../Offers/NewOffer';
import {withAuthentication, AuthUserContext} from '../Session';


const App = () =>( 
        <Router>
            <div>
          
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route path={ROUTES.PROFILE} component={Profile} />
                <Route path={ROUTES.MAP} component={GeoMap} />
                <Route path={ROUTES.OFFERS} component={Offers} />
                <Route path={ROUTES.FRIENDLIST} component={Friendlist} />
                <Route path={ROUTES.SIGNIN} component={SignIn} />
                <Route path={ROUTES.SIGNUP} component={SignUp} />
                <Route exact path={ROUTES.ADD_OFFER} component={NewOffer} />
    {/*             <Route render={() => <h1>404 page doesnt exist</h1>} /> */}
  
    <           AuthUserContext.Consumer>
                {authUser => <Navigation authUser={authUser} /> }
                </AuthUserContext.Consumer>
            
            </div>
        </Router>
        )
export default withAuthentication(App);