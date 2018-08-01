
import React from 'react';
import propTypes from 'prop-types';

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

PrimaryButton.propTypes = {
    name: propTypes.string.isRequired,
    extraStyles: propTypes.string
}

export default PrimaryButton;