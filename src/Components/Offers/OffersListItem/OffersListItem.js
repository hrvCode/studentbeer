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

                <p>{props.text}</p>
                <p>{timeStamp ? "skapad: " + createdAt : null}</p>
            </div>
        </li>
    )
}
export default offersListItem