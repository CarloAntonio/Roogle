import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainSearch from './MainSearch/MainSearch';
import AdvanceSection from './AdvanceSection/AdvanceSection';
import NutrientSection from './NutrientSection/NutrientSection';
import RecipeSection from './RecipeSection/RecipeSection';
import Footer from './Footer/Footer';
import Aux from '../../utils/Aux';

import * as actions from '../../store/actions/actions';

import { nutrientOptions, dietOptions, dropdownOptions } from '../../data/SelectionData';

import classes from './Main.css';

export class UnconnectedMain extends Component {

    componentDidMount() {
        //this.props.fetchRecipes();
    }

    render() {

        let advanceSection = null;
        if(this.props.searchType === 1 || this.props.searchType === 2) {
            advanceSection = (
                <Aux>
                    <AdvanceSection 
                        healthItems={this.props.healthItems} 
                        healthItemChange={this.props.healthItemChange}
                        dietOptions={dietOptions} 
                        dropdownOptions={dropdownOptions}
                        data-test="advance-section"/>
                    <hr className="mx-5"/>
                    { this.props.searchType === 1 
                        ? <button type="button" className={classes.buttonStyles + " btn d-block mx-auto rounded"}>Search</button>
                        : null
                    }
                </Aux>
            )
        } 
        
        let nutrientSection = null;
        if (this.props.searchType === 2) {
            nutrientSection = (
                <Aux>
                    <NutrientSection 
                        nutrientOptions={nutrientOptions}
                        data-test="nutrient-section"/>
                    <hr className="mx-5"/>
                    <button type="button" className={classes.buttonStyles + " btn d-block mx-auto rounded"}>Search</button>
                </Aux>
            )
        }
        return (
            <Aux data-test="component-main">
                <MainSearch 
                    toggleSearch={this.props.toggleSearch} 
                    searchType={this.props.searchType}
                    fetchRecipes={() => this.props.fetchRecipes(this.props.searchText)}
                    searchText={this.props.searchText}
                    mainSearchTextChange={this.props.mainSearchTextChange}
                    data-test="main-search"/>
                <hr className="mx-5"/>
                { advanceSection }
                { nutrientSection }
                <RecipeSection 
                    recipeItems={this.props.recipeItems} 
                    toggleModal={this.props.toggleModal} 
                    data-test="recipe-section"/>
                <Footer data-test="footer"/>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchType: state.redUI.searchType,
        recipeItems: state.redAPI.recipeItems,
        searchText: state.redOptions.searchText,
        healthItems: state.redOptions.healthItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSearch: () => dispatch(actions.toggleSearch()),
        toggleModal: () => dispatch(actions.toggleModal()),
        mainSearchTextChange: (event) => dispatch(actions.mainSearchTextChange(event.target.value)),
        fetchRecipes: (searchText) => dispatch(actions.fetchRecipes(searchText)),
        healthItemChange: (itemName) => dispatch(actions.healthItemChange(itemName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedMain);