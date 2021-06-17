import classes from './TopBeginElement.module.css';
import { Button } from 'react-bootstrap';
import { Link  } from 'react-router-dom'

const TopBeginElement = () => {
    return (
        <div className={classes.pb_form_v1}>
            <h2 className="mb-4 mt-0 text-center">Login</h2>
            <div className="form-group">
            <input type="text" class="form-control pb_height-50 reverse" name="username" placeholder="Username" required/>
            </div>
            <div className="form-group">
            <input type="password" class="form-control pb_height-50 reverse" name="password" placeholder="Password" required/>
            </div>
            <div className={classes.mar4}>
                <Link to="/admitpredictor-frontend/formpage">
                    <Button className={['btn btn-lg btn-block', classes.ButtonColor, classes.btnshadowblue].join(' ')}>Begin</Button>
                </Link>
            </div>
        </div>
    )
}

export default TopBeginElement;
