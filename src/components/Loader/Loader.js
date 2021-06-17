import React, { useState, useEffect } from 'react';
// import CircularLoader from './CircularLoader/CircularLoader';
import loaderimage from './../../components/Loader/images/gradhat.svg';
import classes from './../../components/Loader/Loader.module.css';

const Loader = (props) => {
    const [isLoading, didPageLoad] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            didPageLoad(false);
        }, 1000)
    }, []);

    return (
        <>
        {isLoading 
            ? <div className={classes.loader}>
            <img className={classes.imag} src={loaderimage} alt="loader" />
            <p className={classes.caption}>Admit Predictor</p>
          </div>
            : props.pageComponent
        }
        </>
    )
}

export default Loader;
