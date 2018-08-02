import React from 'react';

import RecipeItem from '../RecipeItem/RecipeItem';

const RecipeSection = (props) => {
    return (
        <section className="container my-5">
            <div className="row justify-content-center">

                {props.recipeItems.map(item => {
                    return <RecipeItem 
                                key={item.title}
                                title={item.title} 
                                serving={item.serving} 
                                time={item.time}/>
                })}
                
            </div>

        </section>
    )
}

export default RecipeSection;