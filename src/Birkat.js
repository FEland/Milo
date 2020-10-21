import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';

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
// import CircularProgress from '@material-ui/core/CircularProgress';



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
//   let bracha1_1 = "ְבָּרְכוּ אֶת ה' הַמְבֹרָך"
//   let bracha1_2 = "בָּרוּךְ ה' הַמְבֹרָךְ לְעוֹלָם וָעֶד"
//   let bracha1_3 = "בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם"
//   let bracha1_4 = "אֲשֶׁר בָּחַר בָּנוּ מִכָּל הָעַמִּים וְנָתַן לָנוּ אֶת תּוֹרָתוֹ"
//   let bracha1_5 = "ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ"

//   let bracha2_1 = "בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם"
//   let bracha2_2 = "אֲשֶׁר נָתַן לָנוּ תּוֹרַת אֱמֶת וְחַיֵּי עוֹלָם נָטַע בְּתוֹכֵנוּ"
//   let bracha2_3 = "ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ"

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

    // function detectDevice(){
    //     let detectObj = {
    //       device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
    //       orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
    //     }
    //     return detectObj
    //   }

    // const [trope, setTrope] = useState(0);
    const [state, setState] = React.useState({
        // flip: false,
        // volume: 0.5,
        checked: false,
        // color: '#b7bfbe'
    });

    // const [load, setLoading] = React.useState(false);
