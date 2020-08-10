import React from 'react';
import Player from './Player'
import Player2 from './Player2'
import Player3 from './Player3'
import {Shemas} from './Effie';
import Sophie from './Sophie';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export default function Shema() {

  const [state, setState] = React.useState({
    toggle: false,
    toggleTranslation: false,
    toggleTrope: false
  });

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
      <Switch
        checked={state.toggle}
        onChange={handleChange}
        name="toggle"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

        <PurpleSwitch
                checked={state.toggleTrope}
                onChange={handleChange}
                name="toggleTrope"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />


      <Switch
        checked={state.toggleTranslation}
        onChange={handleChange}
        color="primary"
        name="toggleTranslation"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
{!state.toggleTranslation ? 
      <quiz style= { !state.toggle ? { 'font-family': 'Times New Roman', 'font-size': 'x-large'} : { 'font-family': 'ShlomosemiStam' }} >
        {!state.toggleTrope ? <Sophie p = {Shemas[0]}/> : <Sophie p = {Shemas[1]}/> }
      </quiz>:
      <quiz style= { { 'font-family': 'Times New Roman'} } >

      {/* Hear, O Israel! The LORD is our God, the LORD is One.<br/>
        <i>(Blessed be the name of the glory of His kingdom forever and ever).</i><br/>
      You shall love the LORD your God with all your heart, with all your soul, and with all your might. 
      And these words which I command you today shall be upon your heart. 
      You shall teach them [deeply] to your children, 
      and you shall speak of them when you sit in your house and when you walk on the road, when you lie down and when you rise. 
      You shall bind them as a sign upon your hand, and they shall be for a reminder between your eyes [Tefillin]. 
      And you shall write them upon the doorposts of your house and upon your gates [Mezuzot]. */}
      </quiz>
}
{!state.toggleTranslation ? 
      <quiz style= { !state.toggle ? { 'font-family': 'Times New Roman', 'font-size': 'x-large'} : { 'font-family': 'ShlomosemiStam' }} >
        {!state.toggleTrope ? <Sophie p = {Shemas[2]}/> : <Sophie p = {Shemas[3]}/> }
      </quiz> :

      <quiz style= { { 'font-family': 'Times New Roman'} } >

      {/* And it will be, if you will diligently obey My commandments which I instruct you this day, 
      to love the Lord your God and to serve Him with all your heart and with all your soul, 
      I will give rain for your land at the proper time, the early rain and the late rain, 
      and you will gather in your grain, your wine and your oil. 
      And I will give grass in your fields for your cattle, and you will eat and be sated. 
      Take care lest your heart be lured away, and you turn astray and worship alien gods and bow down to them. 
      For then the Lord's wrath will flare up against you, and He will close the heavens 
      so that there will be no rain and the earth will not yield its produce, 
      and you will swiftly perish from the good land which the Lord gives you. 
      Therefore, place these words of Mine upon your heart and upon your soul,
       and bind them for a sign on your hand, and they shall be for a reminder between your eyes. 
       You shall teach them to your children, to speak of them when you sit in your house and when you walk on the road, 
       when you lie down and when you rise. 
       And you shall inscribe them on the doorposts of your house and on your gates -
       so that your days and the days of your children may be prolonged 
       on the land which the Lord swore to your fathers to give to them for as long as the heavens are above the earth. */}

      </quiz>
}
{!state.toggleTranslation ? 
      <quiz style= { !state.toggle ? { 'font-family': 'Times New Roman', 'font-size': 'x-large'} : { 'font-family': 'ShlomosemiStam' }} >
          {!state.toggleTrope ? <Sophie p = {Shemas[4]}/> : <Sophie p = {Shemas[6]}/> }
      </quiz>:
  <quiz style= { { 'font-family': 'Times New Roman'} } >

  {/* The Lord spoke to Moses, saying: Speak to the children of Israel
   and tell them to make for themselves fringes on the corners of their garments throughout their generations, 
   and to attach a thread of blue on the fringe of each corner. They shall be to you as tzizit.
   And you shall look upon them and remember all the commandments of the Lord and fulfill them, 
   and you will not follow after your heart and after your eyes by which you go astray - 
   so that you may remember and fulfill all My commandments and be holy to your God. 
   I am the Lord your God who brought you out of the land of Egypt to be your God; 
   I, the Lord, am your God. True. */}
  
  </quiz>
}
<img src="./images/AlephBetBanner.png" alt="icon" align="center" loading="lazy"  width="100%" />

    </div>

  );



}
