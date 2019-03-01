import React from 'react';
import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import * as ROUTES from '../../Constants/routes';

import {AuthUserContext} from './index';


const withAuthorization = (condition) => Component => {
    class WithAutorization extends React.Component{

/*         state = ({
            CurrentTimeStamp: ''
        }) */
        componentDidMount(){
         
             const time = Date.now()
   

            this.listener = this.props.Firebase.auth.onAuthStateChanged(
                authUser =>{

                    if(authUser){
                        this.props.Firebase
                        .user(authUser.uid)
                        .once('value')
                        .then( snapshot => {
                            const dbUser = snapshot.val();

                            if(!dbUser.roles){
                                dbUser.roles = []
                            }

                            authUser = {
                                uid: authUser.uid,
                                email: authUser.email,
                                ...dbUser
                            }
                            if(!condition(authUser)){
                                this.props.history.push(ROUTES.SIGNIN)
                            }

                            if(dbUser.CheckedInTime + 43200000 < time){
                         this.props.Firebase.user(authUser.uid).update({
                            CheckedInBar:'',
                            CheckedInTime:''
                      });

                            }
                        });
                    }else{
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