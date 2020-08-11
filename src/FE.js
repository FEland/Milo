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
import Tooltip from '@material-ui/core/Tooltip';

import FlashcardList from "./FlashcardList_4";
import { makeStyles, createStyles,} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        flexGrow: 1,
    },
    container: {
      padding: "20px",
      textAlign: "center"
    },
  })
);

export default function FE() {

    const classes = useStyles();  
    const [state, setState] = React.useState({toggle: false, toggleTranslation: false, toggleTrope: false, checked: false});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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

  return (
    
    <div >

       <div style={{ color: 'white' }}> 
          <h1>The Shema</h1>
        </div>
    <Grid container spacing={2}> 
        <Grid item xs={12} sm={6}>
        <div className={classes.root} style={{ color: 'white' }}>
            <FlashcardList/>
        </div>
        </Grid>

    <Grid item  xs={12} sm={6}>
        <Grid container spacing={2} justify="center" alignItems="center"> 
            <Grid item  > <Player /> </Grid>
            <Grid item  > <Player2 /> </Grid>
            <Grid item  > <Player3 /> </Grid>
        </Grid>

        <div>
            <Tooltip title="What it looks like in the Torah!" arrow placement="left">
                <PurpleSwitch checked={state.toggle} onChange={handleChange}
                    name="toggle" inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Tooltip>
            <Tooltip title="With Trope / Ta'amim" arrow placement="down">
                <Switch checked={state.toggleTrope} onChange={handleChange}
                    name="toggleTrope" inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Tooltip>
            <Tooltip title="Highlight Trope" arrow placement="down">
                <Checkbox checked={state.checked} onChange={handleChange} color='secondary' name="checked" inputProps={{ 'position' : 'right' }}/>
            </Tooltip>
            <Tooltip title="See English Translation" arrow placement="right">
                <Switch checked={state.toggleTranslation} onChange={handleChange}
                    color="primary" name="toggleTranslation"inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Tooltip>

        </div>

    {/* 1st Paragraph */}
    {!state.toggleTranslation ? 
        !state.toggleTrope ?
            !state.toggle ? <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}> <Sophie p = {Shemas[0]}/> </quiz> : <quiz style = {{ 'font-family': 'ShlomosemiStam' }}> <Sophie p = {Shemas[2]}/> </quiz> 
            : 
            <quiz style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large'}}>
                {state.checked ? <Sophie p = {Shemas[1]}/> :  <Batsheva p = {Shemas[1]} />  }
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
                {state.checked ? <Sophie p = {Shemas[5]}/> :  <Batsheva p = {Shemas[5]} />  }
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
                {state.checked ? <Sophie p = {Shemas[9]}/> :  <Batsheva p = {Shemas[9]} />  }
            </quiz>
        :
        <quiz> {Shemas[11]}</quiz>
    }

    <img src="./images/AlephBetBanner.png" alt="icon" align="center" loading="lazy"  width="100%" />

    <iframe title="u2ube" width="560" height="315" src="https://www.youtube.com/embed/IIwVrHG0Ut4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; full-screen" allowfullscreen="allowfullscreen"></iframe>

    </Grid>
    </Grid>
    </div>

  );



}




