//TODO FIX UP FLAG STATE FOR PAUSING
import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import {Samples} from './Tropes';

// import SpeedIcon from '@material-ui/icons/Speed';
// import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import CachedIcon from '@material-ui/icons/Cached';
import Slider from '@material-ui/core/Slider';

//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; 
//   }

  function shuffleTropes(items, num){ //https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
    let nums = [];
    items.forEach(element => {
        if (element.checked){
            nums.push(element);
            }
        });

    let ranNums = [];
    let i = nums.length;
    let j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranNums.push(nums[j]);
        nums.splice(j,1);
    }
    return ranNums.slice(0,num);

  }


  function createQuiz(items, num) {
    let order = shuffleTropes(items, num);
    return order;
  }
  
export default function QuizShapes( { ...props} ) {

    let audio = new Audio();
    let oldTropes = props.flashcards;
    let items = [];
    var arrayLength = oldTropes.length;
    for (var x = 0; x < arrayLength; x++) {
        if (oldTropes[x].checked === 1){
            items.push(oldTropes[x]);
        }
    }
    if (oldTropes.length === undefined){
        items = Samples;
    }

    // let fast = 1;
    // const speeds = [.5, 1, 1.5, 2, 2.5];
    const [mflag, setFlag] = useState(1);
    const [trope, setTrope] = useState(0);
    var flag = 1;
    // const [speed, setSpeed] = useState(1);

    // const handleSpeed = (val) => {
    //     // setSpeed(speed => speed = val);
    //     setSpeed(val);
    //   }
  
      
    // let i = items.length;
    let i = -1;
    // let myflag = 0;
    // var speed = 1;

    // function getSpeed(){
    //     return speed;
    // }

    // const [count, setCount] = useState(0);
    // const [yesQuiz, setQuizTrue] = useState(0);



    function playNext (){
        // if (!myflag) printc("JACKSA");
        // var i = trope;
        // --i;
        ++i;
        // if (i  > -1){
        if (i < quiz.length ){
            // console.log("playnext myflag", flag);
            // audio.preload = "auto";
            // audio.volume = 0.3;
            // console.log("nextSongSpeed", getSpeed());
            audio.src = quiz[i].sound;
            // audio.playbackRate = speed;
            audio.play();
            // if (flag === 0) audio.pause();
        }
        // else{ 
        //     console.log("detected flag change", flag);

        //     // setFlag(1);
        //     i = -1;
        // }
        setTrope(i);


    }

    audio.addEventListener('ended', function () {
        // console.log('calling next audio and flag is', flag);
        if (flag===0 && mflag===0) {playNext();}
    }, false);

    // let items = flashcards;

    const [quiz, reloadQuiz] = useState(createQuiz(items, Math.min(Math.floor(items.length/2),8)));
    const [value, setValue] = React.useState(4);

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

    function printc(calledBy){
        console.log(calledBy, "i= ", i, "flag= ", flag);
        // console.log(calledBy, "i= ", i, "myflag= ", myflag, " trope=", trope, "/", quiz.length, " flag=", flag);
    }

    function handlePlay(){
        // setTrope(quiz.length);
        // i = quiz.length;
        setTrope(0);

        // printc("handlePlay b4 PlayNext");
        setFlag(0); 
        flag = 0;

        playNext();
        // setFlag(0); 

        // makeSongList(quiz);
    }

    function handlePause(){
        printc("handlePause engaged");

        setFlag(1);
        flag = 1;
        // audio.pause();
        // audio.pause()
        // audio.currentTime = 0
        // audio = null;

        // printc();
        // setFlag(1);
        // printc();
        i = 0;
        setTrope(0);
        audio.pause();

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

                {/* <Button variant="contained" color="primary"
                    startIcon = {<DoubleArrowIcon onChange={() => { handleSpeed(2) ;}} />}>
                        {speed}
                </Button> 
 */}

                <Button size="small" variant="contained"> 
                    <Slider value={value} onChange={handleChange} defaultValue={Math.min(Math.floor(items.length/2),4)}
                            step={1} marks min={1} max={Math.min(items.length, 8)} valueLabelDisplay="auto" />
                            </Button>

                {/* only shows play or pause based off flag state.. flag doesn't work must be fixed! */}
                {mflag ?  <Button variant="contained" color="primary" 
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
            <img src={songName.image} onClick={() => playFromSong(index+1)} alt="icon" loading="lazy" width="50" height="50" style={ {'opacity' : '.5'} }/>
            :<img src={songName.image} onClick={() => playFromSong(index+1)} alt="icon" loading="lazy" width="50" height="50" style={  {'border' : '0px solid black'}  }/>

           )})}
        </p>

           </quiz>

    )
}
