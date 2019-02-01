import React from 'react';
import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../Constats/routes';
const withAuthorization = (condition) => Component => {
    class WithAutorization extends React.Component{
        componentDidMount(){
            this.listener = this.props.Firebase.auth.onAuthStateChanged(
                authuser =>{
                    if(!condition(authuser)){
                        this.props.history.push(ROUTES.LANDING)
                    }
                }
            )
        }
        componentWillUnmount(){
            this.listener();
        }
        render(){
            return <Component {...this.props}/>
        }
    }

    return withRouter(withFirebase(WithAutorization));
}

export default withAuthorization;