import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TopLeftDoggo from './TopLeftDoggo';

configure({ adapter: new Adapter() });

describe('<TopLeftDoggo/>', () => {
     
    it('contains a image', () => {
        const doggo = shallow(<TopLeftDoggo/>);
        expect(doggo.find('img')).toHaveLength(1);
    })

    it('contains the Admin Predictor Heading', () => {
        const doggo = shallow(<TopLeftDoggo/>);
        expect(doggo.find('h3').text().includes('Admit Predictor')).toBe(true);
    })
})