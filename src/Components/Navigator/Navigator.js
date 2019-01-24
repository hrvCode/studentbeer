import React from 'react';
import Styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Main = Styled.div`


`;

const navigator = () => (
    <Main>
        <ul>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/map">Map</NavLink>
            </li>
            <li>
                <NavLink to="/offers">Offers</NavLink>
            </li>
            <li>
                <NavLink to="/friendlist">Friendlist</NavLink>
            </li>
        </ul>
    </Main>
)

export default navigator;