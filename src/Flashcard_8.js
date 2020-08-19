import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Checkbox from '@material-ui/core/Checkbox';

// import Slider from "@material-ui/core/Slider";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // backgroundColor: 'brown',
    color: 'white',

  },
  paper: {
    // padding: theme.spacing(2),
    // padding: '5% 10%',
    padding: '5%',
    // margin: 'auto',
    border: '4px double',
    color: 'white',


    // maxHeight: '%50',
    backgroundColor: 'brown',
  },
  image: {
    // width: 100,
    height: 100,
  },
  img: {
    margin: 'auto',
    // display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Flashcard( {...props}) {
    const classes = useStyles();

    let toggle = props.flashcard.checked;

    const [center, setcEnter] = useState(props.flashcard.checked);

  // const handleChange2 = (event) => {
  //   setChecked(event.target.checked);
  //   var arrayLength = songList.length;
  //   for (var i = 0; i < arrayLength; i++) {
  //       props.flashcard.checked ^= true;
  //   }
  //   callBack1(songList);
  //   // render(FlashcardList(callBack1));
  // };

  
  const handleChange = (event) => {
    // setChecked(event.target.checked);
    // setEnter(!enter);
    setcEnter(!center);
    toggle ^= true;
    props.callBack2(props.flashcard.id);
    console.log("checked id", props.flashcard.id);
  };

  const [flip, setFlip] = useState(false);
  // const playSound = audioFile => {
  //   audioFile.play();
  // };
  // const song =  new Audio(props.flashcard.sound)

  //TODO: handle volume
  // const [volume, setVolume] = React.useState(.5);

  const [load, setLoading] = React.useState(false);

  var audio = new Audio();

  audio.addEventListener('playing', function () {
    setLoading(false);
}, false);

  const playSound = (song) => {
      // new Audio(song).play();
      console.log("vol in card is", props.volume);
      setLoading(true);

      audio.src = song;
      audio.preload = "metadata";
      audio.playbackRate = 1;
      audio.volume = props.volume;
      audio.controls = true;
      audio.play();

    };
    //TODO: handle volume
  // const handleVolumeChange = (event, newValue) => {
  //     // setVolume(newValue);
  //     audio.volume = newValue;
  //     // document.getElementById(id).volume = volume;
  // };
  ///

  return (
    
    <div className={classes.root}>

      <Paper className={classes.paper} >

        <Grid container spacing={2}>
          {/* <Grid item> */}
            <ButtonBase className={classes.image}>

            <img className={classes.img} alt="complex" loading="lazy" src={props.flashcard.image}  onClick={() => {playSound(props.flashcard.sound) }}  onMouseOver={() => {setFlip(!flip)}}/>

              {/* <img className={classes.img} alt="complex" loading="lazy" src={props.flashcard.image}  onClick={() => {playSound(song) }}  onMouseOver={() => {setFlip(!flip)}}/> */}
            </ButtonBase>
          {/* </Grid> */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
            <Grid item style={{ cursor: 'pointer' }} onClick = {() => {playSound(props.flashcard.sound)}} >
              {/* <Grid item style={{ cursor: 'pointer' }} onClick = {() => {playSound(song)}} > */}
                    <fl>{flip ? props.flashcard.eng : props.flashcard.heb} </fl> 
              </Grid>

            </Grid>

            <Grid item xs container direction="column" spacing={2}>

            <Grid item>
              <Checkbox checked={toggle} onChange={handleChange}/>

              </Grid>
              <Grid item>

              {load ? <CircularProgress color="secondary" /> : ""}

            </Grid>
            </Grid>

            {/* <Slider id="demo"
                            volume={volume} 
                            onChange={handleVolumeChange} 
                            defaultValue={.5}
                            step={.1} min={0} max={1} 
                            valueLabelDisplay="auto" /> */}

          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
