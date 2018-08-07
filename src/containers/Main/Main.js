import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GridLoader } from 'halogenium';

import MainSearch from './MainSearch/MainSearch';
import AdvanceSection from './AdvanceSection/AdvanceSection';
import NutrientSection from './NutrientSection/NutrientSection';
import RecipeSection from './RecipeSection/RecipeSection';
import Footer from './Footer/Footer';
import Aux from '../../utils/Aux';

import * as actions from '../../store/actions/actions';

import { dropdownOptions } from '../../data/SelectionData';

import classes from './Main.css';

class Main extends Component {

    componentDidMount() {
        this.props.fetchRecipes(this.props.searchText, this.props.healthItems, this.props.dietItems, this.props.dropdownItems, this.props.nutrientItems);
    }

    render() {
        
        let advanceSection = null;
        if(this.props.searchType === 1 || this.props.searchType === 2) {
            advanceSection = (
                <Aux>
                    <AdvanceSection 
                        healthItems={this.props.healthItems} 
                        healthItemChange={this.props.healthItemChange}
                        dietItems={this.props.dietItems} 
                        dietItemChange={this.props.dietItemChange}
                        dropdownOptions={dropdownOptions}
                        dropdownItemChange={this.props.dropdownItemChange}
                        data-test="advance-section"/>

                    { this.props.searchType === 1 
                        ? (
                            <div className="d-flex justify-content-center my-5">
                                <button 
                                    type="button" 
                                    onClick={() => this.props.fetchRecipes(this.props.searchText, this.props.healthItems, this.props.dietItems, this.props.dropdownItems, this.props.nutrientItems)}
                                    className={classes.buttonSearch + " btn d-block rounded mr-1"}>Search</button>
                                <button 
                                    type="button" 
                                    onClick={this.props.clearSelections}
                                    className={classes.buttonClear + " btn d-block rounded ml-1"}>Clear Checks</button>
                            </div>
                        )
                        : (
                            <div className="d-flex justify-content-center my-5">
                                <button 
                                    type="button" 
                                    onClick={this.props.clearSelections}
                                    className={classes.buttonClear + " btn d-block rounded"}>Clear Checks</button>
                            </div>
                        )
                    }

                    <hr className="mx-5"/>
                </Aux>
            )
        } 
        
        let nutrientSection = null;
        if (this.props.searchType === 2) {
            nutrientSection = (
                <Aux>
                    <NutrientSection 
                        nutrientItems={this.props.nutrientItems}
                        nutrientItemChange={this.props.nutrientItemChange}
                        data-test="nutrient-section"/>
            
                    <div className="d-flex justify-content-center my-5">
                        <button 
                            type="button" 
                            onClick={() => this.props.fetchRecipes(this.props.searchText, this.props.healthItems, this.props.dietItems, this.props.dropdownItems, this.props.nutrientItems)}
                            className={classes.buttonSearch + " btn d-block rounded mr-1"}>Search</button>
                        <button 
                            type="button" 
                            onClick={this.props.originalNutrientState}
                            className={classes.buttonClear + " btn d-block rounded ml-1"}>Clear Values</button>
                    </div>

                    <hr className="mx-5"/>
                </Aux>
            )
        }

        let loadingSection = null;
        if(this.props.loading) {
            loadingSection = (
                <div className="d-flex justify-content-center mt-5">
                    <GridLoader color="#AC645A" size="32px" margin="4px"/>
                </div>
            )
        }

        let recipeSection = (
            <RecipeSection 
                    recipeItems={this.props.recipeItems} 
                    showDetails={this.props.showDetails} 
                    data-test="recipe-section"/>
        )

        if(this.props.failed) {
            recipeSection = (
                <div className="d-flex flex-column justify-content-center mt-5">
                    <h4 className={classes.error + " text-center"}>Darn It..</h4>
                    <h4 className={classes.error + " text-center"}>Something Went Wrong</h4>
                    <h4 className={classes.tryAgain + " text-center mt-5"}>Try Searching Again</h4>
                </div>
            )
        }

        return (
            <div className={classes.main} data-test="component-main">
                <div className={classes.body}>
                    <MainSearch 
                        toggleSearch={this.props.toggleSearch} 
                        searchType={this.props.searchType}
                        fetchRecipes={() => this.props.fetchRecipes(this.props.searchText, this.props.healthItems, this.props.dietItems, this.props.dropdownItems, this.props.nutrientItems)}
                        searchText={this.props.searchText}
                        mainSearchTextChange={this.props.mainSearchTextChange}
                        data-test="main-search"/>
                    <hr className="mx-5"/>
                    { advanceSection }
                    { nutrientSection }
                    { loadingSection }
                    { recipeSection }
                </div> 
                <Footer data-test="footer"/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchType: state.redUI.searchType,
        loading: state.redAPI.fetchRecipesStart,
        failed: state.redAPI.fetchRecipesFail,
        searchText: state.redOptions.searchText,
        recipeItems: state.redAPI.recipeItems,
        healthItems: state.redOptions.healthItems,
        dietItems: state.redOptions.dietItems,
        dropdownItems: state.redOptions.dropdownItems,
        nutrientItems: state.redOptions.nutrientItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSearch: () => dispatch(actions.toggleSearch()),
        showDetails: (index) => dispatch(actions.showDetails(index)),
        mainSearchTextChange: (event) => dispatch(actions.mainSearchTextChange(event.target.value)),
        fetchRecipes: (searchText, healthItems, dietItems, dropdownItems, nutrientItems) => dispatch(actions.fetchRecipes(searchText, healthItems, dietItems, dropdownItems, nutrientItems)),
        healthItemChange: (itemName) => dispatch(actions.healthItemChange(itemName)),
        dietItemChange: (itemName) => dispatch(actions.dietItemChange(itemName)),
        dropdownItemChange: (itemName, itemValue) => dispatch(actions.dropdownChange(itemName, itemValue)),
        nutrientItemChange: (itemName, itemValue) => dispatch(actions.nutrientChange(itemName, itemValue)),
        clearSelections: () => dispatch(actions.clearSelections()),
        originalNutrientState: () => dispatch(actions.originalNutrientState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);