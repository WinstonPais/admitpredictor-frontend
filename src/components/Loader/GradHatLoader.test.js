import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import GradHatLoader from './GradHatLoader';
import Home from './../../Pages/Home/Home'

configure({ adapter: new Adapter() });

describe('<GradHatLoader/>', () => {
    let loader;
    beforeEach(() =>{
        loader = shallow(<GradHatLoader/>);
    })
     
    it('renders The Loader', () => {
        expect(loader.hasClass('loader'))
    })

    it('renders the Home component', () => {
        loader.setProps({"pageComponent" : <Home/>})
        expect(loader.contains(<Home/>))
    })

})