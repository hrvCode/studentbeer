import React from 'react';
import {withFirebase} from '../../Firebase';
import OffersListItem  from '../../Offers/OffersListItem/OffersListItem';
import * as Styles from './BarOffersStyle';

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


                    //If** failsafe if offerUids contains data,
                    if(this.state.offerUids){
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
                 
                }else{
                    this.setState({
                        loading: false,
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
        let uniqeBarsArray = []
        let uniqeBars = [];
          

        // skapar en array med alla erbjudanden, och lägger ihop texten i en array från alla erbjudanden
        // som har samma skapar uid. 
        if(offers){
            offers.map((x,i) => {
                  let offerCount = 0;
                  x.textArray = [];
                  offers.forEach(y => {
                      if(y.uidFromCreator === x.uidFromCreator){
                          offerCount++;
                          x.offerCount = offerCount;
                          x.textArray.push(y.text)
                      }
                  })
                 return x;
              })
                // sparar uidfromcreater till uniqebars array där det bara ska finnas en av varje.
              offers.forEach(x => {
                if(!uniqeBars.length > 0){
                    uniqeBars.push(x.uidFromCreator)
                }
                if(!uniqeBars.includes(x.uidFromCreator)){
                    uniqeBars.push(x.uidFromCreator)
                }
            })
            // sparar  ner uniqeBars i en array 
            for(var i = 0; i < uniqeBars.length; i++){
                for(var j = 0; j < offers.length; j++){
                    if(uniqeBars[i] === offers[j].uidFromCreator){
                        uniqeBarsArray.push(offers[j]);
                        break;
                    }
                }
            }
          }
        

          
        return(
            <Styles.Main>
                <Styles.offersContent>
                {/* tre nestade ternery operators:
                1: kollar om offers ska visa.
                2: kollar om det har laddats klart.
                3: kollar om de finns erbjudanden. */}

                { this.state.loading ? <div><p>Laddar in erbjudanden</p></div>
                    
                    : offers ? 
                    uniqeBarsArray.map((offer,i) => (
                        <Styles.List   key={i}>
                            <h2>Erbjudanden</h2>
                                <OffersListItem
                                     name={offer.name}
                                     text={offer.textArray}
                                    profileOffer={true}
                                    createdAt={offer.createdAt}
                                />   
                        </Styles.List>         
                    )) 
                    : 
                       <h2>Finns inga erbjudanden</h2>
                }
               </Styles.offersContent>
            </Styles.Main>    
        )
    }
}

export default withFirebase(BarOffers);