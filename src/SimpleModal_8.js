import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CreateQuiz from "./CreateQuiz";
// import Button from "@material-ui/core/Button";

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Hidden from '@material-ui/core/Hidden';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: "50%", maxWidth: "50%"
  };
}

function getButtonStyle() {

  return {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'red',
    fontSize: '1.5vw'
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: 'rgb(204, 204, 204)',
    // border: '5px solid #e7e7e7',
    padding: '5px 32px',
    margin: '5px auto',

  },
}));

export default function SimpleModal({flashcards, level, name}) {
    // const Quiz = <Quiz flashcards = {flashcards}/>
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [buttonStyle] = React.useState(getButtonStyle);

  const [open, setOpen] = React.useState(false);
  // const [up, setUp] = React.useState(false);
  let audio = new Audio();

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  //   // var t = document.getElementById('audio');
  //   // t.pause();
  //   audio.pause();
  // };

  const toggleModal = () => {
    setOpen(!open);
    audio.pause();
  };

  // function bla(){
  //   render(
  //     {SimpleModal},
  //     document.getElementById('root')
  //   );
  // }

  // const handleParentFun = (value) =>{

  //   // flashcards = [value];
  //   flashcards = flashcards.slice(0,3);
  //   console.log("Call to Parent Component!", value, flashcards.slice(0,3));
  //   // if (value != up){ setUp(!up);}
  //   // bla();

  //   // render(SimpleModal({flashcards, level, name}));
  // }

  // const [orientation, setOrientation] = React.useState(Screen.orientation ? Screen.orientation.angle : window.orientation);
  
  // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // window.addEventListener('resize', () => {
  //   setOrientation(Screen.orientation ? Screen.orientation.angle : window.orientation);
  // });

  return (
    <div>
      {/* {orientation ? "P" : "L"}
      {isMobile ? "M" : "C"} */}
      <button type="button" onClick={toggleModal}>
        {name}
      </button>
      
      {/* {(!orientation && isMobile)?  */}
      <Hidden smUp>
      {/* <Modal open={open} onClose={handleClose}         
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            style={{top: "25%", left: "25%",  width: "50%", maxWidth: "50%", height: "50%", maxheight: "50%"}}
            >
            <Fade in={open} out={!open}> */}
              <div >
                {open && <CreateQuiz flashcards = {flashcards} audio={audio} level={level} orientation={0}/>}
                {/* <button style={{position: 'fixed', top: 0, right: 0, color: 'red'}} onClick={() => {handleClose()}} >x</button>  */}

              </div>
        {/* </Fade>

      </Modal> */}
      
      </Hidden>
      {/* :  */}
      <Hidden xsDown>
      <Modal open={open} onClose={toggleModal}         
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}>
            <Fade in={open} out={!open}>

              <div style={modalStyle} className={classes.paper}>
              <p id="simple-modal-description">

                <button style={buttonStyle} onClick={() => {toggleModal()}} >x</button> 
                    {/* {(up) ? <div>FINITO</div> : <div> JUST START</div> } */}
      {/* 
                    <Quiz 
                    flashcards = {flashcards}
                      handleParentFun = {(value)=>{
                      console.log("your value -->",value);
                      handleParentFun(value);
                    }}
                    />  */}
                      <CreateQuiz flashcards = {flashcards} audio={audio} level={level} orientation={1}/>
                  </p>
              </div>
        </Fade>

      </Modal>
      </Hidden>
      {/* } */}
    </div>
  );
}