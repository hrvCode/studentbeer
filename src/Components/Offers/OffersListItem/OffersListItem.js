import React from 'react'
import * as Styles from './OffersListItemStyle'


class offersListItem extends React.Component{
    state={
        open: false,
    }

    
    toggleOpenOffer = () =>{
        this.setState({ open: !this.state.open });
        console.log("clicked")
    }

    render(){
       /*  const timeStamp = this.props.createdAt; */
        /*const createdAt = new Date(timeStamp).getFullYear() 
        + "/" + new Date(timeStamp).getDate() 
        + "/" + (new Date(timeStamp).getMonth() +1); */

        const profileOffer = this.props.profileOffer;
        return(
            <Styles.Li>
                <Styles.trying open={this.state.open} onClick={this.toggleOpenOffer}>
                    <span>
                        <h4>{this.props.name} <Styles.antal>{this.props.offerCount}</Styles.antal></h4>
                        {
                            profileOffer ? null: 
                            <span>
                                {this.props.isAdmin ? <i className="fas fa-times" 
                                onClick={()=> this.props.onDelete(this.props.offerUid)}></i> 
                                : null }
                            </span> 
                        }
                    </span>
                        { typeof this.props.text !== "string" ?
                            this.props.text.map((t,i) => <p key={i}>* {t}</p>) : <p>{this.props.text}</p>}
                        {/* <div><p>{timeStamp ? "skapad: " + createdAt : null}</p></div> */}
                  </Styles.trying>
            </Styles.Li>
        )
    }
}
export default offersListItem