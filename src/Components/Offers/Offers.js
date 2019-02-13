import React, { Component } from 'react';
import {withAuthorization, AuthUserContext} from '../Session'
import * as Styles from './OffersStyle';
import {AddOfferLink} from './AddOffer/AddOffer';
import {withFirebase} from '../Firebase';
import * as ROLES from '../../Constats/roles';

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


const OffersListItem = (props) => {
    const timeStamp = props.createdAt;
    const createdAt = new Date(timeStamp).getFullYear() 
    + "/" + new Date(timeStamp).getDate() 
    + "/" + (new Date(timeStamp).getMonth() +1);

    return(
        <li>
            <div>
                <span>
                    <h4>{props.name}</h4>
                    <span>
                        {props.isAdmin ? <i className="fas fa-times" onClick={()=> props.onDelete(props.offerUid)}></i> : null }
                    </span> 
                </span>

                <p>{props.text}</p>
                <p>{timeStamp ? "skapad: " + createdAt : null}</p>
            </div>
        </li>
    )
}

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

                    this.setState({
                        loading:false,
                        offers:offersList,
                    })  
            }else{
                this.setState({
                    loading:true,
                    offers: null,
                })  
            } 
            const authUser = this.props.authUser;
                this.setState({
                    currentUid: authUser.uid     
                })
                console.log(this.state.currentUid)
        })
    }

    componentWillUnmount(){
        this.props.Firebase.offers().off();

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
    
    render(props){
        return(
            <Styles.MainContent>
                <Styles.List>
                    { this.state.offers ?
                        this.state.offers.map(item => {
<<<<<<< HEAD
                            const uidMatch = this.state.currentUid === item.uid ? true : false;
=======
                            let uidMatch = this.state.currentUid === item.uidFromCreator ? true : false;
>>>>>>> 3b46a9b20c3d20220b49c8384ddf59c5657217ba
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