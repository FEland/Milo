import React, {useState} from 'react'
import Player from './Player_8';
import {Songs, Shemas} from './Effie';
import Sophie, {Batsheva} from './Sophie';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { red, blue, purple } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
// import ReactColorPicker from '@super-effective/react-color-picker'; //https://github.com/super-effective/react-color-picker
import ColorModal from './ColorModal';
import open from "./sounds/ui_lock.wav";
import close from "./sounds/ui_unlock.wav";
import Hidden from '@material-ui/core/Hidden';


export default function Shema() {

  const [state, setState] = React.useState({
    toggle: false,
    toggleTranslation: false,
    toggleTrope: false,
    checked: false
  });

  const openAudio = new Audio(open);
  const closeAudio = new Audio(close);

  const playSound = audioFile => {
    audioFile.play();
  };


  const handleChange = (event) => {


    if (event.target.checked) {
        playSound(closeAudio);  
      } else {
        playSound(openAudio);
      }  

    if (event.target.name === 'checked') {
        setState(state.toggleTrope = true );
        setState(state.toggle = false );
        setState(state.toggleTranslation = false );
    }
    if (event.target.name === 'toggleTrope') {
        setState(state.checked = false );
        setState(state.toggle = false );
        setState(state.toggleTranslation = false );
    }
    if (event.target.name === 'toggleTranslation') {
        setState(state.toggle = false );
        setState(state.toggleTrope = false );
        setState(state.checked = false );
    }
    if (event.target.name === 'toggle') {
        setState(state.toggleTranslation = false );
        setState(state.toggleTrope = false );
        setState(state.checked = false );
    }

    setState({ ...state, [event.target.name]: event.target.checked });

  };


//   const [checked, setChecked] = React.useState(true);

//   const handleCheck = (event) => {
//     setChecked(event.target.checked);
//   };
  
  const PurpleSwitch = withStyles({
    switchBase: {
      color: 'white',
      '&$checked': {color: purple[500],},
      '&$checked + $track': {backgroundColor: purple[600],},
    }, checked: {},track: {},
  })(Switch);

  const RedSwitch = withStyles({
    switchBase: {
      color: 'white',
      '&$checked': {color: red[500],},
      '&$checked + $track': {backgroundColor: red[600],},
    }, checked: {},track: {},
  })(Switch);

  const BlueSwitch = withStyles({
    switchBase: {
      color: 'white',
      '&$checked': {color: blue[500],},
      '&$checked + $track': {backgroundColor: blue[600],},
    }, checked: {},track: {},
  })(Switch);

  const [color, setColor] = useState('#b7bfbe');
//   let color = 'white';

  const callBack = (...val) => {
    setColor(val);
  }
  // console.log(b);
  return (
    
    <div >

       <div style={{ color: 'white' }}> 
        {/* <div style={{ color: color }}>  */}
          <h1>Practice the Shema!</h1>
        </div>

        <Grid container spacing={2} justify="center" alignItems="center"> 
            <Grid item > <Player {...Songs[0]} /> </Grid>
            <Grid item > <Player {...Songs[1]} /> </Grid>
            <Grid item > <Player {...Songs[2]} /> </Grid>
        </Grid>

        <div>
            <Tooltip title="What it looks like in the Torah!" arrow placement="left">
                <PurpleSwitch checked={state.toggle} onChange={handleChange}
                    name="toggle" inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Tooltip>
            <Tooltip title="With Trope / Ta'amim" arrow placement="down">
                <BlueSwitch checked={state.toggleTrope} onChange={handleChange}
                    name="toggleTrope" inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Tooltip>
            <Tooltip title="Highlight Trope" arrow placement="down">
                <Checkbox checked={state.checked} onChange={handleChange} color='primary' name="checked" inputProps={{ 'position' : 'right' }}/>
            </Tooltip>
            <Tooltip title="Adjust Text Color" arrow placement="down">
                 <ColorModal color = {color} callBack = {callBack} />
            </Tooltip> 
            <Tooltip title="See English Translation" arrow placement="right">
                <RedSwitch checked={state.toggleTranslation} onChange={handleChange}
                    color="primary" name="toggleTranslation"inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Tooltip>
        </div>

    <Hidden smDown>

    {/* 1st Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large', 'color': color}}> <Sophie p = {Shemas[0]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam', 'color': color }}> <Sophie p = {Shemas[2]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large', 'color': color}}>
                {state.checked ? <Sophie p = {Shemas[1]}/> :  <Batsheva p = {Shemas[1]} />  }
            </quiz>
        :
        <quiz style = {{ 'color': color}}> {Shemas[3]}</quiz>
    }
    
    {/* 2nd Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large', 'color': color}}> <Sophie p = {Shemas[4]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam', 'color': color }}> <Sophie p = {Shemas[6]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large', 'color': color}}>
                {state.checked ? <Sophie p = {Shemas[5]}/> :  <Batsheva p = {Shemas[5]} />  }
            </quiz>
        :
        <quiz style = {{ 'color': color}}> {Shemas[7]}</quiz>
    }
    {/* 3rd Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large', 'color': color}}> <Sophie p = {Shemas[8]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam', 'color': color }}> <Sophie p = {Shemas[10]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large', 'color': color}}>    
                {state.checked ? <Sophie p = {Shemas[9]}/> :  <Batsheva p = {Shemas[9]} />  }
            </quiz>
        :
        <quiz style = {{ 'color': color}}> {Shemas[11]}</quiz>
        
    }
    </Hidden>
    <Hidden mdUp>

    {/* 1st Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'large', 'color': color}}> <Sophie p = {Shemas[0]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam', 'color': color }}> <Sophie p = {Shemas[2]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'large', 'color': color}}>
                {state.checked ? <Sophie p = {Shemas[1]}/> :  <Batsheva p = {Shemas[1]} />  }
            </quiz>
        :
        <quiz style = {{ 'color': color}}> {Shemas[3]}</quiz>
    }
    
    {/* 2nd Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'large', 'color': color}}> <Sophie p = {Shemas[4]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam', 'color': color }}> <Sophie p = {Shemas[6]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'large', 'color': color}}>
                {state.checked ? <Sophie p = {Shemas[5]}/> :  <Batsheva p = {Shemas[5]} />  }
            </quiz>
        :
        <quiz style = {{ 'color': color}}> {Shemas[7]}</quiz>
    }
    {/* 3rd Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'large', 'color': color}}> <Sophie p = {Shemas[8]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam', 'color': color }}> <Sophie p = {Shemas[10]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'large', 'color': color}}>    
                {state.checked ? <Sophie p = {Shemas[9]}/> :  <Batsheva p = {Shemas[9]} />  }
            </quiz>
        :
        <quiz style = {{ 'color': color}}> {Shemas[11]}</quiz>
        
    }
    </Hidden>









    {/* {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}> <Sophie p = {Shemas[8]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam' }}> <Sophie p = {Shemas[10]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}>
                <Grid container spacing={2} justify="center" alignItems="center"> 
                    <Grid item  >
                        {!state.checked ? <Sophie p = {Shemas[9]}/> :  <Batsheva p = {Shemas[9]} />  }
                    </Grid>
                    <Grid item  >
                        <Checkbox checked={state.checked} onChange={handleChange} color="primary" name="checked" inputProps={{ 'position' : 'right' }}/>
                    </Grid>
                </Grid>
            </quiz>
        :
        <quiz> {Shemas[11]}</quiz>
    } */}


<img src="./images/AlephBetBanner.png" alt="icon" align="center" loading="lazy"  width="100%" />

    </div>

  );



}
