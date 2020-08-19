import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AllTropesBox from "./AllTropesBox"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function SafariSite(props) {
  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
        <div style={{'color': 'white'}}>
        <h1 >Welcome to Harrison's Bar Mitzvah Website! </h1>
    <br/>
    <frontpage>
        <a href="https://milowitz.netlify.app">
          <img src="./images/barmit.png" alt="icon" loading="lazy" position="right"/>
        </a> 

        <h3>Year13 Productions Bar Mitzva Training Material 
        is only supported on Google Chrome at this time. 
        Please open up your Chrome browser or Download Chrome <a href="https://support.google.com/chrome/answer/95346">here.</a>
        <br/><br/>
        We look forward to seeing you back at <a href="https://milowitz.netlify.app" color="yellow">https://milowitz.netlify.app</a> soon!
        </h3>
        </frontpage>

        <frontpage>

        <AllTropesBox/>

    </frontpage>

        <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Copyright © 2020 Year13 Productions. All Rights Reserved.
            Built by Effie Landau. No recordings or lectures may be shared without my written consent.
        </h6>
        </div>
    </div>

    );
}