//   const [volume, setVolume] = React.useState(.5);
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
        // audio.volume = volume;
        audio.volume = 1;
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

    // const headers = new Headers()
    // headers.append("Content-Type", "application/json")

    // const body = {"message": detectDevice().device + " , " + new Date() }

    // const options = {
    // method: "POST",
    // headers,
    // mode: "cors",
    // body: JSON.stringify(body),
    // }

    // const fetchData = async () => {
    //     try {
    //         const resp = await fetch("https://76103417c60b0ff306268dcb81ecf967.m.pipedream.net", options);
    //         // const resp = await fetch("https://hooks.zapier.com/hooks/catch/8684953/ogsgyo3", options);
            
    //         // alert(resp);
    //         console.log(resp);
    //     } 
    //     catch(err) {
    //         // alert("err");
    //         console.log(resp);

    //     }
    // };



    return (        
         <div className={classes.root}>

            <div style={{ color: 'white' }}> 
                    <h1>Practice the Blessings on the Torah!</h1>
                    {/* <Button  onClick={() => { fetchData()}} > Br </Button>  */}
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
                    
                    </Grid>
            

                </Grid>

                <Grid item xs>
                </Grid>

            <Grid item >


            {/* <Grid container direction='row-reverse'  >  */}


            {/* style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} > */}
            {/* <Tooltip title="Click the words to hear indivual recordings             or listen to all of them by pressing the button on the far left" arrow placement="top"> */}
                {/* <div style={{color:'#1c313a', 'font-size':'2vw'}}> &lt;&lt;&lt; </div> */}
                {/* <div style={{color:'#1c313a', 'font-size':'2vw'}}> </div> */}
                <div style={{  'font-size':'2vw', 'line-height': '1.6','font-family':  'serif', 'cursor': 'pointer'}}>
                      {!state.checked ? 
                                    <>
                                        <Hidden smDown>
                                            <span > 
                                            {/* <b>{bracha1_1}</b> <br/>
                                            <span style={  { 'opacity': '.7'} } > {bracha1_2} </span >  <br/>
                                            {bracha1_3} <br/>
                                            {bracha1_4} <br/>
                                            {bracha1_5} 
                                            <br/>  */}

                                            <b>בָּרְכוּ אֶת ה' הַמְבֹרָך</b> <br/>
                                            <span style={  { 'opacity': '.7'} } > בָּרוּךְ ה' הַמְבֹרָךְ לְעוֹלָם וָעֶד</span >  <br/>
                                            בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם<br/>
                                            אֲשֶׁר בָּחַר בָּנוּ מִכָּל הָעַמִּים וְנָתַן לָנוּ אֶת תּוֹרָתוֹ<br/>
                                            ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ<br/>
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
                                            {/* <b>{bracha1_1}</b> <br/>
                                            <span style={  { 'opacity': '.7'} } > {bracha1_2} </span >  <br/>
                                            {bracha1_3} <br/>
                                            {bracha1_4} <br/>
                                            {bracha1_5} 
                                            <br/>  */}
                                            <b>בָּרְכוּ אֶת ה' הַמְבֹרָך</b> <br/>
                                            <span style={  { 'opacity': '.7'} } > בָּרוּךְ ה' הַמְבֹרָךְ לְעוֹלָם וָעֶד</span >  <br/>
                                            בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם<br/>
                                            אֲשֶׁר בָּחַר בָּנוּ מִכָּל הָעַמִּים וְנָתַן לָנוּ אֶת תּוֹרָתוֹ<br/>
                                            ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ<br/>
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
                                            {/* {bracha2_1} <br/>
                                            {bracha2_2} <br/>
                                            {bracha2_3} <br/> */}

                                            בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם<br/>
                                            אֲשֶׁר נָתַן לָנוּ תּוֹרַת אֱמֶת וְחַיֵּי עוֹלָם נָטַע בְּתוֹכֵנוּ<br/>
                                            ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ<br/>
                                            ____________________________________ <br/>
                                            Blessed are You, <i>Hashem</i>, our God, King of the Universe, <br/>
                                            Who gave us the Torah of Truth, and planted eternal life within us <br/>
                                            Blessed are You <i>Hashem</i>, who <i>[continuously]</i> gives us the Torah
                                            </span >
                                        </Hidden>
                                        <Hidden mdUp>
                                            <span style={  { 'fontSize' : '3vw'} } >
                                            {/* {bracha2_1} <br/>
                                            {bracha2_2} <br/>
                                            {bracha2_3} <br/> */}

                                            בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם<br/>
                                            אֲשֶׁר נָתַן לָנוּ תּוֹרַת אֱמֶת וְחַיֵּי עוֹלָם נָטַע בְּתוֹכֵנוּ<br/>
                                            ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ<br/>
                                            ____________________________________ <br/>
                                            Blessed are You, <i>Hashem</i>, our God, King of the Universe, <br/>
                                            Who gave us the Torah of Truth, <br/>
                                            and planted eternal life within us <br/>
                                            Blessed are You <i>Hashem</i>, Giver of the Torah
                                            </span >                                        
                                            </Hidden>
                                        </>}

                                        
                                    </div>
                        
            {/* </Grid> */}
                
            </Grid>
            <Divider orientation='vertical' flexItem/>

        </Grid>


        </Paper>


        <div style={{ color: 'white' }}> 
                    <h1>Practice the Modeh Ani Prayer!</h1>
                    {/* <Button  onClick={() => { fetchData()}} > Br </Button>  */}
        </div>

        <Paper className={classes.paper} >

            <Grid container spacing={3} > 
            
            <Grid item xs={2}>
                <Player icon={<PlayCircleFilled/>} label = "Modeh Ani" title = "Modeh Ani" song = './sounds/ModehAni.m4a'/>
            </Grid>

            <Grid item xs>

                <div style={{  'font-size':'2vw', 'line-height': '1.6','font-family':  'serif', 'cursor': 'pointer'}}>
                      
                    <Hidden smDown>
                        <span > 
                        מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּם<br/>
                        שֶׁהֶחֱזַֽרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה, רַבָּה אֱמוּנָתֶֽךָ<br/>
                        ____________________________________ <br/>
                        Grateful am I to You, O living and eternal King <br/>
                        for You have returned my soul within me with compassion <br/>
                        abundant is Your loyalty + faithfulness [in me]!
                        </span >

                    </Hidden>
                    <Hidden mdUp>
                        <span style={  { 'fontSize' : '3vw'} } > 
                        מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּם<br/>
                        שֶׁהֶחֱזַֽרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה, רַבָּה אֱמוּנָתֶֽךָ<br/>
                        ____________________________________ <br/>
                        Grateful am I to You, O living and eternal King <br/>
                        for You have returned my soul within me with compassion <br/>
                        abundant is Your loyalty + faithfulness [in me]!
                        </span >
                    </Hidden>
                </div>
                        
            </Grid>
            
            {/* <Divider orientation='vertical' flexItem/> */}

        </Grid>


        </Paper>
            
        </div>


    )
}
