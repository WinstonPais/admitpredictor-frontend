import classes from './FeaturesSection.module.css';
import FeatureCard from './FeatureCard/FeatureCard';

const FeaturesSection = () => {
    const featureDetails = require('./featureData.json');
    return (
        <section className={[classes.pb_section,classes.sectionStyle,classes.pb_slantwhite].join(' ')}>
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-md-6 text-center mb-5">
                        <h5 class="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2"><strong>Features</strong></h5>
                        <h2>App Features</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        featureDetails.map((feature) =>{
                            return  <FeatureCard {...feature}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
