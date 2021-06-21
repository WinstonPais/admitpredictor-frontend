import React, {useEffect } from 'react';
import {Grid,FormGroup,FormControl,OutlinedInput,Button,makeStyles} from '@material-ui/core';
import Navbar from '../../components/NavBar/NavBar';

const useStyles = makeStyles({
    '@global':{
        '::-webkit-scrollbar':{
            width: "20px"
        },
        '::-webkit-scrollbar-track':{
            backgroundColor: "transparent",
        },
        '::-webkit-scrollbar-thumb':{
            backgroundColor: "#d6dee1",
            borderRadius: "20px",
            border: "6px solid transparent",
            backgroundClip: "content-box",
        },
        '::-webkit-scrollbar-thumb:hover':{
            backgroundColor: "#a8bbbf"
        }
    },
    grid: {
        backgroundColor:"black",
        position:"absolute",
        left:"20%",
        right:"20%",
        top:"15%",
    },
    formcontrol: {
        marginLeft:'20%',
        marginTop:'5%',
        marginRight:'20%',
    },
    button: {
        marginLeft:'40%',
        marginTop:'5%',
        marginRight:'40%',
        marginBottom:'4%',
    },
    input: {
        borderRadius:"25px",
        backgroundColor:"white",
    }
    
  });

const Formpage = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#25274D";
    });
    const classes = useStyles();
    return(
        <>
            <Navbar/>
            <Grid className={classes.grid} justify="center" alignItems="center" >
                <FormGroup>
                    <FormControl className={classes.formcontrol}>
                        <OutlinedInput className={classes.input} id="grescores" htmlFor="gre" placeholder="Gre Scores"></OutlinedInput>
                    </FormControl>
                    <FormControl className={classes.formcontrol}>
                        <OutlinedInput className={classes.input}  id="toefl" htmlFor="toefl" placeholder="TOEFL Scores"></OutlinedInput>
                    </FormControl>
                    <FormControl className={classes.formcontrol}>
                        <OutlinedInput className={classes.input}  id="university_ranking" htmlFor="university_ranking" placeholder="University Ranking"></OutlinedInput>
                    </FormControl>
                    <FormControl className={classes.formcontrol}>
                        <OutlinedInput className={classes.input}  id="sop" htmlFor="sop" placeholder="SOP"></OutlinedInput>
                    </FormControl>
                    <FormControl className={classes.formcontrol}>
                        <OutlinedInput className={classes.input}  id="lor" htmlFor="lor" placeholder="LOR"></OutlinedInput>
                    </FormControl>
                    <FormControl className={classes.formcontrol}>
                        <OutlinedInput className={classes.input}  id="cgpa" htmlFor="cgpa" placeholder="CGPA"></OutlinedInput>
                    </FormControl>
                    <FormControl className={classes.formcontrol}>
                        <OutlinedInput className={classes.input}  id="research" htmlFor="research" placeholder="Research"></OutlinedInput>
                    </FormControl>
                    <Button className={classes.button} variant="contained" color="primary" disableElevation>
                        Submit
                    </Button>
                </FormGroup>
            </Grid>
        </>
    )
}

export default Formpage;