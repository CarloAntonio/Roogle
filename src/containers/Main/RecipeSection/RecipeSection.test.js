import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import RecipeSection from './RecipeSection';

const defaultProps = {
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
    showDetails: jest.fn()
}
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<RecipeSection {...setupProps}/>)
}

describe('component', ()=> {

    let component;
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
        component = findByTestAttr(wrapper, 'component-recipe-section');
    });

    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('renders without error with appropriate props', () => {
        checkProps(RecipeSection, defaultProps);
    });

    test('renders correct number of recipe items', () => {
        const recipeItem = findByTestAttr(wrapper, 'recipe-item');
        expect(recipeItem.length).toBe(1);
    });
});