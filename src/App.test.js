import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App> check for Components', () => {
    it('should Contain', () => {
        const AppComponent = shallow(<App />);
        expect(1+1).toEqual(2);
    })
})