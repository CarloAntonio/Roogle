import React from 'react';
import PropTypes from 'prop-types';

import RecipeItem from './RecipeItem/RecipeItem';

const RecipeSection = (props) => {
    return (
        <section className="container my-5" data-test="component-recipe-section">
            <div className="row justify-content-center">

                {props.recipeItems.map(item => {
                    return <RecipeItem 
                                key={item.title}
                                title={item.title} 
                                serving={item.serving} 
                                time={item.time}
                                toggleModal={props.toggleModal}
                                data-test="recipe-item"/>
                })}
                
            </div>

        </section>
    )
}

RecipeSection.propTypes = {
    recipeItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            serving: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired
        })
    ),
    toggleModal: PropTypes.func.isRequired
}

export default RecipeSection;