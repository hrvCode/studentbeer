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
                    CheckedInTime:friendObject[friend].CheckedInTime
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
            friend.CheckedInBar === this.props.BarName && Date.now() < friend.CheckedInTime + 43200000)
            .map((friend,i) =>{
                return(
                    <Friend 
                        key={i}
                        username={friend.username}
                        CheckedInBar={friend.CheckedInBar}
                        RelationshipStatus={friend.civilStatus}
                        CheckedInTime={friend.CheckedInTime}
                    
                    />
                )
            })
        
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
            <p>{props.RelationshipStatus ? props.RelationshipStatus : 'Ingen civilstatus anged'}</p>
        </div>
      </Style.Friend>
  
    )
  }




export default withFirebase(BarFriends);