import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import FeatureCard from './FeatureCard';

configure({ adapter: new Adapter() });

describe('<FeatureCard/>', () => {
     
    it('has 4 Divs', () => {
        const Fcard = shallow(<FeatureCard/>);
        expect(Fcard.find('div')).toHaveLength(4);
    })

    it('has Set the Name prop Properly', () => {
        const Fcard = shallow(<FeatureCard/>);
        Fcard.setProps({
            "styleClass" : "ion-ios-bookmarks-outline",
            "name" : "Minimal Design",
            "description" : "a short description"
        })
        expect(Fcard.find('h5').text().includes('Minimal Design')).toBe(true);
    })

    it('has Set the styleclass prop Properly', () => {
        const Fcard = shallow(<FeatureCard/>);
        Fcard.setProps({
            "styleClass" : "ion-ios-bookmarks-outline",
            "name" : "Minimal Design",
            "description" : "a short description"
        })
        
        expect(Fcard.childAt(0).childAt(0).childAt(0).hasClass('ion-ios-bookmarks-outline'));
    })

    it('has Set the Description prop Properly', () => {
        const Fcard = shallow(<FeatureCard/>);
        Fcard.setProps({
            "styleClass" : "ion-ios-bookmarks-outline",
            "name" : "Minimal Design",
            "description" : "a short description"
        })
        expect(Fcard.find('p').text().includes('a short description')).toBe(true);
    })
})