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

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  function shuffleTropes(items, num){ //https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
    console.log("items came in as:", items, typeof items);
    let nums = Array.from(items.keys());
    console.log("pre-shuffled nums", nums);

    let ranNums = [];
    let i = nums.length;
    let j = 0;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranNums.push(nums[j]);
        nums.splice(j,1);
    }
    // nums.slice(0, num);
    console.log("shuffled nums", ranNums);
    return ranNums;

  }

  function prePopulateItems(){
    let items = new Map();
    Samples.forEach(element => {
      items.set(element.id, element);
    });
    return items;
  }
//   function prePopulateItems(tropes){
//     let items = new Map();
//     tropes.forEach(element => {
//       items.set(element.id, element);
//     });
//     return items;
//   }
//   let songList = prePopulateItems(Samples);

  function createQuiz(items, num) {
    var i; var songList = []; var r; 
    console.log("start of CreateQuiz");
    let order = shuffleTropes(items, num);
    // var set = new Set();
    console.log("bbbb", items, items.size, "num",  num);
    if (items.size === undefined) {
        console.log("ddd");
        // items = new Map();
        // Samples.forEach(element => {
        //   items.set(element.id, element);
        // });
        items = prePopulateItems();
        num = 8;
        // num = Math.max(Math.floor(items.size/2),8)
        // createQuiz(Samples, 4);
        // songList = {Samples};
        // return songList;
        // items = [...Samples];
      ;
    }

    console.log("items has size", items, items.size, num);
    // shuffleTropes(items, num);
    order = shuffleTropes(items, num);
    for (i = 0; i < num; i++){
        // items.keys()
        // r = getRandomInt(1, items.size);
        // if (set.has(r))
        // set.add(r)        
        let x = items.get(order[i]);
        console.log('r is', order[i], 'items.get(r) is', x);
        if (x !== undefined) songList.push(x);
        // songList;
    }
    console.log("songlist:", songList);
    return songList;


    // if (!songList.has(val.id)) {
    //     console.log("a" + val.id);
    //     songList.set(val.id, val);
    //     // songList.splice(songList.indexOf(val),1)
    //   }
    //   else {
    //     console.log("b" + val.id);
    //     songList.delete(val.id);
    //     // songList.splice(songList.indexOf(val),0,val);
    //   }
  
  }


//   let items = prePopulateItems();
  
export default function Quiz( { ...props} ) {

    let audio = new Audio();
    // let fast = 1;
    // const speeds = [.5, 1, 1.5, 2, 2.5];
    const [flag, setFlag] = useState(1);
    const [trope, setTrope] = useState(0);

    // const [speed, setSpeed] = useState(1);

    // const handleSpeed = (val) => {
    //     setSpeed(speed => val);
    //   }
  
      
    let i = -1;
    let myflag = 0;
    var speed = 1;

    function getSpeed(){
        return speed;
    }

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
        // console.log("here");
        if (!myflag) {
            playNext();
            }
        else {
            audio.pause();
        }
    }, false);

    // let songList = prePopulateItems(Samples);

    let items = props.flashcards;
    // console.log("just initialized items to", items, typeof items);
    // let items = prePopulateItems()
    console.log("just initialized items to", items, typeof items);

    const [quiz, reloadQuiz] = useState(createQuiz(items, items.size/2));
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
            {console.log("smo")}

            <div className="controls">
            
                {/* <h3>This is Child Component 
                <Button onClick={props.handleParentFun("YoureValue")}>
                    Call to Parent Component Function
                </Button>
                </h3>
                 */}

                <Button variant="contained" color="primary"
                    endIcon={<CachedIcon  onClick={() =>  {reloadQuiz(createQuiz(items, Math.min(Math.floor(items.size/2),value)));}}/>}>
                    {console.log("hi")}
                </Button> 

                {/* <Button variant="contained" color="primary"
                    startIcon = {<DoubleArrowIcon onChange={() => { handleSpeed(value) ;}} />}>
                        {speed}
                </Button>  */}


                <Button size="small" variant="contained"> 
                    <Slider value={value} onChange={handleChange} defaultValue={Math.min(Math.floor(items.size/2),4)}
                            step={1} marks min={1} max={Math.min(items.size, 8)} valueLabelDisplay="auto" />
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
            {console.log("abp", quiz)}


        <p>
        {quiz.map((songName, index)=> {return ( 
           <i style={(trope === index) ? {color: 'black', dir: 'rtl'} : {color: 'yellow', dir: 'rtl'}} onClick={() => playFromSong(index-1)} >{songName.heb}</i>)})}
        </p>

           </quiz>

    )
}
