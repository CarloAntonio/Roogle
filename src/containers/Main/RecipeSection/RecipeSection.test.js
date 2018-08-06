import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import RecipeSection from './RecipeSection';

const defaultProps = {
    recipeItems: [],
    showDetails: jest.fn()
}
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<RecipeSection {...setupProps}/>)
}

describe('component', ()=> {

    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-recipe-section');
    });

    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('renders without error with appropriate props', () => {
        const expectedProps = { 
            recipeItems: [],
            showDetails: jest.fn()
        };
        checkProps(RecipeSection, expectedProps);
    });

});

describe("component's subcomponents", () => {

    let wrapper;
    beforeEach(() => {
        const inputProps = { 
            recipeItems: [
                { 
                    recipe: {
                        label: "Recipe Title",
                        img: "https://www.edamam.com/web-img/3f3/3f3db9cd446edf1680eab304b32f576d.jpg",
                        source: "Food52",
                        calories: 23590.628179017596,
                        totalTime: 392
                    }
                },
            ],
        };
        wrapper = setup(inputProps);
    });
    test('renders correct number of recipe items', () => {
        const component = findByTestAttr(wrapper, 'recipe-item');
        expect(component.length).toBe(1);
    });
});