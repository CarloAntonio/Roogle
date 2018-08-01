
import React from 'react';

const PrimaryButton = (props) => {
    return (
        <button 
            type="button" 
            class={`btn rounded text-stack-one c-bg-primary text-color-white ${props.extraStyles}`}
            data-test="component-primary-button">
                {props.name}
        </button>
    );
}

export default PrimaryButton;