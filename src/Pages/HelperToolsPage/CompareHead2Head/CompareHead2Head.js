import classes from './../BarGraph/BarGraph.module.css';
import React, { useState } from 'react';

const removeItemOnce = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
}

const CompareHead2Head = () => {
    const [Uni1, setUni1] = useState('Harvard University');
    const [Uni2, setUni2] = useState('Harvard University');
    const data = require('./../../ResultPage/UniData.json');
    const keys = Object.keys(data[0])
    removeItemOnce(keys, "ImageURL")
    removeItemOnce(keys, "Website")
    removeItemOnce(keys, "coverImage")

    const getUniObj = (name) =>{
        let result = {};
        for(let i=0; i<data.length; i++){
            if(data[i]["Name"] === name){
                result = data[i];
                break;
            }
        }
        return result;
    }
    return (
        <div style={{padding:'20px !important;'}}>
            <div className="container">
            <div style={{width:'100%',marginTop:'15vh', marginBottom:'8vh'}}>
                <div className="row">
                    <div className="col-md-5">
                        <select onChange={(e) => {setUni1(e.target.value)}} className={["form-control", classes.darkmodeDropdown].join(' ')} >
                            {data.map((item)=>{
                                return <option key={item["Name"]+1}>{item["Name"]}</option>
                            })}
                            
                        </select>
                    </div>
                    <div className="col-md-2"></div>
                    <div style={{marginBottom:'3vh'}} className="col-md-5">
                    <select onChange={(e) => {setUni2(e.target.value)}} className={["form-control", classes.darkmodeDropdown].join(' ')} >
                            {data.map((item)=>{
                                return <option key={item["Name"]+1}>{item["Name"]}</option>
                            })}
                        </select>
                    </div>
                </div>
                {
                        keys.map((parameter) => {
                            const uni1Obj = getUniObj(Uni1);
                            const uni2Obj = getUniObj(Uni2);
                            return (<div key={parameter} style={{marginBottom:'5px'}} className="row">
                            <div key={parameter+1} style={{textAlign:'center', backgroundColor:'red', color:'white', borderRadius:'10px'}} className="col-md-4">{uni1Obj[parameter]}</div>
                            <div key={parameter+2} style={{textAlign:'center',color:'white'}} className="col-md-4">{parameter}</div>
                            <div key={parameter+3} style={{textAlign:'center', backgroundColor:'green', color:'black', borderRadius:'10px'}} className="col-md-4">{uni2Obj[parameter]}</div>
                            </div>)
                        })
                    }
            </div>
            </div>
        </div>
    )
}

export default CompareHead2Head
