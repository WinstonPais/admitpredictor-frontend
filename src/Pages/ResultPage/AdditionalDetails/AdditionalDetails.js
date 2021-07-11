import classes from './AdditionalDetails.module.css';

const AdditionalDetails = (props) => {
    const uniData = props.getUniDetails();
    return (
        <div style={{marginBottom:'10vh',}} className="container">
            <div className={[classes.backgroundAddD,classes.styl].join(' ')}>
                <div style={{paddingTop:'40px',paddingBottom:'10px'}} className={["container"].join(' ')}>
                    <div style={{marginLeft:'10vw', marginRight: '10vw'}} className={classes.backgroundGrey}>
                        <div style={{textAlign:'center',color:'rgb(230, 230, 230)'}}>
                            <h1 style={{color:'rgb(138, 38, 155)'}} >Admissions</h1>
                            <div className="row">
                                <div style={{marginTop:'3vh'}} className="col">
                                    <p style={{marginBottom:'0'}} >Application Fee</p>
                                    <h3>{uniData["ApplicationFee"]}</h3>
                                    <p style={{marginBottom:'0',marginTop:'1em'}}>Application Deadline</p>
                                    <h3>{uniData["ApplicationDeadline"]}</h3>
                                </div>
                                <div style={{marginTop:'3vh'}} className="col">
                                    <p style={{marginBottom:'0'}}>Acceptance Rate</p>
                                    <h3>{uniData["AcceptanceRate"]}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col">
                        <div style={{paddingTop:'10px',paddingBottom:'10px'}} className="container">
                            <div className={classes.backgroundGrey}>
                                <div style={{textAlign:'center',color:'rgb(230, 230, 230)'}}>
                                    <h1 style={{color:'rgb(138, 38, 155)'}}>Costs</h1>
                                    <div className="row">
                                        <div style={{marginTop:'3vh'}} className="col">
                                            <p style={{marginBottom:'0'}} >Net Price</p>
                                            <h4>{uniData["NetPrice"]}/Year</h4>
                                            <p style={{color:'#707070'}}>Average cost after financial Aid for students receiveing grant or scholarship aid, as reported by the college</p>
                                            
                                        </div>
                                        <div style={{marginTop:'3vh'}} className="col">
                                            <p style={{marginBottom:'0'}}>Average Total Aid Awarded</p>
                                            <h4>{uniData["TotalAidAwardedPerYear"]}/Year</h4>
                                            <p style={{marginBottom:'0',marginTop:'1em'}}>Students receiving financial aid</p>
                                            <h3>{uniData["StudentsReceivingAid"]}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{paddingTop:'10px',paddingBottom:'20px'}} className="container">
                            <div style={{paddingBottom:'15px'}} className={classes.backgroundGrey}>
                            <div style={{textAlign:'center',color:'rgb(230, 230, 230)'}}>
                                    <h1 style={{color:'rgb(138, 38, 155)'}}>After College</h1>
                                    <div className="row">
                                        <div style={{marginTop:'3vh'}} className="col">
                                            <p style={{marginBottom:'0'}} >Median earnigns 6 years after graduation</p>
                                            <h4>{uniData["MedianEarningsAfter6Years"]}/Year</h4>
                                            
                                        </div>
                                        <div style={{marginTop:'3vh'}} className="col">
                                            <p style={{marginBottom:'0'}}>Graduation Rate</p>
                                            <h3>{uniData["GraduationRate"]}</h3>
                                            <p style={{marginBottom:'0',marginTop:'1em'}}>Employed 2 years after graduation</p>
                                            <h3>{uniData["EmploymentRateAfter2Years"]}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AdditionalDetails
