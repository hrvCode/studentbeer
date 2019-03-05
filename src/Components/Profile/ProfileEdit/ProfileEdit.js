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

    getUserNameFromDB = () => {
       
       
        this.props.Firebase
        .user(this.props.authUser.uid)
        .once('value', snapshot => {
            const userObject = snapshot.val()
            this.setState({
                username: userObject.username
            })
 
            
        })
      };

      getUserCivilStatusFromDB = () => {
       
        this.props.Firebase
        .user(this.props.authUser.uid)
        .once('value', snapshot => {
            const userObject = snapshot.val()
            this.setState({
                civilStatus: userObject.civilStatus
            })
 
            
        })
      };

      getUserBioFromDB = () => {
      
        this.props.Firebase
        .user(this.props.authUser.uid)
        .once('value', snapshot => {
            const userObject = snapshot.val()
            this.setState({
                bioText: userObject.bioText
            })
        })
      };
    

    

    changeUserDataToDB = () => {
        
    //     let userBioText = this.state.bioText
    //     this.props.Firebase
    //       .user(this.props.authUser.uid)
    //       .update({ bioText:userBioText});

    //   };

    //   changeUserCivilStatusDB = () => {
        
    //     let userCivilStatus = this.state.civilStatus
    //     this.props.Firebase
    //       .user(this.props.authUser.uid)
    //       .update({ civilStatus:userCivilStatus});
    //   };

    //   changeUserNameToDB = () => {
        
    //     let username = this.state.username
    //     this.props.Firebase
    //       .user(this.props.authUser.uid)
    //       .update({ username:username});
    //   };

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
    //    this.changeUserNameToDB();
       this.changeUserDataToDB();
    //    this.changeUserCivilStatusDB();
       this.setState({redirect:true});
        }

        renderRedirect =() =>{

            if(this.state.redirect){

                return <Redirect to ={ROUTES.PROFILE}/>
            }
        }

        componentDidMount(){
            this.setState({loading: true,})
            this.getUserNameFromDB();
            this.getUserCivilStatusFromDB();
            this.getUserBioFromDB();
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
                        <h1>Bio text</h1>}
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
                                  <option value= "Vet ej">Vet ej</option>
                                  <option value= "Singel">Singel</option>
                                  <option value= "Upptagen">Upptagen</option>
      
                            </select>
                       </div>
                        }

                    <h1>Ladda upp en bild</h1>
                    
                        <ProfileImg />
                    

                    </Styles.FormContainer>      

                    <Styles.Button type="submit" >
                                Save changes
                       
                    </Styles.Button>
                                  
            </form>
              </Styles.MiddleSection>       
            </Styles.Main>    
        )
    }
}

const condition = authUser => authUser;
export default withFirebase(withAuthorization(condition)(ProfileEdit));























