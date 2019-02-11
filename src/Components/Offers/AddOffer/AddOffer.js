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
    }
    onSubmit = (event, authUser) => {

        event.preventDefault()
        this.setState({
            bioText: ""
        })

        this.props.Firebase.offers()

        .push({
         text: this.state.bioText,
         user: authUser.uid,
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
        return(
            <AuthUserContext.Consumer>{
                authUser => (
                    <form onSubmit={(event)=>this.onSubmit(event, authUser)}>
                <Styles.TextArea type="text"
                name="bioText"
                onChange={this.onChange}
                placeholder="... "
                />
                <Styles.Button type="submit" disabled={isInvalid}> Skapa </Styles.Button>
            </form>
                )}
            </AuthUserContext.Consumer>
            
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