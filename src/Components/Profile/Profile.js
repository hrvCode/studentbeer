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
        loading: false,
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

      

    componentDidMount(){
        this.setState({loading: true,})
        this.getUserNameFromDB();
        this.getUserCivilStatusFromDB();
        this.getUserBioFromDB();
    }


    render(){
        return(

            <Styles.Container>
                 <Styles.Header>
                    <Link to={ROUTES.PROFILEEDIT}><i className="fas fa-cog"></i></Link>
                </Styles.Header>
                
            <Styles.Main>           
                <Styles.MiddleSection>
                    <Styles.Avatar><i className="fas fa-user"></i></Styles.Avatar>
                    <h1>{this.state.user}</h1>
                </Styles.MiddleSection>

                {
                    this.props.authUser.roles.includes('ADMIN') ?
                <p>Admin info</p>:
                 <Styles.StatusSection>
                    <h1>Inckeckad hos</h1>
                    <p>Bara baren</p>
                    <h1>Civil Status</h1>
                    <p>{this.state.civilStatus}</p>
                  </Styles.StatusSection>
                }

                <Styles.BioSection>             
                   {this.props.authUser.roles.includes('ADMIN') ?
                    <h2>Beskrivning</h2>:
                    <h1>Min bio text</h1>
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




















