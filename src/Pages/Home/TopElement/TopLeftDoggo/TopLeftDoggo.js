import classes from './TopLeftDoggo.module.css';
import doggoLogo from './assets/uniDoggo.gif';

const TopLeftDoggo = () => {
    return (
        <div className={classes.shiftLeft}>
            <div className={classes.block}>
                <img className={[classes.DoggoStyle].join(' ')} alt="mascotDog" src={doggoLogo}/>
            </div>
            
            <h3 className={["text-center", classes.ap].join(' ')}>Admit Predictor</h3>
        </div>
    )
}

export default TopLeftDoggo
