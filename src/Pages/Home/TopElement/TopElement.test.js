import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TopElement from './TopElement';

configure({ adapter: new Adapter() });

describe('<TopElement/>', () => {
     
    it('contains a section', () => {
        const TopEle = shallow(<TopElement/>);
        expect(TopEle.find('section')).toHaveLength(1);
    })

    it('contains topLeftDoggo and TopBeginEle', () => {
        const TopEle = shallow(<TopElement/>);
        expect(TopEle.find('TopLeftDoggo')).toHaveLength(1);
        expect(TopEle.find('TopBeginElement')).toHaveLength(1);
    })
})