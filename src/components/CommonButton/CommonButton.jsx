import React from "react";
import './CommonButton.css'

function CommonButton(props) {


    return ( 
        <button class="common-button">
            {props.label}
        </button>
    );
}

export default CommonButton;