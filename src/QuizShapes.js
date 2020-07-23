//TODO FIX UP FLAG STATE FOR PAUSING
import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';

// import SpeedIcon from '@material-ui/icons/Speed';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import CachedIcon from '@material-ui/icons/Cached';
import Slider from '@material-ui/core/Slider';

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  function createQuiz(items, num) {
    var i; var songList = [];
    if (num > items.length) {
      return;
    }
    for (i = 0; i < num; i++){
      songList.push(items[getRandomInt(0, items.length-1)]);
    }
    return songList;
  }

  
export default function QuizShapes( { flashcards } ) {

    let audio = new Audio();
    // let fast = 1;
    // const speeds = [.5, 1, 1.5, 2, 2.5];
    const [flag, setFlag] = useState(1);
    const [trope, setTrope] = useState(0);

    const [speed, setSpeed] = useState(1);

    const handleSpeed = (val) => {
        // setSpeed(speed => speed = val);
        setSpeed(val);
      }
  
      
    let i = -1;
    let myflag = 0;
    // var speed = 1;

    function getSpeed(){
        return speed;
    }

    // const [count, setCount] = useState(0);
    // const [yesQuiz, setQuizTrue] = useState(0);



    function playNext (){
        // if (!myflag) printc("JACKSA");
        // var i = trope;
        ++i;
        if (i < quiz.length){
            // audio.preload = "auto";
            // audio.volume = 0.3;
            console.log("nextSongSpeed", getSpeed());
            audio.src = quiz[i].sound;
            audio.playbackRate = speed;
            audio.play();
        }
        else{ 
            setFlag(1);
            i = -1;
        }
        setTrope(i);


    }
    audio.addEventListener('ended', function () {
        if (!myflag) {
            playNext();
            }
        else {
            audio.pause();
        }
    }, false);

    let items = flashcards;

    const [quiz, reloadQuiz] = useState(createQuiz(items, 4));
    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        reloadQuiz(createQuiz(items, newValue))
    };

    // playFromSong
    const playFromSong = index => {
        // audio.src = "";
        i = index;
        setTrope(i);
        playNext();
    };
    //   const song =  new Audio(flashcard.sound)

    // function printc(calledBy){
    //     console.log(calledBy, "i= ", i, "myflag= ", myflag);
    //     // console.log(calledBy, "i= ", i, "myflag= ", myflag, " trope=", trope, "/", quiz.length, " flag=", flag);
    // }

    function handlePlay(){
        myflag = 0;
        setTrope(0);
        // printc("handlePlay b4 PlayNext");
        playNext();
        setFlag(0); 

        // makeSongList(quiz);
    }

    function handlePause(){
        myflag = 1;
        // audio.pause();
        audio.pause()
        audio.currentTime = 0
        audio = null;

        // printc("handlePause after setFlag");
        setFlag(1);
        i = 0;
        setTrope(0);

    }
    // function killAudio(){
    //     audio.pause();
    //     audio = null;
    // }


    return (
        
         <quiz>Quiz Yourself!
            <h5> 

            <div className="controls" >
            

                <Button variant="contained" color="primary"
                    endIcon={<CachedIcon  onClick={() =>  {reloadQuiz(createQuiz(items, value));}}/>}>
                </Button> 

                <Button variant="contained" color="primary"
                    startIcon = {<DoubleArrowIcon onChange={() => { handleSpeed(2) ;}} />}>
                        {speed}
                </Button> 


                <Button size="small" variant="contained"> 
                    <Slider value={value} onChange={handleChange} defaultValue={4}
                            step={1} marks min={1} max={8} valueLabelDisplay="auto" />
                </Button>

                {/* only shows play or pause based off flag state.. flag doesn't work must be fixed! */}
                {flag ?  <Button variant="contained" color="primary" 
                    endIcon={<PlayCircleFilled onClick={() => handlePlay()}/>}>
                    </Button> :
                    <Button variant="contained" color="primary" 
                        endIcon={<PauseCircleFilled onClick={() => handlePause()}/>}>
                    </Button>
                }
            </div>

            </h5>

            <p>
        {quiz.map((songName, index)=> {return ( 
            (trope === index) ?
            <img src={songName.image} onClick={() => playFromSong(index-1)} alt="icon" loading="lazy" width="50" height="50" style={ {'opacity' : '.5'} }/>
            :<img src={songName.image} onClick={() => playFromSong(index-1)} alt="icon" loading="lazy" width="50" height="50" style={  {'border' : '0px solid black'}  }/>

           )})}
        </p>

           </quiz>

    )
}

