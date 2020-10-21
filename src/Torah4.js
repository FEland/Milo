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

import AboutMe from './AboutMe';
import Services from './Services';
import Contact from './Contact';
import References from './References';


// import StuTeacher from './StuTeacher';

// import Login from "./Login";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import MenuBar from './MenuBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import FolderIcon from '@material-ui/icons/Folder';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import { Link, Route, Switch, HashRouter } from "react-router-dom";

// import Countdown from './countdown'; // /** This countdown component is from https://medium.com/@kristin_baumann/react-countdown-6455838b6faf */

import { createMuiTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';
import StuTeacher from './StuTeacher';

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

export default function Torah4(props) {
  
  function detectDevice(){
    let detectObj = {
      device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
      orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
    }
    return detectObj
  }

  const [value, setValue] = React.useState(0);
  const [prevValue, setPreValue] = React.useState(0);

  const handleChange = (newValue) => {
      console.log(newValue);
    if (newValue === value){
        resetSlide(false);
        hitNextLink(false);
    }
    else if(newValue > value){
        resetSlide(true);
        resetSpin(true);
        // if (newValue > prevValue){ hitNextLink(true); }
        // else{ hitNextLink(false); }
    }
    else{
        resetSlide(true);
        resetSpin(false);
        // if (newValue > prevValue) { hitNextLink(true); }
        // else{ hitNextLink(false); }
    }
    setPreValue(value);
    setValue(newValue);
    nextLinkClick();

  };
    const [ fade, setFade ] = React.useState(false);
  
    const onMouseEnter = () => {
      setFade(true);
    };
  
    const onMouseLeave = () => {
      setFade(false);
    };
  
    const [TorahState, resetTorah] = React.useState(true)
    const boxClick = (e) => {resetTorah(!TorahState);}

    const [spinState, resetSpin] = React.useState(false)
    const spinClick = (e) => {resetSpin(!spinState)}
    
    // const [RightState, resetRight] = React.useState(false)
    // const RightClick = (e) => {resetRight(!RightState)}

    const [slideState, resetSlide] = React.useState(false)
    const slideClick = (e) => {resetSlide(!slideState)}

    const [nextLinkState, hitNextLink] = React.useState(false)
    const nextLinkClick = (e) => {hitNextLink(!nextLinkState)}

  const classes = useStyles();

    return (

        <div className={classes.root}>
        <div style={{'color': 'white'}}>
        <h1 >Welcome to Harrison's Bar Mitzvah Website! </h1>
    <br/>
    {/* <StuTeacher /> */}
    {/* <div class='openCloseLeft'> */}

    <div class='cylinderLeft' 
        style={{     perspective: '9000px',
            animation: !slideState? 
                                        TorahState ? "rollLeft2 4s linear" : "rollRight2 4s linear" 
                                        : 
                                        nextLinkState? 
                                            spinState? "rollLeftCol1 4s linear" : "rollRightCol1 4s linear" 
                                            : 
                                            spinState? "rollLeftCol2 4s linear" : "rollRightCol2 4s linear"}} 
                onClick={boxClick}>
        <div class="cylinder">
            <div class="cylinder2"></div>
            <div class="cylinder3"></div>
        </div>

    </div>
    <div class='torahBack' style={{animation: !TorahState ? "accordian2 4s linear" : "accordian 4s linear "}}></div>

    <div class='cylinderRight' 
        style={{ animation: !slideState? 
                                        TorahState ? "rollRight2 4s linear" : "rollLeft2 4s linear" 
                                        : 
                                        nextLinkState? 
                                            spinState? "rollRightCol1 4s linear" : "rollLeftCol1 4s linear" 
                                            : 
                                            spinState? "rollRightCol2 4s linear" : "rollLeftCol2 4s linear"}} 
                onClick={boxClick}>
        <div class="cylinder">
            <div class="cylinder2"></div>
            <div class="cylinder3"></div>
        </div>
    </div>

<div class='cylinderLeft' >
    <div id="frame">
        <div class="strip">
            <div class="a"></div>
            <div class="b"></div>
            <div class="c"></div>
            <div class="d"></div>
            <div class="e"></div>
            <div class="f"></div>
            <div class="g"></div>
            <div class="h"></div>
            <div class="i"></div>
            <div class="j"></div>
            <div class="k"></div>
            <div class="l"></div>
            <div class="m"></div>
            <div class="n"></div>
            <div class="o"></div>
            <div class="p"></div>
            <div class="q"></div>
            <div class="r"></div>
            <div class="s"></div>
            <div class="t"></div>
            <div class="u"></div>
            <div class="v"></div>
            <div class="w"></div>
            <div class="x"></div>
        </div>
        {/* <div class="cylinder">
            <div class="cylinder2"></div>
            <div class="cylinder3"></div>
        </div> */}
    </div>
    
</div>

<div class='cylinderRight' >
    <div id="frame">
        <div class="strip">
            <div class="a"></div>
            <div class="b"></div>
            <div class="c"></div>
            <div class="d"></div>
            <div class="e"></div>
            <div class="f"></div>
            <div class="g"></div>
            <div class="h"></div>
            <div class="i"></div>
            <div class="j"></div>
            <div class="k"></div>
            <div class="l"></div>
            <div class="m"></div>
            <div class="n"></div>
            <div class="o"></div>
            <div class="p"></div>
            <div class="q"></div>
            <div class="r"></div>
            <div class="s"></div>
            <div class="t"></div>
            <div class="u"></div>
            <div class="v"></div>
            <div class="w"></div>
            <div class="x"></div>
        </div>
    </div>
</div>

    {/* {!TorahState ?  */}
        <HashRouter>
        <div className={classes.root} style={{ animation: !TorahState ? "rollLeft2 4s linear" : "rollRight2 4s linear"}}>
        {/* <Countdown date={'2020-09-05T09:00:00'} text='Ki Tavo Bar Mitzva Countdown'  /> */}
        
          <Route
            path="/"
            render={({ location }) => (
              <Fragment variant="dense" >

            
            <div class="scrolling-wrapper">
               {/* <div class="card">
                   <h2>
                   Welcome
                   <Link to="/Welcome">
                       <img src="./images/barmit.png" alt="icon" loading="lazy" width="504" height='auto'/>
                   </Link>
                   </h2>
                   <Route path="/Welcome" render={() =>  <div><Welcome/></div>} />
               </div> */}

          {/* {(value !== 2) ? */}
          {/* <div class='openCloseLeft'> */}

               <div class="card" onClick={() => {handleChange(1); setValue(1)}} >
                     {/* About Me */}
                   <a class="first-link">
                   {(value !== 1) ?
                   <Link to="/AboutMe">
                        About Me
               {/* <img src="./images/barmit.png" alt="icon" loading="lazy" width="504" height='auto'/> */}
                   </Link>
                      : ''}
                    <Route path="/AboutMe" render={() =>  <AboutMe/>} />
                    </a> 
                 
               </div>
            {/* </div> */}


               <div class="card" onClick={() => {handleChange(2); setValue(2)}} >
                   <a class="first-link">

                   {/* Services */}
                   {(value !== 2) ?
                   <Link to="/Services">
                       Services
                       {/* <img src="./images/yetiv.png" alt="icon" loading="lazy" width="504" height='auto'/> */}
                   </Link>
                      : ''}
                   <Route path="/Services" render={() =>  <div><Services/></div>} />
                   </a>
               </div>
               <div class="card" onClick={() => {handleChange(3); setValue(3)}} >
                   <a class="first-link">

                   {/* References */}
                   {(value !== 3) ?
                   <Link to="/References">
                        References
                       {/* <img src="./images/kadma.png" alt="icon" loading="lazy" width="504" height='auto'/> */}
                   </Link>
                      : ''}
                  <Route path="/References" render={() =>  <div><References/></div>} />
                   </a>
               </div>
               <div class="card" onClick={() => {handleChange(4); setValue(4)}} >
                   <a class="first-link">

                   {/* Contact */}
                   {(value !== 4) ?
                   <Link to="/Contact">
                        Contact
                       {/* <img src="./images/munach.png" alt="icon" loading="lazy" width="504" height='auto'/> */}
                   </Link>
                   : ''}
                   <Route path="/Contact" render={() =>  <div><Contact/></div>} />
                   </a>
                   {/* <Route path="/StuTeacher" render={() =>  <div><StuTeacher/></div>} /> */}
               </div>


           </div>





  
  
                {/* <Switch>
                  
  
                  <Route path="/Shema" render={() =>  <Shema/>} />
                  <Route path="/Lectures" render={() => <div> <Slideshow/> </div>} />
                  <Route path="/Tropes" render={() => <div> <Ropes/>  </div>} />
                  <Route path="/Practice" render={() => <div> <Practice/>  </div>} />
                  <Route path="/Fresh" render={() => <div> <Fresh/>  </div>} />
                  <Route path="/" render={() => <div> <Master/> </div>} />
  
                </Switch> */}
              </Fragment>
            )}
          />
          <br/>
              <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Copyright © 2020 Year13 Productions. All Rights Reserved.
        Built by Effie Landau. No recordings or lectures may be shared without my written consent.</h6>
        </div>
        
      </HashRouter>
      {/* : <div >HELLO</div> } */}
      </div>
    </div>      

    );
}



// {/* <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Copyright © 2020 Year13 Productions. All Rights Reserved.
// Built by Effie Landau. No recordings or lectures may be shared without my written consent.</h6>
//           <div class="scrolling-wrapper">
//               <div class="card">
//                   <h2>
//                   CardCardCardCardCardCardCardCard
//                   {/* <Link to="/Practice"> */}
//                       <img src="./images/barmit.png" alt="icon" loading="lazy" width="504" height='auto'/>
//                   {/* </Link> */}
//                   </h2>
//               </div>
//               <div class="card">
//                   <h2>
//                   CardCardCardCardCardCardCardCard
//                   {/* <Link to="/Practice"> */}
//                       <img src="./images/barmit.png" alt="icon" loading="lazy" width="504" height='auto'/>
//                   {/* </Link> */}
//                   </h2>
//               </div>
//               <div class="card">
//                   <h2>
//                   CardCardCardCardCardCardCardCard
//                   {/* <Link to="/Practice"> */}
//                       <img src="./images/barmit.png" alt="icon" loading="lazy" width="504" height='auto'/>
//                   {/* </Link> */}
//                   </h2>
//               </div>
//           </div>
//   <br/> */}