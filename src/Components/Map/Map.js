import React from 'react'
import {withAuthorization} from '../Session'

const Map = () => (
    <h1>
        hello Map Site
    </h1>
)
const condition = authUser => authUser != null;
export default withAuthorization(condition)(Map);