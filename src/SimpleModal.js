import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Quiz from "./Quiz";
import QuizShapes from "./QuizShapes";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: 'rgb(204, 204, 204)',
    border: '5px solid #e7e7e7',
    padding: '5px 32px',
    margin: '5px auto'
  },
}));

export default function SimpleModal({flashcards, level, name}) {
    // const Quiz = <Quiz flashcards = {flashcards}/>
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {name}
      </button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
            <p id="simple-modal-description">
                {(level) ? <Quiz flashcards = {flashcards}/> : <QuizShapes flashcards = {flashcards}/>}
            </p>
        </div>
      </Modal>
    </div>
  );
}