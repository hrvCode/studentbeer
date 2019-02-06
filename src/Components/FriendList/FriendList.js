import {withAuthorization} from '../Session'
import * as Style from './FriendListStyle';
import React, { Component } from 'react'


class FriendList extends Component {
    state = {
        active: false
    }
  render(props) {
    return (
        <Style.Container>
            <Header />
            <Friend 
            name="William Nordqvist" 
            location="Hornhuset"/>
         
            <Friend 
            name="Jonathan SilkeWall"
            location="Västerås Bar"/>

            <Friend 
            name="Fredrik Dahlström"
            location="Norrtälja resturang och kök"/>

            <Friend 
            name="Stavros Tsirlidis"
            location="Farsta Nattklubb"/>

            <Friend 
            name="Roger Pontare"
            location="Roger Schalger bar"/>

            <Friend 
            name="Häng Pung"
            location="Golden hits"/>
        </Style.Container>
    )
  }
}



const Header = () => {
    return (
      <Style.Header>
      <i className="fas fa-search"></i>
        SÖK VÄNNER
      </Style.Header>
    )
}

const Friend = (props) => {
  return (
    <Style.Friend>
        <i className="far fa-user-circle" > </i>
        <div>
            <p> <strong> {props.name}</strong></p>
            <i className="fas fa-map-pin" >
                <p className="locationText">{props.location}</p>
            </i>
        </div>
    </Style.Friend>
  )
}





// condition kollar om användaren är behörig då "authUser" inte ska vara null

const condition = authUser => authUser != null;
export default withAuthorization(condition)(FriendList);

