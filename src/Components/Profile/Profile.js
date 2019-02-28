import React from 'react';
import {withFirebase} from '../Firebase';
import {withAuthorization} from '../Session'
import * as Styles from './ProfileStyle';
import * as ROUTES from '../../Constants/routes';
import {Link} from 'react-router-dom';


class Profile extends React.Component{

    state = {
        user: null,
        civilStatus:null,
        bioText:null,
        checkedBar:null,
        loading: false,
        myProfile: false,
        canEdit: true,
    }

    getUserNameFromDB = () => {
        this.props.Firebase
        .user(this.props.authUser.uid)
        .once('value', snapshot => {
            const userObject = snapshot.val()
            this.setState({
                user: userObject.username
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

      getUsercheckedIn = () => {
      
        this.props.Firebase
        .user(this.props.authUser.uid)
        .once('value', snapshot => {
            const userObject = snapshot.val()
            this.setState({
                checkedBar: userObject.CheckedInBar
            })
        })
      };

      

      getOtherUserFromDb = (uid) =>{
        this.props.Firebase
        .user(uid)
        .once('value', snaphot => {
            const userObject = snaphot.val()
            this.setState({
                bioText: userObject.bioText,
                civilStatus: userObject.civilStatus,
                user: userObject.username,
                uid: uid,
                canEdit: false,
            })
        })
      }
      

    componentDidMount(){
        this.setState({loading: true, myProfile:false})
        // om user props skickat ifrån location (friendlist) ska den userns information hämtas istället
        if(this.props.location.user){
            this.getOtherUserFromDb(this.props.location.user.uid)
            
            // annars ladda upp sin egen
        }else{
            this.getUserNameFromDB();
            this.getUserCivilStatusFromDB();
            this.getUserBioFromDB();
            this.getUsercheckedIn();
        }
    }
        // om man klickar på profil nere i navbar så ska man komma till sin egen
    componentWillReceiveProps(){
      this.setState({
        myProfile: this.props.history.location.state.myProfile,
        loading:true,
        canEdit:true,
      })
      this.getUserNameFromDB();
      this.getUserCivilStatusFromDB();
      this.getUserBioFromDB();
    }

    render(){
        return(

            <Styles.Container>
         
                    <Styles.Header>
                        {this.state.canEdit ? <Link to={ROUTES.PROFILEEDIT}><i className="fas fa-cog"></i></Link> : 
                         null }
                    </Styles.Header>
               

            <Styles.Main>           
                <Styles.MiddleSection>
                    <Styles.Avatar><i className="fas fa-user"></i></Styles.Avatar>
                    <h1>{this.state.user}</h1>
                </Styles.MiddleSection>

                {
                    this.props.authUser.roles.includes('ADMIN') ?
                <p>ADMIN</p>:
                 <Styles.StatusSection>
                    <h1>Inckeckad hos</h1>
                    <p>{this.state.checkedBar}</p>
                    <h1>Civil Status</h1>
                    <p>{this.state.civilStatus}</p>
                  </Styles.StatusSection>
                }

                <Styles.BioSection>             
                   {this.props.authUser.roles.includes('ADMIN') ?
                    <h2>Beskrivning</h2>:
                    <h1>Profiltext</h1>
                    }
                    <p>{this.state.bioText}</p>                
                </Styles.BioSection>  

            </Styles.Main>
            </Styles.Container>    
        )
    }
}

const condition = authUser => authUser;
export default withFirebase(withAuthorization(condition)(Profile));




















