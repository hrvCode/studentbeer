import React from 'react'

import OffersListItem  from '../../Offers/OffersListItem/OffersListItem';
import * as Styles from './barOffersStyle';

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
            <h1 onClick={this.showOffers}>Show</h1>
            <Styles.List>

            {/* tre nestade ternery operators:
            1: kollar om offers ska visa.
            2: kollar om det har laddats klart.
            3: kollar om de finns erbjudanden. */}

            { this.state.showOffers ? 
                this.state.loading ? <p>Laddar in erbjudanden</p>
                : offers ?
                     offers.map((offer,i) => (
                        <OffersListItem
                        key={i}
                        name={offer.name}
                        text={offer.text}
                        profileOffer={true}
                        /> 
                    )) : 
                    <h2>Finns inga erbjudanden</h2>
            : null
            }
            </Styles.List>
            </div>
        )
    }
}

export default BarOffers;