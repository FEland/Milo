import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import open from "./sounds/ui_lock.wav";
import close from "./sounds/ui_unlock.wav";

import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';

import Player from './Player_uno';
// import ColorModal from './ColorModal';
// import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      color: 'green',
    },
    grid: {
      width: 500,
      height: 450,
      direction: "row",
      justify: "center",
      alignItems: "center",

    },
    paper: {
    padding: theme.spacing(1),
    justifyContent: 'space-around',
    border: '8px double',
    color: 'white',
    backgroundColor: 'brown',
    },
  }));

//   let songList = Samples;
  let bracha1_1 = "ְבָּרְכוּ אֶת ה' הַמְבֹרָך"
  let bracha1_2 = "בָּרוּךְ ה' הַמְבֹרָךְ לְעוֹלָם וָעֶד"
  let bracha1_3 = "בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם"
  let bracha1_4 = "אֲשֶׁר בָּחַר בָּנוּ מִכָּל הָעַמִּים וְנָתַן לָנוּ אֶת תּוֹרָתוֹ"
  let bracha1_5 = "ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ"

  let bracha2_1 = "בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם"
  let bracha2_2 = "אֲשֶׁר נָתַן לָנוּ תּוֹרָתוֹ תּוֹרַת אֱמֶת וְחַיֵּי עוֹלָם נָטַע בְּתוֹכֵנוּ"
  let bracha2_3 = "ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ"

//   function Age()  {
//     const [d, setTimeSoFar] = useState(0);
//     var t = document.getElementById('player');
//     // t.addEventListener( 'timeupdate', function() {
//     //     setTimeSoFar(t.currentTime);
//     //     console.log(d);
//     // });

//     if (t!==null){
//         t.addEventListener( 'timeupdate', function() {
//             setTimeSoFar(t.currentTime);
//             console.log(d);
//         });
//     }
//     return (
//         <div>

//             {d}
//         </div>
//     );
// }

// const Highlite = ({timeSoFar}) => {

//     var w = 0;
//     for (w = 0; w < songList.length; w++){
//         if (timeSoFar >= songList[w].start && timeSoFar < songList[w].end){
//             return (<p>{songList[w].eng}</p>);
//         }
//     }
//     return (<p>f</p>);
// }

