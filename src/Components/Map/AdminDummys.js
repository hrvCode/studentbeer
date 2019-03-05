import React from 'react';
import {withFirebase} from '../Firebase';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from '../../Graphics/icons/beer.svg'; 
import {Redirect} from 'react-router-dom';
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

      
    render(){

        return(
            <Marker 
            position={this.props.position}
            icon={AdminIcon}>
            <Popup >
            
               {this.props.name}
                {/* redirect till barPage component, skickar vidare props. */}
                <Redirect to={{
                    pathname: ROUTES.BARPAGE,
                    state: { name: this.props.name,
                    position: this.props.position,
                    uid: this.props.uid
                }
        }}
/>
            </Popup>
       </Marker>
        )
    }
}

export default withFirebase(Admin);