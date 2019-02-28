import React from 'react';
import {Link} from 'react-router-dom'
import { withAuthorization, AuthUserContext } from '../../Session';
import * as ROUTES from '../../../Constants/routes'
import * as Styles from '../AddOffer/AddOfferStyle';
import {withRouter} from 'react-router-dom';
import {withFirebase} from '../../Firebase/index';

const addOffer = () => (
    <Styles.Main>
        <Styles.Header>
        <h2>Skapa ett nytt erbjudande!</h2>
        </Styles.Header>
       
        <AuthUserContext.Consumer>
        {
            authUser => <AddOfferForm authUser={authUser}/>
        }
        </AuthUserContext.Consumer>
        
    </Styles.Main>
)

class AddOfferBase extends React.Component{
    state={
        bioText: "",
        authUser: null,
        timeStamp: null,
    }

    componentDidMount(){
        const authUser = this.props.authUser;
            this.setState({
                authUser,
                timeStamp: this.props.Firebase.timeStamp(),
            })
    }

    onSubmit = (event, authUser) => {

        event.preventDefault()
        this.setState({
            bioText: ""
        })

        this.props.Firebase.offers()
        .push({
         text: this.state.bioText,
         uidFromCreator: authUser.uid,
         name: authUser.username,
         createdAt: this.state.timeStamp,

        })
        .then((snap) => {
            const key = snap.key;
            this.props.Firebase.userOffers(authUser.uid).push({
                offerUid: key
            })
        })
        .then(
            
            this.props.history.push(ROUTES.OFFERS)
        )
    }


    onChange = event =>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    

    render(){
        const {bioText} = this.state
        const isInvalid = bioText === "";
        const authUser = this.state.authUser;
        return(
                <form onSubmit={(event)=>this.onSubmit(event, authUser)}>
                    <Styles.TextArea type="text"
                        name="bioText"
                        onChange={this.onChange}
                        placeholder="... "
                    />
                <Styles.Button type="submit" disabled={isInvalid}> Skapa </Styles.Button>
            </form>
             
        )
    }   
}

const AddOfferLink = () =>(
        <Link to="/add-offer">Lägg till erbjudanden</Link>
    )


const AddOfferForm = withRouter(withFirebase(AddOfferBase));


const condition = authUser => authUser != null;
export {AddOfferLink};
export default withAuthorization(condition)(addOffer);