import React from 'react';
import PropTypes from 'prop-types';

import RecipeItem from './RecipeItem/RecipeItem';

const RecipeSection = (props) => {
    return (
        <section className="container my-5" data-test="component-recipe-section">
            <div className="row justify-content-center">

                {props.recipeItems.map(item => {
                    return <RecipeItem 
                                key={item.id}
                                title={item.recipe.label} 
                                img={item.recipe.image}
                                serving={"Serves about " + item.recipe.yield} 
                                calories={item.recipe.calories/item.recipe.yield}
                                toggleModal={props.toggleModal}
                                data-test="recipe-item"/>
                })}
                
            </div>

        </section>
    )
}

RecipeSection.propTypes = {
    recipeItems: PropTypes.array,
    toggleModal: PropTypes.func.isRequired
}

export default RecipeSection;