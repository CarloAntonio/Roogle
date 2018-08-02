import React from 'react';

import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

import classes from './MainSearch.css';

const MainSearch = (props) => {
    return (
        <header className="container mt-3" data-test="component-main-search">
            <div className="row">
                <h1 className={classes.title + " col-12 text-center display-4"}>Roogle</h1>
                <input className={classes.input + " col-8 mx-auto p-1 text-center rounded form-control"} type="text" placeholder="Chicken Adobo" aria-label="Search Input"/>
                <div className="mt-2 col-6 mx-auto d-flex justify-content-center">
                    <PrimaryButton name='Search' extraStrap='mr-2'/>
                    <PrimaryButton 
                        name='Advance' 
                        extraStrap='ml-2'
                        toggleSearch={props.toggleSearch}/>
                </div>
            </div>
        </header>
    );
}

export default MainSearch;