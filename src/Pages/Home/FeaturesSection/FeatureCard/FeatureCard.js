import classes from './FeatureCard.module.css';

const FeatureCard = (props) => {
    return (
        <div class="col-lg-4 col-md-4 col-sm-6">
            <div class={['media d-block',classes.pb_featurev1,classes.textleft].join(' ')}>
                <div class={classes.pb_icon}>
                    <i class={[classes.pb_icongradient, props.styleClass].join(' ')}/>
                </div>
                <div class="media-body">
                <h5 class="mt-0 mb-3 heading">{props.name}</h5>
                <p class="text-sans-serif">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard
