// import React, {setState, event} from 'react'

import React, {useState, useEffect } from 'react'
import Button from "@material-ui/core/Button";
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
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
      songList.push(items[getRandomInt(0, items.length)]);
    }
    return songList;
  }

  

//   filter(e){
//     this.setState({filter: e.target.value});
// }



  
export default function Quiz( { flashcards } ) {

    var audio = new Audio();

    const [flag, setFlag] = useState(1);
    const [flag2, setFlag2] = useState(false);
    const [trope, setTrope] = useState(0);

    var i = 0;

    function makeSongList (songList) {

        console.log("first song playing", i);

        audio.preload = "auto";
        if (flag === 0) {
            console.log("flag is up before playin first");
        }

        audio.volume = 0.3;
        setTrope(0);
        audio.src = songList[trope].sound;
        audio.playbackRate = 2;
        // flag2 ? audio.play() : console.log("flag2 in first call");
        audio.play();
        // setFlag();
        if (flag === 0) {
            console.log("first song set me true");
        }
    }

    audio.addEventListener('play', function () {
        console.log("hit a play on trope # ", trope);
    }, true);

    audio.addEventListener('ended', function () {
    
        i++; 
        setTrope(i);
        console.log("hit end of audio ", i-1, "now on", i );

        if ((i < quiz.length) ){
            console.log("i < songLen", i, trope);
            setTrope(i);
            console.log("i < songLen new t", i, trope);

            audio.src = quiz[trope].sound;
            audio.playbackRate = 2;
            flag2 ? console.log("flag2 in next call i=", i) : audio.play() ;

            // flag ? audio.play() : audio.pause();
            // if (flag === 1) {
            //     console.log("Yes I'm NOT flag! so adding next");
            //     audio.play();
            // }
            // else {
            //     console.log("Yes AM flag! NOT playing next");

                // audio.pause();
            // }
        }
        if (i === quiz.length) {
            console.log("Finished! reseting highlighted and the flag now");
            setFlag(1);
            setFlag2(0);
            setTrope(0);
        }

        }, false);

    // audio.addEventListener('pause', function () { 
    //     console.log("SOMEONE flag ME!");
    // }, true);

    // const [filter, filtered] = setState(event.target.value)
    let items = flashcards;

    const [quiz, reloadQuiz] = useState(createQuiz(items, getRandomInt(2, 10)));

    

    //pick a song
    // const handleSong = (event, newTrope) => {
    //     setTrope(newTrope);
    // };

    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        reloadQuiz(createQuiz(items, newValue))
    };

    function handlePlay(){
        // console.log("Entering play.  setting flag to false");
        setFlag(0); 
        setFlag2(1);
        console.log("play", [i, flag]);

        // if (flag === true) {
        //     console.log("pre-PLAY-SongLIST");
        // }
        makeSongList(quiz);
        // if (flag === true) {
        //     console.log("post-PLAY-SongLIST");
        // }
        // console.log("exiting Play");
    }

    function handlePause(){
        // console.log("entering Pause.  setting flag to true");
        setFlag(1); 
        setFlag2(0);
        console.log("pause", [i, flag]);

        // console.log("exiting pause");
    }
    
    

    // useEffect(() => {
    //     console.log("effect triggered");
    //     flag ? console.log("effect play is TRUE") : console.log("effect play is FALSE");
    //     console.log("leaving effect trigger");
    //     // const audio = document.getElementById("audio");
    //     // flag ? audio.play() : audio.pause();
    //     // flag ? console.log("effect hi") : console.log("effect bye");

    // })



  

    // var quiz = createQuiz(items, 4);
    // if (filter){
    //     items = items.filter( item =>
    //         item.id.toLowerCase()
    //         .includes.this.state.filter.toLowerCase)
    // }

    // editSearchTerm = (e) => {
    //     this.setState({searchTerm: e.target.value})
    //   }
    
      // reloadQuiz = (e) => {
      //   this.setState({quiz: createQuiz(items, 4)})
      // }
    // dynamicSearch = () => {
    //     return flashcards.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    //   }
    

    return (
         <quiz>
            <h5> Practice
           {/* {pause === true ? 'flag' : 'flag'} */}

           <Button size="small" variant="contained"> 
           <Slider value={value} onChange={handleChange} defaultValue={4}
                // position="static"
                step={1} marks min={1} max={8} valueLabelDisplay="auto" />
           
            </Button>
        

            <div className="controls">

                <Button variant="contained" color="primary"
                    endIcon={<CachedIcon  onClick={() =>  {reloadQuiz(createQuiz(items, value));  console.log("ReOrder");}}/>}>
                    {/* endIcon={<CachedIcon  onClick={() =>  {reloadQuiz(createQuiz(items, value)); setFlag(); console.log("hit play");}}/>}> */}
                </Button> 
                
                {console.log("controls", [flag])}

                {flag ?  <Button variant="contained" color="primary" 
                    endIcon={<PlayCircleFilled onClick={() => {handlePlay()}}/>}>
                        {flag ? "a" : "b"}
                    </Button> :
                    <Button variant="contained" color="primary" 
                        endIcon={<PauseCircleFilled onClick={() => {handlePause()}}/>}>
                        {flag ? "a" : "b"}

                    </Button>
                }

                {/* <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/> */}
            </div>
           {/* <Button variant="contained" color="primary"
                endIcon={<CachedIcon  onClick={() =>  {reloadQuiz(createQuiz(items, value)); setFlag();}}/>}>
            </Button> */}


            {/* <Button variant="contained" color="primary" 
                endIcon={<PlayCircleFilled onClick={() => {makeSongList(audio, quiz);  setFlag();}}/>}>
            </Button> */}
{/*             
            <Button variant="contained" color="primary" 
                endIcon={<PauseCircleFilled onClick={() => { setFlag();}}/>}>
            </Button> */}

            </h5>


        <p>
        {quiz.map((songName, index)=> {return ( 
           <i style={(trope === index) ? {color: 'black'} : {color: 'yellow'}}>{songName.heb}</i>)})}
        </p>


           </quiz>

    )
}
