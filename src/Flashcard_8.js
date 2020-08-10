import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Checkbox from '@material-ui/core/Checkbox';

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
    border: '4px solid green',
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
      
    const [checked, setChecked] = React.useState(true);
    // const [checked, setChecked] = React.useState(props.state);
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.callBack2(props.flashcard.id);
    console.log("checked id", props.flashcard.id);
  };

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
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item style={{ cursor: 'pointer' }} onClick = {() => {playSound(song)}} >

                    <fl>{flip ? props.flashcard.eng : props.flashcard.heb} </fl> 
                
              </Grid>

            </Grid>
            <Grid item>
              {/* <Typography variant="subtitle1"> */}
              <Checkbox checked={checked} onChange={handleChange}/>
              {/* </Typography> */}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
