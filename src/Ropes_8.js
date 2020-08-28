import React from 'react'; 
import FlashcardList from "./FlashcardList_8";
// import {allTropes, Samples} from './Tropes3';
import {Samples} from './Tropes3';

import SimpleModal from "./SimpleModal_8";
import Grid from '@material-ui/core/Grid';
import AllTropesBox from "./AllTropesBox"

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


// function prePopulateItems(){
//   let items = new Map();
//   Samples.forEach(element => {
//     items.set(element.id, element);
//   });
//   return items;
// }
// let songList = prePopulateItems();

let songList = Samples;

export default function Ropes ( ) {

    const classes = useStyles();


    // let songList = [];
    // let songList = prePopulateItems(Samples);


    // let songList = {...Samples};
    const [checked, setChecked] = React.useState({songList});
    
    const callBack4 = (...val) => {
      console.log("in Ropes callback4 starting w" + val, ...val);
    }

    const callBack1 = (...val) => {
      // console.log("in Ropes callback1 starting w" + val, ...val);
      songList = {...val};
      setChecked(...val);
      // console.log("in Ropes callback1 invoked", songList);

      // console.log("in Ropes callback1 invoked" + songList);

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
            {/* <frontpage> */}

            <AllTropesBox/>
            {/* </frontpage>  */}

            <h5>Quiz Yourself
              {/* <p>HERE {{Samples}.length}</p> */}
                  {/* <p>{{songList}.map(i => {
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

        <FlashcardList callBack1={callBack1} callBack4={callBack4}/>

        <br/>
        


        </div>

    );
    
}