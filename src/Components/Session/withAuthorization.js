import React from 'react';
import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../Constants/routes';

import {AuthUserContext} from './index';


const withAuthorization = (condition) => Component => {
    class WithAutorization extends React.Component{
        componentDidMount(){
            this.listener = this.props.Firebase.auth.onAuthStateChanged(
                authuser =>{
                    if(!condition(authuser)){
                        this.props.history.push(ROUTES.SIGNIN)
                    }
                }
            )
        }


        componentWillUnmount(){
            this.listener();
        }
        render(){
            return(
            <AuthUserContext.Consumer>
               {authUser => 
                condition(authUser) ? <Component {...this.props} authUser={authUser}/>: null}
            </AuthUserContext.Consumer>
            ) 
        };
    };

    return withRouter(withFirebase(WithAutorization));
}

export default withAuthorization;