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


const OffersListItem = (props) => {
    const admin = props.isAdmin
    const timeStamp = props.createdAt;
    const createdAt = new Date(timeStamp).getFullYear() 
    + "/" + new Date(timeStamp).getDate() 
    + "/" + (new Date(timeStamp).getMonth() +1);

    return(
        <li>
            <div>
                <span><h4>{props.name}</h4> {admin ? <span><i className="far fa-trash-alt"></i></span>:<p>hej</p>} </span>
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
        isAdmin: false
    }

    componentDidMount(){
        this.setState({loading:true});

        this.props.Firebase.offers().on('value', snapshot => {
            const offersObject = snapshot.val()
            if(offersObject){
                const offersList = Object.keys(offersObject).map(key => ({
                    ...offersObject[key],
                    uid: key,
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
        })

        this.props.Firebase.onAuthUserListener((authUser) => { 
            if(authUser.roles){

                this.setState({
                    isAdmin: true
                })
            } 
        })
      
    }

    componentWillUnmount(){
        this.props.Firebase.offers().off();
    }

    render(props){
        return(
            <Styles.MainContent>
                <Styles.List>
                    { this.state.offers ?
                        this.state.offers.map(item => {
                        return(
                            <OffersListItem 
                            name={item.name}
                            uid={item.uid} 
                            text={item.text} 
                            key={item.uid}
                            createdAt={item.createdAt}
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