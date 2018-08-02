import React, { Component } from 'react';

import MainSearch from './MainSearch/MainSearch';
import AdvanceSection from './AdvanceSection/AdvanceSection';
import NutrientSection from './NutrientSection/NutrientSection';
import RecipeSection from './RecipeSection/RecipeSection';
import Footer from './Footer/Footer';

import Aux from '../../utils/Aux';

import { recipeItems, nutrientOptions, healthOptions, dietOptions } from '../../utils/testData';
import dropdownData from '../../data/dropdownData';

class Main extends Component {
    render() {
        return (
            <Aux>
                <MainSearch />
                <hr className="mx-5"/>
                <AdvanceSection healthOptions={healthOptions} dietOptions={dietOptions} dropdownData={dropdownData}/>
                <hr className="mx-5"/>
                <NutrientSection nutrientOptions={nutrientOptions}/>
                <hr className="mx-5"/>
                <button type="button" className="btn d-block mx-auto rounded c-bg-primary text-color-white text-stack-one">Search</button>
                <RecipeSection recipeItems={recipeItems} toggle={this.props.toggle}/>
                <Footer />
            </Aux>
        )
    }
}

export default Main;