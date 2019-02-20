import React,{Component} from 'react';

import {withAuthorization} from '../Session';
// import Avatar from 'react-avatar';

import * as Styles from './ProfileStyle';
import ProfileImg from './ProfileImg/ProfileImg';
import RelationshipStatus from './ProfileRelationshipStatus/ProfileRelationshipStatus';
import ProfileDefaultImg from './ProfileDefaultImg/ProfileDefaultImg'
import ProfileText from './ProfileText/ProfileText'

const profile = () => (

    <Styles.Main>
       <Styles.ContainerLeft>
            <ProfileDefaultImg />
            <ProfileImg />
            <RelationshipStatus />
       </Styles.ContainerLeft>       
        <Styles.ContainerRight>          
          <Styles.ProfileText>
            <ProfileText />
        </Styles.ProfileText>
        </Styles.ContainerRight>>
    </Styles.Main>
)
const condition = authUser => authUser != null;
export default withAuthorization(condition)(profile);