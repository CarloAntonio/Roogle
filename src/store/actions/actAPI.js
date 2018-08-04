
import * as actionTypes from '../actions/actTypes';
import { axiosInstance } from '../../utils/helpers';
import { apiKey, appId } from './keys';

export const fetchRecipesSuccess = (fetchedRecipes) => {
    return {
        type: actionTypes.FETCH_RECIPES_SUCCESS,
        recipeItems: fetchedRecipes
    }
}

export const fetchRecipes = (searchText, healthItems) => {
    console.log(healthItems);

    const healthItemsArr = [];
    for(let key in healthItems) {
        healthQParams.push({
            ...healthItems[key],
            id: key
        });
    }

    let healthQParams = [];
    healthItemsArr.forEach(element => {
        if(element.value === true) healthQParams.push(element.id); 
    });



    return dispatch => {
        //start loading ui
        // dispatch(fetchRecipesStart());

        //https://api.edamam.com/search?q=chicken-curry&app_id=3ecb29a0&app_key=d4fef1c6d56353a8d0b5896955e9e667&from=0&to=3
        axiosInstance.get('search?q=' + searchText + '&app_id=' + appId + '&app_key=' + apiKey + '&from=0&to=8')
        
        .then(res => {
            //initialize an array
            let fetchedRecipes = [];
    
            //push each question object into array
            for(let key in res.data.hits) {
                fetchedRecipes.push({
                    ...res.data.hits[key],
                    id: key
                });
            }

            //handle successful fetch
            dispatch(fetchRecipesSuccess(fetchedRecipes));
        })
        .catch(err => {
            //handle errors
            // dispatch(fetchRecipesFail(err));
        })
    }
}

