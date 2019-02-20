import {withAuthorization} from '../Session'
import * as Style from './FriendListStyle';
import React, { Component } from 'react'
import {withFirebase} from '../Firebase'
import { auth } from "firebase";
import Header from './Header/Header'



const FriendPage = () => (
  <Style.Container>
    <FriendList />
  </Style.Container>
)

class FriendListBase extends Component {
    state = {
        active: false,
        FriendList: [],
        search: "",
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
        }else{
          this.setState({
            FriendList: ''
          })

        }
      })
    }

    SearchInFriendList = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }


    ClearSearchField = () => {
      this.setState({
        search: "",
      })
    }

    componentWillUnmount(){
      this.props.Firebase.users()
      .off()
    }

  render() {

    let showFriends = [];
    if(this.state.search.length === 0){
      showFriends = this.state.FriendList.map(friend => {
        return(
          <Friend 
            key={friend.uid}
            username={friend.username}
            position={friend.position}
            online={friend.online}
          />
        )
      })
      showFriends.sort()

    }else{
      let condition = this.state.search.toLowerCase();
      showFriends = this.state.FriendList.map( friend => {
        return (friend.username.toLowerCase().includes(condition) ? 
        <Friend 
        key={friend.uid}
        username={friend.username}
        position={friend.position}
        online={friend.online}
        /> : null)
      })
      showFriends.sort()
    }
    

    return ( 
      <div>
            <Header 
            searchFriend={(event) => this.SearchInFriendList(event)}
            clearSearch={() => this.ClearSearchField()}
            searched={this.state.search}
            />
            {showFriends}
      </div>
    )
  }
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

