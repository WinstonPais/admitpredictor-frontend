import GoogleMapsComp from './GoogleMapsComp/GoogleMapsComp';
import UniProfileDetails from './UniProfileDetails/UniProfileDetails';
import classes from './UniDetailsSection.module.css'

const UniDetailsSection = (props) => {
    const uniData = props.getUniDetails();
    return (
        <div className={["container", classes.marginTop].join(' ')}>
            <h1 style={{marginBottom:'4vh',color:'#F2EEEE'}}>{uniData["Name"]}</h1>
            <div className="row">
                <div style={{width: '50%'}} className="col">
                    <GoogleMapsComp 
                        getUniDetails={props.getUniDetails}
                    />
                </div>
                <div style={{width: '50%'}} className="col">
                    <UniProfileDetails
                        getUniDetails={props.getUniDetails}
                    />
                </div>
            </div>
        </div>
        
    )
}
export default UniDetailsSection
