import React, { Component } from 'react';
import {withAuthorization, AuthUserContext} from '../Session'
import * as Styles from './ProfileStyle';

import {withFirebase} from '../Firebase';
import * as ROLES from '../../Constants/roles';





class ProfileBase extends Component {
    state = {
        loading:false,
        user: ''
    }

  

    componentDidMount(){
        this.setState({loading:true});
        this.setState({user:this.props.authUser.username})
      
    
        
        
       
    }

    componentWillUnmount(){
        this.props.Firebase.offers().off();

    }


    
    
    render(){
        return(
            <Styles.MainContent>
            <h1>{this.state.user}</h1>
            
            </Styles.MainContent>
        )
    }
}


const ProfileList = withFirebase(ProfileBase)
const condition = authUser => authUser;
export default withAuthorization(condition)(ProfileList);