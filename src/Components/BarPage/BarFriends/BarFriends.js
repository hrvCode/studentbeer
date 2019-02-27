import React from 'react';
import {withFirebase} from '../../Firebase/';
// import Friend from '../../FriendList/FriendList';
import * as Style from './BarFriendsStyle';


class BarFriends extends React.Component{
    state = {
        Friendslist: []
    }
    componentDidMount(){
        this.props.Firebase.users()
        .on('value', snapshot =>{
            const friendObject = snapshot.val()
            if(friendObject){
                const Friendslist = Object.keys(friendObject).map(friend => ({
                    username: friendObject[friend].username,
                    uid: friendObject[friend].uid,
                    civilStatus: friendObject[friend].civilStatus,
                    CheckedInBar: friendObject[friend].CheckedInBar,
                }))
                this.setState({
                    Friendslist: Friendslist
                })
            } else {
                this.setState({
                    Friendslist: ''
                })
            }
        })

    }

    componentWillUnmount(){
        this.props.Firebase.users()
        .off()
    }

    render(){

        let showFriends = [];

        showFriends = this.state.Friendslist.filter(friend => 
            friend.CheckedInBar === this.props.BarName).map((friend,i) =>{
                return(
                    <Friend 
                        key={i}
                        username={friend.username}
                        CheckedInBar={friend.CheckedInBar}
                        RelationshipStatus={friend.civilStatus}
                    
                    />
                )
            })
        
        console.log(showFriends)
        
        return(
          <div>
              {showFriends}
          </div>
        )
    }
}


export const Friend = (props) => {
    return (  
      <Style.Friend>
        <Style.onlineContainer>
          <i className="far fa-user-circle" > </i>
        </Style.onlineContainer>
        <div>
            <p> <strong> {props.username}</strong></p> <br />
            {/* <p>{c ? props.RelationshipStatus : 'Ingen civilstatus anged'}</p> */}
            <p>{props.RelationshipStatus}</p>
        </div>
      </Style.Friend>
  
    )
  }




export default withFirebase(BarFriends);