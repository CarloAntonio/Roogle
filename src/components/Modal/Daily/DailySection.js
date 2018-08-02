import React from 'react';

import BreakdownItem from '../BreakdownItem/BreakdownItem';

import { dailyData } from '../../../utils/testData';
import classes from './DailySection.css';

const DailySection = (props) => {
    return (
        <section className="container">

            <div className="row justify-content-space-between">
                <h5 className={classes.styles + " col-12 text-center"}>Daily % Breakdown (per serving)</h5>

                {dailyData.map(data => {
                    return <BreakdownItem 
                        key={data.name}
                        name={data.name} 
                        value={data.value} />
                })}
                
            </div>

        </section>
    );
}

export default DailySection;