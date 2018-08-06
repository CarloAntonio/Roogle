import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../../utils/testUtils';

import RecipeItem from './RecipeItem';

const defaultProps = {
    img: "http:somelink",
    title: "Cooking with Chicken Raddish",
    serving: "Serves 4 People",
    calories: 45,
    showDetails: jest.fn()
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
        checkProps(RecipeItem, defaultProps);
    });
});

test("'toggle' is called when component is clicked", () => {

    //create a mock function and add it to setup
    const mockFxn = jest.fn();
    const props = {
        showDetails: mockFxn
    }
    const wrapper = setup(props);

    //click button
    const button = findByTestAttr(wrapper, 'component-recipe-item');
    button.simulate('click');

    //count number of calls
    const mockCount = mockFxn.mock.calls.length;
    expect(mockCount).toBe(1);
});
