import {withAuthorization} from '../Session'
import * as Style from './FriendListStyle';
import React, { Component } from 'react'
import {withFirebase} from '../Firebase'
import Header from './Header/Header'
import {withRouter} from 'react-router-dom';



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
          const FriendList = Object.keys(friendObject).map((friend) => {
            return(
              {
              roles: friendObject[friend].roles,
              username: friendObject[friend].username,
              uid: friend,
              CheckedInBar: friendObject[friend] ? friendObject[friend].CheckedInBar : null,
              position: friendObject[friend].position,
              online: friendObject[friend].online,
              }
            )
          })
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

    showProfile = (user) => {
      this.props.history.push({
        pathname:`profile/${user.username}`,
        user: user,
      })
    }


    SearchInFriendList = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }


    ClearSearchField = (props) => {
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
      // mappar ut användare och sorterar ut admin
      showFriends = this.state.FriendList.map(friend => {
        if(!friend.roles){
          return <Friend 
            key={friend.uid}
            username={friend.username}
            CheckedInBar={friend.CheckedInBar}
            position={friend.position}
            online={friend.online}
            onClick={ () => this.showProfile(friend)}
          />;
        }
        return null;
      })


      // sorting friend tab,
      // those with online true will get sorted to the top.
      showFriends.sort((a,b) => {
        if(a && b){
          if(a.props.online === undefined){
            return 1;
          }
          if(b.props.online === undefined){
            return 1;
          }
          return -1;
        }
        return null;
      })

    }else{
      let condition = this.state.search.toLowerCase();
      showFriends = this.state.FriendList.map( friend => {
        return (friend.username.toLowerCase().includes(condition) ?
        !friend.roles ?
        <Friend 
        key={friend.uid}
        username={friend.username}
        position={friend.position}
        CheckedInBar={friend.CheckedInBar}
        online={friend.online}
        onClick={ () => this.showProfile(friend)}
        /> : null : null)
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


export const Friend = (props) => {
  let status = "Offline"
  let color = {
    color: "rgb(139, 43, 43)",
  }
  if(props.online){
    status = "Online";
    color.color = "rgb(101, 124, 18)";
  }

  let checkedBar = {};
  if(props.CheckedInBar !== "" && props.online){
    checkedBar = {
      text: `incheckad: ${props.CheckedInBar}`,
    }
  }
  return (  
    <Style.Friend>
      <Style.onlineContainer onClick={props.onClick}>
        <i style={color} className="far fa-user-circle" ></i>
        <p>{status}</p>
      </Style.onlineContainer>
      <div>
          <p><strong>{props.username}</strong></p>
          <p className="locationText"> {checkedBar.text}</p>
      </div>
    </Style.Friend>

  )
}



const FriendList = withFirebase(withRouter(FriendListBase))

// condition kollar om användaren är behörig då "authUser" inte ska vara null

const condition = authUser => authUser != null && !authUser.roles.includes('ADMIN');
export default withAuthorization(condition)(FriendPage);

