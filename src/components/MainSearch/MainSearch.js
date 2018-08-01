import React from 'react';

const MainSearch = () => {
    return (
        <header class="container mt-3" data-test="component-main-search">
            <div class="row">
                <h1 class="col-12 text-center display-4 text-stack-one text-color-primary weight-bold">Roogle</h1>
                <input class="thick-border-primary col-8 mx-auto p-1 text-center rounded" type="text" class="form-control" placeholder="Chicken Adobo" aria-label="Search Input"/>
                <div class="mt-2 col-6 mx-auto d-flex justify-content-center">
                    <button type="button" class="btn search-button mr-2 rounded text-stack-one c-bg-primary text-color-white">Search</button>
                    <button type="button" class="btn search-button ml-2 rounded text-stack-one c-bg-primary text-color-white">Advance</button>
                </div>
            </div>
        </header>
    );
}

export default MainSearch;