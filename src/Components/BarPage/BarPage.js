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
<<<<<<< HEAD
        barPosition:null,
        user:null

=======
        barPosition:null
        
>>>>>>> c166db2abbcfee571b664d82cf885f5657df7f8c
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
<<<<<<< HEAD
      
        this.getUserNameFromDB();
=======
        this.getUserPositionFromDB();
>>>>>>> c166db2abbcfee571b664d82cf885f5657df7f8c
        
       
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
   
        let color = {
            backgroundColor: "rgb(43, 112, 139)",
          }
          if(props.IsCheckedIn){
            color.backgroundColor = "rgb(161, 196, 38)";
          }

    return(
    <Style.CheckInButton >
        <button style={color} onClick={()=> props.Checkin()}>
            {!props.IsCheckedIn ? 'CHECKA IN' : 'CHECKA UT'} 
        </button>
    </Style.CheckInButton>
    )
}


const MapHeader = withRouter(MapHeaderBase)
const BarBioText = withRouter(BarBioTextBase)
const condition = authUser => authUser;
export default withFirebase(withAuthorization(condition)(BarPage));