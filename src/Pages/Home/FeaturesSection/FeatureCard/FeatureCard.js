import classes from './FeatureCard.module.css';

const FeatureCard = (props) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className={['media d-block',classes.pb_featurev1,classes.textleft].join(' ')}>
                <div className={classes.pb_icon}>
                    <i className={[classes.pb_icongradient, props.styleClass].join(' ')}/>
                </div>
                <div className="media-body">
                <h5 className="mt-0 mb-3 heading">{props.name}</h5>
                <p className="text-sans-serif">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
