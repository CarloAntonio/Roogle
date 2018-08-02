import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../../utils/Aux';

import classes from './DropdownSelection.css';

const DropdownSelection = (props) => {
    return (
        <Aux data-test="component-dropdown-selecton">
            <div className="d-flex justify-content-start">
                <h4 className={classes.title + " border-bottom"}>{props.title}</h4>
            </div>
            <div className="input-group mb-3">
                <select className="custom-select" id={props.id}>
                    {props.options.map(option => {
                        return <option 
                            value={option.value}
                            key={option.value}>{option.display}</option>
                    })}
                </select>
            </div>
        </Aux>
    );
}

DropdownSelection.propTypes = {
    data: PropTypes.objectOf(
        PropTypes.shape({
            title: PropTypes.string,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string,
                    display: PropTypes.string
                })
            ),
            id: PropTypes.string,
            selected: PropTypes.number
        })
    )
}

export default DropdownSelection;