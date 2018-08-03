

export const fetchRecipes = () => {
    return dispatch => {
        //start loading ui
        dispatch(fetchRecipesStart());

        //"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
        axiosInstance.get('questions.json')
        
        .then(res => {
            //initialize an array
            let fetchedRecipes = [];
    
            //push each question object into array
            for(let key in res.data) {
                fetchedRecipes.push({
                    ...res.data[key],
                    id: key
                });
            }

            //handle successful fetch
            dispatch(fetchRecipesSuccess(fetchedRecipes));
        })
        .catch(err => {
            //handle errors
            dispatch(fetchRecipesFail(err));
        })
    }
}