import classes from './UniProfileDetails.module.css';

const UniProfileDetails = (props) => {
    const uniData = props.getUniDetails();

    return (
        <div className={classes.OuterProfileBody}>
            <div className={classes.imagesOuterBody}>
                <div className={classes.coverImgDiv}>
                    <img 
                        className={classes.coverImg} 
                        alt="Cover" 
                        src={uniData["coverImage"]}
                    />
                </div>
                <div className={classes.profileImgDiv}>
                    <img 
                        className={classes.ProfileImg} 
                        alt="Profile" 
                        src={uniData["ImageURL"]}
                    />
                </div>
                <div className={classes.ratingCircle}>
                    <div className={[classes.ratingInnerCircle, "align-middle"].join(' ')}>
                        {uniData["Rating"]}
                    </div>
                </div>
            </div>
            <div className={["container", classes.marginTopDetails].join(' ')}>
                <h3 className={[classes.whiteText,classes.marginBottom].join(' ')}>{uniData["Name"]}</h3>
                <p className={classes.greyText}>QS World Ranking {uniData["Rank"]}</p>
                <div className={classes.DetailsRow}>
                    <ul className={[classes.whiteText, classes.ulStyle].join(' ')}>
                        <li style={{paddingLeft:'0'}} className={classes.liStyle}>
                            <span style={{display:'block'}}>Research Output</span>
                            <span style={{display:'block'}}>{uniData["Research Output"]}</span>
                        </li>
                        <li className={classes.liStyle}>
                            <span style={{display:'block'}}>Student/Faculty Ratio</span>
                            <span style={{display:'block'}}>{uniData["Student/Faculty Ratio"]}</span>
                        </li>
                        <li className={classes.liStyle}>
                            <span style={{display:'block'}}>Intl Students</span>
                            <span style={{display:'block'}}>{uniData["International Students"]}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UniProfileDetails
