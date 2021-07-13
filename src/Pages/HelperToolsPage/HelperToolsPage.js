import USAMapComp from './USAMapComp/USAMapComp';
import Navbar from '../../components/NavBar/NavBar';
import MultiSelectHelperTools from './MultiSelectHelperTools/MultiSelectHelperTools';
import CompareHead2Head from './CompareHead2Head/CompareHead2Head';
import React, { useEffect } from 'react';
const HelperToolsPage = () => {

    const uniData = require('./../ResultPage/UniData.json')
    useEffect(() => {
        document.body.style.backgroundColor = "#25274D";
    });
    return (
        <div>
            <div className="container">
                <Navbar/>
                <div style={{}}>
                    <CompareHead2Head uniData={uniData}/>
                </div>
                
                <MultiSelectHelperTools uniData={uniData}/>
                <USAMapComp uniData={uniData}/>
            </div>
        </div>
    )
}

export default HelperToolsPage
