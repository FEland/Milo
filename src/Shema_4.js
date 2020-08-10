import React from 'react';
import Player from './Player'
import Player2 from './Player2'
import Player3 from './Player3'
import {Shemas} from './Effie';
import Sophie, {Batsheva} from './Sophie';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';

export default function Shema() {

  const [state, setState] = React.useState({
    toggle: false,
    toggleTranslation: false,
    toggleTrope: false,
    checked: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

//   const [checked, setChecked] = React.useState(true);

//   const handleCheck = (event) => {
//     setChecked(event.target.checked);
//   };
  
  const PurpleSwitch = withStyles({
    switchBase: {
      color: 'white',
      '&$checked': {
        color: purple[500],
      },
      '&$checked + $track': {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);


  // console.log(b);
  return (
    
    <div >

       <div style={{ color: 'white' }}> 
          <h1>Practice the Shema!</h1>
        </div>

        <Grid container spacing={2} justify="center" alignItems="center"> 
            <Grid item  > <Player /> </Grid>
            <Grid item  > <Player2 /> </Grid>
            <Grid item  > <Player3 /> </Grid>
        </Grid>

        <div>
            <Switch checked={state.toggle} onChange={handleChange}
                name="toggle" inputProps={{ 'aria-label': 'secondary checkbox' }}
            />

            <PurpleSwitch checked={state.toggleTrope} onChange={handleChange}
                name="toggleTrope" inputProps={{ 'aria-label': 'primary checkbox' }}
            />

            <Switch checked={state.toggleTranslation} onChange={handleChange}
                color="primary" name="toggleTranslation"inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox checked={state.checked} onChange={handleChange} color="primary" name="checked" inputProps={{ 'position' : 'right' }}/>

        </div>

    {/* 1st Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}> <Sophie p = {Shemas[0]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam' }}> <Sophie p = {Shemas[2]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}>
                {!state.checked ? <Sophie p = {Shemas[1]}/> :  <Batsheva p = {Shemas[1]} />  }
            </quiz>
        :
        <quiz> {Shemas[3]}</quiz>
    }
    
    {/* 2nd Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}> <Sophie p = {Shemas[4]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam' }}> <Sophie p = {Shemas[6]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}>
                {!state.checked ? <Sophie p = {Shemas[5]}/> :  <Batsheva p = {Shemas[5]} />  }
            </quiz>
        :
        <quiz> {Shemas[7]}</quiz>
    }
    {/* 3rd Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}> <Sophie p = {Shemas[8]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam' }}> <Sophie p = {Shemas[10]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}>    
                {!state.checked ? <Sophie p = {Shemas[9]}/> :  <Batsheva p = {Shemas[9]} />  }
            </quiz>
        :
        <quiz> {Shemas[11]}</quiz>
    }








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
