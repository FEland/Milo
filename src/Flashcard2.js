import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MediaControlCard from './MediaControlCard'
import './styles.css'

const playSound = audioFile => {
    audioFile.play();
  };

const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    },
    );
  
export default function Flashcard( {flashcard }) {
    const [flip, setFlip] = useState(false)
    const song =  new Audio(flashcard.sound)
    const classes = useStyles();

    return (
        
        // < div onClick={() => setFlip(!flip)} >

        <div className = "card" >
            
            <MediaControlCard card={flashcard}></MediaControlCard>
        {/* <div>
        <Paper className={classes.paper}>
            <img src = {flashcard.image}></img>
            <h5> {flashcard.eng} </h5>
            <h5> {flashcard.heb} </h5>
            <audio
            controls
            src={flashcard.sound}>
            </audio>
        </Paper>
        </div> */}

            <div className = "front" onClick={() => {playSound(song)}}>
                < div onClick={() => setFlip(!flip)} > </div>
                {/* <Typography gutterBottom variant="h5" color="black" component="h2"> */}
                {flashcard.eng}

                {/* </Typography> */}
            </div>

            <div className = "back" onClick={() => playSound(song)}>
                <img src = {flashcard.image}></img>
                {flashcard.heb}
            </div>

            {/* <Button
                variant="contained"
                color="primary"
                endIcon={
                    <PlayCircleOutlineIcon onClick={() => {playSound(song)}}>
                    </PlayCircleOutlineIcon>
                }>
                Play {flashcard.sound}
            </Button> */}

        </div>

        // {/* {flip ? <img src = {flashcard.image}></img> : (flashcard.eng + ' ' + flashcard.heb)} */}


    )
}


