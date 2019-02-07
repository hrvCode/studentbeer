import React from 'react';
import {withAuthorization} from '../Session'
import * as Styles from './OffersStyle';
import {AddOfferLink} from './NewOffer'
const map = () => (
    <Styles.Main>
        <Styles.Header>
            <h2>Erbjudanden</h2>
            <AddOfferLink/>
        </Styles.Header>
        <Styles.MainContent>
            <Styles.List>
                <li>
                    <div>   
                        <span><h4>Barkarby Bar</h4> <span>Icon</span></span>
                        <p><strong>25%</strong> t är så många gör sägs det, de har kvar sql där det passar bäst, och sen nosql där det passar. Ska se om jag kan hitta några exempel på fördelningar, det är en intressant tanke</p>               
                    </div>
                </li>
                <li>
                    <div>   
                            <span><h4>Hamre Bar</h4> <span>Icon</span></span>
                            <p><strong>25%</strong> t är så många gör sägs det, de har kvar sql där det passar bäst, och sen nosql där det passar. Ska se om jag kan hitta några exempel på fördelningar, det är en intressant tanke</p>               
                    </div>
                </li>
                <li>
                    <div>   
                            <span><h4>Djungelvrål Bar</h4> <span>Icon</span></span>
                            <p><strong>25%</strong> t är så många gör sägs det, de har kvar sql där det passar bäst, och sen nosql där det passar. Ska se om jag kan hitta några exempel på fördelningar, det är en intressant tanke</p>               
                    </div>
                </li>
            </Styles.List>
        </Styles.MainContent>
    </Styles.Main>
)
const condition = authUser => authUser != null;
export default withAuthorization(condition)(map);