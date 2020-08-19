import React from 'react'
import Flashcard from "./Flashcard_7";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Samples} from './Tropes3';
import Switch from '@material-ui/core/Switch';
import open from "./sounds/ui_lock.wav";
import close from "./sounds/ui_unlock.wav";

// import Slider from "@material-ui/core/Slider";
// import VolumeDown from '@material-ui/icons/VolumeDown';
// import VolumeUp from '@material-ui/icons/VolumeUp';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Paper from '@material-ui/core/Paper';

import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      // '& > * + *': {
      //   margin: theme.spacing(2),
      // },
      // flexDirection: 'reverse',
      // flexWrap: 'reverse'
      // flexDirection: 'column-reverse'
    },
    grid: {
      width: 500,
      height: 450,
      direction: "row",
      justify: "center",
      alignItems: "center",

    },
    input: {
        width: 42,
        color: 'primary'
      },
  }));

  
//   function prePopulateItems(tropes){
//     let items = new Map();
//     tropes.forEach(element => {
//       items.set(element.id, element);
//     });
//     return items;
//   }

  // let songList = new Map();
  // Samples.forEach(element => {
  //   songList.set(element.id, element);
  // });
//   let songList = prePopulateItems(Samples);
  let songList = Samples;

// export default function FlashcardList( { flashcards, callBack1} ) {
export default function FlashcardList( { callBack1} ) {

  // let songList = [...flashcards];
  // let songList = cloneDeep(flashcards);
  // let songList = new Map();


    const [value, setValue] = React.useState(50);

    const [flip, setFlip] = React.useState(false);
    const [volume, setVolume] = React.useState(.5);
  
    const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setVolume(value/100);

    };

    const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    setVolume(value/100);

    };

    const handleBlur = () => {
    if (value < 0) {
        setValue(0);
    } else if (value > 100) {
        setValue(100);
    }
    };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    audio.volume = newValue;

    console.log("vol in list is ", volume);
    // document.getElementById(id).volume = volume;
};

const [anchorEl, setAnchorEl] = React.useState(null);
const [load, setLoading] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  var audio = new Audio();
  

  // audio.addEventListener("progress", function() {
  //   //grabbing the file
  //   setLoading(true);
  // });

  // audio.addEventListener("loadeddata", function() {
  //   //audio is ready to play
  //   setLoading(true);
  // });

  audio.addEventListener('playing', function () {
    setLoading(false);
}, false);

// window.addEventListener("load", initAudioPlayer);

  const playSound = (song) => {
        // new Audio(song).play();
        setLoading(true);
        audio.src = song;
        audio.preload = "metadata";
        audio.playbackRate = 1;
        audio.volume = volume;
        audio.controls = true;
        audio.play();

    };
  


const callBack3 = (val) => {
    console.log("val", val);
   playSound(val);
}

//   const openAudio = new Audio(open);
//   const closeAudio = new Audio(close);

//   const playSound = audioFile => {
//     audioFile.play();
//   };


  const handleChange = (event) => {

    if (event.target.flip) {
      playSound(close);  
    } else {
      playSound(open);
    }

    setFlip(!flip);
    // setState({ ...state, [event.target.name]: event.target.checked });
    var arrayLength = songList.length;
    for (var i = 0; i < arrayLength; i++) {
        songList[i].checked ^= true;
    }
    callBack1(songList);
    // render(FlashcardList(callBack1));
  };

  

  const callBack2 = (val) => {
    
    songList[val-1].checked ^= true;

    callBack1(songList);

  };



    const classes = useStyles();
    

    return (

        
    <div>
    

         <div className={classes.root}>

         <Grid container direction='row' spacing = {3} alignItems="center" justify="center"> 
            <Grid item  >
                <Switch
                checked={flip}
                onChange={handleChange}
                name="toggle"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            </Grid>

<IconButton  color="primary" onClick={handleClick}>
  <VolumeUp />
</IconButton>
{/* <Paper > */}
<Box position="relative" display="inline-flex">

{load ? <CircularProgress color="secondary" /> : ""}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'center', horizontal: 'right', }}
        transformOrigin={{ vertical: 'center', horizontal: 'center', }}
      >

       {/* <Button color="primary"> */}
        {/* <Grid container spacing={6} alignItems="center"> */}
                {/* <Grid item>
                <p  color="secondary" onClick={handleClick}>
                    <VolumeUp />
                </p>
                </Grid> */}
                {/* <Grid item alignItems="center"> */}
                <Slider id="demo"
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            color="secondary"
                            defaultValue={50}
                            step={10} min={0} max={100} 
                            valueLabelDisplay="auto" />
                {/* </Grid> */}
                {/* <Grid item>
                <Input
                    className={classes.input}
                    value={value}
                    margin="dense"
                    color="secondary"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{step: 10, min: 0, max: 100,
                    type: 'number', color: "secondary"
                    }}
                />

                </Grid> */}
                {/* </Grid> */}

        {/* </Button> */}
      </Popover>
      </Box>
      {/* </Paper> */}

      </Grid>

        

                    <br/>
                    <br/>
                    <br/>


                        {/* <Grid item>
                        <VolumeDown />
                        </Grid>
                        <Grid item xs={2}>
                        <Slider id="demo"
                            volume={volume} 
                            onChange={handleVolumeChange} 
                            defaultValue={.5}
                            step={.1} min={0} max={1} 
                            valueLabelDisplay="auto" />
                        </Grid>
                        <Grid item>
                        <VolumeUp />
                        </Grid> */}
        {/* </Grid> */}

      {/* style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} > */}
      <Grid container spacing={3} direction='row-reverse' > 
      {songList.map(flash => {
                  return (
                  <Grid item xs={3} >
                    
                    <Flashcard flashcard = {flash} key = {flash.id} callBack2={callBack2} callBack3={callBack3} flip={flip}> </Flashcard>
                    {/* <Flashcard flashcard = {flashcard} key = {flashcard.id}> </Flashcard> */}
                  </Grid>
                  )
        })}
        
      </Grid>

    </div>
    </div>


    )
}
