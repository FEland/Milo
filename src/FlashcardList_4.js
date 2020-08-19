import React from 'react'
import Flashcard from "./Flashcard_4";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Samples} from './Tropes3';
import Hidden from '@material-ui/core/Hidden';

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
    
    let volume = .5; //delete me later and uncomment below
  // const [volume, setVolume] = React.useState(.5);
//   const handleVolumeChange = (event, newValue) => {
//     setVolume(newValue);
//     // console.log("vol in list is ", volume);
// };


    return (

        
    <div>
         <div className={classes.root}>

      <Grid container spacing={3} direction='row-reverse' > 

      {/* <Slider  volume={volume} onChange={handleVolumeChange} 
                    defaultValue={.5} step={.1} min={0} max={1} /> */}

      {songList.map(flash => {
                  return (
                    <>
                    <Hidden smDown>
                      <Grid item xs={3} >
                        <Flashcard flashcard = {flash} key = {flash.id} volume={volume}> </Flashcard>
                      </Grid>
                    </Hidden>
                    <Hidden mdUp>
                      <Grid item xs={4} >
                        <Flashcard flashcard = {flash} key = {flash.id} volume={volume}> </Flashcard>
                      </Grid>
                    </Hidden>
                  </>
                  )
        })}
        
      </Grid>

    </div>
    </div>


    )
}
