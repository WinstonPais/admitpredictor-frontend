import React, { useState } from 'react';
import Radar from './../Radar/Radar';
import BarGraph from './../BarGraph/BarGraph';
import { Multiselect } from "multiselect-react-dropdown";

const MultiSelectHelperTools = (props) => {

    const [selectedUnis, setSelectedUnis] = useState([
        "Harvard University" ,
        "Stanford University"
    ]);
    const [radarData, setRadarData] = useState([
        {
            value: ["93.3", "15", "98", "95", "23159", "59310", "4646", "5"],
            name: "Harvard University"
        },
        {
            value: ["88.9", "5", "85", "85", "20432", "57838", "4725", "3"],
            name: "Stanford University"
        }
    ])

    const [barGDropDownValue, setBarGDropDownValue] = useState("Rating");
    const [barGData, setBarGData] = useState(["93.3","88.9"]);

    const objectArray = props.uniData.map((item) => {
        return { key: item["Name"] }
    })
    const  selectedValues = [
        { key: "Harvard University" },
        { key: "Stanford University" }
    ]

    const getSelectedUnisList = () =>{
        return selectedUnis
    }

    const getUniObject = (name, allUnis) =>{
        let result = {};
        for(let i=0; i<allUnis.length; i++){
            if(allUnis[i]["Name"] === name){
                result = allUnis[i];
                break;
            }
        }
        return result;
    }

    const makeRadarData = (listObj) =>{
        const result = listObj.map((uniName) => {
            const uniObj = getUniObject(uniName["key"], props.uniData);
            const temp = [uniObj['Rating'],uniObj['AcceptanceRate'],uniObj['GraduationRate'],uniObj['ApplicationFee'],uniObj['NetPrice'],uniObj['TotalAidAwardedPerYear'],uniObj['Total Faculty'],uniObj['Student/Faculty Ratio']].map((item) => {
                return item.replace(/[^0-9.]/g, '');
            })

            return {
                value: temp,
                name: uniName["key"]
            }
        })
        // console.log({result})
        setRadarData(result);
    }

    const makeBarData = (listObj) => {
        const result = listObj.map((uniName) => {
            console.log(uniName)
            if(uniName instanceof Object){
                uniName = uniName['key']
            }
            const uniObj = getUniObject(uniName, props.uniData);
            console.log(uniObj)
            console.log(barGDropDownValue)
            return uniObj[barGDropDownValue].replace(/[^0-9.]/g, '');
        })
        console.log(result)
        setBarGData(result);
    }

    const makeBarData2 = (listObj, xtra) => {
        const result = listObj.map((uniName) => {
            console.log(uniName)
            const uniObj = getUniObject(uniName, props.uniData);
            // console.log(uniObj)
            // console.log(barGDropDownValue)
            return uniObj[xtra].replace(/[^0-9.]/g, '');
        })
        console.log(result)
        setBarGData(result);
    }

    const getRadarData = () => {
        return radarData;
    }

    const getBarGData = () => {
        return barGData;
    }

    const callBarGraphSet = (xtra) => {
        // console.log(selectedUnis)
        makeBarData2(selectedUnis, xtra)
    }
    // useEffect(() => {
    //     makeRadarData()
    // },[makeRadarData])

    return (
        <div style={{marginTop:'15vh', marginBottom:'8vh'}}>
            <div style={{marginBottom:'8vh'}} >
                <Multiselect
                    onSelect={(e) =>{
                        setSelectedUnis(e.map((item) =>{
                            return item["key"];
                        }));
                        makeRadarData(e)
                        makeBarData(e)
                    }}
                    onRemove={(e) =>{
                        setSelectedUnis(e.map((item) =>{
                            return item["key"];
                        }));
                        makeRadarData(e)
                        makeBarData(e)
                    }}
                    options={objectArray}
                    displayValue="key"
                    selectedValues={selectedValues}
                />
            </div>
            
            <Radar getRadarData={getRadarData} getSelectedUnisList={getSelectedUnisList}/>
            <BarGraph getBarGData={getBarGData} callBarGraphSet={callBarGraphSet} setBarGDropDownValue={setBarGDropDownValue} getSelectedUnisList={getSelectedUnisList}/>
        </div>
    )
}

export default MultiSelectHelperTools
