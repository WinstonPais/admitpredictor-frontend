import classes from './UniProfileDetails.module.css';

const UniProfileDetails = () => {
    return (
        <div className={classes.OuterProfileBody}>
            <div className={classes.imagesOuterBody}>
                <div className={classes.coverImgDiv}>
                    <img className={classes.coverImg} alt="Cover" src="https://s3.amazonaws.com/photos.niche.com/7b4614d65ccf83bec0fc185e0933ea793b47a371"/>
                </div>
                <div className={classes.profileImgDiv}>
                    <img className={classes.ProfileImg} alt="Profile" src="https://raw.githubusercontent.com/WinstonPais/QSUniversityRankingWebScraper/main/ProfilePics/Arizona State University.jpg" />
                </div>
            </div>
        </div>
    )
}

export default UniProfileDetails
