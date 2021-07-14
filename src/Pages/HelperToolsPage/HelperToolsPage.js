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
            <Navbar/>
            <div style={{backgroundColor:"#272727"}}>
                <div>
                    <h1 style={{color:"white",marginTop:"6%",paddingTop:"1%",paddingBottom:"1%",paddingLeft:"9%"}}>Barney</h1>
                    <p style={{color:"white",paddingBottom:"2%",paddingLeft:"9%"}}>Your University finding Wingman</p>
                    </div>
            </div>
            <div className="container">
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
