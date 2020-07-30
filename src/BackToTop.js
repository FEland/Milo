import React, {Fragment} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Tooltip from '@material-ui/core/Tooltip';
import Player from './Player'
import Ropes from './Ropes'
import Master from './Master'
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Countdown from './countdown'; // /** This countdown component is from https://medium.com/@kristin_baumann/react-countdown-6455838b6faf */
import master_tikkun from './tikkun-master4.png'; // Tell webpack this JS file uses this image
import Docus from './Docus';
// import Notes from './Notes';

export default function BackToTop(props) {


  return (

    <BrowserRouter>
    <div className="App">
    <Countdown date={'2020-09-05T09:00:00'} text='Ki Tavo Bar Mitzva Countdown'  />

      <Route
        path="/"
        render={({ location }) => (
          <Fragment variant="dense" >

                <Tabs value={location.pathname} indicatorColor="primary" textColor="primary" centered > 
                
                <Tooltip title="Practice Torah Reading" arrow placement="left">
                  <Tab label="Tikkun" component={Link} to="/Tikkun" />
                </Tooltip>
                <Tab label="Torah & Haftorah Blessings" component={Link} to="/Haftorah" />
                {/* <Tab label="Notes" component={Link} to="/Notes" /> */}
                <Tooltip title="Quiz yourself on the Tropes" arrow placement="right">
                  <Tab label="Tropes" component={Link} to="/Tropes" />
                </Tooltip>
              </Tabs>
            <Switch>
              
              <Route path="/Tikkun" render={() => <div>
                <Player />
                <div class= "master_tikkun">
                  <img src={master_tikkun} alt="master_tikkun" loading="lazy" width="2000" height="1000"/>
                </div>
                </div>} />
              {/* <Route path="/Notes" render={() => <div> <Notes/> </div>} /> */}
              <Route path="/Tropes" render={() => <div> <Ropes/> </div>} />
              <Route path="/Haftorah" render={() => <div> <Docus/>  </div>} />
              <Route path="/" render={() => <div> <Master/> </div>} />
              
            </Switch>
          </Fragment>
        )}
      />
    </div>
  </BrowserRouter>

  );
}
