import React from "react";
import * as Style from './BarPageStyle';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';
import {withFirebase} from '../Firebase/'
import BarOffers from './BarOffers/BarOffers'
import BarFriends from './BarFriends/BarFriends'
import {withAuthorization} from '../Session'



class BarPage extends React.Component {
    
    constructor(props) {
        super(props);
    
    this.state = {
        CheckedIn: false,
        bioText:null,
        userPosition:null,
        barPosition:null,
        barUserDistance:null,
      };
    }

      calculateDistance = (lat1, lon1, lat2, lon2) => {
        var R = 6371; // km (change this constant to get miles)
        var dLat = ((lat2 - lat1) * Math.PI) / 180;
        var dLon = ((lon2 - lon1) * Math.PI) / 180;
        var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos((lat1 * Math.PI) / 180) *
         Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
    
        return Math.round(d * 1000);
      };

      getUserPositionFromDB = () => {
        this.props.Firebase
        .user(this.props.authUser.uid)
        .once('value', snapshot => {
            const userObject = snapshot.val()
            this.setState({
                userPosition: userObject.position
            })
            this.getUserBarDistance();
        })
       
      };
        getUserBarDistance = () =>{
    const { barPosition, userPosition } = this.state;
    if (barPosition && userPosition) {
        const {latitude: lat1, longitude: lng1 } = userPosition;
        const lat2 = barPosition[0];
        const lng2 = barPosition[1];
        const dist =this.calculateDistance(lat1,lng1,lat2,lng2);
        this.setState({barUserDistance: dist});
    }
}
      getBarPositionFromDB = () => {
      
        this.props.Firebase
        .bar(this.props.location.state.uid)
        .once('value', snapshot => {
            const barObject = snapshot.val()

            this.setState({
                barPosition: barObject.position,
                bioText: barObject.bioText
            })
        })
       
      };


    componentWillMount(){
        
        
        this.getBarPositionFromDB();
        this.getUserPositionFromDB();
 


        this.props.Firebase
        .user(this.props.authUser.uid)
        .once('value', snapshot => {
            const userObject = snapshot.val()
            if(userObject.CheckedInBar === this.props.location.state.name ){
                this.setState({
                    CheckedIn: true,
                  })
            }
        })
    }

    CheckInFunction() {
        if(!this.state.CheckedIn){
            this.setState(prevState => ({
                // Checked in blir true
                CheckedIn: !prevState.CheckedIn,
              }));
              this.props.Firebase
              .user(this.props.authUser.uid)
              .update({
                  CheckedInBar:this.props.location.state.name,
                  CheckedInTime:this.props.Firebase.timeStamp()
            });
              
        } else {
            this.setState(prevState => ({
                // Checked in blir flase
                CheckedIn: !prevState.CheckedIn,
              }));
              this.props.Firebase
            .user(this.props.authUser.uid)
            .update({
                CheckedInBar:'',
                CheckedInTime:''
            });
        }
        
    }


    render(){

        return(
            <Style.Main>
                <MapHeader />
                    <Style.FlexContainer>
                            <BarBioText Bio={this.state.bioText} />
                            
                            <BarOffers
                            uid={this.props.location.state.uid}
                            />
                        
                            {this.state.CheckedIn ? 
                            <BarFriends 
                            BarName={this.props.location.state.name}
                            />
                            : null}
                    
                            {!this.props.authUser.roles.includes('ADMIN') ?
                            <CheckInButton 
                                Checkin={()=>this.CheckInFunction()}
                                IsCheckedIn={this.state.CheckedIn}
                                dist={this.state.barUserDistance}
                            /> 
                            : null}
                            
                            
                    </Style.FlexContainer>
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
            {props.Bio}
        </p>
    </Style.BioaBarText>
)




const CheckInButton = (props) => {

    let comment ={
        display:"none",
        color:"var(--color-b)",
        fontSize:"22px",
        textShadow:"1px 1px 1px black",
        fontWeight:"bold"
  
    }
   
        let button = {
            backgroundColor: "rgb(43, 112, 139)",
            display:"initial"
          }
         
          if(props.IsCheckedIn){
            button.backgroundColor = "rgb(161, 196, 38)";
          }

    return(
    <Style.CheckInButton >
        <button style={button} onClick={()=> props.Checkin()}>
            {props.dist > 8000 ? props.dist-8000 && 'm': !props.IsCheckedIn ? 'CHECKA IN' : 'CHECKA UT'} 
        </button>
        <p style={comment}>{props.dist-8000} meter kvar för att kunna checka in!</p>
    </Style.CheckInButton>
    )
}


const MapHeader = withRouter(MapHeaderBase)
const BarBioText = withRouter(BarBioTextBase)
const condition = authUser => authUser;
export default withFirebase(withAuthorization(condition)(BarPage));