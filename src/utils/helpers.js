import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://api.edamam.com/'
});

export const healthParamsFinder = (healthItems, queryParams) => {
    //iterate through all health items and find the checked param
    const healthItemsArr = [];
    for(let key in healthItems) {
        healthItemsArr.push({
            ...healthItems[key],
            id: key
        });
    }
    let healthQParam = [];
    healthItemsArr.forEach(element => {
        if(element.value === true) healthQParam.push(element.id); 
    });

    //if health param exist, add it to the main query param
    if(healthQParam.length === 1) {
        queryParams += "&health=";
        queryParams += healthQParam[0];
    }
    
    return queryParams;
}

export const dietParamsFinder = (dietItems, queryParams) => {
    //iterate through all health items and find the checked param
    const dietItemsArr = [];
    for(let key in dietItems) {
        dietItemsArr.push({
            ...dietItems[key],
            id: key
        });
    }
    let dietQParam = [];
    dietItemsArr.forEach(element => {
        if(element.value === true) dietQParam.push(element.id); 
    });

    //if health param exist, add it to the main query param
    if(dietQParam.length === 1) {
        queryParams += "&diet=";
        queryParams += dietQParam[0];
    }
    
    return queryParams;
}

export const dropdownParamsFinder = (dropdownItems, queryParams) => {
    //check for max time
    if(dropdownItems.maxTime !== "0") {
        queryParams += "&time=";
        queryParams += dropdownItems.maxTime
    }

    //check for max produce
    if(dropdownItems.maxProduce !== "0") {
        queryParams += "&ingr=";
        queryParams += dropdownItems.maxProduce
    }
        
    //check for max cal
    if(dropdownItems.maxCal !== "0") {
        queryParams += "&calories=";
        queryParams += dropdownItems.maxCal
    }

    return queryParams;
}

export const nutrientParamsFinder = (nutrientItems, queryParams) => {
    
    let nutrientsParamsArr = [];
    for(let key in nutrientItems) {
        if(nutrientItems[key].value !== "") {
            nutrientsParamsArr.push("&nutrients["+ nutrientItems[key].code + "]=" + nutrientItems[key].value);
        }
    }

    queryParams = queryParams + nutrientsParamsArr.join('');

    return queryParams
}

export const objToArrHelper = (obj) => {
    let arr = [];
    for(let key in obj) {
        arr.push({
            ...obj[key],
            id: key
        });
    }
    return arr;
} 