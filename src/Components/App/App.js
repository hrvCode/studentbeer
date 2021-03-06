import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import * as ROUTES from '../../Constants/routes';
import Navigation from '../Navigation/Navigation'
import Profile from '../Profile/Profile'
import ProfileEdit from '../Profile/ProfileEdit/ProfileEdit'
import GeoMap from '../Map/Map'
import Offers from '../Offers/Offers'
import Friendlist from '../FriendList/FriendList'
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp'
import NewOffer from '../Offers/AddOffer/AddOffer';
import BarPage from '../BarPage/BarPage';
import Admin from '../Admin/Admin'
import {withAuthentication} from '../Session';


const App = () =>( 
        <Router>
            <div>
                <Route exact path={ROUTES.SIGNIN} component={SignIn} />
                <Route path={ROUTES.PROFILE} component={Profile} />
                <Route path={ROUTES.PROFILEEDIT} component={ProfileEdit} />
                <Route path={ROUTES.MAP} component={GeoMap} />
                <Route path={ROUTES.OFFERS} component={Offers} />
                <Route path={ROUTES.FRIENDLIST} component={Friendlist} />
                <Route path={ROUTES.SIGNUP} component={SignUp} />
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                <Route exact path={ROUTES.ADD_OFFER} component={NewOffer} />
                <Route
                        path={ROUTES.BARPAGE}
                        render={(props) => <BarPage {...props} name={props.name}/>}
                />
                <Route path={ROUTES.ADMIN} component={Admin} />
               
                <Navigation/>

            
            </div>
        </Router>
        )
export default withAuthentication(App);
