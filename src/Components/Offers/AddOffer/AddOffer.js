import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import { withAuthorization } from '../../Session';
import * as ROUTES from '../../../Constats/routes'
import * as Styles from '../AddOffer/AddOfferStyle';
import {withFirebase} from '../../Firebase/index';
import {AuthUserContext} from '../../Session';

const addOffer = () => (
    <Styles.Main>
        <h2>Skapa ett nytt erbjudande!</h2>
        <AddOfferForm/>
    </Styles.Main>
)

class AddOfferBase extends React.Component{
    state={
        bioText: "",
        authUser: null,
        timeStamp: null,
    }

    componentDidMount(){
        this.props.Firebase.onAuthUserListener((authUser) => {
            this.setState({
                authUser,
                timeStamp: this.props.Firebase.timeStamp(),
            })
        },
        () => this.props.history.push(ROUTES.SIGNIN))
    }

    onSubmit = (event, authUser) => {

        event.preventDefault()
        this.setState({
            bioText: ""
        })

        this.props.Firebase.offers()

        .push({
         text: this.state.bioText,
         uid: authUser.uid,
         name: authUser.username,
         createdAt: this.state.timeStamp,
        //  user: 
        })
        
        this.props.history.push(ROUTES.OFFERS)

        // const offerObject = {
        //     pub: "Irish brewery",
        //     Puid: "PUB UNIK IDENTIFIER",
        //     bioText: this.state.bioText,
        // }
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
        <Link to="/add-offer">Lägg till ett Erbjudanden</Link>
    )


const AddOfferForm = withRouter(withFirebase(AddOfferBase));


const condition = authUser => authUser != null;
export {AddOfferLink};
export default withAuthorization(condition)(addOffer);