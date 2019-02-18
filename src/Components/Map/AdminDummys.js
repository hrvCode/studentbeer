import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from '../../Graphics/icons/beer.svg'; 
import {Link} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';

const AdminIcon = L.icon ({
    iconUrl,
    iconSize: [35, 51],
    iconAnchor: [12.5, 41],
    // popupAnchor är relativt till iconAnchor
    popupAnchor: [0, -41],
    
});

const Dummy = (props) => (
    <Marker 
        position={props.position}
        icon={AdminIcon}>
        <Popup>
            {props.name} <br/>
            <Link to={ROUTES.PROFILE}>Checka in?</Link>
        </Popup>
   </Marker>
) 

export default Dummy