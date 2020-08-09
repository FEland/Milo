import React from 'react'
import Flashcard from "./FlashcardME";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Samples} from './Tropes';
import { clone, cloneDeep } from "lodash";

// import { clone, cloneDeep } from "lodash";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    grid: {
      width: 500,
      height: 450,
      direction: "row",
      justify: "center",
      alignItems: "center",
    },
  }));

  function prePopulateItems(tropes){
    let items = new Map();
    tropes.forEach(element => {
      items.set(element.id, element);
    });
    return items;
  }

  // let songList = new Map();
  // Samples.forEach(element => {
  //   songList.set(element.id, element);
  // });
  let songList = prePopulateItems(Samples);
  // let songList = Samples;

// export default function FlashcardList( { flashcards, callBack1} ) {
export default function FlashcardList( { callBack1} ) {

  // let songList = [...flashcards];
  // let songList = cloneDeep(flashcards);
  // let songList = new Map();

  console.log(songList);

  const callBack2 = (val) => {
    
    
    if (!songList.has(val.id)) {
      // console.log("a" + val.id);
      songList.set(val.id, val);
      // songList.splice(songList.indexOf(val),1)
    }
    else {
      // console.log("b" + val.id);
      songList.delete(val.id);
      // songList.splice(songList.indexOf(val),0,val);
    }

    // if (!songList.has(val.id)) {
    //   console.log("a" + val.id);
    //   songList.set(val.id, val);
    //   // songList.splice(songList.indexOf(val),1)
    // }
    // else {
    //   console.log("b" + val.id);
    //   songList.delete(val.id);
    //   // songList.splice(songList.indexOf(val),0,val);
    // }
    console.log("i'm FlashcardList callback", songList, songList.size);
    // console.log(items);

    callBack1(songList);
  };
    // let items = flashcards;
    // let items = cloneDeep(flashcards);
    let items = Samples;
    const classes = useStyles();
    

    return (

        
    <div>
         <div className={classes.root}>

      {/* style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} > */}
      <Grid container spacing={3}> 
      {items.map(flash => {
                  return (
                  <Grid item xs={3} >
                    
                    <Flashcard flashcard = {flash} key = {flash.id} callBack2={callBack2}> </Flashcard>
                    {/* <Flashcard flashcard = {flashcard} key = {flashcard.id}> </Flashcard> */}
                  </Grid>
                  )
        })}
        
      </Grid>

    </div>
    </div>


    )
}
