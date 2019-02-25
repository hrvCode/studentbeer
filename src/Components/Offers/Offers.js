import React, { Component } from 'react';
import {withAuthorization, AuthUserContext} from '../Session'
import * as Styles from './OffersStyle';
import OffersListItem from './OffersListItem/OffersListItem.js'
import {AddOfferLink} from './AddOffer/AddOffer';
import {withFirebase} from '../Firebase';
import * as ROLES from '../../Constants/roles';

const Offer = (props) => (
    <Styles.Main>
         <Styles.Header>
             <h2>Erbjudanden</h2>
            {props.authUser.roles.includes(ROLES.ADMIN) ? <AddOfferLink/>: null} 
         </Styles.Header>

         <AuthUserContext.Consumer>
            {
                authUser => <OffersList authUser={authUser} />
            }
         </AuthUserContext.Consumer>
        
    </Styles.Main>
)

class OfferBase extends Component {
    state = {
        loading:false,
        offers: [],
        currentUid: ''
    }

    componentDidMount(){
        this.setState({loading:true});

        this.props.Firebase.offers().on('value', snapshot => {
            const offersObject = snapshot.val()
            if(offersObject){
                const offersList = Object.keys(offersObject).map(key => ({
                    ...offersObject[key],
                    OfferUid: key,
                    }));

                    // sorterar på beroende på när de skapades
                    offersList.sort((a,b)=>{
                        return a.createdAt - b.createdAt
                    })
                    // vänder på sorteringen så nyaste hamnar högst upp
                    offersList.reverse()
                    // sätter offers till state och avaktiverar loading
                    this.setState({
                        loading:false,
                        offers: offersList
                    })  
            }else{
                // finns inga meddelanden registerars null
                this.setState({
                    loading:false,
                    offers: null,
                })  
            } 
            // hämtar current authUser
            const authUser = this.props.authUser;
                this.setState({
                    currentUid: authUser.uid     
                })
        })
    }

    componentWillUnmount(){
        this.props.Firebase.offers().off();
        this.props.Firebase.userOffers().off()

    }


    deleteOffer = (id) => {
        // tar bort Offer från offer objekt i firebase
        this.props.Firebase.offer(id).remove()

        // hämtar offer object från specifik användare.
        this.props.Firebase.userOffers(this.props.authUser.uid)
        .once('value', snapshot =>{
            const offerList = snapshot.val()
            //loopar igenom användarens offerlist
            for(var x in offerList){
                // om keyn i offer-offeruid matchar user-offeruid i firebase.
               if(offerList[x].offerUid === id){
                   //om match hittas tas user-offeruid bort ifrån databasen
                this.props.Firebase.userOffers(this.props.authUser.uid).child(x).remove()
               }
            }

        })
    }

    render(){
        return(
            <Styles.MainContent>
                <Styles.List>
                    { this.state.offers ?
                       this.state.offers.map(item => {
                            let uidMatch = this.state.currentUid === item.uidFromCreator ? true : false;
                        return(
                            <OffersListItem
                            isAdmin={uidMatch} 
                            name={item.name}
                            uid={item.uidFromCreator} 
                            text={item.text} 
                            key={item.OfferUid}
                            createdAt={item.createdAt}
                            offerUid={item.OfferUid}
                            onDelete={this.deleteOffer}
                            /> 
                        
                        )
                    }
                    ): <p>No offers atm</p>}
                </Styles.List>
            </Styles.MainContent>
        )
    }
}

const OffersList = withFirebase(OfferBase)
const condition = authUser => authUser;
export default withAuthorization(condition)(Offer);