import React from 'react';



        
const login = (props) =>{

    return(
            <div>
            <div>
                <input 
                    type="text"
                    placeholder="Email" />
                <input 
                    type="password"  
                    placeholder="Password"></input>
            </div>

            <div>
                <button>Login</button>

                <button>SignUp</button>
                <a href="#">Forgot Password?</a>
            </div>
        </div>
    )
}

export default login;