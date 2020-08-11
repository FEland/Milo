import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

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
  const playSound = audioFile => {
    audioFile.play();
  };

  const song =  new Audio(props.flashcard.sound)


  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper} >
        <Grid container spacing={2}>
          {/* <Grid item> */}
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" loading="lazy" src={props.flashcard.image}  onClick={() => {playSound(song) }}  onMouseOver={() => {setFlip(!flip)}}/>
            </ButtonBase>
          {/* </Grid> */}
          <Grid item  sm container>
            <Grid item xs container direction="column">
              <Grid item style={{ cursor: 'pointer' }} onClick = {() => {playSound(song)}} >
                    <fl>{flip ? props.flashcard.eng : props.flashcard.heb} </fl> 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
