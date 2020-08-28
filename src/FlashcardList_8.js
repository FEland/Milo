import React from 'react'
import Flashcard from "./Flashcard_8";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Samples} from './Tropes3';
import Switch from '@material-ui/core/Switch';
import open from "./sounds/ui_lock.wav";
import close from "./sounds/ui_unlock.wav";
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import {  blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

// import Slider from "@material-ui/core/Slider";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    grid: {
      width: 500,
      height: 450,
      direction: "row",
      justify: "center",
      alignItems: "center",

    },
    // demo: {
    //   width: 100,
    // }
  }));

//   function prePopulateItems(tropes){
//     let items = new Map();
//     tropes.forEach(element => {
//       items.set(element.id, element);
//     });
//     return items;
//   }

  let songList = Samples;

export default function FlashcardList( { callBack1} ) {


  const [flip, setFlip] = React.useState(false);

  const openAudio = new Audio(open);
  const closeAudio = new Audio(close);

  const playSound = audioFile => {
    audioFile.play();
  };


  const handleChange = (event) => {

    if (event.target.flip) {
      playSound(closeAudio);  
    } else {
      playSound(openAudio);
    }

    setFlip(!flip);
    // setState({ ...state, [event.target.name]: event.target.checked });
    var arrayLength = songList.length;
    for (var i = 0; i < arrayLength; i++) {
        songList[i].checked ^= true;
    }
    callBack1(songList);
  };

  const BlueSwitch = withStyles({
    switchBase: {
      color: 'white',
      '&$checked': {color: blue[500],},
      '&$checked + $track': {backgroundColor: blue[600],},
    }, checked: {},track: {},
  })(Switch);
  

  const callBack2 = (val) => {
    
    songList[val-1].checked ^= true;

    callBack1(songList);

  };
  //TODO Volume
    let volume = .5; //delete me later and uncomment below
  // const [volume, setVolume] = React.useState(.5);
//   const handleVolumeChange = (event, newValue) => {
//     setVolume(newValue);
//     // console.log("vol in list is ", volume);
// };

    const classes = useStyles();
    

    return (

        
    <div>


         <div className={classes.root}>
        {/* TODO volume control */}
         {/* <Grid container spacing={2} 
                justify="center"
                  alignItems="baseline"> 
         <Grid item xs={2} >

            <Switch
            checked={flip}
            onChange={handleChange}
            name="toggle"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
                  </Grid> 
                  <Grid item xs={2} >

                  <Slider  volume={volume} onChange={handleVolumeChange} 
                    defaultValue={.5} step={.1} min={0} max={1} />
          </Grid>      
          </Grid> */}

      <Tooltip title="Select Tropes to quiz yourself on" arrow placement="right">
            <BlueSwitch
            checked={flip}
            onChange={handleChange}
            name="toggle"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Tooltip>



      {/* style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} > */}
      <Grid container spacing={2} direction='row-reverse' > 
      {songList.map(flash => {
                  return (
                    // <Hidden smUp>
                    <>
                    <Hidden smDown>

                    <Grid item xs={3} >
                      
                      <Flashcard flashcard = {flash} key = {flash.id} callBack2={callBack2} flip={flip} volume={volume}> </Flashcard>
                    </Grid>
                  </Hidden>
                  <Hidden mdUp>

                  <Grid item xs={4} >
                    
                    <Flashcard flashcard = {flash} key = {flash.id} callBack2={callBack2} flip={flip} volume={volume}> </Flashcard>
                  </Grid>
                </Hidden>
                  </>
                  )
        })}
        
      </Grid>

    </div>
    </div>


    )
}
