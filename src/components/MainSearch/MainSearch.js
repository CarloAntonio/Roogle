import React from 'react';

import PrimaryButton from '../PrimaryButton/PrimaryButton';

const MainSearch = () => {
    return (
        <header className="container mt-3" data-test="component-main-search">
            <div className="row">
                <h1 className="col-12 text-center display-4 text-stack-one text-color-primary weight-bold">Roogle</h1>
                <input className="thick-border-primary col-8 mx-auto p-1 text-center rounded form-control" type="text" placeholder="Chicken Adobo" aria-label="Search Input"/>
                <div className="mt-2 col-6 mx-auto d-flex justify-content-center">
                    <PrimaryButton name='Search' extraStyles='search-button mr-2'/>
                    <PrimaryButton name='Advance' extraStyles='search-button ml-2'/>
                </div>
            </div>
        </header>
    );
}

export default MainSearch;