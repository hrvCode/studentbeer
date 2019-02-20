import React from 'react';
import {withFirebase} from '../Firebase';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from '../../Graphics/icons/beer.svg'; 
import {Link, Redirect} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';

const AdminIcon = L.icon ({
    iconUrl,
    iconSize: [35, 51],
    iconAnchor: [12.5, 41],
    // popupAnchor är relativt till iconAnchor
    popupAnchor: [0, -41],
    
});



class Admin extends React.Component {
   state = {
          CheckedInBar: '' ,
          BarCords: '',
          dbCoords: null
        };

        // den här funketionen ska hämta hem User kordinater från Firebase.
        //Först måste vi komma åt UserId.

        // getUserPositionFromDB = () => {
        //     this.props.Firebase
        //       .user(this.props.userId)
        //       .child("position")
        //       .once("value", snapshot => {
        //         const test = snapshot.val();
        //         console.log(this.props.userId)
        //         this.setState({ dbCoords: test });
        //       });
        //   };

        // checkIn = () => (
        //     this.setState({
        //         CheckedInBar:this.props.name,
        //         BarCords:this.props.position 
        //     })
            
        // )
       // Den här funktionen ska räkna ut distansen mellan krogens kordinater och jämföra med User kordinater i AuthUser. 

        // calculateDistance = (lat1, lon1, lat2, lon2) => {
        //     var R = 6371; // km (change this constant to get miles)
        //     var dLat = ((lat2 - lat1) * Math.PI) / 180;
        //     var dLon = ((lon2 - lon1) * Math.PI) / 180;
        //     var a =
        //       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        //       Math.cos((lat1 * Math.PI) / 180) *
        //         Math.cos((lat2 * Math.PI) / 180) *
        //         Math.sin(dLon / 2) *
        //         Math.sin(dLon / 2);
        //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        //     var d = R * c;
        
        //     return Math.round(d * 1000);
        //   };
   

        
         
          componentDidMount() {
    // this.getUserPositionFromDB(
        
    // );
    
}
      
    render(){

        return(
            <Marker 
            position={this.props.position}
            icon={AdminIcon}>
            <Popup >
            
               {this.props.name}

                <Redirect to={{
            pathname: '/bar',
            state: { name: this.props.name,
                    position: this.props.position }
        }}
/>
            </Popup>
       </Marker>
        )
    }
}

export default withFirebase(Admin);