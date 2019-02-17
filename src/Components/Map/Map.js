import React, { Component } from "react";
import { compose } from "recompose";
import * as Styles from './MapStyle';
import { AuthUserContext, withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";
import GeoMap from './LocatedTwo';

import 'leaflet/dist/leaflet.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Dummy from './AdminDummys';

import Mapp from './MapStyle'

class MapPage extends Component {
 

  render() {
    return (
      <Styles.Mapp>
        <h1>Map</h1>
        <AuthUserContext.Consumer>
          {authUser => (
            <GeoMap userId={authUser.uid} Firebase={this.props.Firebase} />
          )}
        </AuthUserContext.Consumer>
      </Styles.Mapp>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(withFirebase,withAuthorization(condition))(MapPage);

  componentDidMount(){
    // Hämtar användarens position genom browser (browsewr:n måste tillåtas att hämta position)
    // Uppdaterat state med användarens position
    this.listener = navigator.geolocation.watchPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        // Uppdaterar haveUsersLocation till true och ändrar zoom efter att position hämtats
        haveUsersLocation: true,
        zoom: 15
      });
      // Anonym funktion
    }, 
      ()=> 
    {
      // Hämtar API från ipapi.co
      fetch('https://ipapi.co/json')
      // Skapar json objekt
      .then(res => res.json())
      // Uppdaterar state
      .then(location => {
        this.setState({
          location: {
            lat: location.latitude,
            lng: location.longitude
          },
          // Uppdaterar haveUsersLocation till true och ändrar zoom efter att position hämtats
          haveUsersLocation: true,
          zoom: 12
        });
        console.log(this.state.location)
      })
    });
  }
  componentWillUnmount(){
    this.listener();
  }
      render(){
        const position = [this.state.location.lat, this.state.location.lng]
        return (
          <Mapp>
            <Map className="map" center={position} zoom={this.state.zoom}>
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Ternary operator, IF haveUserLocation true, visa position ELSE tom sträng/inget värde */}
                {this.state.haveUsersLocation ?
                <Marker 
                position={position}
                icon={myIcon}>
                <Popup>
                    Här är din position.
                </Popup>
                </Marker> : ''
                }

                <Dummy 
                position = {[59.316659403640784, 18.033692836761475]} 
                name = 'Hornhuset'/>

                <Dummy 
                position = {[59.3247235, 18.0738668]} 
                name = 'Bistro & Grill Ruby'/>

                <Dummy 
                position = {[59.3139639, 18.1057867]} 
                name = 'Boule & Berså'/>

                <Dummy 
                position = {[59.3144622, 18.0745471]} 
                name = 'Kellys bar'/>  

                <Dummy 
                position = {[59.3392438, 18.0813002]} 
                name = 'The Londoner'/>  

                <Dummy 
                position = {[59.3431683, 18.049093]} 
                name = 'Tranan'/>  

                <Dummy 
                position = {[59.3315633, 18.0312097]} 
                name = 'Hirschenkeller'/> 

            </Map>

            
          </Mapp> 
        )
      }
    }
const condition = authUser => authUser != null;
export default withAuthorization(condition)(GeoMap);
