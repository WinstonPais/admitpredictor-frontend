import React, {useEffect } from 'react';
import {Grid,FormGroup,FormControl,OutlinedInput,Button,makeStyles} from '@material-ui/core';

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
        top:"10%",
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

    const inputFields = require('./inputFieldsData.json');
    return(
        <>
            <Grid className={classes.grid} justify="center" alignItems="center" >
                <FormGroup>
                    {
                        inputFields.map((inputdata) =>{
                            return (
                                <FormControl className={classes.formcontrol}>
                                    <OutlinedInput className={classes.input} key={inputdata.id} {...inputdata}/>
                                </FormControl>
                            )
                        })
                    }
                    <Button className={classes.button} variant="contained" color="primary" >
                        Submit
                    </Button>
                </FormGroup>
            </Grid>
        </>
    )
}

export default Formpage;