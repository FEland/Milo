import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import LinearProgress from '@material-ui/core/LinearProgress';

import './styles.css'



const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'inline',
    backgroundColor: 'brown',
    display: 'flex',
    flexDirection: 'col',


  },
  details: {
    display: 'flex',
    // color: 'white',
    flexDirection: 'col',
    

  },
  content: {
    // flex: '1 0 auto',
    color: 'white',
    width: '70%',
    position: 'left',
    display: 'flex'
  },
  cover: {
    width: '30%',
    position: 'right',
    display: 'flex',
  },
}));

export default function Flashcard( {flashcard}) {
  const classes = useStyles();
  const [flip, setFlip] = useState(false);
  const playSound = audioFile => {
    audioFile.play();
  };
  const song =  new Audio(flashcard.sound)

  return (
    <fll>
         <backup>
  <img src={flashcard.image} alt="icon" loading="lazy" width="50" height="50" onClick={() => {playSound(song) }}/>
        

</backup>
        {/* <LinearProgress /><LinearProgress color="secondary" /> */}

    <Card className={classes.root} >

        <CardMedia
        component="img"
        className={classes.cover}
        image={flashcard.image } 
        position='right'
        onClick={() => {playSound(song) }}
        onMouseOver={() => {setFlip(!flip)}}
        resize='both'
      />

        <CardContent className={classes.content} onClick={() => {playSound(song)} }>

        <fl>

        <Typography variant="h9"> 
          {flip ? flashcard.eng : flashcard.heb}

        </Typography>
        </fl>
        </CardContent>

    
    </Card>

  
    </fll>
  );
}