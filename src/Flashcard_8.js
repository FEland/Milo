import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Tooltip from '@material-ui/core/Tooltip';
// import IconButton from "@material-ui/core/IconButton";
import Hidden from '@material-ui/core/Hidden';

// import Slider from "@material-ui/core/Slider";
import CircularProgress from '@material-ui/core/CircularProgress';
// import EqualizerIcon from '@material-ui/icons/Equalizer';
// import LanguageTwoToneIcon from '@material-ui/icons/LanguageTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // backgroundColor: 'green',
    color: 'white',

    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',

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
    

    // display: 'block',
    // width: '10vw',
    // transitionDuration: '0.3s',
    // height: '8vw'
    
    //     display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
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
  progress: {
    position: 'relative',

    top: 30,
    // top: -50,
    left: 80,
    // left: 54,
    // zIndex: 2,
  },
  translation: {
    top: -1,
    right:0,
    // zIndex: 2,
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
  
  const [playing, setPlaying] = React.useState(false);

  var audio = new Audio();

  audio.addEventListener('playing', function () {
    setLoading(false);
    setPlaying(true);
}, false);

  audio.addEventListener('ended', function () {
    setPlaying(false);
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
          <Grid item>
            <ButtonBase className={classes.image}>

            <img className={classes.img} alt="complex" loading="lazy" src={props.flashcard.image} onClick={() => {playSound(props.flashcard.sound)}} onMouseOver={() => {setFlip(!flip)}}/>

            {/* <img className={classes.img} alt="complex" loading="lazy" src={props.flashcard.image}
                  onClick={() => {playSound(props.flashcard.sound) }} 
                  /> */}

              {/* <img className={classes.img} alt="complex" loading="lazy" src={props.flashcard.image}  onClick={() => {playSound(song) }}  onMouseOver={() => {setFlip(!flip)}}/> */}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
          <Hidden smDown>
            <Grid item container direction="column" spacing={2} style={{ cursor: 'pointer' }} onClick = {() => {playSound(props.flashcard.sound)}} >
                {/* <Grid item style={{ cursor: 'pointer' }} onClick = {() => {playSound(song)}} > */}
                    <fl style={{ 'font-size':'2vw' , 'line-height': '1.3','max-height': '2vw'}} >{flip ? props.flashcard.eng : props.flashcard.heb} </fl> 
              </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item container direction="column" spacing={2} style={{ cursor: 'pointer' }} onClick = {() => {playSound(props.flashcard.sound)}} >
                {/* <Grid item style={{ cursor: 'pointer' }} onClick = {() => {playSound(song)}} > */}
                    <fl style={{ 'font-size':'4vw' , 'line-height': '1.2','max-height': '4vw'}} >{flip ? props.flashcard.eng : props.flashcard.heb} </fl> 
              </Grid>
          </Hidden>
            {/* </Grid> */}

            <Grid item xs container direction="column" spacing={2}>
            <br/>
            <Grid item>
            
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
                 </Grid>  :
                 <>{!load ? 
                // <Grid item  container  >
                <Grid item>
                  <br/>
                <Tooltip title="Add trope to quizlet above" arrow placement="center">
                <Checkbox color="default" icon={<CheckBoxOutlineBlankIcon fontSize="small" />} 
                  checkedIcon={<CheckBoxIcon fontSize="small" />} checked={toggle} onChange={handleChange}
                  // className={classes.progress}
                />
              </Tooltip>
              </Grid>
              
              /* <Grid item>
              <Tooltip title="See Transliteration" arrow placement="center">

              <ButtonBase centerRipple="true" focusRipple="true" className={classes.translation}
>
              <IconButton color="primary" className={classes.translation}
              onClick={() => {setFlip(!flip)}}>
                <LanguageTwoToneIcon/>
                </IconButton>
              </ButtonBase>
              </Tooltip>

              </Grid> */

              /* <LanguageTwoToneIcon onClick={() => {setFlip(!flip)}} /> */

              // </Grid>
              : <Grid item> <CircularProgress size ={30} color="primary" /> </Grid> 
                 }
                 </>
            }
              
              {/* <Checkbox checked={toggle} onChange={handleChange}/> */}

              </Grid>
              {/* <Grid item> */}
              {/* {!load && <Grid item> <CircularProgress color="primary" className={classes.progress} /> </Grid> } */}
              {/* {!load && <CircularProgress size = {20} color="primary" className={classes.progress} /> } */}
            {/* </Grid> */}
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
