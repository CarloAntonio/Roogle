import React from 'react';
import PropTypes from 'prop-types';

import BreakdownItem from '../BreakdownItem/BreakdownItem';

import classes from './DailySection.css';

const DailySection = (props) => {
    return (
        <section className="container" data-test="component-daily-section">

            <div className="row justify-content-space-between">
                <h5 className={classes.styles + " col-12 text-center"}>Daily % Breakdown (per serving)</h5>

                {props.dailyData.map(data => {
                    return <BreakdownItem 
                        key={data.name}
                        name={data.name} 
                        value={data.value} />
                })}
                
            </div>

        </section>
    );
}

DailySection.propTypes = {
    dailyData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    )
}

export default DailySection;