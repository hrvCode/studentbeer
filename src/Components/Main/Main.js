import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Profile from './Profile/Profile';
import Map from './Map/Map';
import Offers from './Offers/Offers';
import Friendlist from './FriendList/FriendList';

const main = (props) => (
    <div>
            <Switch>
                <Route exact path="/" render={() => ( <Profile/> )}/>
                <Route path="/profile" render={() => ( <Profile/> )}/>
                <Route path="/map" render={() => ( <Map/> )}/>
                <Route path="/offers" render={() => ( <Offers/> )}/>
                <Route path="/friendlist" render={() => ( <Friendlist/> )}/>
                <Route render={() => <h1>404 page doesnt exist</h1>} />
            </Switch>
    </div>
)

export default main;