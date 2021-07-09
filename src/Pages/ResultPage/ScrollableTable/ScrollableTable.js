import classes from './ScrollableTable.module.css';
import StickyHeadTable from './StickyHeadTable/StickyHeadTable';

const ScrollableTable = () => {
    return (
        <div className="container">
            <div className={classes.darkTransparentBackground}>
                <div className={classes.marginsforTable}>
                    <StickyHeadTable/>
                </div>
            </div>
        </div>
    )
}

export default ScrollableTable
