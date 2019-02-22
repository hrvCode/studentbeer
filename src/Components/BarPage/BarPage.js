import React from "react";
import * as Style from './BarpageStyle';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';
import {withFirebase} from '../Firebase/'
import BarOffers from './barOffers/barOffers'
import {withAuthorization} from '../Session'


const BarPage = (props) => (
    <Style.Main>
        <MapHeader />
        <BarBioText />

        <BarOffers
         Firebase={props.Firebase}
         uid={props.location.state.uid}
         />

        <p>latidude:{props.location.state.position[0]}</p>
        <p>longitude:{props.location.state.position[1]}</p>
        <p>{props.location.state.uid}</p>
    </Style.Main>
)

const MapHeaderBase = (props) => (
    <Style.HeaderContainer>
        <i className="fas fa-long-arrow-alt-left" onClick={()=> props.history.push(ROUTES.MAP)}>

        </i>
        <h1>{props.location.state.name}</h1>

    </Style.HeaderContainer>   
)

const BarBioTextBase = (props) =>(
    <Style.BioaBarText>
        <p>
            
        <span>Välkommen till {props.location.state.name}</span> <br /> 
        Phasellus commodo ex sed enim volutpat accumsan. Donec vitae nisl ut dui hendrerit convallis. Proin at felis id nulla maximus ullamcorper sit amet quis nunc. Maecenas id accumsan nunc, vitae condimentum lectus. Phasellus ornare luctus cursus. Duis urna arcu, vehicula vel pharetra quis, auctor et nibh. Phasellus sit amet ultrices sem. 
            
        </p>
    </Style.BioaBarText>
)
const MapHeader = withRouter(MapHeaderBase)
const BarBioText = withRouter(BarBioTextBase)
const condition = authUser => authUser;
export default withFirebase(withAuthorization(condition)(BarPage));