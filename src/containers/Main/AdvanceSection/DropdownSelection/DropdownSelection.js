import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../../utils/Aux';

import classes from './DropdownSelection.css';

const DropdownSelection = (props) => {
    return (
        <Aux data-test="component-dropdown-selecton">
            <div className="d-flex justify-content-center">
                <h4 className={classes.title + " border-bottom"}>{props.title}</h4>
            </div>
            <div className="input-group mb-3">
                <select 
                    className="custom-select" 
                    id={props.id} 
                    onChange={(event) => props.dropdownItemChange(props.id, event.target.value)} 
                    data-test="select-element">
                    {props.options.map(option => {
                        return <option 
                            value={option.value}
                            key={option.value}
                            data-test="option-element">{option.display}</option>
                    })}
                </select>
            </div>
        </Aux>
    );
}

DropdownSelection.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            display: PropTypes.string,
        })
    ),
    id: PropTypes.string,
    dropdownItemChange: PropTypes.func
}

export default DropdownSelection;