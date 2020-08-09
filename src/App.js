import React, {Fragment} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tooltip from '@material-ui/core/Tooltip';
import Ropes from './Ropes_8'
import Shema from './Shema'
import Master from './Master'
import Slideshow from './Slideshow3';
// import MainScreen from './MainScreen';

import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
// import Countdown from './countdown'; // /** This countdown component is from https://medium.com/@kristin_baumann/react-countdown-6455838b6faf */

export default function Final(props) {


  return (
    <BrowserRouter>
    <div className="App">

    {/* <Countdown date={'2020-09-05T09:00:00'} text='Ki Tavo Bar Mitzva Countdown'  /> */}

      <Route
        path="/"
        render={({ location }) => (
          <Fragment variant="dense" >

                <Tabs value={location.pathname} indicatorColor="primary" textColor="primary" centered > 
                
                <Tooltip title="Practice the Shema" arrow placement="left">
                  <Tab label="Shema" component={Link} to="/Shema" />
                </Tooltip>
                <Tab label="Lecture Slides" component={Link} to="/Lectures" />

                <Tooltip title="Quiz yourself on the Tropes" arrow placement="right">
                  <Tab label="Tropes" component={Link} to="/Tropes" />
                </Tooltip>

              </Tabs>
            <Switch>
              

              <Route path="/Shema" render={() => <div> <Shema/> </div>} />
              <Route path="/Lectures" render={() => <div> <Slideshow/> </div>} />
              <Route path="/Tropes" render={() => <div> <Ropes/>  </div>} />

              {/* <Route path="/" render={() => <div> <MainScreen/> </div>} /> */}
              <Route path="/" render={() => <div> <Master/> </div>} />

            </Switch>
          </Fragment>
        )}
      />
          <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Copyright © 2020 Year13 Productions. All Rights Reserved.
    Built by Effie Landau. No recordings or lectures may be shared without my written consent.</h6>
    </div>
    
  </BrowserRouter>
  

  );
}
