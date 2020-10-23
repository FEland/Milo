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
import Birkat from "./Birkat";

// import Login from "./Login";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import MenuBar from './MenuBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import FolderIcon from '@material-ui/icons/Folder';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

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
  },
  nav: {
    backgroundColor: 'brown',
  }
  
}));

export default function ChromeSite(user) {
  
  // function detectDevice(){
  //   let detectObj = {
  //     device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
  //     orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
  //   }
  //   return detectObj
  // }


  function detectDevice(){
    let detectObj = {
      // account: user,
      device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
      orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape',
      browser: navigator.vendor.includes('Apple')? 'safari' : 'chrome',
    }
    return detectObj
  }

  function makeResp(msg) {
    var body = {"message":  msg + ", " + detectDevice().device + " , " +  detectDevice().orientation + " , " +  detectDevice().browser +  ", " + new Date() }

    // var body = {"message": detectDevice.account + ", " + msg + ", " + detectDevice().device + " , " +  detectDevice().orientation + " , " +  detectDevice().browser +  ", " + new Date() }
    var headers = new Headers()
    headers.append("Content-Type", "application/json")
    var options = {method: "POST", headers, mode: "cors", body: JSON.stringify(body),}
    return options;
  }

  const fetchData = async (msg) => {
      try { await fetch("https://76103417c60b0ff306268dcb81ecf967.m.pipedream.net", makeResp(msg));} 
      catch(err) {// console.log('failed webhook')
      }
  };

  var info1 = 0;

  function doIt(downloadedFile) {
    fetch('https://ipapi.co/json/')
    .then( res => res.json())
    .then(response => {
        info1 = JSON.stringify(response);
        fetchData(downloadedFile + ", " + info1 );
      })
    .catch((data, status) => {
        console.log('Request failed');
    })
  }

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    doIt("InAppBar chose " + newValue)
    setValue(newValue);
  };

  const classes = useStyles();

    return (
      <ThemeProvider theme={theme}>

      <HashRouter>
      <div className={classes.root}>
      {/* <Countdown date={'2020-09-05T09:00:00'} text='Ki Tavo Bar Mitzva Countdown'  /> */}
      
        <Route
          path="/"
          render={({ location }) => (
            <Fragment variant="dense" >
                <div>
                {detectDevice().device === 'computer' ?   
                    <Grid container spacing={3}> 
                      <Grid item xs={2} >
                        <div class="topleft">
                        <Link to="/Practice" onClick={() => doIt("pressed PracticePage")}>
                            <img src="./images/barmit.png" alt="icon" loading="lazy" width="50" height='auto'/>
                        </Link>
                        </div>
                      </Grid>

                    {/* <MenuBar /> */}
                    
                    <Grid item xs={8} >
                      <Tabs value={location.pathname} textColor="primary" variant="fullWidth" centered > 
                        <Tooltip title="Practice the Shema" arrow placement="left">
                          <Tab label="Shema" wrapped component={Link} to="/Shema"  onClick={() => doIt("pressed ShemaPage")} />
                        </Tooltip>
                        
                        <Tooltip title="Quiz yourself on the Tropes" arrow placement="center">
                          <Tab label="Tropes" wrapped component={Link} to="/Tropes"  onClick={() => doIt("pressed TropesPage")} />
                        </Tooltip>

                        <Tab label="Lecture Slides" wrapped component={Link} to="/Lectures" onClick={() => doIt("pressed LecturesPage")} />

                        <Tooltip title="Practice the Torah Blessings" arrow placement="right">
                          <Tab label="Torah Blessings" wrapped component={Link} to="/Blessings"  onClick={() => doIt("pressed BlessingsPage")} />
                        </Tooltip>

{/* 
                        <Tooltip title="Quiz yourself on the Fresh" arrow placement="right">
                          <Tab label="Fresh" component={Link} to="/Fresh" />
                        </Tooltip> */}

                      </Tabs>
                    </Grid>

                    <Grid item xs={2} >
                    <div class="topright">
                      <Link to="/"  onClick={() => doIt("pressed MainPage")}>
                        {/* <img src="/Slides3/Cov.jpg" alt="icon" loading="lazy" width="50" height='auto' position="absolute" /> */}
                        <HomeOutlinedIcon style={{background: 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)', width:"50", height:'auto', position:"absolute"}}/>
                      </Link>
                    </div>
                    </Grid>
        
                  </Grid>
                :
                <>{detectDevice().orientation === 'portrait' ? 


                  <Grid item  >
                    <BottomNavigation value={value} onChange={handleChange} className={classes.nav}>
                      <BottomNavigationAction component={Link} to="/Shema" label="Shema" value="Shema" icon={<img src="./images/ShemaPic.png" alt="Shema" loading="lazy" width="40" height='auto'/>} />
                      <BottomNavigationAction component={Link} to="/Lectures" label="Lectures" value="Lectures" icon={<SlideshowIcon />} />
                      <BottomNavigationAction component={Link} to="/Blessings" label="Blessings" value="Blessings" icon={<FavoriteBorderIcon />} />
                      <BottomNavigationAction component={Link} to="/Tropes" label="Tropes" value="Tropes" icon={<MusicNoteIcon />} />
                      <BottomNavigationAction component={Link} to="/" label="Home" value="Home" icon={<img src="./images/barmit.png" alt="icon" loading="lazy" width="40" height='auto'/>} />
                    </BottomNavigation>
                    
                  </Grid>
      
                :
                  <Grid container spacing={3}> 
                  <Grid item xs={2} >
                    <div class="topleft">
                    <Link to="/Practice" onClick={() => doIt("pressed PracticePage")}>
                        <img src="./images/barmit.png" alt="icon" loading="lazy" width="50" height='auto'/>
                    </Link>
                    </div>
                  </Grid>

                {/* <MenuBar /> */}
                
                <Grid item xs={8} >
                  <Tabs value={location.pathname} textColor="primary" variant="fullWidth" centered > 
                    <Tooltip title="Practice the Shema" arrow placement="left">
                      <Tab label="Shema" wrapped component={Link} to="/Shema"  onClick={() => doIt("pressed ShemaPage")} />
                    </Tooltip>

                    <Tooltip title="Quiz yourself on the Tropes" arrow placement="center">
                      <Tab label="Tropes" wrapped component={Link} to="/Tropes"  onClick={() => doIt("pressed TropesPage")} />
                    </Tooltip>

                    <Tab label="Lecture Slides" wrapped component={Link} to="/Lectures" onClick={() => doIt("pressed LecturesPage")} />

                    <Tooltip title="Practice the Torah Blessings" arrow placement="Right">
                      <Tab label="Torah Blessings" wrapped component={Link} to="/Blessings"  onClick={() => doIt("pressed BlessingsPage")} />
                    </Tooltip>

                    {/* <Tooltip title="Quiz yourself on the Fresh" arrow placement="right">
                      <Tab label="Fresh" component={Link} to="/Fresh" />
                    </Tooltip> */}

                  </Tabs>
                </Grid>

                <Grid item xs={2} >
                <div class="topright">
                  <Link to="/"  onClick={() => doIt("pressed MainPage")}>
                    <img src="/Slides3/Cov.jpg" alt="icon" loading="lazy" width="50" height='auto' position="absolute" />
                  
                  </Link>
                </div>
                </Grid>
    
              </Grid>
                }
              </>
              }
                </div>


              <Switch>
                

                <Route path="/Shema" render={() => <div> <Shema/> </div>} />
                <Route path="/Blessings" render={() => <div> <Birkat/> </div>} />
                <Route path="/Lectures" render={() => <div> <Slideshow user={user}/> </div>} />
                <Route path="/Tropes" render={() => <div> <Ropes/>  </div>} />
                <Route path="/Practice" render={() => <div> <Practice/>  </div>} />
                <Route path="/Fresh" render={() => <div> <Fresh/>  </div>} />
                {/* <Route path="/Login" render={() => <div> <Login/>  </div>} /> */}

                {/* <Route path="/" render={() => <div> <MainScreen/> </div>} /> */}
                <Route path="/" render={() => <div> <Master/> </div>} />

              </Switch>
            </Fragment>
          )}
        />
        <br/>
            {/* <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Copyright © 2020 Year13 Productions. All Rights Reserved.
      Built by Effie Landau. No recordings or lectures may be shared without my written consent.</h6>
       */}
              <span style={{'color': 'white'}}>Copyright © 2020 Year13 Productions. All Rights Reserved.
      Built by Effie Landau. No content may be shared without my written consent. </span>
       
      </div>
      
    </HashRouter>
    </ThemeProvider>
    

    );
}
