import {withAuthorization} from '../Session'
import * as Style from './FriendListStyle';
import React, { Component } from 'react'
import {withFirebase} from '../Firebase'
import { auth } from "firebase";


const FriendPage = () => (
  <Style.Container>
    <Header/>
    <FriendList />
  </Style.Container>
)

class FriendListBase extends Component {
    state = {
        active: false,
        FriendList: []
    }

    componentDidMount(){
      this.props.Firebase.users()
      .on('value', snapshot =>{
        const friendObject = snapshot.val()
        if(friendObject){
          const FriendList = Object.keys(friendObject).map(friend => ({
            username: friendObject[friend].username,
            uid: friend,
            position: friendObject[friend].position,
            online: friendObject[friend].online,
          }))
          
          this.setState({
            FriendList: FriendList
          })
          console.log(this.state.FriendList)
          
        } else {
          this.setState({
            FriendList: ''
          })
          console.log(this.state.FriendList)
        }
      
      })
    }

    
    componentWillUnmount(){
      this.props.Firebase.users()
      .off()
    }

  render() {
    const showFriends = this.state.FriendList.map(friend => {

      return(
        <Friend 
          key={friend.uid}
          username={friend.username}
          position={friend.position}
          online={friend.online}
        />
      )
    }).sort(function(x,y){ return (x === y)? 0 : x? -1 : 1;})
    return (
       
       <div>
            {showFriends}
        </div>
    )
  }
}



const Header = () => {
    return (
      <Style.Header>
      <i className="fas fa-search"></i>
      <h2>Sök</h2>
        
      </Style.Header>
    )
}

const Friend = (props) => {
  let status = "Offline"
  let color = {
    color: "red",
  }
  if(props.online){
    status = "Online";
    color.color = "green";
  }

  const {latitude, longitude} = props.position
  return (
    <Style.Friend>
      <Style.onlineContainer>
        <i style={color} className="far fa-user-circle" > </i>
        <p>{status}</p>
      </Style.onlineContainer>
        <div>
            <p> <strong> {props.username}</strong></p>
            <i className="fas fa-map-pin" >
                <p className="locationText">{latitude + '   ' + longitude}</p>
            </i>
        </div>
    </Style.Friend>
  )
}



const FriendList = withFirebase(FriendListBase)

// condition kollar om användaren är behörig då "authUser" inte ska vara null

const condition = authUser => authUser != null;
export default withAuthorization(condition)(FriendPage);

