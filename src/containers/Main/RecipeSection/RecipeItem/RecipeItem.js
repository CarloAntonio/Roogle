import React from 'react';
import PropTypes from 'prop-types';

import classes from './RecipeItem.css';

const RecipeItem = (props) => {
    return (
        <div 
            id="recipeItem"
            className={classes.cardStyles + " card m-1"} 
            onClick={props.showDetails}
            data-test="component-recipe-item">
            <img className="card-img-top" src={props.img} alt={props.title} />
            <div className="card-body recipe-body p-0 p-sm-1">
                <h6 className={classes.subtitleStyles + " card-title text-center"}>{props.title}</h6>
                <p className={classes.pStyles + " text-center"}><span className="d-block d-md-inline-block">{props.serving}</span></p>
                <p className={classes.pStyles + " text-center mb-1"}><span className="d-block d-md-inline-block">{props.calories.toFixed(2) + " kcal/serving"}</span></p>
            </div>
        </div>
    );
}

RecipeItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    serving: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    showDetails: PropTypes.func.isRequired
}

export default RecipeItem;