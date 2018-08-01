import React from 'react';

import RecipeItem from '../RecipeItem/RecipeItem';

import { recipeItems } from '../../utils/testData';

const RecipeSection = () => {
    return (
        <section className="container my-5">
            <div className="row justify-content-center">

                {recipeItems.map(item => {
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