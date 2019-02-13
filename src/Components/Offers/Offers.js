import React, { Component } from 'react';
import {withAuthorization} from '../Session'
import * as Styles from './OffersStyle';
import {AddOfferLink} from './AddOffer/AddOffer';
import {withFirebase} from '../Firebase';
import * as ROLES from '../../Constats/roles';

const Offer = () => (
    <Styles.Main>
         <Styles.Header>
             <h2>Erbjudanden</h2>
             <AddOfferLink/>
         </Styles.Header>
        <OffersList />
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
                        {props.isAdmin ? <i className="far fa-trash-alt" onClick={()=> props.onDelete(props.offerUid)}></i> : null }
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
        isAdmin: false,
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
                    console.log(offersList)
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
            this.props.Firebase.auth.onAuthStateChanged((authUser) => { 
                this.setState({
                    currentUid: authUser.uid
                    
                })
            }) 
           
        })

     
      
    }

    componentWillUnmount(){
        this.props.Firebase.offers().off();
    }


    deleteOffer = (id) => {
        // ref.child(key).remove();
        this.props.Firebase.offer(id).remove()
        console.log(id)
    }

    render(props){
        return(
            <Styles.MainContent>
                <Styles.List>
                    { this.state.offers ?
                        this.state.offers.map(item => {
                            let uidMatch = this.state.currentUid === item.uid ? true : false;
                        return(
                            <OffersListItem
                            isAdmin={uidMatch} 
                            name={item.name}
                            uid={item.uid} 
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