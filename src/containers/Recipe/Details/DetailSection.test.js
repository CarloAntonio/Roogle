import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import DetailSection from './DetailSection';

const defaultProps = {
    recipe: {
        totalTime: 240,
        label: "Chicken Adobo",
        image: "https://www.edamam.com/web-img/3f3/3f3db9cd446edf1680eab304b32f576d.jpg",
        source: "Food52",
        url: "https://food52.com/recipes/17507-chicken-adobo-with-okra-and-sunchokes",
        shareAs: "http://www.edamam.com/recipe/chicken-adobo-229fb120b75c5d4e29a8b98ba43883a8/chicken+adobo",
        yield: 24,
        calories: 23590.628179017596,
        totalWeight: 13641.68500464,
        cautions: ["Gluten", "Wheat"],
        dietLabels: ["Wheat-Free"],
        ingredientLines: [
            "Canola oil",
            "20 pounds chicken thighs, skin-on, bone- in, trimmed of excess fat pockets and extra skin",
            "8 cups white vinegar *",
            "2 cups water",
            "4 cups kikkoman soy sauce",
        ],
        healthLabels: [
            "Sugar-Conscious",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Alcohol-Free",
        ]
    }
}


const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<DetailSection { ...setupProps } />);
}

describe('component', () => {
    let component;
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
        component = findByTestAttr(wrapper, 'component-detail-section');
    });
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });
    test('renders with appropriate proptypes', () => {
        checkProps(DetailSection, defaultProps);
    });
    test('renders correct number of ingredient lines', () => {
        const ingredientLines = findByTestAttr(wrapper, 'ingredient-lines');
        expect(ingredientLines.length).toBe(defaultProps.recipe.ingredientLines.length);
    });
});
