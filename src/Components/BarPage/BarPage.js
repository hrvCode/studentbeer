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
        lat1:null,
        lng1:null,
        lat2:null,
        lng2:null,
        
      };
    }
    getUserNameFromDB = () => {
        this.props.Firebase
        .user(this.props.authUser.uid)
        .once('value', snapshot => {

            const userObject = snapshot.val()

            this.setState({
                user: userObject.username
            })

        })
        console.log(this.state.user);
      };

      getBarPositionFromDB = () => {
      
        this.props.Firebase
        .bar(this.props.location.state.uid)
        .once('value', snapshot => {
            const barPosition = snapshot.val()
            this.setState({
                barPosition: barPosition.position
            })
        })
        console.log(this.state.barPosition);
      };



    getUserBioFromDB = () => {
      
        this.props.Firebase
        .bar(this.props.location.state.uid)
        .once('value', snapshot => {
            const userObject = snapshot.val()
            this.setState({
                bioText: userObject.bioText
            })
        })
       
      };

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
        })
       
      };

      getBarPositionFromDB = () => {
      
        this.props.Firebase
        .bar(this.props.location.state.uid)
        .once('value', snapshot => {
            const barObject = snapshot.val()
            this.setState({
                barPosition: barObject.position
            })
        })
       
      };


    componentWillMount(){
        this.getUserBioFromDB();
        this.getBarPositionFromDB();
        this.getUserPositionFromDB();


        const lat1 =22;
        this.setState({lat1:lat1})
        const lng1 = 2;
        this.setState({lng1:lng1})
        const lat2 = 2;
        this.setState({lat2:lat2})
        const lng2 = 2;
        this.setState({lng2:lng2})

        const dist =this.calculateDistance(lat1,lng1,lat2,lng2);

        this.setState({barUserDistance:dist});

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
            this.setState({
                // Checked in blir true
                CheckedIn: !this.state.CheckedIn,
              })
              this.props.Firebase
              .user(this.props.authUser.uid)
              .update({
                  CheckedInBar:this.props.location.state.name,
                  CheckedInTime:this.props.Firebase.timeStamp()
            });
              
        } else {
            this.setState({
                // Checked in blir flase
                CheckedIn: !this.state.CheckedIn,
              })
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
        color:"red",
        fontSize:"18px",
        

    }
   
        let button = {
            backgroundColor: "rgb(43, 112, 139)",
            display:"initial"
          }
          if (props.dist > 10)
          {
              button.display ="none"
              comment.display="initial"  
            }

          if(props.IsCheckedIn){
            button.backgroundColor = "rgb(161, 196, 38)";
          }

    return(
    <Style.CheckInButton >
        <button style={button} onClick={()=> props.Checkin()}>
            {!props.IsCheckedIn ? 'CHECKA IN' : 'CHECKA UT'} 
        </button>
        <p style={comment}>Du är {props.dist-50} meter för långt ifrån baren för att kunna checka in! </p>
    </Style.CheckInButton>
    )
}


const MapHeader = withRouter(MapHeaderBase)
const BarBioText = withRouter(BarBioTextBase)
const condition = authUser => authUser;
export default withFirebase(withAuthorization(condition)(BarPage));