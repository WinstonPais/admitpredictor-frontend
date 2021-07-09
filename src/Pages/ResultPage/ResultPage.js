import { useLocation } from 'react-router-dom';
import Navbar from './../../components/NavBar/NavBar';
import React, { useEffect } from 'react';
import ResultInputParametesSection from './ResultInputParametesSection/ResultInputParametesSection';
import ScrollableTable from './ScrollableTable/ScrollableTable';
import UniDetailsSection from './UniDetailsSection/UniDetailsSection';

const ResultPage = () => {
    useEffect(() => {
        document.body.style.background = "linear-gradient(45deg, #464866 0%, #25274D 100%)";
    });

    const location = useLocation()
    const resultData = location.state
    console.log(resultData)
    return (
        <>
            <Navbar/>
            <ResultInputParametesSection/>
            <ScrollableTable/>
            <UniDetailsSection/>
        </>
    )
}

export default ResultPage
