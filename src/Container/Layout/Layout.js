import React, { Component, Fragment } from "react";
import LoginPage from "./../LoginPage/LoginPage"
import Main from '../../Components/Main/Main';
import Navigator from '../../Components/Navigator/Navigator'
<<<<<<< HEAD
import Auxi from '../../Components/Auxi/Auxi'
import Firebase from '../../firebase/firebase';
=======

>>>>>>> master

class Layout extends Component {
    state = {
      loginState: true
    }

    signUpState = () =>{
        this.setState({
            loginState: !this.state.loginState
        });
     }
    componentDidMount(){
        this.login()
    }

    login = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({
                    loginState: false,
                })
                console.log(user)
            }else{
                console.log("wrong password or username")
            }
        })
    }

    signOut = () => {
        console.log("signing out")
        Firebase.auth().signOut();
        this.setState({
            loginState: true,
        })
    }
    
    render(){        
        return(
            <div>
<<<<<<< HEAD
                {
                    this.state.loginState ?  
                    <LoginPage login={this.login}/>
                    :<Auxi>
                        <Main /> 
                        <Navigator signOut={this.signOut}/>
                    </Auxi>}
=======
                { loginState ?  
                  <LoginPage />
        
               :<Fragment>
                    <Main /> 
                    <Navigator/>
               </Fragment>}
>>>>>>> master
            </div>
        );
    }
}

export default Layout