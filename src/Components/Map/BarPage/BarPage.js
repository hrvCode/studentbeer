import React from "react";

const BarPage = (props) => (
    <div>
        <h1>{props.location.state.name}</h1>
        
        <p>{props.location.state.position[0]}</p>
        <p>{props.location.state.position[1]}</p>
    </div>
)

export default BarPage