export default function Birkat( ) {

    // const [trope, setTrope] = useState(0);
    const [state, setState] = React.useState({
        // flip: false,
        // volume: 0.5,
        checked: false,
        // color: '#b7bfbe'
    });

    // const [load, setLoading] = React.useState(false);
  const [volume, setVolume] = React.useState(.5);
  var audio = new Audio();

//   const [playing, setPlaying] = React.useState(false);

//     audio.addEventListener('playing', function () {
//         // setLoading(false);
//         setPlaying(true);
//     }, false);

//     audio.addEventListener('ended', function () {
//         setPlaying(false);
//     }, false);

    const classes = useStyles();
    
    const playSound = (song) => {
        // new Audio(song).play();
        // setLoading(true);

        // console.log(volume);
        audio.src = song;
        audio.preload = "metadata";
        audio.playbackRate = 1;
        audio.volume = volume;
        audio.controls = true;
        audio.play();

      };
    // const handleVolumeChange = (event, newValue) => {
    //     setVolume(newValue);
    //     // setState({[state.volume]: newValue });

    //     audio.volume = newValue;
    //     // document.getElementById(id).volume = volume;
    // };

    const handleChange = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });

        if (event.target.flip) {
            playSound(close);  
        } else {
            playSound(open);
        }
    };

    // const [timeSoFar, setTimeSoFar] = React.useState(0);

    // const enableHighlight = (e) => {
    //     var t = document.getElementById('player');

    //     t.addEventListener( 'timeupdate', function() {
    //         // setTimeSoFar(t.currentTime.toFixed(1));
    //         setPlaying(true);
    //         // console.log(timeSoFar);
    //         // var w = 0;
    //         for (var w = 0; w < songList.length; w++){
    //             if (t.currentTime >= songList[w].start && t.currentTime < songList[w].end){
    //                 // return (<p>{songList[w].eng}</p>);
    //                 setTrope(songList[w].id);
    //                 // console.log(trope, songList[w].eng);
    //                 break;
    //             }
    //         }
    //     });
    //     //Removes "playing" animation and removes highlite
    //     setPlaying(false);
    //     setTrope(0);

    // }




    return (        
         <div className={classes.root}>

            <div style={{ color: 'white' }}> 
                    <h1>Practice the Blessings on the Torah!</h1>
            </div>

            <Paper className={classes.paper} >

            <Grid container spacing={2} > 
            
                <Grid item xs={2}>
                    {/* <div  onClick={() => { enableHighlight(true)}}>  */}
                    {!state.checked ? 
                        <Player icon={<PlayCircleFilled/>} label = " Opening Blessing" title = "Opening Blessing" song = './sounds/opening.m4a'/>
                   :
                   <Player icon={<PlayCircleFilled/>} label = " Closing Blessing" title = "Closing Blessing" song = './sounds/closing.m4a'/>
                    }
                        {/* </div> */}


                    <Grid container direction='row' spacing={12}>
                        <Grid item>
                            {/* TODO see tropes */}
                            {/* <Checkbox checked={state.checked} onChange={handleChange} 
                                        color='secondary' name="checked" 
                                        inputProps={{ 'position' : 'right' }}
                            /> */}
                            <Tooltip title="Switch Blessings" arrow placement="right">
                                <Switch
                                    checked={state.checked}
                                    onChange={handleChange}
                                    name="checked"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            {/* TODO COLOR */}
                            {/* <ColorModal color = {color} callBack = {callBack} /> */}
                        </Grid>
                    
                    {/* {load && <Grid item> <CircularProgress color="primary"  className={classes.progress} /> </Grid> } */}

                    {/* {playing &&  
                        <Grid item>
                        <svg id="equalizer" width="40px" height="28px" viewBox="0 0 10 7">
                        <g fill="#000000">
                            <rect id="bar1" transform="translate(0.5, 6.0) rotate(180.0) translate(-0.5, -6.0) " x="0" y="5" width="1" height="2" />
                            <rect id="bar2" transform="translate(3.5, 4.5) rotate(180.0) translate(-3.5, -4.5) " x="3" y="2" width="1" height="5" />
                            <rect id="bar3" transform="translate(6.5, 3.5) rotate(180.0) translate(-6.5, -3.5) " x="6" y="0" width="1" height="7" />
                            <rect id="bar4" transform="translate(9.5, 5.0) rotate(180.0) translate(-9.5, -5.0) " x="9" y="3" width="1" height="4" />
                        </g>
                        </svg> 
                        </Grid> } */}

                    </Grid>
                

                    
                    {/* <Switch
                    checked={flip}
                    onChange={handleChange}
                    name="toggle"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    /> */}

                </Grid>

                <Grid item xs>
                </Grid>

            <Grid item >


            {/* <Grid container direction='row-reverse'  >  */}


            {/* style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} > */}
            {/* <Tooltip title="Click the words to hear indivual recordings             or listen to all of them by pressing the button on the far left" arrow placement="top"> */}
                {/* <div style={{color:'#1c313a', 'font-size':'2vw'}}> &lt;&lt;&lt; </div> */}
                <div style={{color:'#1c313a', 'font-size':'2vw'}}> </div>
                <fl style={{ 'font-size':'2vw', 'line-height': '1.6'}}>
                      {!state.checked ? 
                                    <>
                                        <Hidden smDown>
                                            <span > 
                                            <b>{bracha1_1}</b> <br/>
                                            <span style={  { 'opacity': '.7'} } > {bracha1_2} </span >  <br/>
                                            {bracha1_3} <br/>
                                            {bracha1_4} <br/>
                                            {bracha1_5} 
                                            <br/> 
                                            _______________________________________________________ <br/>
                                            <b>Bless Hashem, the blessed One.</b><br/>
                                            <span style={  { 'opacity': '.7'} } > Blessed is Hashem, the blessed One, for all eternity. </span >  <br/>
                                            Blessed are You, <i>Hashem</i>, our God, King of the Universe, <br/>
                                            That you chose us from all the Nations, and gave us your Torah <br/>
                                            Blessed are You <i>Hashem</i>, who <i>[continuously]</i> gives us the Torah
                                            </span >

                                        </Hidden>
                                        <Hidden mdUp>
                                            <span style={  { 'fontSize' : '3vw'} } > 
                                            <b>{bracha1_1}</b> <br/>
                                            <span style={  { 'opacity': '.7'} } > {bracha1_2} </span >  <br/>
                                            {bracha1_3} <br/>
                                            {bracha1_4} <br/>
                                            {bracha1_5} 
                                            <br/> 
                                            ____________________________________ <br/>
                                            <b>Bless Hashem, the blessed One.</b><br/>
                                            <span style={  { 'opacity': '.7'} } > Blessed is Hashem, the blessed One, for all eternity. </span >  <br/>
                                            Blessed are You, <i>Hashem</i>, our God, King of the Universe, <br/>
                                            Who chose us from all the Nations, and gave us your Torah <br/>
                                            Blessed are You <i>Hashem</i>, Giver of the Torah
                                            </span >
                                        </Hidden>
                                        </>: 
                                        <>
                                        <Hidden smDown>
                                            <span > 
                                            {bracha2_1} <br/>
                                            {bracha2_2} <br/>
                                            {bracha2_3} <br/>
                                            _______________________________________________________ <br/>

                                            Blessed are You, <i>Hashem</i>, our God, King of the Universe, <br/>
                                            Who gave us the Torah of Truth, and planted eternal life within us <br/>
                                            Blessed are You <i>Hashem</i>, who <i>[continuously]</i> gives us the Torah
                                            </span >
                                        </Hidden>
                                        <Hidden mdUp>
                                            <span style={  { 'fontSize' : '3vw'} } >
                                            {bracha2_1} <br/>
                                            {bracha2_2} <br/>
                                            {bracha2_3} <br/>
                                            ____________________________________ <br/>
                                            Blessed are You, <i>Hashem</i>, our God, King of the Universe, <br/>
                                            Who gave us the Torah of Truth, <br/>
                                            and planted eternal life within us <br/>
                                            Blessed are You <i>Hashem</i>, Giver of the Torah
                                            </span >                                        
                                            </Hidden>
                                        </>}

                                        
                                    </fl>
                        
            {/* </Grid> */}
                
            </Grid>
            <Divider orientation='vertical' flexItem/>

        </Grid>


        </Paper>
            
        </div>


    )
}
