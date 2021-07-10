import GoogleMapsComp from './GoogleMapsComp/GoogleMapsComp';
import UniProfileDetails from './UniProfileDetails/UniProfileDetails';
import classes from './UniDetailsSection.module.css'

const UniDetailsSection = () => {
    return (
        <div className={["container", classes.marginTop].join(' ')}>
            <div className="row">
                <div style={{width: '50%'}} className="col">
                    <GoogleMapsComp/>
                </div>
                <div style={{width: '50%'}} className="col">
                    <UniProfileDetails/>
                </div>
            </div>
        </div>
        
    )
}

export default UniDetailsSection
