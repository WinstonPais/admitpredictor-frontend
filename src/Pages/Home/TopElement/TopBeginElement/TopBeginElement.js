import classes from './TopBeginElement.module.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopBeginElement = () => {
    return (
        <div className={classes.pb_form_v1}>
            <h2 className="mb-4 mt-0 text-center">Can you get into your favourite university?</h2>
            <h2 className="mb-4 mt-0 text-center">To find out</h2>
            <div className={classes.mar4}>
                <Link to="/admitpredictor-frontend/formpage">
                    <Button onClick="" className={['btn btn-lg btn-block',classes.ButtonColor,classes.btnshadowblue].join(' ')}>Click here</Button>
                </Link>
            </div>
        </div>
    )
}

export default TopBeginElement;
