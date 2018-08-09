import React from 'react';
import PropTypes from 'prop-types';

import BreakdownItem from '../BreakdownItem/BreakdownItem';

import { objToArrHelper } from '../../../utils/helpers';

import classes from './DailySection.css';

const DailySection = (props) => {

    const dailyData = objToArrHelper(props.totalDaily);

    return (
        <section className="container" data-test="component-daily-section">

            <div className="row justify-content-space-between">
                <h5 className={classes.styles + " col-12 text-center"}>Daily % Breakdown (per serving)</h5>

                {dailyData.map(data => {
                    return <BreakdownItem 
                        key={data.id}
                        id={data.id}
                        name={data.label} 
                        value={data.quantity} 
                        yield={props.yield}
                        unit={data.unit}
                        data-test="daily-item"/>
                })}
                
            </div>

        </section>
    );
}

DailySection.propTypes = {
    dailyData: PropTypes.object,
    yield: PropTypes.number
}

export default DailySection;