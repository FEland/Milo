import React, {Fragment} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tooltip from '@material-ui/core/Tooltip';
import Ropes from './Ropes_8';
import Fresh from './Fresh';
import Shema from './Shema_4';
import Master from './Master';
import Slideshow from './Slideshow3';
import Practice from './Practice';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


import { Link, Route, Switch, HashRouter } from "react-router-dom";

// import Countdown from './countdown'; // /** This countdown component is from https://medium.com/@kristin_baumann/react-countdown-6455838b6faf */

import { createMuiTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8eacbb',
      main: '#607d8b',
      dark: '#34515e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function MenuBar(props) {
  
   function detectDevice(){
    return !!(navigator.maxTouchPoints) 
  }

  const classes = useStyles();

    return (
    
      <div className={classes.root}>

        <Route
          path="/"
          render={({ location }) => (
            <Fragment variant="dense" >
                <Grid item xs={8} >
                  <Tabs value={location.pathname} textColor="primary" variant="fullWidth" centered > 
                    <Tooltip title="Practice the Shema" arrow placement="left">
                      <Tab label="Shema" component={Link} to="/Shema" />
                    </Tooltip>
                    
                    <Tab label="Lecture Slides" component={Link} to="/Lectures" />

                    <Tooltip title="Quiz yourself on the Tropes" arrow placement="right">
                      <Tab label="Tropes" component={Link} to="/Tropes" />
                    </Tooltip>

                    <Tooltip title="Quiz yourself on the Fresh" arrow placement="right">
                      <Tab label="Fresh" component={Link} to="/Fresh" />
                    </Tooltip>

                  </Tabs>
                </Grid>
                </Fragment>
          )}
        />

        </div>
    

    );
}
