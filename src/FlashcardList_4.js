import React from 'react'
import Flashcard from "./Flashcard_4";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Samples} from './Tropes';

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

  let songList = Samples;

export default function FlashcardList( ) {

    const classes = useStyles();
    

    return (

        
    <div>
         <div className={classes.root}>

      <Grid container spacing={3}> 
      {songList.map(flash => {
                  return (
                  <Grid item xs={3} >
                    
                    <Flashcard flashcard = {flash} key = {flash.id}> </Flashcard>
                  </Grid>
                  )
        })}
        
      </Grid>

    </div>
    </div>


    )
}
