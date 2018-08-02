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

class Main extends Component {
    render() {

        let advanceSearch = null

        if(this.props.search === 1) {
            advanceSearch = (
                <Aux>
                    <AdvanceSection healthOptions={healthOptions} dietOptions={dietOptions} dropdownOptions={dropdownOptions}/>
                    <hr className="mx-5"/>
                    <button type="button" className="btn d-block mx-auto rounded c-bg-primary text-color-white text-stack-one">Search</button>
                </Aux>
            )
        } else if (this.props.search === 2) {
            advanceSearch = (
                <Aux>
                    <AdvanceSection healthOptions={healthOptions} dietOptions={dietOptions} dropdownOptions={dropdownOptions}/>
                    <hr className="mx-5"/>
                    <NutrientSection nutrientOptions={nutrientOptions}/>
                    <hr className="mx-5"/>
                    <button type="button" className="btn d-block mx-auto rounded c-bg-primary text-color-white text-stack-one">Search</button>
                </Aux>
            )
        }
        return (
            <Aux>
                <MainSearch toggleSearch={this.props.toggleSearch} />
                <hr className="mx-5"/>
                { advanceSearch }
                <RecipeSection recipeItems={recipeItems} toggle={this.props.toggle}/>
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);