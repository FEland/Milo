import React from 'react'; 
import FlashcardList from "./FlashcardList";
import {Samples} from './Tropes'
import SimpleModal from "./SimpleModal";
import Grid from '@material-ui/core/Grid';

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
    // grid: {
    //   width: 500,
    //   height: 450,
    //   direction: "row",
    //   justify: "center",
    //   alignItems: "center",
    // },
  })
);


export default function Ropes ( ) {

    const classes = useStyles();

    
    return (
        <div className={classes.root}>
            <h5>Quiz Yourself
                  <Grid container spacing={2} justify="center" alignItems="center"> 
                    <Grid item  >
                      <SimpleModal flashcards = {Samples} level = {false} name = 'Level 1'></SimpleModal>
                    </Grid>
                    <Grid item  >
                      <SimpleModal flashcards = {Samples} level = {true} name = 'Level 2'></SimpleModal>
                    </Grid>
                  </Grid>
            </h5> 
        <h2>
        Press any trope below to hear the recording and view transliteration
        </h2>
        <FlashcardList flashcards = {Samples} />
       

        </div>
    );
}