import React from 'react';

import classes from './DetailSection.css';

const DetailSection = (props) => {

    let cookTime = (props.recipe.totalTime / 60).toFixed(2) + " hours(s)";
    if(props.recipe.totalTime === 0) cookTime = "Varies";
    else if(props.recipe.totalTime / 60 < 1) cookTime = props.recipe.totalTime + " minutes";

    return (
            <section className="container">
                <div className="row">
                    <div className="col-12 mt-4 mb-sm-2 d-flex flex-column">
                        <h5 className={classes.headerStyle + " text-center"}>{props.recipe.label}</h5>
                    </div>

                    <div className="col-12 col-sm-6 order-sm-3 mb-4 d-flex flex-column">
                        <img src={props.recipe.image} alt="test profile" className="img-fluid mx-auto rounded" style={{ width: 80 + "%", maxWidth: 16 + "rem", height: "auto"}} />
                    </div>

                    <div className="col-12 col-sm-6 order-sm-2">
                        <div className="row">
                            <div className="col-12">
                                <h6 className={ classes.weight }>Full Directions List:</h6>
                                <p style={{overflowWrap: "break-word"}}>
                                    <a href={props.recipe.url} target="_blank" rel="noopener noreferrer" className={classes.link}>{props.recipe.url}</a>
                                </p>
                            </div>

                            <div className="col-12 col-sm-6">
                                <h6 className={ classes.weight }>Original Source:</h6>
                                <p>{props.recipe.source}</p>
                            </div>

                            <div className="col-12 col-sm-6">
                                <h6 className={ classes.weight }>Social Media:</h6>
                                <p style={{overflowWrap: "break-word"}}>
                                    <a href={props.recipe.shareAs} target="_blank" rel="noopener noreferrer" className={classes.link}>Share this recipe!</a>
                                </p>
                            </div>

                            <div className="col-12 col-sm-6">
                                <h6 className={ classes.weight }>Cook Time:</h6>
                                <p>{cookTime}</p>
                            </div>

                            <div className="col-12 col-sm-6">
                                <h6 className={ classes.weight }>Cal Per Serving:</h6>
                                <p>{(props.recipe.calories/props.recipe.yield).toFixed(2)}</p>
                            </div>

                            <div className="col-12 col-sm-6">
                                <h6 className={ classes.weight }>Total Servings:</h6>
                                <p>{"Serves " + props.recipe.yield }</p>
                            </div>

                            <div className="col-12 col-sm-6">
                                <h6 className={ classes.weight }>Cautions:</h6>
                                <p>{props.recipe.cautions.length === 0
                                    ? "None"
                                    : props.recipe.cautions.join(", ")}</p>
                            </div>

                            <div className="col-12 col-sm-6">
                                <h6 className={ classes.weight }>Diet Labels:</h6>
                                <p>{props.recipe.dietLabels.length === 0
                                    ? "None"
                                    : props.recipe.dietLabels.join(", ")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 order-sm-4">
                        <h6 className={ classes.weight }>Health Labels:</h6>
                        <p>{props.recipe.healthLabels.length === 0
                                    ? "None"
                                    : props.recipe.healthLabels.join(", ")}</p>
                    </div>

                    <div className="col-12 order-sm-4">
                        <h6 className={ classes.weight }>Ingredients:</h6>
                        {props.recipe.ingredientLines.map((line, index) => {
                            return <p key={index}>{line}</p>
                        })}
                    </div>
                </div>
            </section>
    )
}

export default DetailSection;