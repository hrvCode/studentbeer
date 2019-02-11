import React, { Component } from 'react';
import {withAuthorization} from '../Session'
import * as Styles from './OffersStyle';
import {AddOfferLink} from './AddOffer/AddOffer';
import {withFirebase} from '../Firebase';

const Offer = () => (
    <Styles.Main>
         <Styles.Header>
             <h2>Erbjudanden</h2>
             <AddOfferLink/>
         </Styles.Header>
        <OffersList />
    </Styles.Main>
)


const OffersListItem = (props) => (
    <li>
        <div>
            <span><h4>{props.user}</h4></span>
            <p>{props.text}</p>
        </div>
    </li>
)

class OfferBase extends Component {
    state = {
        loading:false,
        offers: []
    }

    componentDidMount(){
        this.setState({loading:true});

        this.props.Firebase.offers().on('value', snapshot => {
            const offersObject = snapshot.val()

            const offersList = Object.keys(offersObject).map(key => ({
                ...offersObject[key],
                uid: key,
                }));


            this.setState({
                loading:false,
                offers:offersList,
            })    
        })
    }

    componentWillUnmount(){
        this.props.Firebase.offers().off();
    }
    render(){
        return(
            <Styles.MainContent>
                <Styles.List>
                    {this.state.offers.map(item => {
                        console.log(item)
                        return(
                    <OffersListItem 
                    user={item.user} 
                    text={item.text} 
                    key={item.uid}/>
                        )
                    }


                     )}
                </Styles.List>
            </Styles.MainContent>
        )
    }
}


const OffersList = withFirebase(OfferBase)
const condition = authUser => authUser;
export default withAuthorization(condition)(Offer);