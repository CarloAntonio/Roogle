
import * as actionTypes from '../actions/actTypes';
import { axiosInstance } from '../../utils/helpers';
import { apiKey, appId } from './keys';

import { healthParamsFinder, dietParamsFinder, dropdownParamsFinder, nutrientParamsFinder } from '../../utils/helpers';

export const fetchRecipesStart = () => {
    return {
        type: actionTypes.FETCH_RECIPES_START
    }
}

export const fetchRecipesSuccess = (fetchedRecipes) => {
    return {
        type: actionTypes.FETCH_RECIPES_SUCCESS,
        recipeItems: fetchedRecipes
    }
}

export const fetchRecipesFail = () => {
    return {
        type: actionTypes.FETCH_RECIPES_FAIL,
    }
}

export const fetchRecipes = (searchText, healthItems, dietItems, dropdownItems, nutrientItems) => {
    //starting query params
    let queryParams = '&app_id=' + appId + '&app_key=' + apiKey + '&from=0&to=60';

    //parse health params
    queryParams = healthParamsFinder(healthItems, queryParams);

    //parse diet params
    queryParams = dietParamsFinder(dietItems, queryParams);

    //parse dropdown params
    queryParams = dropdownParamsFinder(dropdownItems, queryParams);

    //parse nutrient params
    queryParams = nutrientParamsFinder(nutrientItems, queryParams);
    
    return dispatch => {
        //start loading ui
        dispatch(fetchRecipesStart());

        //https://api.edamam.com/search?q=chicken-curry&app_id=3ecb29a0&app_key=d4fef1c6d56353a8d0b5896955e9e667&from=0&to=3&calories=591-722&health=alcohol-free&nutrients[FAT]=40-42
        return axiosInstance.get('search?q=' + searchText + queryParams)
        
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
            dispatch(fetchRecipesFail());
        })
    }
}

