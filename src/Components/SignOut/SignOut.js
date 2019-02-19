import { withFirebase } from '../Firebase'
import React from 'react';
import {Button} from './SignOutStyle';


// const userOffline = (props) => (
    
//     this.props.Firebase
//     .user(props.userId)
//     .onDisconnect()
//     .update({online: false})
//     .then(
//         props.Firebase.doSignOut()
//     )
    
// );

class SingOutButton extends React.Component {

    userOffline = () => (
        this.props.Firebase
        .userStatus(this.props.userId)
        .onDisconnect()
        .update({online:false})
        .then(
            this.props.Firebase.doSignOut()
        )
        
    );

    disconnect = () => (
        this.props.Firebase.doSignOut()
    )

    render(){
        return(
            <Button type="button" onClick={()=> this.userOffline()}>
            <i data-tip="Sign out" className="fas fa-sign-out-alt"></i>
            </Button>  
        )
    }
        
    
}

// const SingOutButton = (props) => {
//     const {Firebase, userId} = props
//     console.log(userId)

//     return (
//     <Button type="button" onClick={()=> userOffline(Firebase, userId)}>
//     <i data-tip="Sign out" className="fas fa-sign-out-alt"></i>
//     </Button>
// )};

export default withFirebase(SingOutButton);
