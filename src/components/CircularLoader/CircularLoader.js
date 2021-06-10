import React, { useState, useEffect } from 'react';

const CircularLoader = () => {
    const [isLoading, didPageLoad] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            didPageLoad(false);
        }, 1000)
    }, []);

    return (
        <>
        {isLoading 
            ? <div>Hello</div> 
            : <div>Actual Page</div> 
        }
        </>
    )
}

export default CircularLoader
