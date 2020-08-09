import React from 'react'; 
import FlashcardList from "./FlashcardList";
import {Samples} from './Tropes';
import SimpleModal from "./SimpleModal";
import Grid from '@material-ui/core/Grid';
import Example from './Example';

import {
    makeStyles,
    createStyles,
  } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        flexGrow: 1,
    },
    container: {
      padding: "20px",
      textAlign: "center"
    },
  })
);


function prePopulateItems(){
  let items = new Map();
  Samples.forEach(element => {
    items.set(element.id, element);
  });
  return items;
}
let songs = prePopulateItems();


export default function Ropes ( ) {

    const classes = useStyles();


    // let songs = [];
    // let songList = prePopulateItems(Samples);


    // let songs = {...Samples};
    const [checked, setChecked] = React.useState({songs});

    const callBack1 = (...val) => {
      console.log("in Ropes callback1 starting w" + val, ...val);
      songs = {...val};
      setChecked(...val);
      console.log("in Ropes callback1 invoked", songs);

      // console.log("in Ropes callback1 invoked" + songs);

      // addFlashcardToQuiz(flashcard);
      // Quiz.reloadQuiz(createQuiz(flashcard, 1));
      // if (!songList.includes(val.id)) {songList.push(val.id)}
      // else {songList.pop(val.id) }
        
      // Quiz.items = songList;
      // console.log(val);
      // return (<p>HELP</p>);
    };
    
    return (

        <div className={classes.root} style={{ color: 'white' }}>

            <div > 
              <h1>Practice the Tropes!</h1>
            </div>

            <h5>Quiz Yourself
              {/* <p>HERE {{Samples}.length}</p> */}
                  {/* <p>{{songs}.map(i => {
                    return (<p>{i.id}</p>) })}
                  </p> */}

                  <Grid container spacing={2} justify="center" alignItems="center"> 
                    <Grid item  >
                      
                      <SimpleModal flashcards = {checked} level = {false} name = 'Level 1'></SimpleModal>
                    </Grid>
                    <Grid item  >
                      <SimpleModal flashcards = {checked} level = {true} name = 'Level 2'></SimpleModal>
                    </Grid>
                  </Grid>
            </h5> 
        <h2>
        Press any trope below to hear the recording and view transliteration
        </h2>
        {/* <FlashcardList flashcards = {Samples} checkedFlash = {checkedFlash}/> */}
        {/* <FlashcardList flashcards = {Samples} callBack1={callBack1}/> */}
        <FlashcardList callBack1={callBack1}/>


        </div>
    );
}