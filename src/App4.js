import React, { useState } from 'react'; 
// Components
import FlashcardList from "./FlashcardList";
import Button from "@material-ui/core/Button";
import {Samples} from './Tropes'
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
// import mercha from "./images/mercha.png";
// Styles
import {
  makeStyles,
  withStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

// Sounds

import munach from "./sounds/munach.wav";
import kadma_vazla from "./sounds/kadma_vazla.wav";
import zakef_gadol from "./sounds/zakef_gadol.wav";
import revii from "./sounds/revii.wav";
import yetiv from "./sounds/yetiv.wav";
import sof_pasuk from "./sounds/sof_pasuk.wav";
import psik from "./sounds/psik.wav";
import munach_zarka_segol from "./sounds/munach_zarka_segol.wav";
import munach_zakef_katon from "./sounds/munach_zakef_katon.wav";
import mercha_tipcha from "./sounds/mercha_tipcha.wav";
import etnachta from "./sounds/etnachta.wav";
import gershayim from "./sounds/gershayim.wav";
import mapach_pashta from "./sounds/mapach_pashta.wav";
// import darga_tvir from "./sounds/darga_tvir.wav";
import pazer from "./sounds/pazer.wav";
import sof_aliya from "./sounds/sof_aliya.wav";

import slide from "./sounds/navigation_hover-tap.wav";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#43a047"
    },
    secondary: {
      main: "#ff5722"
    }
  }
});

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    container: {
      padding: "20px",
      textAlign: "center"
    }
  })
);


// const Samples = [
//   {
//       id: 1,
//       question: "w",
//       image: './images/mercha.png',
//       options: ['1', '2','3'],
//       answer: 3
//   },
//   {
//       id: 2,
//       question: "w",
//       image: "tipcha.jpeg",
//       options: ['1', '2','3'],
//       answer: 3
//   }
// ]


// const Samples = [
//   {
//       id: 1,
//       image: "./images/mercha.png",
//       options: ['1', '2','3'],
//       sound: './sounds/mercha.wav',
//       heb: 'מֵרְכָ֥א',
//       eng: 'Mercha'
//   },
//   {
//       id: 2,
//       image: "./images/mercha_tipcha.png",
//       options: ['1', '2','3'],
//       sound: './sounds/mercha_tipcha.wav',
//       heb: 'מֵרְכָ֥א טִפְחָ֖א',
//       eng: 'Mercha Tipcha'
//   },
//   {
//       id: 3,
//       image: "./images/tipcha.png",
//       options: ['1', '2','3'],
//       sound: './sounds/tipcha.wav',
//       heb:  'טִפְחָ֖א',
//       eng: 'Tipcha'
//   }
// ]


