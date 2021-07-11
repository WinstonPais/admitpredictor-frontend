import { useLocation } from 'react-router-dom';
import Navbar from './../../components/NavBar/NavBar';
import React, { useEffect } from 'react';
import ResultInputParametesSection from './ResultInputParametesSection/ResultInputParametesSection';
import ScrollableTable from './ScrollableTable/ScrollableTable';
import UniDetailsSection from './UniDetailsSection/UniDetailsSection';
import AdditionalDetails from './AdditionalDetails/AdditionalDetails';
import { useState } from 'react';

const ResultPage = () => {

    const [isMoreDetailsDisplayed, setIsMoreDetailsDisplayed] = useState(false);
    const [uniDetails, setUniDetails] = useState({});

    useEffect(() => {
        document.body.style.background = "linear-gradient(45deg, #464866 , #25274D )";
    });

    const showBottomSecction = (index) => {
        setIsMoreDetailsDisplayed(true);
        const jsonData = require('./UniData.json');
        // console.log(jsonData[index]);
        setUniDetails(jsonData[index])
    }

    const getUniDetails = () => {
        return uniDetails;
    }

    const location = useLocation()
    const resultData = location.state
    console.log(resultData)
    return (
        <>
            <Navbar/>
            <ResultInputParametesSection/>
            <ScrollableTable 
                bottomDetailsDisplayHandler = {showBottomSecction}
                
            />
            {
                isMoreDetailsDisplayed ?
                <>
                    <div className="container">
                        <hr style={{color:'white',backgroundColor:'white'}}></hr>
                    </div>
                    <UniDetailsSection
                        getUniDetails = {getUniDetails}
                    />
                    <AdditionalDetails
                        getUniDetails = {getUniDetails}
                    />
                </>
                :   null
            }
            
        </>
    )
}

export default ResultPage
