import classes from './ResultInputParametesSection.module.css'

const ResultInputParametesSection = (props) => {
    return (
        <div className={["container", classes.marginTop].join(' ')}>
            <div className={classes.whitetransparent}>
                <div style={{backgroundColor:"black",borderRadius:"10px"}} className="container">
                   <div className="row">
                       <div style={{textAlign:"center",marginTop:"15px"}} className="col"><h3 style={{color:"white"}}>User Entered Data</h3></div>
                   </div>
                   <div style={{marginTop:"20px",marginLeft:"10vh"}} className="row">
                       <div className="col">
                           <div>
                               <p style={{color:"white",marginLeft:"10px"}}>Gre Score</p>
                               <input readOnly type="text" value={props.responseData["inputParameters"]["GREScore"]} placeholder="GreScore" style={{borderRadius:"999px",height:"7vh",width:"25vh",padding: "0 10px"}} />
                           </div>
                       </div>
                       <div className="col">
                            <div>
                               <p style={{color:"white",marginLeft:"10px"}}>Sop</p>
                               <input readOnly type="text" value={props.responseData["inputParameters"]["SOP"]} placeholder="Sop" style={{borderRadius:"999px",height:"7vh",width:"25vh",padding: "0 10px"}} />
                           </div>
                       </div>
                       <div className="col">
                            <div>
                                <p style={{color:"white",marginLeft:"10px"}}>CGPA</p>
                                <input readOnly type="text" value={props.responseData["inputParameters"]["CGPA"]} placeholder="CGPA" style={{borderRadius:"999px",height:"7vh",width:"25vh",padding: "0 10px"}} />
                            </div>
                       </div>
                   </div>
                   <div style={{marginTop:"20px",marginLeft:"10vh",marginBottom:"10px"}} className="row">
                       <div className="col">
                           <div style={{marginBottom:"30px"}}>
                               <p style={{color:"white",marginLeft:"10px"}}>Toefl Score</p>
                               <input readOnly type="text" value={props.responseData["inputParameters"]["TOEFLScore"]} placeholder="Toefl Score" style={{borderRadius:"999px",height:"7vh",width:"25vh",padding: "0 10px"}} />
                           </div>
                       </div>
                       <div className="col">
                            <div style={{marginBottom:"30px"}}>
                               <p style={{color:"white",marginLeft:"10px"}}>Lor</p>
                               <input readOnly type="text" value={props.responseData["inputParameters"]["LOR"]} placeholder="LOR" style={{borderRadius:"999px",height:"7vh",width:"25vh",padding: "0 10px"}} />
                           </div>
                       </div>
                       <div className="col">
                            <div style={{marginBottom:"30px"}}>
                                <p style={{color:"white",marginLeft:"10px"}}>Research</p>
                                <input readOnly type="text" value={props.responseData["inputParameters"]["Research"]} placeholder="Research" style={{borderRadius:"999px",height:"7vh",width:"25vh",padding: "0 10px"}} />
                            </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default ResultInputParametesSection
