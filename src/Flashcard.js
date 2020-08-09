import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';

// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import LinearProgress from '@material-ui/core/LinearProgress';

import './styles.css'


const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'inline',
    backgroundColor: 'brown',
    display: 'flex',
    flexDirection: 'col',
    border: '2px solid green',
  },
  box: {
    // position: 'relative',
    // position: 'relative',
    maxWidth: '33%',
    right: '-5px',
    top: '-5px',
    border: '2px solid black',

    // position: 'relative',
    // display: 'block',
    // height: '125px',
    // width: '125px',
    // position: 'inherit',
    // left: '-40%',
    // left: '100px',
    // top: '150px',
    // maxWidth: '2%',
    // position: 'top',
    
    // float: 'left',

    // display: 'flex',
},
  container: {
    // textAlign: "center"
  },
  content: {
    // flex: '1 0 auto',
    border: '2px solid black',
    color: 'white',
    maxWidth: '33%',
    position: 'left',
    // display: 'flex'
  },
  cover: {
    // width: 200,
    border: '4px solid black',
    maxWidth: '33%',
    // position: 'right',
    // display: 'flex',
    // height: 'auto',
    // position: 'center',
    float: 'right',
    // objectFit: 'scale-down',

  },

}));

export default function Flashcard( {flashcard, callBack2}) {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);
  
  const handleChange = (event) => {
    
    callBack2(flashcard);
    setChecked(event.target.checked);
  };

  const [flip, setFlip] = useState(false);
  const playSound = audioFile => {
    audioFile.play();
  };
  const song =  new Audio(flashcard.sound)

  return (
    
    <fll >


    {/* for Mobile */}
      <backup>
        <img src={flashcard.image} alt="icon" loading="lazy" width="50" height="50" onClick={() => {playSound(song) }}/>
      </backup>
       
       
        {/* <LinearProgress /><LinearProgress color="secondary" /> */}


      <Card className={classes.root} raised='true' >
        <CardActionArea>
          <Grid container justify="space-around"   direction="row" spacing={3} > 
            <Grid item xs={3} >


          {/* <CardMedia component="img" className={classes.cover} image={flashcard.image } 
            position='right' onClick={() => {playSound(song) }}
            onMouseOver={() => {setFlip(!flip)}} resize='both' 
          /> */}
              <img src={flashcard.image} alt="icon" loading="lazy" width = '100%' onClick={() => {playSound(song) }} onMouseOver={() => {setFlip(!flip)}}/>

            </Grid>
            <Grid item  xs={3} >

          < h3 onClick = {() => {playSound(song)}} > <fl>{flip ? flashcard.eng : flashcard.heb} </fl> </h3>
          {/* <CardContent className={classes.content} onClick={() => {playSound(song)} }>

            <fl>

              <Typography variant="h9"> {flip ? flashcard.eng : flashcard.heb} 
              </Typography>
            </fl>

          </CardContent> */}

          </Grid>
            <Grid item xs={3} >
            <Checkbox checked={checked} onChange={handleChange}/>

          {/* <Checkbox className={classes.box} checked={checked} onChange={handleChange}/> */}
          </Grid>
        </Grid>

            </CardActionArea>
      </Card>
  
    </fll>
  );
}