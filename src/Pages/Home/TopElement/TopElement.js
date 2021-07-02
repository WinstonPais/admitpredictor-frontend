import classes from './TopElement.module.css';
import TopBeginElement from './TopBeginElement/TopBeginElement';
import TopLeftDoggo from './TopLeftDoggo/TopLeftDoggo';

const TopElement = () => {
    return (
        <section className={[classes.backgroundColor, classes.slantAfter].join(' ')}>
            <div className={[classes.overflowHidden, 'container'].join(' ')}>
                <div className={["row align-items-center justify-content-center", classes.rowHeight].join(' ')}>
                    <div className="col-md-6">
                        <TopLeftDoggo/>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-5 relative align-self-center">
                        <TopBeginElement/>
                    </div>

                </div>
                
            </div>
        </section>
    )
}

export default TopElement
