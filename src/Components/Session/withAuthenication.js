import React from 'react';

import AuthUserContext from './context';
import {withFirebase} from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component{
            state={
                authUser: null,
            }
    //  när Component mountas kollar den genom firebase om det finns ett User objekt
        componentDidMount(){
            this.listener = this.props.Firebase.auth.onAuthStateChanged(
                authUser => {
                    // Finns authUser så sätts state, annars Null
                    authUser ? this.setState({authUser}): 
                    this.setState({authUser: null});
                }
            );
        }
        componentWillUnmount(){
            this.listener();
        }
        render(){
            const {authUser} = this.state;
            return (
                <AuthUserContext.Provider value={authUser}>
                    <Component  {...this.props} />
                </AuthUserContext.Provider>
            )
        }
    }
    return withFirebase(WithAuthentication);
}
export {AuthUserContext};
export default withAuthentication;