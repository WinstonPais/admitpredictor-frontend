import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import IndexFooter from './IndexFooter';

configure({ adapter: new Adapter() });

describe('<IndexFooter/>', () => {
     
    it('contains a footer element', () => {
        const footer = shallow(<IndexFooter/>);
        expect(footer.find('footer')).toHaveLength(1);
    })

    it('contains the copyright and team name', () => {
        const footer = shallow(<IndexFooter/>);
        expect(footer.contains('2021. All Rights Reserved.'));
        expect(footer.contains('Team GB5'));
    })
})