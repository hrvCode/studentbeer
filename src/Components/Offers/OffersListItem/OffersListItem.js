import React from 'react'


const offersListItem = (props) => {
    const timeStamp = props.createdAt;
    const createdAt = new Date(timeStamp).getFullYear() 
    + "/" + new Date(timeStamp).getDate() 
    + "/" + (new Date(timeStamp).getMonth() +1);
    const profileOffer = props.profileOffer;


    return(
        <li>
            <div>
                <span>
                    <h4>{props.name}</h4>
                    {
                        profileOffer ? null: 
                        <span>
                            {props.isAdmin ? <i className="fas fa-times" 
                            onClick={()=> props.onDelete(props.offerUid)}></i> 
                            : null }
                        </span> 
                    }
                </span>
                    { typeof props.text !== "string" ?
                        props.text.map((t,i) => <p key={i}>* {t}</p>) : <p>{props.text}</p>}
                    {/* <div><p>{timeStamp ? "skapad: " + createdAt : null}</p></div> */}
              </div>
        </li>
    )
}
export default offersListItem