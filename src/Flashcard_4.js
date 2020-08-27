import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

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
    padding: '10%',
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
      

  const [flip, setFlip] = useState(false);
  // const playSound = audioFile => {
  //   audioFile.play();
  // };

  // const song =  new Audio(props.flashcard.sound)
  const [load, setLoading] = React.useState(false);


  var audio = new Audio();
  const [playing, setPlaying] = React.useState(false);

  audio.addEventListener('playing', function () {
    setLoading(false);
    setPlaying(true);
  }, false);

  audio.addEventListener('ended', function () {
    setPlaying(false);
  }, false);

  const playSound = (song) => {
      // new Audio(song).play();
      setLoading(true);

      audio.src = song;

      audio.preload = "metadata";
      audio.playbackRate = 1;
      audio.volume = props.volume;
      audio.controls = true;
      audio.play();

    };

  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper} >
        <Grid container spacing={2}>
          {/* <Grid item> */}
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" loading="lazy" src={props.flashcard.image}  onClick={() => {playSound(props.flashcard.sound) }}  onMouseOver={() => {setFlip(!flip)}}/>
            </ButtonBase>
          {/* </Grid> */}
          <Grid item  sm container>
            <Grid item xs container direction="column">
              <Grid item style={{ cursor: 'pointer' }} onClick = {() => {playSound(props.flashcard.sound)}} >
                    <fl>{flip ? props.flashcard.eng : props.flashcard.heb} </fl> 
              </Grid>
              {load ? <CircularProgress color="primary" /> : ""}
              {playing ?  
                <Grid item>
                  <svg id="equalizer" width="40px" height="28px" viewBox="0 0 10 7">
                  <g fill="#000000">
                    <rect id="bar1" transform="translate(0.5, 6.0) rotate(180.0) translate(-0.5, -6.0) " x="0" y="5" width="1" height="2" />
                    <rect id="bar2" transform="translate(3.5, 4.5) rotate(180.0) translate(-3.5, -4.5) " x="3" y="2" width="1" height="5" />
                    <rect id="bar3" transform="translate(6.5, 3.5) rotate(180.0) translate(-6.5, -3.5) " x="6" y="0" width="1" height="7" />
                    <rect id="bar4" transform="translate(9.5, 5.0) rotate(180.0) translate(-9.5, -5.0) " x="9" y="3" width="1" height="4" />
                  </g>
                </svg>
                 </Grid>  : ""}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
