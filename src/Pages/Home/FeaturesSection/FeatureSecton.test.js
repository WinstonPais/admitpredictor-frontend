import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FeaturesSection from './FeaturesSection';

configure({ adapter: new Adapter() });

describe('<FeatureSection/>', () => {
     
    it('contains a Container Div', () => {
        const FeatureSection = shallow(<FeaturesSection/>);
        expect(FeatureSection.childAt(0).hasClass('container'));
    })

    it('contains the header with App Features', () => {
        const FeatureSection = shallow(<FeaturesSection/>);
        expect(FeatureSection.childAt(0).find('h2').text().includes('App Features')).toBe(true);
    })

    it('has a row of features', () => {
        const FeatureSection = shallow(<FeaturesSection/>);
        expect(FeatureSection.childAt(0).childAt(1).hasClass('row'));
    })
})