import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import 'jest-extended';

Enzyme.configure({ 
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true //prevents lifecycle methods from running
});