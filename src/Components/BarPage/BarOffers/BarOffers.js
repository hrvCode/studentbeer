import React from 'react';
import {withFirebase} from '../../Firebase';
import OffersListItem  from '../../Offers/OffersListItem/OffersListItem';
import * as Styles from './BarOffersStyle';
import Arrow from './Arrow/Arrow';

class BarOffers extends React.Component{

    state = {
        offerUids: "",
        offers: null,
        loading: false,
        showOffers: false,
    }

    componentDidMount(){

        this.setState({
            loading: true,
        })
        console.log(this.props.uid);
        this.props.Firebase
        .bar(this.props.uid)
        .once('value', snapshot => {
            const offersObject = snapshot.val()
            
            this.props.Firebase
            .userOffers(offersObject.admin)
            .on('value', snapshot => {
                const offerUidsObject = snapshot.val()

                if(offerUidsObject){

                    const offerUidList = Object.keys(offerUidsObject)
                    .map( key => ({
                        ...offerUidsObject[key]
                    }))

                    this.setState({
                        offerUids: offerUidList,
                    })
                    const offerList  = [];
                    this.state.offerUids.map(offer => {
                        return(
                            this.props.Firebase.offer(offer.offerUid)
                            .on('value', snapshot =>{
                                offerList.push(snapshot.val())
                                this.setState({
                                    offers: offerList,
                                    loading: false
                                })
                            })
                        )
                    })
                }
            })
        })
    }


    showOffers = () => {
        this.setState({
            showOffers: !this.state.showOffers
        })
    }
    componentWillUnmount(){
        this.props.Firebase.userOffers().off()
        this.props.Firebase.offer().off()
    }

    render(){

        let {offers} = this.state;
        return(
            <div>
                <h3 onClick={this.showOffers}>Visa erbjudanden</h3>
                <Styles.offersbakgorund>
                <Styles.List>

                {/* tre nestade ternery operators:
                1: kollar om offers ska visa.
                2: kollar om det har laddats klart.
                3: kollar om de finns erbjudanden. */}

                { this.state.showOffers ? 
                    this.state.loading ? <div><p>Laddar in erbjudanden</p></div>
                    : offers ? 
                        offers.map((offer,i) => (
                            <OffersListItem
                            key={i}
                            name={offer.name}
                            text={offer.text}
                            profileOffer={true}
                            createdAt={offer.createdAt}
                            />            
                        )) : 
                        <h2>Finns inga erbjudanden</h2>
                : null
                }
                </Styles.List>
                </Styles.offersbakgorund>
            </div>    
        )
    }
}

export default withFirebase(BarOffers);