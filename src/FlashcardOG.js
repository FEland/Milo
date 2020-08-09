import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import Checkboxes from './Checkboxes';
import Checkbox from '@material-ui/core/Checkbox';
// import Quiz from "./Quiz";
// import QuizShapes from "./QuizShapes";

// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import LinearProgress from '@material-ui/core/LinearProgress';

import './styles.css'



// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; 
// }

// function createQuiz(items, num) {
//   var i; var songList = [];
//   if (num > items.length) {
//     return;
//   }
//   for (i = 0; i < num; i++){
//     songList.push(items[getRandomInt(0, items.length)]);
//   }
//   return songList;
// }


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
    maxWidth: '68%',
    position: 'left',
    display: 'flex'
  },
  cover: {

    maxWidth: '30%',
    position: 'right',
    display: 'flex',
  },
  box: {

    // maxWidth: '2%',
    position: 'right',
    display: 'flex',
  },
}));

export default function Flashcard( {flashcard, callBack}) {
  const classes = useStyles();
  // let songList = []

  const [checked, setChecked] = React.useState(true);
  
  const handleChange = (event) => {
    
    // addFlashcardToQuiz(flashcard);
    // Quiz.reloadQuiz(createQuiz(flashcard, 1));
    // songList += (flashcard);
    // Quiz.items = songList;
    // callBack(flashcard);
    setChecked(event.target.checked);
    
  };

  const [flip, setFlip] = useState(false);
  const playSound = audioFile => {
    audioFile.play();
  };
  const song =  new Audio(flashcard.sound)

  return (
    <fll>
         <backup>
  <img src={flashcard.image} alt="icon" loading="lazy" width="50" height="50" onClick={() => {playSound(song) }}/>
  {/* <img src={flashcard.image} alt="icon" loading="lazy" width="50" height="50"/> */}


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
          {/* <audio controls src={flashcard.sound} /> */}
        <fl>

        <Typography variant="h9"> 
          {flip ? flashcard.eng : flashcard.heb}

        </Typography>
        
        </fl>

        </CardContent>
        <Checkbox
          className={classes.box}
          checked={checked}
          onChange={handleChange}
        />
    
    </Card>

  
    </fll>
  );
}