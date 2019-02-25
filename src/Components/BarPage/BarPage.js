import React from "react";
import * as Style from './BarPageStyle';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';
import {withFirebase} from '../Firebase/'
import BarOffers from './BarOffers/BarOffers'
import {withAuthorization} from '../Session'

class BarPage extends React.Component {
    
    constructor(props) {
        super(props);
    
    this.state = {
        CheckedIn: false   
      };
    }

    Checkin() {
        this.setState({
          CheckedIn: !this.state.CheckedIn
        })
        console.log(this.state.CheckedIn)
    }

    render(){
        return(
            <Style.Main>
                <Style.Container>
                <MapHeader />
                
                <BarBioText />
                
                {this.state.CheckedIn ?
                    <BarOffers
                uid={this.props.location.state.uid}
                /> :
                null }
        
            
            {/*
                <p>latidude:{this.props.location.state.position[0]}</p>
                <p>longitude:{this.props.location.state.position[1]}</p>
                <p>{this.props.location.state.uid}</p>
                */}
                <CheckInButton 
                    Checkin={()=>this.Checkin()}
                    IsCheckedIn={this.state.CheckedIn}
                />
                </Style.Container>
            </Style.Main>
        )
    }
}


const MapHeaderBase = (props) => (
    <Style.HeaderContainer>
    
        <i className="fas fa-caret-left" onClick={()=> props.history.push(ROUTES.MAP)}>

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




const CheckInButton = (props) => {
   
        let color = {
            backgroundColor: "rgb(43, 112, 139)",
          }
          if(props.IsCheckedIn){
            color.backgroundColor = "rgb(161, 196, 38)";
          }

    return(
    <Style.CheckInButton >
        <button style={color} onClick={()=> props.Checkin()}>
            {!props.IsCheckedIn ? 'CHECKA IN' : 'LOGGA UT'} 
        </button>
    </Style.CheckInButton>
    )
}


const MapHeader = withRouter(MapHeaderBase)
const BarBioText = withRouter(BarBioTextBase)
const condition = authUser => authUser;
export default withFirebase(withAuthorization(condition)(BarPage));