import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from './Home';

configure({ adapter: new Adapter() });

describe('<Home/>', () => {
     
    it('contains 3 children', () => {
        const home = shallow(<Home/>);
        expect(home.children()).toHaveLength(3);
    })
})