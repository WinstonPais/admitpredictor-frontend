import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TopBeginElement from './TopBeginElement';

configure({ adapter: new Adapter() });

describe('<TopBeginElement/>', () => {
     
    it('contains a link to FormPage', () => {
        const curEle = shallow(<TopBeginElement/>);
        expect(curEle.find('InnerCarouselComponent'));
    })
})