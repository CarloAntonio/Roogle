import * as actionTypes from '../actions/actTypes';

const initialState = {
    searchText: "Chicken Adobo",
    healthItems: {
        "alcohol-free": {
            value: false,
            label: "Alcohol-Free"
        },
        "gluten-free": {
            value: false,
            label: "Gluten-Free"
        },
        "celery-free": {
            value: false,
            label: "Celery-Free"
        },
        "kidney-friendly": {
            value: false,
            label: "Kidney-Friendly"
        },
        "crustacean-free": {
            value: false,
            label: "Crustacean-Free"
        },
        "kosher": {
            value: false,
            label: "Kosher"
        },
        "dairy-free": {
            value: false,
            label: "Dairy-Free"
        },
        "low-Potassium": {
            value: false,
            label: "Low-Potassium"
        },
        "eggs-free": {
            value: false,
            label: "Eggs-Free"
        },
        "lupine-free": {
            value: false,
            label: "Lupine-Free"
        },
        "fish-free": {
            value: false,
            label: "Fish-Free"
        },
        "mustard-free": {
            value: false,
            label: "Mustard-Free"
        },
        "no-added-oil": {
            value: false,
            label: "No-Added-Oil"
        },
        "red-meat-free": {
            value: false,
            label: "Red-Meat-Free"
        },
        "low-sugar": {
            value: false,
            label: "Low-Sugar"
        },
        "sesame-free": {
            value: false,
            label: "Sesame-Free"
        },
        "paleo": {
            value: false,
            label: "Paleo"
        },
        "shellfish-free": {
            value: false,
            label: "Shellfish-Free"
        },
        "peanut-free": {
            value: false,
            label: "Peanut-Free"
        },
        "soy-free": {
            value: false,
            label: "Soy-Free"
        },
        "pescatarian": {
            value: false,
            label: "Pescatarian"
        },
        "sugar-conscious": {
            value: false,
            label: "Sugar-Conscious"
        },
        "pork-free": {
            value: false,
            label: "Pork-Free"
        },
        "tree-nut-free": {
            value: false,
            label: "Tree-Nut-Free"
        },
        "vegan": {
            value: false,
            label: "Vegan"
        },
        "wheat-free": {
            value: false,
            label: "Wheat-Free"
        },
        "vegetarian": {
            value: false,
            label: "Vegetarian"
        },
    },
}


const mainSearchTextChange = (state, action) => {
    return {
        ...state,
        searchText: action.text
    }
}

const originalHealthState = (state, action) => {
    return {
        ...state,
        healthItems: {
            "alcohol-free": {
                value: false,
                label: "Alcohol-Free"
            },
            "gluten-free": {
                value: false,
                label: "Gluten-Free"
            },
            "celery-free": {
                value: false,
                label: "Celery-Free"
            },
            "kidney-friendly": {
                value: false,
                label: "Kidney-Friendly"
            },
            "crustacean-free": {
                value: false,
                label: "Crustacean-Free"
            },
            "kosher": {
                value: false,
                label: "Kosher"
            },
            "dairy-free": {
                value: false,
                label: "Dairy-Free"
            },
            "low-Potassium": {
                value: false,
                label: "Low-Potassium"
            },
            "eggs-free": {
                value: false,
                label: "Eggs-Free"
            },
            "lupine-free": {
                value: false,
                label: "Lupine-Free"
            },
            "fish-free": {
                value: false,
                label: "Fish-Free"
            },
            "mustard-free": {
                value: false,
                label: "Mustard-Free"
            },
            "no-added-oil": {
                value: false,
                label: "No-Added-Oil"
            },
            "red-meat-free": {
                value: false,
                label: "Red-Meat-Free"
            },
            "low-sugar": {
                value: false,
                label: "Low-Sugar"
            },
            "sesame-free": {
                value: false,
                label: "Sesame-Free"
            },
            "paleo": {
                value: false,
                label: "Paleo"
            },
            "shellfish-free": {
                value: false,
                label: "Shellfish-Free"
            },
            "peanut-free": {
                value: false,
                label: "Peanut-Free"
            },
            "soy-free": {
                value: false,
                label: "Soy-Free"
            },
            "pescatarian": {
                value: false,
                label: "Pescatarian"
            },
            "sugar-conscious": {
                value: false,
                label: "Sugar-Conscious"
            },
            "pork-free": {
                value: false,
                label: "Pork-Free"
            },
            "tree-nut-free": {
                value: false,
                label: "Tree-Nut-Free"
            },
            "vegan": {
                value: false,
                label: "Vegan"
            },
            "wheat-free": {
                value: false,
                label: "Wheat-Free"
            },
            "vegetarian": {
                value: false,
                label: "Vegetarian"
            },
        }
    }
}

const updateHealthState = (state, action) => {
    return {
        ...state,
        healthItems: {
            ...state.healthItems,
            [action.itemName]: { 
                ...state.healthItems[action.itemName],
                value: !state.healthItems[action.itemName].value
            }
        }
    }
}


const redOptions = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MAIN_SEARCH_TEXT_CHANGE: return mainSearchTextChange(state, action);
        case actionTypes.ORIGINAL_HEALTH_STATE: return originalHealthState(state, action);
        case actionTypes.UPDATE_HEALTH_STATE: return updateHealthState(state, action);
        default: return state;
    }
} 

export default redOptions;

