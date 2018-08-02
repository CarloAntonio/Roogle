import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../utils/testUtils';

import MainSearch from './MainSearch';

const setup =(props={}) => {
    return shallow(<MainSearch {...props} />);
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-main-search');
    expect(component.length).toBe(1);
});