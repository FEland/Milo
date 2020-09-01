import React, {useState} from 'react'
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
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import CircularProgress from '@material-ui/core/CircularProgress';



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

//   function Age()  {
//     const [d, setTimeSoFar] = useState(0);
//     var t = document.getElementById('player');
//     // t.addEventListener( 'timeupdate', function() {
//     //     setTimeSoFar(t.currentTime);
//     //     console.log(d);
//     // });

//     if (t!==null){
//         t.addEventListener( 'timeupdate', function() {
//             setTimeSoFar(t.currentTime);
//             console.log(d);
//         });
//     }
//     return (
//         <div>

//             {d}
//         </div>
//     );
// }

// const Highlite = ({timeSoFar}) => {

//     var w = 0;
//     for (w = 0; w < songList.length; w++){
//         if (timeSoFar >= songList[w].start && timeSoFar < songList[w].end){
//             return (<p>{songList[w].eng}</p>);
//         }
//     }
//     return (<p>f</p>);
// }

export default function AllTropesBox( ) {

    const [trope, setTrope] = useState(0);
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

    const [load, setLoading] = React.useState(false);
  const [volume, setVolume] = React.useState(.5);
  var audio = new Audio();

  const [playing, setPlaying] = React.useState(false);

    audio.addEventListener('playing', function () {
        setLoading(false);
        setPlaying(true);
    }, false);

    audio.addEventListener('ended', function () {
        setPlaying(false);
    }, false);

    const classes = useStyles();
    
    const playSound = (song) => {
        // new Audio(song).play();
        setLoading(true);

        // console.log(volume);
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

        if (event.target.flip) {
            playSound(close);  
        } else {
            playSound(open);
        }
    };

    // const [timeSoFar, setTimeSoFar] = React.useState(0);

    const enableHighlight = (e) => {
        var t = document.getElementById('player');

        t.addEventListener( 'timeupdate', function() {
            // setTimeSoFar(t.currentTime.toFixed(1));
            setPlaying(true);
            // console.log(timeSoFar);
            // var w = 0;
            for (var w = 0; w < songList.length; w++){
                if (t.currentTime >= songList[w].start && t.currentTime < songList[w].end){
                    // return (<p>{songList[w].eng}</p>);
                    setTrope(songList[w].id);
                    // console.log(trope, songList[w].eng);
                    break;
                }
            }
        });
        //Removes "playing" animation and removes highlite
        setPlaying(false);
        setTrope(0);


        // t.addEventListener('playing', function () {
        //     setLoading(false);
        //     setPlaying(true);
        // }, false);
    
        // t.addEventListener('ended', function () {
        //     setPlaying(false);
        // }, false);
    }




    return (        
         <div className={classes.root}>
            <Paper className={classes.paper} >

            <Grid container spacing={2} > 
            
                <Grid item xs={2}>
                    <div  onClick={() => { enableHighlight(true)}}> 
                        <Player icon={<PlayCircleFilled/>} label = " Play All" title = "Tropes / Ta'amei Mikrah" song = './sounds/allTropeSongs.m4a'/>
                    </div>
                <Hidden smDown>

                     <Grid container direction='row' spacing={12}>
                        <Grid item>
                        <VolumeDown />
                        </Grid>

                        <Grid item xs={4}>
                        <Slider 
                            volume={volume} onChange={handleVolumeChange} 
                            defaultValue={.5} step={.1} min={0} max={1} 
                            // valueLabelDisplay="auto" 
                            />
                        </Grid>
                        <Grid item>
                        <VolumeUp />
                        </Grid>
                    </Grid>
                </Hidden>

                    <Grid container direction='row' spacing={12}>
                        <Grid item>
                            {/* TODO see tropes */}
                            {/* <Checkbox checked={state.checked} onChange={handleChange} 
                                        color='secondary' name="checked" 
                                        inputProps={{ 'position' : 'right' }}
                            /> */}
                            <Tooltip title="Toggle the Shapes" arrow placement="right">
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
                    
                    {load && <Grid item> <CircularProgress color="primary"  className={classes.progress} /> </Grid> }

                    {playing &&  
                        <Grid item>
                        <svg id="equalizer" width="40px" height="28px" viewBox="0 0 10 7">
                        <g fill="#000000">
                            <rect id="bar1" transform="translate(0.5, 6.0) rotate(180.0) translate(-0.5, -6.0) " x="0" y="5" width="1" height="2" />
                            <rect id="bar2" transform="translate(3.5, 4.5) rotate(180.0) translate(-3.5, -4.5) " x="3" y="2" width="1" height="5" />
                            <rect id="bar3" transform="translate(6.5, 3.5) rotate(180.0) translate(-6.5, -3.5) " x="6" y="0" width="1" height="7" />
                            <rect id="bar4" transform="translate(9.5, 5.0) rotate(180.0) translate(-9.5, -5.0) " x="9" y="3" width="1" height="4" />
                        </g>
                        </svg> </Grid> }

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
            or listen to all of them by pressing the button on the far left" arrow placement="top">
                <div style={{color:'#1c313a', 'font-size':'2vw'}}> &lt;&lt;&lt; </div>

            </Tooltip>

                    {songList.map(flash => {
                                return (
                                    <fl style={{ 'font-size':'2vw', 'line-height': '1.6'}} onClick = {() => {playSound(flash.sound)}}>
                                    

                                    {/* TODO COLOR */}
                                        {/* {state.checked ? < div style = {{ 'font-family': 'Times New Roman', 'font-size': 'x-large', 'color': color}}>{flash.heb} {'\u00A0'}</div> :  <>{flash.eng} {'\u00A0'}</> } */}
                                        {/* {!state.checked ? <>{flash.heb} {'\u00A0'}</> :  <>{flash.eng} {'\u00A0'}</> } */}
                                        {!state.checked ? 
                                        <>
                                        <Hidden smDown>
                                            <span style={(trope === flash.id && playing) ?  {'opacity' : '.5'} : {'':''}} >{flash.heb} {'\u00A0'}</span > 
                                        </Hidden>
                                        <Hidden mdUp>
                                            <span style={(trope === flash.id && playing) ?  {'opacity' : '.5', 'fontSize' : '3vw'} : {'fontSize' : '3vw'}} >{flash.heb} {'\u00A0'}</span > 
                                        </Hidden>
                                        </>: 
                                        <>
                                        <Hidden smDown>
                                            {(trope === flash.id) ? 
                                            <img src={flash.image} alt="trope" loading="lazy" width="70" style={ {'opacity' : '.8'} } onMouseOver = {() => {setTrope(flash.id)}} onMouseOut = {() => {setTrope(-1)}}/> : 
                                            <img src={flash.image} alt="trope" loading="lazy" width="70" style={ {'opacity' : '1'} } onMouseOver = {() => {setTrope(flash.id)}} onMouseOut = {() => {setTrope(-1)}}/>
                                            }                                         </Hidden>
                                         <Hidden mdUp>
                                            {(trope === flash.id) ? 
                                            <img src={flash.image} alt="trope" loading="lazy" width="40" style={ {'opacity' : '.8'} } onMouseOver = {() => {setTrope(flash.id)}} onMouseOut = {() => {setTrope(-1)}}/> : 
                                            <img src={flash.image} alt="trope" loading="lazy" width="40" style={ {'opacity' : '1'} } onMouseOver = {() => {setTrope(flash.id)}} onMouseOut = {() => {setTrope(-1)}}/>
                                            }
                                         </Hidden>
                                        </>}

                                        
                                    </fl>
                                )
                        })}
                        
            </Grid>
                
            </Grid>
            <Divider orientation='vertical' flexItem/>

        </Grid>


        </Paper>
            
        </div>


    )
}
