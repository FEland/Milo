import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
    // backgroundColor: 'black',
    margin: 'auto',

  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'brown',
    position: 'center',

  },

}));

export default function Login({handleResult, passBackUser, pwd}) {
  const classes = useStyles();


  // // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  // function geo(pos) {
  //   var crd = pos.coords;
  //   console.log( "Lat: " + crd.latitude + " Long: " + crd.longitude + " acrcy: " + crd.accuracy + "meters");

  //   return "Lat: " + crd.latitude + " Long: " + crd.longitude + " acrcy: " + crd.accuracy + "meters";
  // }
  
  // function detectDevice(){
  //   let detectObj = {
  //     device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
  //     orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape',
  //     browser: navigator.vendor.includes('Apple')? 'safari' : 'chrome',
  //     // geoB: navigator.geolocation.getCurrentPosition(geo),
  //   }
  //   return detectObj
  // }

  // const headers = new Headers()
  // headers.append("Content-Type", "application/json")

  // function makeResp(pass) {
  //   var body = {"message": pass + ", " + detectDevice().device + " , " +  detectDevice().orientation + " , " +  detectDevice().browser +  ", " + new Date() }
  //   var options = {
  //     method: "POST",
  //     headers,
  //     mode: "cors",
  //     body: JSON.stringify(body),
  //   }
  //   return options;
  // }

  // const fetchData = async (pass) => {
  //     try {
  //         // const resp = await fetch("https://76103417c60b0ff306268dcb81ecf967.m.pipedream.net", options);
  //         // const resp = await fetch("https://hooks.zapier.com/hooks/catch/8684953/ogsgyo3", options);
  //         // https://docs.google.com/spreadsheets/d/14ZaqW1MGneEsSRnhjyCzioX_iS3mDpRpVtDvtVOh8YQ/edit#gid=0
  //         // https://pipedream.com/@FEland/p_dDCmmK/edit
  //         // alert(resp);

  //         await fetch("https://76103417c60b0ff306268dcb81ecf967.m.pipedream.net", makeResp(pass));

  //         // console.log(resp);
  //     } 
  //     catch(err) {
  //         // console.log('failed webhook')
  //     }
  // };


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
    var body = {"message": msg + ", " + detectDevice().device + " , " +  detectDevice().orientation + " , " +  detectDevice().browser +  ", " + new Date() }
    // var body = {"message": detectDevice.account + ", " + msg + ", " + detectDevice().device + " , " +  detectDevice().orientation + " , " +  detectDevice().browser +  ", " + new Date() }
    var headers = new Headers()
    headers.append("Content-Type", "application/json")
    var options = {method: "POST", headers, mode: "cors", body: JSON.stringify(body),}
    return options;
  }


  var info1 = 0;

  function doIt(pass) {
    fetch('https://ipapi.co/json/')
    .then( res => res.json())
    .then(response => {
        info1 = JSON.stringify(response);
        fetchData(pass + ", " + info1 );
      })
    .catch((data, status) => {
        console.log('Request failed');
    })
  }


  // http://api.ipstack.com/check?access_key=a54742d8790f22ec33f9b49ed225f44f&output=json

  const fetchData = async (msg) => {
      try {
          // const resp = await fetch("https://76103417c60b0ff306268dcb81ecf967.m.pipedream.net", options);
          // const resp = await fetch("https://hooks.zapier.com/hooks/catch/8684953/ogsgyo3", options);
          // https://docs.google.com/spreadsheets/d/14ZaqW1MGneEsSRnhjyCzioX_iS3mDpRpVtDvtVOh8YQ/edit#gid=0
          // https://pipedream.com/@FEland/p_dDCmmK/edit
          // alert(resp);
          // doIt();

          // await fetch("https://76103417c60b0ff306268dcb81ecf967.m.pipedream.net", makeResp(pass + ", " + info1 + ", " + info2));
          await fetch("https://76103417c60b0ff306268dcb81ecf967.m.pipedream.net", makeResp(msg));

          // console.log(resp);
      } 
      catch(err) {
          // console.log('failed webhook')
      }
  };


  const handleChange = (event) => {
    // console.log(event.target.value + ", " + event.target.value.toLowerCase)
    if (pwd.includes(event.target.value)){
        handleResult(true);
        passBackUser(event.target.value);
        // fetchData(event.target.value);
        doIt(event.target.value);

    }
  };

  return (
    // <>
    <ThemeProvider theme={theme}>

    <div className={classes.root}>
        <h1 style={{'color': 'white'}} >Welcome to Harrison's Bar Mitzvah Website! </h1>
        <br/> 
                    {/* <Button  onClick={() => { console.log(navigator) }} > Br </Button>  */}

      <div className={classes.paper}>
          {/* <LockOutlinedIcon /> */}
          <img src="./images/barmit.png" alt="icon" loading="lazy" height='auto'/>

        {/* <img src="./images/ShemaPic.png" alt="Shema" loading="lazy"  height='auto'/> */}
        <Typography component="h1" variant="h5" style={{color: "white"}} >
          Begin your Journey 
        </Typography>
          <TextField
            variant="outlined" color="secondary" margin="normal"
            // fullWidth
            name="password" label="Password"
            type="password"
            // id="password"
            onChange={handleChange} style={{color: "white"}} autoComplete="current-password"
          />
      </div>
       <br/>
       <span style={{'color': 'white'}}>Copyright © 2020 Year13 Productions. All Rights Reserved.
      Built by Effie Landau. No content may be shared without my written consent. </span>
       
      </div>
      
      </ThemeProvider>

  );
}