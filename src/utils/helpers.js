import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://api.edamam.com/'
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