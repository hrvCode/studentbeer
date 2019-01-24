import React, { Component } from "react";
import LoginPage from "./../LoginPage/LoginPage"
import Main from '../../Components/Main/Main';
import Navigator from '../../Components/Navigator/Navigator'
import Auxi from '../../Components/Auxi/Auxi'

class Layout extends Component {
    render(){

        let loginState = false;

        return(
            
            <div>
                { loginState ?  
                  <LoginPage />
        
               :<Auxi>
                    <Main /> 
                    <Navigator/>
               </Auxi>}
            </div>
        );
    }
}

export default Layout