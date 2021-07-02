import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from './Home';
import './Home.module.css';

configure({ adapter: new Adapter() });

describe('<Home/>', () => {
     
    it('contains children', () => {
        const home = shallow(<Home/>);
        expect(home.children());
    })
})