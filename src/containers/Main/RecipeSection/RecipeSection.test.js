import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import RecipeSection from './RecipeSection';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
    adapter: new EnzymeAdapter()
});

const defaultProps = {
    recipeItems: []
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
            recipeItems: [
                { 
                    title: "Lorem ipsum dolor sit amet dsfasfs sffss.", 
                    serving: "360/Serving", 
                    time: "45 minutes"
                },
            ]
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
                    title: "Lorem ipsum dolor sit amet dsfasfs sffss.", 
                    serving: "360/Serving", 
                    time: "45 minutes"
                },
                { 
                    title: "Lorem ipsum dolor sit amet dsfasfs sffss.", 
                    serving: "360/Serving", 
                    time: "45 minutes"
                },
            ]
        };
        wrapper = setup(inputProps);
    });
    test('renders correct number of recipe items', () => {
        const component = findByTestAttr(wrapper, 'recipe-item');
        expect(component.length).toBe(2);
    });
});