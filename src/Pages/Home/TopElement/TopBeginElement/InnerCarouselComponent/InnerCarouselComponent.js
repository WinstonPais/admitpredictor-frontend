import classes from './../TopBeginElement.module.css';
import { Button } from 'react-bootstrap';
import { animated } from 'react-spring';
import { useHistory } from "react-router";

const InnerCarouselComponent = (props) => {
    
    const history = useHistory();

    const saveStateNext = async (isSubmit) => {
        if(!isSubmit)
            props.nextClick()
        else{
            const result = await props.predictFunc();
            history.push({
                pathname: '/admitpredictor-frontend/resultpage',
                state: {...result}
            })

        }
    }

    const stateVars = props.getstateVars(); // For setting default vaules of Inout fields as the state values
    return (
        <>
        {
            props.isStartOfForm
            ? 
            <animated.div style={props.style}>
                <h2 className="mb-4 mt-0 text-center">Can you get into your favourite university?</h2>
                <h2 className="mb-4 mt-0 text-center">To find out</h2>
                <div className={classes.mar4}>
                    <Button onClick={props.nextClick} className={['btn btn-lg btn-block',classes.ButtonColor,classes.btnshadowblue].join(' ')}>Click here</Button>
                </div>
            </animated.div>
            :
            <animated.div style={props.style}>
                <p htmlFor={props.input1ID}>{props.input1Header}</p>
                <div className="form-group">
                    <input 
                        type="text" 
                        onChange={(e) => {props.stateHandler(props.input1ID, e.target.value)}} 
                        className="form-control pb_height-50 reverse" 
                        id={props.input1ID} 
                        defaultValue={stateVars[props.input1ID]} 
                        name={props.input1ID} 
                        placeholder={props.input1placeholder} 
                        required
                    />
                </div>
                <p htmlFor={props.input2ID}>{props.input2Header}</p>
                <div className="form-group">
                    {
                        props.isForm3 !== "true"
                        ?
                            <input 
                            type="text" 
                            onChange={(e) => {props.stateHandler(props.input2ID, e.target.value)}} 
                            className="form-control pb_height-50 reverse" id={props.input2ID} 
                            defaultValue={stateVars[props.input2ID]} 
                            name={props.input2ID} 
                            placeholder={props.input2placeholder} 
                            required
                            />
                        :
                            <select className="form-control" onChange={(e) => {props.stateHandler(props.input2ID, e.target.value)}}  style={{width:"100%",height:"50px",padding:"0 10px"}}>
                                <option disabled="disabled" selected="selected">Select an option</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                    }
                </div>
                <div className={[classes.mar4, 'row'].join(' ')}>
                    <div className="col-md-6">
                        <Button 
                            onClick={props.prevClick} 
                            className={['btn btn-lg btn-block', classes.ButtonColor, classes.btnshadowblue].join(' ')}
                        >   
                            {props.Button1}
                        </Button>
                    </div>
                    {
                        
                        props.Button2 !== "Submit" 
                        ?
                            <div className="col-md-6">
                                <Button 
                                    onClick={() => saveStateNext(false)} 
                                    className={['btn btn-lg btn-block', classes.ButtonColor, classes.btnshadowblue].join(' ')}
                                >
                                    {props.Button2}
                                </Button>
                            </div>
                        :   
                            <div className="col-md-6">
                                <Button 
                                    onClick={() => saveStateNext(true)} 
                                    className={['btn btn-lg btn-block', classes.ButtonColor, classes.btnshadowblue].join(' ')}
                                >
                                    {props.Button2}
                                </Button>
                            </div>
                    }
                    
                </div>
            </animated.div>
        }
        </>
    )
}

export default InnerCarouselComponent
