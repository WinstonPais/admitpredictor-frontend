import React, { useCallback, useState} from 'react';
import classes from './TopBeginElement.module.css';
import { useTransition } from "react-spring";
import axios from "axios";

import InnerCarouselComponent from './InnerCarouselComponent/InnerCarouselComponent';

const TopBeginElement = () => {
    const [formInputState, setFormInputState] = useState(0);
    const [GREScore, setGREScore] = useState("");
    const [TOEFLScore, setTOEFLScore] = useState("");
    const [SOP, setSOP] = useState("");
    const [LOR, setLOR] = useState("");
    const [CGPA, setCGPA] = useState("");
    const [Research, setResearch] = useState("");
    const carouselData = require('./InnerCarouselContainerData.json');

    const setMyState = (stateType, val) =>{
        // debugger;
        if(stateType === "GREScore"){
            setGREScore(val)
        }else if(stateType === "TOEFLScore"){
            setTOEFLScore(val)
        }else if(stateType === "SOP"){
            setSOP(val)
        }else if(stateType === "LOR"){
            setLOR(val)
        }else if(stateType === "CGPA"){
            setCGPA(val)
        }else if(stateType === "Research"){
            setResearch(val)
        }
    }

    const getParams = () => {
        return {
            "GREScore" : GREScore,
            "TOEFLScore" : TOEFLScore,
            "SOP" : SOP,
            "LOR" : LOR,
            "CGPA" : CGPA,
            "Research" : Research,
            "UniversityRating" : 4
        }
    }

    const getPredictionResults = async () => {
        const parmeters = getParams();
        let result = null;
        // const prom = await axios.get('https://bhqqqb8355.execute-api.ap-south-1.amazonaws.com/dev/tensorflow_neuralNetworks/', { params: {...parmeters}})
        const prom = await axios.get('http://127.0.0.1:8000/tensorflow_neuralNetworks/', { params: {...parmeters}})
        // ?GREScore=337&TOEFLScore=118&UniversityRating=4&SOP=4.5&LOR=4.5&CGPA=9.65&Research=1'
        .then((res) => {
            result = res.data;
            console.log(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
        console.log(prom)
        return result
    }

    const handlePrev = useCallback(() => {
        setFormInputState(state => state - 1);
    }, [setFormInputState]);
    
    const handleNext = useCallback(() => {
        setFormInputState(state => state + 1);
    }, [setFormInputState]);

    const transitions = useTransition([formInputState], (item) => item, {
        from: { opacity: 0, transform: 'translate3d(-1000px,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0px,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(1000px,0,0)', maxHeight: '0px' },
    });

    return (
        <div className={classes.pb_form_v1}>
        {transitions.map(({ item, props }) => (
            
            <InnerCarouselComponent 
                prevClick={handlePrev}
                nextClick={handleNext}
                style = {props}
                getstateVars = {getParams}
                {...carouselData[item]}
                stateHandler={setMyState}
                predictFunc={getPredictionResults}
            />
          ))}
        </div>
    )
}

export default TopBeginElement;
