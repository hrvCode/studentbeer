import React from 'react';
import {withFirebase} from '../../Firebase';
import {withAuthorization} from '../../Session'
import * as Styles from './ProfileEditStyle'
import * as ROUTES from '../../../Constants/routes';
import {Redirect} from 'react-router-dom';
import ProfileImg from '../ProfileImg/ProfileImg';

class ProfileEdit extends React.Component{

    state = {
        username:null,
        bioText:null,
        civilStatus:null,
        loading: false,
        redirect:false
    }
    

      getUserDataFromDB = () => {     
        this.props.Firebase
        .user(this.props.authUser.uid)
        .once('value', snapshot => {
            const userObject = snapshot.val()
            this.setState({
                username: userObject.username,
                civilStatus: userObject.civilStatus,
                bioText: userObject.bioText
            })
        })
    };

    

    changeUserDataToDB = () => {

        let userBioText = this.state.bioText;
        let userCivilStatus = this.state.civilStatus;
        let username = this.state.username;

        this.props.Firebase
        .user(this.props.authUser.uid)
        .update({ bioText:userBioText, civilStatus:userCivilStatus, username:username});
    };



      
      onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


      onSubmit = () =>{
       this.changeUserDataToDB();
       this.setState({redirect:true});
        }

        renderRedirect =() =>{

            if(this.state.redirect){

                return <Redirect to ={ROUTES.PROFILE}/>
            }
        }

        componentDidMount(){
            this.setState({loading: true,})
            this.getUserDataFromDB();
        }
    render(){

       
        return(
            
            <Styles.Main>
            {this.renderRedirect()}
              <Styles.Header>
                <h1>Redigera Profil</h1>
              </Styles.Header>

              <Styles.MiddleSection>

              <form onSubmit={this.onSubmit}>
                
                    <Styles.FormContainer>
                        <h1>Ändra Namn</h1>
                        <input 
                            type="text"
                            name="username"
                            onChange={this.onChange}
                            placeholder="Ändra namn" 
                        />
                        {this.props.authUser.roles.includes('ADMIN') ?
                        <h1>Beskrivning</h1>:
                        <h1>Profil Beskrivning</h1>}
                        <textarea
                        row="20"
                        cols="40"
                        maxLength="150"
                            type="text"
                            name="bioText"
                            onChange={this.onChange}
                            placeholder="Skriv lite om dig själv...max 150 tecken" 
                        />
                      {this.props.authUser.roles.includes('ADMIN') ? null:
                       <div>
                           <h1>Civil Status</h1>
                              <select name="civilStatus" onChange={this.onChange}>
                                  <option value= "Vet ej">Annat</option>
                                  <option value= "Singel">Singel</option>
                                  <option value= "Upptagen">Upptagen</option>
      
                            </select>
                       </div>
                        }

                    <h1>Ladda upp en bild</h1>
                    
                        <ProfileImg />
                    

                    </Styles.FormContainer>      

                    <Styles.Button type="submit" >
                                Spara Ändring
                       
                    </Styles.Button>
                                  
            </form>
              </Styles.MiddleSection>       
            </Styles.Main>    
        )
    }
}

const condition = authUser => authUser;
export default withFirebase(withAuthorization(condition)(ProfileEdit));























