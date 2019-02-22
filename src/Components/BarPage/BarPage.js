import React from "react";
import {withFirebase} from '../Firebase/'
import BarOffers from './barOffers/barOffers'

const BarPage = (props) => (
    <div>
        <h1>{props.location.state.name}</h1>

        <BarOffers
         Firebase={props.Firebase}
         uid={props.location.state.uid}
         />

        <p>latidude:{props.location.state.position[0]}</p>
        <p>longitude:{props.location.state.position[1]}</p>
        <p>{props.location.state.uid}</p>
    </div>
)

export default withFirebase(BarPage)