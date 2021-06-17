import React, { useState, useEffect } from 'react';
import CircularLoader from './CircularLoader/CircularLoader';

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
            ? <CircularLoader/>
            : props.pageComponent
        }
        </>
    )
}

export default Loader
