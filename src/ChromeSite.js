import React, {Fragment} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tooltip from '@material-ui/core/Tooltip';
import Ropes from './Ropes_8';
import Shema from './Shema_4';
import Master from './Master';
import Slideshow from './Slideshow3';
import Practice from './Practice';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


import { Link, Route, Switch, HashRouter } from "react-router-dom";

// import Countdown from './countdown'; // /** This countdown component is from https://medium.com/@kristin_baumann/react-countdown-6455838b6faf */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function ChromeSite(props) {
  
  const classes = useStyles();

    return (
      <HashRouter>
      <div className={classes.root}>
      {/* <Countdown date={'2020-09-05T09:00:00'} text='Ki Tavo Bar Mitzva Countdown'  /> */}
      
        <Route
          path="/"
          render={({ location }) => (
            <Fragment variant="dense" >
                <div>
                <Grid container spacing={3}> 
                  <Grid item xs={2} >
                    <div class="topleft">
                    {/* TODO REMOVE PIC ON OPEN PAGE */}

              




                    {/*  */}
                    <Link to="/Practice">
                        <img src="./images/barmit.png" alt="icon" loading="lazy" width="50" height='auto'/>
                    </Link>
                    </div>
                  </Grid>
                <Grid item xs={8} >
                  <Tabs value={location.pathname}  textColor="primary" variant="fullWidth" centered > 
                    <Tooltip title="Practice the Shema" arrow placement="left">
                      <Tab label="Shema" component={Link} to="/Shema" />
                    </Tooltip>
                    
                    <Tab label="Lecture Slides" component={Link} to="/Lectures" />

                    <Tooltip title="Quiz yourself on the Tropes" arrow placement="right">
                      <Tab label="Tropes" component={Link} to="/Tropes" />
                    </Tooltip>
                  </Tabs>
                </Grid>

                <Grid item xs={2} >
                <div class="topright">
                  <Link to="/">
                    <img src="/Slides3/Cov.jpg" alt="icon" loading="lazy" width="50" height='auto' position="absolute" />
                  
                  </Link>
                </div>
                </Grid>
    
              </Grid>


                </div>


              <Switch>
                

                <Route path="/Shema" render={() => <div> <Shema/> </div>} />
                <Route path="/Lectures" render={() => <div> <Slideshow/> </div>} />
                <Route path="/Tropes" render={() => <div> <Ropes/>  </div>} />
                <Route path="/Practice" render={() => <div> <Practice/>  </div>} />

                {/* <Route path="/" render={() => <div> <MainScreen/> </div>} /> */}
                <Route path="/" render={() => <div> <Master/> </div>} />

              </Switch>
            </Fragment>
          )}
        />
        <br/>
            <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Copyright © 2020 Year13 Productions. All Rights Reserved.
      Built by Effie Landau. No recordings or lectures may be shared without my written consent.</h6>
      </div>
      
    </HashRouter>
    
    

    );
}
