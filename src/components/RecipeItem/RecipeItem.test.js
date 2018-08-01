import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../utils/testUtils';

import RecipeItem from './RecipeItem';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
    adapter: new EnzymeAdapter()
});

const defaultProps = {
    title: "Cooking with Chicken Raddish",
    serving: "Serves 4 People",
    time: "45 minutes"
}

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props };
    return shallow(<RecipeItem {...setupProps }/>)
}

describe('component', () => {
    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-recipe-item');
    });
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });
    test('renders without error with approprate props', () => {
        const expectedProps = {
            title: "Cooking with Chicken Raddish",
            serving: "Serves 4 People",
            time: "45 minutes"
        }
        checkProps(RecipeItem, expectedProps);
    });
});
