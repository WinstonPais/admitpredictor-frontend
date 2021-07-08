import React from 'react';
import TopElement from './TopElement/TopElement';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import IndexFooter from './IndexFooter/IndexFooter';
import Navbar from '../../components/NavBar/NavBar';
const Home = () => {
    return (
        <>
            <Navbar/>
            <TopElement/>
            <FeaturesSection/>
            <IndexFooter/>
        </>
    )
}

export default Home
