import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import {Samples} from './Tropes3';
import Switch from '@material-ui/core/Switch';
import open from "./sounds/ui_lock.wav";
import close from "./sounds/ui_unlock.wav";

import Slider from "@material-ui/core/Slider";
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';

import Player from './Player_uno';
// import ColorModal from './ColorModal';
// import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      color: 'green',
    },
    grid: {
      width: 500,
      height: 450,
      direction: "row",
      justify: "center",
      alignItems: "center",

    },
    paper: {
    padding: theme.spacing(1),
    border: '8px double',
    color: 'white',
    backgroundColor: 'brown',
    },
  }));

 

  let songList = Samples;

export default function AllTropesBox( ) {


    const [state, setState] = React.useState({
        // flip: false,
        // volume: 0.5,
        checked: false,
        // color: '#b7bfbe'
    });
        //TODO
        // const [color, setColor] = React.useState('#b7bfbe');
        // const callBack = (...val) => {
        //     setColor(val);
        //   }


//   const [flip, setFlip] = React.useState(false);
  const [volume, setVolume] = React.useState(.5);
  var audio = new Audio();


    const classes = useStyles();
    
    const playSound = (song) => {
        // new Audio(song).play();
        console.log(volume);
        audio.src = song;
        audio.preload = "metadata";
        audio.playbackRate = 1;
        audio.volume = volume;
        audio.controls = true;
        audio.play();

      };
    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
        // setState({[state.volume]: newValue });

        audio.volume = newValue;
        // document.getElementById(id).volume = volume;
    };

    const handleChange = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });
        // setFlip(!flip);
        // setState(!state.flip);
        // setState({ ...state, [state.flip]: !state.flip });


        if (event.target.flip) {
            playSound(close);  
        } else {
            playSound(open);
        }
    };

    // const player = document.getElementById('player');

    // const handleSuccess = function(stream) {
    //     if (window.URL) {
    //     player.srcObject = stream;
    //     } else {
    //     player.src = stream;
    //     }
    // };

    // navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    //     .then(handleSuccess);


    return (
<div>
        
        {/* <audio id="player" controls></audio> */}

         <div className={classes.root}>
            <Paper className={classes.paper} >

            <Grid container spacing={2} > 
            
                <Grid item xs={2}>
                <Player icon={<PlayCircleFilled/>} label = " Play All" title = "Tropes / Ta'amei Mikrah" song = './sounds/allTropeSongs.m4a' />

                     <Grid container direction='row' spacing={12}>
                        <Grid item>
                        <VolumeDown />
                        </Grid>
                        <Grid item xs={4}>
                        <Slider id="demo"
                            volume={volume} 
                            onChange={handleVolumeChange} 
                            defaultValue={.5}
                            step={.1} min={0} max={1} 
                            // valueLabelDisplay="auto" 
                            />
                        </Grid>
                        <Grid item>
                        <VolumeUp />
                        </Grid>
                    </Grid>

                    <Grid container direction='row' spacing={12}>
                        <Grid item>
                            {/* TODO see tropes */}
                            {/* <Checkbox checked={state.checked} onChange={handleChange} 
                                        color='secondary' name="checked" 
                                        inputProps={{ 'position' : 'right' }}
                            /> */}
                            <Tooltip title="Follow in Transliteration" arrow placement="right">
                                <Switch
                                    checked={state.checked}
                                    onChange={handleChange}
                                    name="checked"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            {/* TODO COLOR */}
                            {/* <ColorModal color = {color} callBack = {callBack} /> */}
                        </Grid>
                    </Grid>

                    
                    {/* <Switch
                    checked={flip}
                    onChange={handleChange}
                    name="toggle"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    /> */}

                </Grid>
                <Grid item xs>
                    </Grid>
            <Grid item xs={9}>


            <Grid container direction='row-reverse'  > 
                

            {/* style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} > */}
            <Tooltip title="Click the words to hear indivual recordings 
            or listen to all of them by pressing the button on the far left" arrow placement="right">
                <div style={{color:'blue'}}> &lt;&lt;&lt; </div>
            </Tooltip>
                    {songList.map(flash => {
                                return (
                                    <fl onClick = {() => {playSound(flash.sound)}}>
                                    {/* TODO COLOR */}
                                        {/* {state.checked ? < div style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large', 'color': color}}>{flash.heb} {'\u00A0'}</div> :  <>{flash.eng} {'\u00A0'}</> } */}
                                        {!state.checked ? <>{flash.heb} {'\u00A0'}</> :  <>{flash.eng} {'\u00A0'}</> }
                                    </fl>
                                )
                        })}
                        
                </Grid>
            
                
            </Grid>

        </Grid>


        </Paper>
            
        </div>

        </div>

    )
}