export default function MaterialDesignSounds() {

  const mercha_tipcha_audio = new Audio(mercha_tipcha);
  const munach_audio = new Audio(munach);
  const kadma_vazla_audio = new Audio(kadma_vazla);
  const zakef_gadol_audio = new Audio(zakef_gadol);
  const revii_audio = new Audio(revii);
  const yetiv_audio = new Audio(yetiv);
  const sof_pasuk_audio = new Audio(sof_pasuk);
  const psik_audio = new Audio(psik);
  const munach_zarka_segol_audio = new Audio(munach_zarka_segol);
  const munach_zakef_katon_audio = new Audio(munach_zakef_katon);
  const etnachta_audio = new Audio(etnachta);
  const gershayim_audio = new Audio(gershayim);
  const mapach_pashta_audio = new Audio(mapach_pashta);
  // const darga_tvir_audio = new Audio(darga_tvir);
  const pazer_audio = new Audio(pazer);
  const sof_aliya_audio = new Audio(sof_aliya);
  const slideAudio = new Audio(slide);

  const playSound = audioFile => {
    audioFile.play();
  };

  // const [state, setState] = React.useState({
  //   checked: true
  // });

  // const toggleSwitch = name => event => {
  //   if (event.target.checked) {
  //     playSound(closeAudio);
  //   } else {
  //     playSound(openAudio);
  //   }
  //   setState({ ...state, [name]: event.target.checked });
  // };


  // const setState = React.useState({
  //   clicked: true
  // });
  const [count, setCount] = useState();
  const [flashcards, setFlashcard] = useState(Samples);
  
  // const playSound = audioFile => {
  //   audioFile.play();
  // };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

          <audio
              controls
              src="./sounds/munach.wav">
          </audio>



      <FlashcardList flashcards = {flashcards} />



----------------------------------------------------------------------
      <div className={classes.root}>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <ro>
        קַדְמָ֨א מֻנַּ֣ח זַרְקָא֮ מֻנַּ֣ח סֶגּוֹל֒ מֻנַּ֣ח ׀ מֻנַּ֣ח רְבִ֗יע מַהְפַּ֤ך פַּשְׁטָא֙ זָקֵף־קָטָ֔ן זָקֵף־גָּד֕וֹל מֵרְכָ֥א טִפְּחָ֖א מֻנַּ֣ח אֶתְנַחְתָּ֑א פָּזֵ֡ר תְּלִישָא־קְטַנָּה֩ תְּ֠לִישָא גְדוֹלָה קַדְמָ֨א וְאַזְלָ֜א אַזְלָא־גֵּ֜רֵשׁ גֵּרְשַׁ֞יִם דַּרְגָּ֧א תְּבִ֛יר יְ֚תִיב פְּסִיק׀ מֵרְכָ֥א טִפְּחָ֖א מֵרְכָ֥א סוֹף פָּסֽוּק׃ שַׁלְשֶׁ֓לֶת מֵרְכָא כְּפוּלָ֦ה יֵרֶח בֶּן יוֹמ֪וֹ קַרְנֵי פָרָ֟ה׃
        </ro>

        <div className={classes.container}>
          <ro
            onClick={() => {playSound(mercha_tipcha_audio); 
              setCount(!count);
            }}
          >
             {/* {
                React.state.clicked? 'First Text' : 'Second Text'
              } */}
            {/* מֵרְכָ֥א טִפְחָ֖א
            Mercha Tipcha */}
            {count? 'מֵרְכָ֥א טִפְחָ֖א' : 'Mercha Tipcha'}
            {/* {this.state.count} */}
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => {playSound(munach_audio); 
              setCount(!count);
            }}          >
            {/* מֻנַּ֣ח
            Munach */}
            {count? 'מֻנַּ֣ח' : 'Munach'}

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(munach_zakef_katon_audio)}
          >
         מֻנַּ֣ח זָקֵף קָטָ֔ן
          Munach Zakef Katon
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(sof_pasuk_audio)}
          >
         סוֹף פָּסֽוּק
        Sof Pasuk
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            fontSize="large" 
            onClick={() => playSound(etnachta_audio)}
          >
            אֶתְנַחְתָּ֑א 
            Etnachta
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(zakef_gadol_audio)}
          >
            זָקֵף גָּד֕וֹל
            Zakef Gadol
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(revii_audio)}
          >
            רְבִ֗יע
            Reviyi
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(gershayim_audio)}
          >
            גֵּרְשַׁ֞יִם 
            Gershayim
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(mapach_pashta_audio)}
          >
            מַהְפַּ֤ך פַּשְׁטָא֙ 
            Mapach Pashta
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(yetiv_audio)}
          >
            יְ֚תִיב 
            Yetiv
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(munach_zarka_segol_audio)}
          >
             מֻנַּ֣ח זַרְקָא֮ מֻנַּ֣ח סֶגּוֹל֒   
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            size="large"
            font-size="10vw"
            // onClick={() => playSound(darga_tvir_audio)}
          >
            דַּרְגָּ֧א תְּבִ֛יר  
            Darga Tivir
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            size="large"
            onClick={() => playSound(psik_audio)}
          >
            פָּסֵ֣ק׀
            Piseek
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            size="large"
            onClick={() => playSound(pazer_audio)}
          >
            פָּזֵ֡ר
            Pazer
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(sof_aliya_audio)}
          >
            Sof Aliyah
          </ro>
        </div>
      {/* 
        <div className={classes.container}>
          <Switch checked={state.checked} onChange={toggleSwitch("checked")} />
        </div> */}

        {/* <div className={classes.container}>
          <Slider
            onChangeCommitted={() => playSound(slideAudio)}
            defaultValue={3}
            step={1}
            marks
            min={1}
            max={10}
          />
        </div> */}

      </div>
    </ThemeProvider>
  );
}
