//TODO FIX UP FLAG STATE FOR PAUSING
import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import {Samples} from './Tropes';

// import SpeedIcon from '@material-ui/icons/Speed';
// import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

// import SpeedDial from '@material-ui/lab/SpeedDial';
// import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
// import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

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


  
export default function Quiz( { ...props} ) {

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
    
    const [flag, setFlag] = useState(1);
    const [trope, setTrope] = useState(0);

    // const [speed, setSpeed] = useState(1);

    // const handleSpeed = (val) => {
    //     setSpeed(speed => val);
    //   }
  
      
    let i = -1;
    let myflag = 0;
    var speed = 1;

    // function getSpeed(){
    //     return speed;
    // }

    // const [count, setCount] = useState(0);

    // playFromSong
    const playFromSong = index => {
        // audio.src = "";
        i = index;
        setTrope(i);
        playNext();
    };

    function playNext (){
        // if (!myflag) printc("JACKSA");
        // var i = trope;
        ++i;
        if (i < quiz.length){
            // audio.preload = "auto";
            // audio.volume = 0.3;
            // console.log("nextSongSpeed", getSpeed());
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


    const [quiz, reloadQuiz] = useState(createQuiz(items, Math.min(Math.floor(items.length/2),8)));
    const [value, setValue] = React.useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        reloadQuiz(createQuiz(items, newValue))
    };

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
        audio.pause();
        // printc("handlePause after setFlag");
        setFlag(1);
        i = 0;
        setTrope(0);


    }


    return (
         <quiz>Quiz Yourself!
            <h5> 
            <div className="controls">
                <Button variant="contained" color="primary"
                    endIcon={<CachedIcon  onClick={() =>  {reloadQuiz(createQuiz(items, Math.min(Math.floor(items.length/2),value)));}}/>}>
                </Button> 

                {/* <Button variant="contained" color="primary"
                    startIcon = {<DoubleArrowIcon onChange={() => { handleSpeed(value) ;}} />}>
                        {speed}
                </Button>  */}


                <Button size="small" variant="contained"> 
                    <Slider value={value} onChange={handleChange} defaultValue={Math.min(Math.floor(items.length/2),4)}
                            step={1} marks min={1} max={Math.min(items.length, 8)} valueLabelDisplay="auto" />
                </Button>

                {/* only shows play or pause based off flag state.. flag doesn't work must be fixed! */}
                {flag ?  <Button variant="contained" color="primary" 
                    endIcon={<PlayCircleFilled onClick={() => {handlePlay()}}/>}>
                    </Button> :
                    <Button variant="contained" color="primary" 
                        endIcon={<PauseCircleFilled onClick={() => {handlePause()}}/>}>
                    </Button>
                }
            </div>

            </h5>

        <p>
        {quiz.map((songName, index)=> {return ( 
           <i style={(trope === index) ? {color: 'black', dir: 'rtl'} : {color: 'yellow', dir: 'rtl'}} onClick={() => playFromSong(index-1)} >{songName.heb}</i>)})}
        </p>

           </quiz>

    )
}
