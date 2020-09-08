import React, {useState} from 'react'
import Button from "@material-ui/core/Button";
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import {Samples} from './Tropes';
import Tooltip from '@material-ui/core/Tooltip';

// import SpeedIcon from '@material-ui/icons/Speed';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import CachedIcon from '@material-ui/icons/Cached';
import Slider from '@material-ui/core/Slider';
import Hidden from '@material-ui/core/Hidden';

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


export default function CreateQuiz( { ...props} ) {

    var audio = props.audio
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
    const speeds = [.5, 1.0, 1.5, 2.0, 2.5];
    const speeds2 = ['0.5', '1.0', '1.5', '2.0', '2.5'];

    const [restartFlag, setRestartFlag] = useState(false);
    const [flag, _setFlag] = useState(false);
    const [trope, _setTrope] = useState(0);
    const [speed, _setSpeed] = useState(1);


    // const [myState, _setMyState] = React.useState(0);

    const tropeRef = React.useRef(trope);
    const setTrope = data => {
        tropeRef.current = data;
        _setTrope(data);
    };

    const flagRef = React.useRef(flag);
    const setFlag = data => {
        flagRef.current = data;
        _setFlag(data);
    };

    const speedRef = React.useRef(speed);
    const setSpeed = data => {
        speedRef.current = data;
        _setSpeed(data);
    };

    // const [speed, setSpeed] = useState(1);

    const updateSpeed = () => {
        // setSpeed(speed => speed = val);
        setSpeed((speed + 1) % speeds.length);
        // speed_index = (speed_index + 1) % speeds.length;
        // console.log(speed_index);
        // setSpeed(speeds[speed_index]);
      }
  
    // var speed_index = 1;
    var i = 0;
    var myflag = false;
    // var speed = 1;

    // function getSpeed(){
    //     return speed;
    // }

    function cont (index = 0) {

        // audio.playbackRate = speeds[speed];

        if(myflag && index < quiz.length) {
            setTrope(index);
            setRestartFlag(false)

            audio.src = quiz[index].sound;


            var playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {

                // Automatic playback started!
                    
                })
                .catch(error => {
                // Auto-play failed
                });
            }
            
        }
    };


    const resetFlag = () => {
        flagRef.current = false;
        _setFlag(false);
        myflag = false;
        setFlag(false);
    };

    // function findIndex (src){
    //     var w = -1;
    //     for (w = 0; w < quiz.length; w++){
    //         let file = './sounds/' + src.replace(/^.*(\\|\/|\:)/, '')
    //         if (quiz[w].sound === file){
    //             return w;
    //         }
    //     }
    //     return quiz.length-1;
    // }

    audio.addEventListener('ended', function(){
        i = i + 1;
        audio.playbackRate = speeds[speed];

        if (i < quiz.length){
            //todo try or = 1
            if (i !== quiz.length-1 ){
                setFlag(true); 
            }
            cont(i);
        } 
        else{
            audio.pause();
            
            i = 0;
            setTrope(0);

            resetFlag()
            
            setRestartFlag(true)
        }

    }, false);


    const [quiz, _reloadQuiz] = React.useState(createQuiz(items, Math.min(Math.floor(items.length/2),8)));
    const [value, setValue] = React.useState(4);
    const quizRef = React.useRef(quiz);

    const reloadQuiz = data => {
        quizRef.current = data;
        _reloadQuiz(data);
        handlePause();
        i = 0;
        setTrope(0);
        resetFlag()
        setRestartFlag(true)
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        reloadQuiz(createQuiz(items, newValue));
        // audio.pause()
    };

    // playFromSong
    const playFromSong = (index) => {
        
        myflag = true;
        setFlag(true);
        i = index;
        setTrope(index);
        cont(i);

    };

    function handlePlay(){

        i = trope;
        myflag = true;
        setFlag(true);
        cont(i);
    }

    function handlePause(){

        myflag = false;
        setFlag(false);
        audio.pause();



    }

    audio.playbackRate = speeds[speed];



    return (
        
         <quiz>
            Press Play or on one of the Trope to begin!
            
            <h5> 

            <div className="controls" >
            
                <Tooltip title="Reload" arrow placement={props.orientation ? "bottom" : "left"} > 
                <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained" color="primary"
                    onClick={() => {reloadQuiz(createQuiz(items, value));}}><CachedIcon onClick={() => {reloadQuiz(createQuiz(items, value));}}/>

                    {/* endIcon={<CachedIcon  onClick={() => {reloadQuiz(createQuiz(items, value));}}/>}> */}
                </Button> 
            </Tooltip>
            <Tooltip title="Adjust Speed" arrow placement={props.orientation ? "bottom" : "right"}>
                <Button style={{maxWidth: '50px', maxHeight: '30px', minWidth: '50px', minHeight: '30px'}} variant="contained" color="primary"
                    // startIcon = {<DoubleArrowIcon onClick={() => { updateSpeed()}} />}>
                    //     {speeds[speed]}
                    onClick={() => { updateSpeed()}}>
                    <DoubleArrowIcon onClick={() => { updateSpeed()}}/>{speeds2[speed]}
                </Button> 
            </Tooltip>
            <Tooltip title={props.orientation ? "How Many Tropes?" : "# Tropes"} arrow placement={props.orientation ? "bottom" : "left"}>
                <Button style={{maxWidth: '50px', maxHeight: '30px', minWidth: '50px', minHeight: '30px'}} size="small" variant="contained"> 
                    <Slider value={value} onChange={handleChange} defaultValue={Math.min(Math.floor((items.length+1)/2),4)}
                            step={1}  min={0} max={Math.min(items.length, 8)} valueLabelDisplay="auto" />
                    </Button>
            </Tooltip>

                    
            <Tooltip title="Play/Pause" arrow placement={props.orientation ? "bottom" : "right"}>

                {/* only shows play or pause based off flag state.. flag doesn't work must be fixed! */}
                {!restartFlag ? 
                    !flag ? 
                    <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained" color="primary" 
                    onClick={() => handlePlay()}><PlayCircleFilled onClick={() => handlePlay()}/>
                    </Button> :
                    <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained" color="primary" 
                    onClick={() => handlePause()}><PauseCircleFilled onClick={() => handlePause()}/>
                    </Button>
                : 
                <Button style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant="contained" color="primary" 
                onClick={() => handlePlay()}><PlayCircleFilled onClick={() => handlePlay()}/>
                </Button>
                }
            </Tooltip>

            </div>

            </h5>

            <p>
                {!props.level ? 
                    <><Hidden xsDown>
                    {quiz.map((songName, index)=> {return ( 
                        (trope === index) ?

                        <img src={songName.image} onClick={() => playFromSong(index)} alt="icon" loading="lazy" width="100" height="100" style={ {'opacity' : '.5'} }/>
                        :<img src={songName.image} onClick={() => playFromSong(index)} alt="icon" loading="lazy" width="100" height="100" style={  {'border' : '0px solid black'}  }/>

                    )}) }
                    
                    </Hidden>
                    <Hidden smUp>
                    {quiz.map((songName, index)=> {return ( 
                        (trope === index) ?

                        <img src={songName.image} onClick={() => playFromSong(index)} alt="icon" loading="lazy" width="50" height="50" style={ {'opacity' : '.5'} }/>
                        :<img src={songName.image} onClick={() => playFromSong(index)} alt="icon" loading="lazy" width="50" height="50" style={  {'border' : '0px solid black'}  }/>

                    )}) }

                    </Hidden>
                    </>
                    
                    :

                    quiz.map((songName, index)=> {return ( 
                        <i style={(trope === index) ? {color: 'black', dir: 'rtl'} : {color: 'yellow', dir: 'rtl'}} onClick={() => playFromSong(index)}>{songName.heb}</i>
                    )})
                }
            </p>
        </quiz>

    )
}
