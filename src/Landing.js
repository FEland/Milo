import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AllTropesBox from "./AllTropesBox"
import StuTeacher from './StuTeacher';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Landing(props) {
  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
        <div style={{'color': 'white'}}>
        <h1 >Welcome to Harrison's Bar Mitzvah Website! </h1>
    <br/>

    {/* <frontpage> */}
        <StuTeacher />
    {/* </frontpage> */}


        <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Copyright © 2020 Year13 Productions. All Rights Reserved.
            Built by Effie Landau. No recordings or lectures may be shared without my written consent.
        </h6>
        </div>
    </div>

    );
}
