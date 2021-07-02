import React, { useState, useEffect } from 'react';
import {Grid,FormGroup,FormControl,OutlinedInput,Button,makeStyles} from '@material-ui/core';
import Navbar from '../../components/NavBar/NavBar';
import axios from "axios";


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
    const [showResult, setshowResult] = useState(true);
    const [chanceOfAdmit, setchanceOfAdmit] = useState(0);

    useEffect(() => {
        document.body.style.backgroundColor = "#25274D";
    });
    const classes = useStyles();
    
    const inputFields = require('./inputFieldsData.json');

    const getParams = () =>{
        const result = {}
        inputFields.forEach((item) => {
            const ID = item.id;
            result[ID] = document.getElementById(ID).value;
            // console.log(ID)
        })
        console.log(result);
        return result
    }

    const fetchData = () => {
        const parmeters = getParams();
        return axios.get('http://127.0.0.1:8000/tensorflow_neuralNetworks/', { params: {...parmeters}})
        // ?GREScore=337&TOEFLScore=118&UniversityRating=4&SOP=4.5&LOR=4.5&CGPA=9.65&Research=1'
        .then((res) => {
            console.log(res.data.chanceOfAdmit);
            setshowResult(false)
            setchanceOfAdmit(res.data.chanceOfAdmit)
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return(
        <>
            <Navbar/>
            <Grid className={classes.grid} justify="center" alignItems="center" >
                { showResult ?
                
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
                        <Button className={classes.button} onClick={fetchData} variant="contained" color="primary" >
                            Submit
                        </Button>
                    </FormGroup>
                    :  
                    <h2>Your Chance Of Admit is : {chanceOfAdmit*100}%</h2>
                }
            </Grid>
        </>
    )
}

export default Formpage;