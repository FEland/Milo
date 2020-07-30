// import React, {setState, event} from 'react'

import React from 'react'
import Flashcard from "./Flashcard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


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

//   filter(e){
//     this.setState({filter: e.target.value});
// }
  

  
export default function FlashcardList( { flashcards } ) {

    // const [filter, filtered] = setState(event.target.value)
    let items = flashcards;

    const classes = useStyles();

    // if (filter){
    //     items = items.filter( item =>
    //         item.id.toLowerCase()
    //         .includes.this.state.filter.toLowerCase)
    // }

    // editSearchTerm = (e) => {
    //     this.setState({searchTerm: e.target.value})
    //   }

    // dynamicSearch = () => {
    //     return flashcards.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    //   }
    

    return (

        
    <div>
         <div className={classes.root}>
         
        {/* <input type="text" onChange={this.filtered.bind(this)}/> */} 

      <Grid container spacing={3}> 
      {items.map(flashcard => {
                  return (
                  <Grid item xs={3} >
                    <Flashcard flashcard = {flashcard} key = {flashcard.id}> </Flashcard>
                  </Grid>
                  )
        })}
        
      </Grid>

    </div>
    </div>


    )
}
