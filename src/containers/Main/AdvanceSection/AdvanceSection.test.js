import React from 'react';
import { shallow } from 'enzyme';

import AdvanceSection from './AdvanceSection';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
    adapter: new EnzymeAdapter()
});


const defaultProps = {
    healthOptions: [],
    dietOptions: [],
    dropdownData: []
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<AdvanceSection { ...setupProps }/>)
}

describe('component', () => {

    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-advance-section');
    });
    test('renders without errors', () => {
        expect(component.length).toBe(1);
    });
    test('renders with appropriate props', () => {
        const expectedProps = {
            healthOptions: [],
            dietOptions: []
        }
        checkProps(AdvanceSection, expectedProps);
    });

});

describe("component's subcomponents", () => {

    let wrapper;
    beforeEach(() => {
        const inputProps = {
            healthOptions: [
                {value: "alcohol-free", label: "Alcohol-Free" },
                {value: "gluten-free", label: "Gluten-Free" },
                {value: "celery-free", label: "Celery-Free" },
                {value: "kidney-friendly", label: "Kidney-Friendly" },
            ],
            dietOptions: [
                {value: "balanced", label: "Balanced" },
                {value: "high-fiber", label: "High-Fiber" },
                {value: "high-protein", label: "High-Protein" },
            ],
            dropdownData: [
                {
                    title: "Max Time:",
                    options: [
                        {value: "15", display: "15 minutes"},
                        {value: "30", display: "30 minutes"},
                        {value: "45", display: "45 minutes"},
                        {value: "60", display: "1 hour"},
                        {value: "90", display: "1.5 hours"},
                        {value: "120", display: "2 hours"},
                        {value: "150", display: "2.5 hours"},
                        {value: "999", display: "Any"},
                    ],
                    id: "inputGroupSelect01",
                    selected: 3
                },
            ],
        }
        wrapper = setup(inputProps);
    });
    test('renders correct number of health selection items', () => {
        const component = findByTestAttr(wrapper, 'health-selection-item');
        expect(component.length).toBe(4);
    });
    test('renders correct number of diet selection items', () => {
        const component = findByTestAttr(wrapper, 'diet-selection-item');
        expect(component.length).toBe(3);
    });
    test('renders correct number of dropdown selection items', () => {
        const component = findByTestAttr(wrapper, 'dropdown-selection-item');
        expect(component.length).toBe(1);
    });
});

