import ReactEcharts from "echarts-for-react";

// import React, { useRef, useEffect, useState } from 'react';

const Radar = (props) => {
    // console.log(props.getSelectedUnisList())
    // console.log(props.getRadarData())
    const option = {
        legend: {
            data: props.getSelectedUnisList()
        },
        radar: {
            indicator: [
                { name: 'Rating', max: 100},
                { name: 'AcceptanceRate', max: 30},
                { name: 'GraduationRate', max: 100},
                { name: 'ApplicationFee', max: 120},
                { name: 'NetPrice', max: 35000},
                { name: 'TotalAidAwardedPerYear', max: 80000},
                { name: 'Total Faculty', max: 10000},
                { name: 'Student/Faculty Ratio', max: 20}
            ]
        },
        toolbox: {
            show: true,
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [{
            type: 'radar',
            data: props.getRadarData()
        }]
    };

    

    
    return (
        <ReactEcharts  style={{marginBottom:'35vh'}} option={option} theme={"dark"} opts={{height:"500"}}/>
    )
}

export default Radar
