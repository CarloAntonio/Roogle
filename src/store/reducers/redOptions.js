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
    dietItems: {
        "balanced": {
            value: false,
            label: "Balanced"
        },
        "high-fiber": {
            value: false,
            label: "High-Fiber"
        },
        "high-protein": {
            value: false,
            label: "High-Protein"
        },
        "low-carb": {
            value: false,
            label: "Low-Carb"
        },
        "low-fat": {
            value: false,
            label: "Low-Fat"
        },
        "low-sodium": {
            value: false,
            label: "Low-Sodium"
        },
    },
    dropdownItems: {
        maxTime: "0",
        maxProduce: "0",
        maxCal: "0"
    },
    nutrientItems: {
        calcium: {
            placeholder: "Calcium (mg)",
            code: "CA",
            value: "",
        },
        carbs: {
            placeholder: "Carbs (g)",
            code: "CHOCDF",
            value: "",
        },
        cholesterol: {
            placeholder: "Cholesterol (mg)",
            code: "CHOLE",
            value: "",
        },
        monounsaturated: {
            placeholder: "Monounsat (g)",
            code: "FAMS",
            value: "",
        },
        polyunsaturated: {
            placeholder: "Polyunsat (g)",
            code: "FAPU",
            value: "",
        },
        saturated: {
            placeholder: "Saturated (g)",
            code: "FASAT",
            value: "",
        },
        fat: {
            placeholder: "Fat (g)",
            code: "FAT",
            value: "",
        },
        trans: {
            placeholder: "Trans Fat (g)",
            code: "FATRN",
            value: "",
        },
        iron: {
            placeholder: "Iron (mg)",
            code: "FE",
            value: "",
        },
        fiber: {
            placeholder: "Fiber (g)",
            code: "FIBTG",
            value: "",
        },
        folate: {
            placeholder: "Folate (ug)",
            code: "FOLDFE",
            value: "",
        },
        potassium: {
            placeholder: "Potassium (mg)",
            code: "K",
            value: "",
        },
        magnesium: {
            placeholder: "Magnesium (mg)",
            code: "MG",
            value: "",
        },
        sodium: {
            placeholder: "Sodium (mg)",
            code: "NA",
            value: "",
        },
        energy: {
            placeholder: "Energy (kcal)",
            code: "ENERC_KCAL",
            value: "",
        },
        niacin: {
            placeholder: "Niacin (mg)",
            code: "NIA",
            value: "",
        },
        Phosphorus: {
            placeholder: "Phosp (mg)",
            code: "P",
            value: "",
        },
        protein: {
            placeholder: "Protein (g)",
            code: "PROCNT",
            value: "",
        },
        riboflavin: {
            placeholder: "Riboflavin (mg)",
            code: "RIBF",
            value: "",
        },
        sugars: {
            placeholder: "Sugars (g)",
            code: "SUGAR",
            value: "",
        },
        thiamin: {
            placeholder: "Thiamin (mg)",
            code: "THIA",
            value: "",
        },
        vitaminE: {
            placeholder: "Vitamin E (mg)",
            code: "TOCPHA",
            value: "",
        },
        vitaminA: {
            placeholder: "Vitamin A (ug)",
            code: "VITA_RAE",
            value: "",
        },
        vitaminB12: {
            placeholder: "Vitamin B12 (ug)",
            code: "VITB12",
            value: "",
        },
        vitaminB6: {
            placeholder: "Vitamin B6 (mg)",
            code: "VITB6A",
            value: "",
        },
        vitaminC: {
            placeholder: "Vitamin C (mg)",
            code: "VITC",
            value: "",
        },
        vitaminD: {
            placeholder: "Vitamin D (ug)",
            code: "VITD",
            value: "",
        },
        vitaminK: {
            placeholder: "Vitamin K (ug)",
            code: "VITK1",
            value: "",
        }
    }
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

const originalDietState = (state, action) => {
    return {
        ...state,
        dietItems: {
            "balanced": {
                value: false,
                label: "Balanced"
            },
            "high-fiber": {
                value: false,
                label: "High-Fiber"
            },
            "high-protein": {
                value: false,
                label: "High-Protein"
            },
            "low-carb": {
                value: false,
                label: "Low-Carb"
            },
            "low-fat": {
                value: false,
                label: "Low-Fat"
            },
            "low-sodium": {
                value: false,
                label: "Low-Sodium"
            },
        }
    }
}

const updateDietState = (state, action) => {
    return {
        ...state,
        dietItems: {
            ...state.dietItems,
            [action.itemName]: {
                ...state.dietItems[action.itemName],
                value: !state.dietItems[action.itemName].value
            }
        }
    }
}

const dropdownChange = (state, action) => {
    return {
        ...state,
        dropdownItems: {
            ...state.dropdownItems,
            [action.itemName]: action.itemValue
        }
    }
}

const nutrientChange = (state, action) => {
    //input validation
    if(action.itemValue === "") {
        return {
            ...state,
            nutrientItems: {
                ...state.nutrientItems,
                [action.itemName]: {
                    ...state.nutrientItems[action.itemName],
                    value: action.itemValue
                }
            }
        }
    }
    else if(!parseInt(action.itemValue, 10)) return state;
    else if(parseInt(action.itemValue, 10) < 0) return state;

    return {
        ...state,
        nutrientItems: {
            ...state.nutrientItems,
            [action.itemName]: {
                ...state.nutrientItems[action.itemName],
                value: parseInt(action.itemValue, 10)
            }
        }
    }
}

const redOptions = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MAIN_SEARCH_TEXT_CHANGE: return mainSearchTextChange(state, action);
        case actionTypes.ORIGINAL_HEALTH_STATE: return originalHealthState(state, action);
        case actionTypes.UPDATE_HEALTH_STATE: return updateHealthState(state, action);
        case actionTypes.ORIGINAL_DIET_STATE: return originalDietState(state, action);
        case actionTypes.UPDATE_DIET_STATE: return updateDietState(state, action);
        case actionTypes.DROPDOWN_CHANGE: return dropdownChange(state, action);
        case actionTypes.NUTRIENT_CHANGE: return nutrientChange(state, action);
        default: return state;
    }
} 

export default redOptions;

