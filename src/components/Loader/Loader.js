import React, { useState, useEffect } from 'react';
import loaderimage from './../../components/Loader/images/gradhat.svg';
import classes from './../../components/Loader/Loader.module.css';
const Loader = () => {
    const [isLoading, didPageLoad] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            didPageLoad(false);
        }, 1000)
    }, []);

    return (
        <>
        {isLoading
            ? 
            <div className={classes.loader}>
                <img className={classes.imag} src={loaderimage} alt="loader" />
                <p className={classes.caption}>Admit Predictor</p>
              </div>
            : <div>Actual Page</div> 
        }
        </>
    )
}
export default Loader;
