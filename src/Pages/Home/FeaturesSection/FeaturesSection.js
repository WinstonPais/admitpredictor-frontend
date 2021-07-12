import classes from './FeaturesSection.module.css';
import FeatureCard from './FeatureCard/FeatureCard';

const FeaturesSection = () => {
    const featureDetails = require('./featureData.json');
    return (
        <section className={[classes.pb_section,classes.sectionStyle,classes.pb_slantwhite].join(' ')}>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6 text-center mb-5">
                        <h5 className="text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2"><strong>Features</strong></h5>
                        <h2>App Features</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        featureDetails.map((feature) =>{
                            return  <FeatureCard key={feature.name} {...feature}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
