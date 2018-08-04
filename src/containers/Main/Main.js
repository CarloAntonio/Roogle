import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainSearch from './MainSearch/MainSearch';
import AdvanceSection from './AdvanceSection/AdvanceSection';
import NutrientSection from './NutrientSection/NutrientSection';
import RecipeSection from './RecipeSection/RecipeSection';
import Footer from './Footer/Footer';
import Aux from '../../utils/Aux';

import * as actions from '../../store/actions/actions';

import { dropdownOptions } from '../../data/SelectionData';

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
                        dietItems={this.props.dietItems} 
                        dietItemChange={this.props.dietItemChange}
                        dropdownOptions={dropdownOptions}
                        dropdownItemChange={this.props.dropdownItemChange}
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
                        nutrientItems={this.props.nutrientItems}
                        nutrientItemChange={this.props.nutrientItemChange}
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
                    fetchRecipes={() => this.props.fetchRecipes(this.props.searchText, this.props.healthItems, this.props.dietItems, this.props.dropdownItems, this.props.nutrientItems)}
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
        healthItems: state.redOptions.healthItems,
        dietItems: state.redOptions.dietItems,
        dropdownItems: state.redOptions.dropdownItems,
        nutrientItems: state.redOptions.nutrientItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSearch: () => dispatch(actions.toggleSearch()),
        toggleModal: () => dispatch(actions.toggleModal()),
        mainSearchTextChange: (event) => dispatch(actions.mainSearchTextChange(event.target.value)),
        fetchRecipes: (searchText, healthItems, dietItems, dropdownItems, nutrientItems) => dispatch(actions.fetchRecipes(searchText, healthItems, dietItems, dropdownItems, nutrientItems)),
        healthItemChange: (itemName) => dispatch(actions.healthItemChange(itemName)),
        dietItemChange: (itemName) => dispatch(actions.dietItemChange(itemName)),
        dropdownItemChange: (itemName, itemValue) => dispatch(actions.dropdownChange(itemName, itemValue)),
        nutrientItemChange: (itemName, itemValue) => dispatch(actions.nutrientChange(itemName, itemValue)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedMain);