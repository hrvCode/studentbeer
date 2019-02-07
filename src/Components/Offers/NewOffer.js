import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import { withAuthorization } from '../Session';
import * as ROUTES from '../../Constats/routes'

const addOffer = () => (
    <div>
        <AddOfferForm/>
    </div>
)

class AddOfferBase extends React.Component{
    state={
        bioText: "",
    }
    onSubmit = event => {
        event.preventDefault()
        this.setState({
            bioText: ""
        })
        this.props.history.push(ROUTES.OFFERS)

        const offerObject = {
            pub: "Irish brewery",
            Puid: "PUB UNIK IDENTIFIER",
            bioText: this.state.bioText,
        }
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
            <form onSubmit={this.onSubmit}>
                <input
                type="text"
                name="bioText"
                onChange={this.onChange}
                placeholder="Skriv ner erat erbjuande här"
                />
                <button type="submit" disabled={isInvalid} >Skapa</button>
            </form>
        )
    }   
}

const AddOfferLink = () =>(
        <Link to="/add-offer">Lägg till ett Erbjudanden</Link>
    )


const AddOfferForm = withRouter(AddOfferBase);


export {AddOfferLink};
export default addOffer;