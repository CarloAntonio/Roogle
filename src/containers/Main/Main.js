import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainSearch from './MainSearch/MainSearch';
import AdvanceSection from './AdvanceSection/AdvanceSection';
import NutrientSection from './NutrientSection/NutrientSection';
import RecipeSection from './RecipeSection/RecipeSection';
import Footer from './Footer/Footer';
import Aux from '../../utils/Aux';

import * as actions from '../../store/actions/actions';

import { recipeItems } from '../../data/MockData'
import { nutrientOptions, healthOptions, dietOptions, dropdownOptions } from '../../data/SelectionData';

export class UnconnectedMain extends Component {
    render() {

        let advanceSection = null
        if(this.props.search === 1 || this.props.search === 2) {
            advanceSection = (
                <Aux>
                    <AdvanceSection 
                        healthOptions={healthOptions} 
                        dietOptions={dietOptions} 
                        dropdownOptions={dropdownOptions}
                        data-test="advance-section"/>
                    <hr className="mx-5"/>
                    { this.props.search === 1 
                        ? <button type="button" className="btn d-block mx-auto rounded c-bg-primary text-color-white text-stack-one">Search</button>
                        : null
                    }
                </Aux>
            )
        } 
        
        let nutrientSection = null
        if (this.props.search === 2) {
            nutrientSection = (
                <Aux>
                    <NutrientSection 
                        nutrientOptions={nutrientOptions}
                        data-test="nutrient-section"/>
                    <hr className="mx-5"/>
                    <button type="button" className="btn d-block mx-auto rounded c-bg-primary text-color-white text-stack-one">Search</button>
                </Aux>
            )
        }
        return (
            <Aux data-test="component-main">
                <MainSearch toggleSearch={this.props.toggleSearch} search={this.props.search} data-test="main-search"/>
                <hr className="mx-5"/>
                { advanceSection }
                { nutrientSection }
                <RecipeSection recipeItems={recipeItems} toggle={this.props.toggle} data-test="recipe-section"/>
                <Footer data-test="footer"/>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        search: state.redUI.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSearch: () => dispatch(actions.toggleSearch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedMain);