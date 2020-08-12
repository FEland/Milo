import React from 'react'
import Flashcard from "./Flashcard_8";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Samples} from './Tropes';
import Switch from '@material-ui/core/Switch';

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

//   function prePopulateItems(tropes){
//     let items = new Map();
//     tropes.forEach(element => {
//       items.set(element.id, element);
//     });
//     return items;
//   }

  // let songList = new Map();
  // Samples.forEach(element => {
  //   songList.set(element.id, element);
  // });
//   let songList = prePopulateItems(Samples);
  let songList = Samples;

// export default function FlashcardList( { flashcards, callBack1} ) {
export default function FlashcardList( { callBack1} ) {

  // let songList = [...flashcards];
  // let songList = cloneDeep(flashcards);
  // let songList = new Map();

  const [flip, setFlip] = React.useState(false);

  const handleChange = (event) => {
    setFlip(!flip);
    // setState({ ...state, [event.target.name]: event.target.checked });
    var arrayLength = songList.length;
    for (var i = 0; i < arrayLength; i++) {
        songList[i].checked ^= true;
    }
    callBack1(songList);
    // render(FlashcardList(callBack1));
  };

  

  const callBack2 = (val) => {
    
    songList[val-1].checked ^= true;

    callBack1(songList);

    // var arrayLength = songList.length;
    // for (var i = 0; i < arrayLength; i++) {
    //     console.log(songList[i]);

        // if (songList[i].id = val){
        //     songList[i].checked = !songList[i].checked;
        // }
        //Do something
    // }
    // songList.forEach(trope => {

    //     if (trope.id = val){
    //         trope.checked = !trope.checked;
    //     }
    // });

    // console.log("i'm FlashcardList callback", songList);
  };
    // let items = flashcards;
    // let items = cloneDeep(flashcards);
    // let items = Samples;
    const classes = useStyles();
    

    return (

        
    <div>
         <div className={classes.root}>

            <Switch
            checked={flip}
            onChange={handleChange}
            name="toggle"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />


      {/* style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} > */}
      <Grid container spacing={3}> 
      {songList.map(flash => {
                  return (
                  <Grid item xs={3} >
                    
                    <Flashcard flashcard = {flash} key = {flash.id} callBack2={callBack2} flip={flip}> </Flashcard>
                    {/* <Flashcard flashcard = {flashcard} key = {flashcard.id}> </Flashcard> */}
                  </Grid>
                  )
        })}
        
      </Grid>

    </div>
    </div>


    )
}
