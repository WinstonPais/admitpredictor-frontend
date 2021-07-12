import classes from './ScrollableTable.module.css';
import StickyHeadTable from './StickyHeadTable/StickyHeadTable';

const ScrollableTable = (props) => {
    return (
        <div style={{marginBottom:'10vh'}} className="container">
            <div className={classes.darkTransparentBackground}>
                <div className={classes.marginsforTable}>
                    <StickyHeadTable 
                        bottomDetailsDisplayHandler = {props.bottomDetailsDisplayHandler} 
                        className={classes.roundedCorners}
                    />
                </div>
            </div>
        </div>
    )
}

export default ScrollableTable
