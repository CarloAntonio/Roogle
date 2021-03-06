import React from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

import classes from './MainSearch.css';

const MainSearch = (props) => {
    let advanceButtonTitle = "Advance";
    if(props.searchType === 1) advanceButtonTitle = "Advance+";
    else if(props.searchType === 2) advanceButtonTitle = "Basic";

    return (
        <header className="container mt-3" data-test="component-main-search">
            <div className="row">
                <h1 className={classes.title + " col-12 text-center display-4"}>Roogle</h1>
                <input 
                    className={classes.input + " col-8 mx-auto p-1 text-center rounded form-control"} 
                    type="text"
                    value={props.searchText} 
                    onChange={(event) => props.mainSearchTextChange(event)}
                    placeholder="Chicken Adobo" 
                    aria-label="Search Input"
                    data-test="input-element"/>
                <div className="mt-2 col-6 mx-auto d-flex justify-content-center">
                    <PrimaryButton 
                        name='Search' 
                        extraStrap='mr-2'
                        primaryFxn={props.fetchRecipes}/>
                    <PrimaryButton 
                        name={advanceButtonTitle} 
                        extraStrap='ml-2'
                        primaryFxn={props.toggleSearch}/>
                </div>
            </div>
        </header>
    );
}

MainSearch.propTypes = {
    searchType: PropTypes.number.isRequired,
    searchText: PropTypes.string,
    mainSearchTextChange: PropTypes.func.isRequired,
    toggleSearch: PropTypes.func.isRequired,
    fetchRecipes: PropTypes.func.isRequired
}

export default MainSearch;