import React from 'react';
import PropTypes from 'prop-types';

import classes from './RecipeItem.css';
import testImage from '../../../../img/profile.jpg'

const RecipeItem = (props) => {
    return (
        <div 
            id="recipeItem"
            className={classes.cardStyles + " card m-2"} 
            onClick={props.toggle}
            data-test="component-recipe-item">
            <img className="card-img-top" src={testImage} alt={props.title} />
            <div className="card-body recipe-body p-0 p-sm-1">
                <h6 className={classes.subtitleStyles + " card-title text-center"}>{props.title}</h6>
                <p className={classes.pStyles + " text-center"}>Serving: <span className="d-block d-md-inline-block">{props.serving}</span></p>
                <p className={classes.pStyles + " text-center mb-1"}>Calories: <span className="d-block d-md-inline-block">{props.time}</span></p>
            </div>
        </div>
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    serving: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
}

export default RecipeItem;