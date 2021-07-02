import React from 'react';
import TopElement from './TopElement/TopElement';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import IndexFooter from './IndexFooter/IndexFooter';
import Navbar from '../../components/NavBar/NavBar';
// import Footer from './../../footer/footer';
// import classes from './Home.module.css';
// import HomeCarousel from './../../homecarousel/homecarousel';
// import Grid from './../../Grid/Grid';
// import { Container } from 'reactstrap';
// import CreateRecipes from './../../createRecipes/createRecipes';
const Home = () => {
    return (
        <>
            <Navbar/>
            <TopElement/>
            <FeaturesSection/>
            <IndexFooter/>
        </>
        // <Fragment>
        //     <HomeCarousel/>
        //     <div className={classes.makePositionRelative}>
        //     <Container className={classes.gridTopMargin}>
        //         <h4 className={[classes.whiteText,classes.featured].join(' ')}>&nbsp;&nbsp;Featured &nbsp;&nbsp;</h4>
        //         <Grid/>
        //     </Container>
        //     <CreateRecipes />
        //     <Footer />
        //     </div>
        // </Fragment>

    )
}

export default Home
