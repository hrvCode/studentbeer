import React, { Component, Fragment } from "react";
import LoginPage from "./../LoginPage/LoginPage"
import Main from '../../Components/Main/Main';
import Navigator from '../../Components/Navigator/Navigator'


class Layout extends Component {
    render(){

        let loginState = true;

        return(
            
            <div>
                { loginState ?  
                  <LoginPage />
        
               :<Fragment>
                    <Main /> 
                    <Navigator/>
               </Fragment>}
            </div>
        );
    }
}

export default Layout