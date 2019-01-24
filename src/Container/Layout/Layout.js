import React, { Component } from "react";
import LoginPage from "./../LoginPage/LoginPage"
import Main from '../../Components/Main/Main';
import Navigator from '../../Components/Navigator/Navigator'
import Auxi from '../../Components/Auxi/Auxi'
import Firebase from '../../firebase/firebase';

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
                {
                    this.state.loginState ?  
                    <LoginPage login={this.login}/>
                    :<Auxi>
                        <Main /> 
                        <Navigator signOut={this.signOut}/>
                    </Auxi>}
            </div>
        );
    }
}

export default Layout