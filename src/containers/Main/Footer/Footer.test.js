import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/testUtils';

import Footer from './Footer';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
    adapter: new EnzymeAdapter()
});

const setup = (props={}) => {
    return shallow(<Footer {...props }/>)
}

test('component renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-footer');
    expect(component.length).toBe(1);
});