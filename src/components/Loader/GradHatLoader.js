import React, { useState, useEffect } from 'react';
import loaderimage from './images/gradhat.svg';
import classes from './GradHatLoader.module.css';

const GradHatLoader = (props) => {
    const [isLoading, didPageLoad] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            didPageLoad(false);
        }, 1500)
    }, []);

    return (
        <>
        {isLoading 
            ?   <div className={classes.loader}>
                    <img className={classes.imag} src={loaderimage} alt="loader" />
                    <p className={classes.caption}>Admit Predictor</p>
                </div>
            :   props.pageComponent
        }
        </>
    )
}

export default GradHatLoader;
