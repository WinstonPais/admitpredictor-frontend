import GoogleMapsComp from './GoogleMapsComp/GoogleMapsComp';
import UniProfileDetails from './UniProfileDetails/UniProfileDetails';

const UniDetailsSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <GoogleMapsComp/>
                </div>
                <div className="col">
                    <UniProfileDetails/>
                </div>
            </div>
        </div>
        
    )
}

export default UniDetailsSection
