import React from "react";
// Components
import Button from "@material-ui/core/Button";

import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
// Styles
import {
  makeStyles,
  withStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

// Icons
import Favorite from "@material-ui/icons/Favorite";
import DeleteForever from "@material-ui/icons/DeleteForever";
// Sounds
import like from "./sounds/state-change_confirm-up.wav";
import open from "./sounds/mercha_tipcha.wav";
import close from "./sounds/ui_unlock.wav";


// import munach from "./sounds/mercha_tipcha.wav";
// import kadma_vazla from "./sounds/mercha_tipcha.wav";
// import zakef_gadol from "./sounds/mercha_tipcha.wav";
// import revii from "./sounds/mercha_tipcha.wav";
// import yetiv from "./sounds/mercha_tipcha.wav";
// import sof_pasuk from "./sounds/mercha_tipcha.wav";
// import psik from "./sounds/mercha_tipcha.wav";
// import munach_zarka_segol from "./sounds/mercha_tipcha.wav";
// import munach_zakef_katon from "./sounds/mercha_tipcha.wav";
// import mercha_tipcha from "./sounds/mercha_tipcha.wav";
// import etnachta from "./sounds/mercha_tipcha.wav";
// import gershayim from "./sounds/mercha_tipcha.wav";
// import mapach_pashta from "./sounds/mercha_tipcha.wav";
// import darga_tvir from "./sounds/mercha_tipcha.wav";

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
import darga_tvir from "./sounds/darga_tvir.wav";
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
  const darga_tvir_audio = new Audio(darga_tvir);
  const pazer_audio = new Audio(pazer);
  const sof_aliya_audio = new Audio(sof_aliya);


  const slideAudio = new Audio(slide);

  const playSound = audioFile => {
    audioFile.play();
  };

  const [state, setState] = React.useState({
    checked: true
  });

  // const toggleSwitch = name => event => {
  //   if (event.target.checked) {
  //     playSound(closeAudio);
  //   } else {
  //     playSound(openAudio);
  //   }
  //   setState({ ...state, [name]: event.target.checked });
  // };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>

        <div className={classes.container}>
          
          <Button
            variant="contained"
            onClick={() => playSound(mercha_tipcha_audio)}
          >
            מֵרְכָ֥א טִפְחָ֖א
            Mercha Tipcha
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(munach_audio)}
          >
            מֻנַּ֣ח
            Munach
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(munach_zakef_katon_audio)}
          >
         מֻנַּ֣ח זָקֵף קָטָ֔ן
          Munach Zakef Katon
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(sof_pasuk_audio)}
          >
         סוֹף פָּסֽוּק
        Sof Pasuk
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            fontSize="large" 
            onClick={() => playSound(etnachta_audio)}
          >
            אֶתְנַחְתָּ֑א 
            Etnachta
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(zakef_gadol_audio)}
          >
            זָקֵף גָּד֕וֹל
            Zakef Gadol
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(revii_audio)}
          >
            רְבִ֗יע
            Reviyi
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(gershayim_audio)}
          >
            גֵּרְשַׁ֞יִם 
            Gershayim
          </Button>
        </div>

        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(mapach_pashta_audio)}
          >
            מַהְפַּ֤ך פַּשְׁטָא֙ 
            Mapach Pashta
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(yetiv_audio)}
          >
            יְ֚תִיב 
            Yetiv
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(munach_zarka_segol_audio)}
          >
             מֻנַּ֣ח זַרְקָא֮ מֻנַּ֣ח סֶגּוֹל֒   
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            font-size="10vw"
            onClick={() => playSound(darga_tvir_audio)}
          >
            דַּרְגָּ֧א תְּבִ֛יר  
            Darga Tivir
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => playSound(psik_audio)}
          >
            פָּסֵ֣ק׀
            Piseek
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => playSound(pazer_audio)}
          >
            פָּזֵ֡ר
            Pazer
          </Button>
        </div>
        <div className={classes.container}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => playSound(sof_aliya_audio)}
          >
            Sof Aliyah
          </Button>
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
