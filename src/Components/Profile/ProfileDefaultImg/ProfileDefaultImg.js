import React,{Component} from 'react';

import Avatar from 'react-avatar';

import * as Styles from './ProfileDefaultImgStyle'

class ProfileDefaultImg extends Component {
    state = {
        userName: null 
    
    };

    render() {
        return (
         <Styles.ProfileDefaultImgStyle>
            <h2>Stephen Hawking</h2>
            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name="Stephen Hawking" />
         </Styles.ProfileDefaultImgStyle>
        )
    }
 }
    
export default ProfileDefaultImg;