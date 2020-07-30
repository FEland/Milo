import React, { useState }  from 'react'; 
import master_tikkun from './tikkun-master4.png'; // Tell webpack this JS file uses this image
import Countdown from './countdown'; // /** This countdown component is from https://medium.com/@kristin_baumann/react-countdown-6455838b6faf */
import FlashcardList from "./FlashcardList";
import {Samples} from './Tropes'

// Styles
import {
  makeStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Sounds

import munach from "./sounds/munach.wav";
import kadma_vazla from "./sounds/kadma_vazla.wav";
import zakef_gadol from "./sounds/zakef_gadol.wav";
import munach_revii from "./sounds/munach_revii.wav";
import yetiv from "./sounds/yetiv.wav";
import sof_pasuk from "./sounds/sof_pasuk.wav";
import psik from "./sounds/psik.wav";
import munach_zarka_segol from "./sounds/munach_zarka_segol.wav";
import munach_zakef_katon from "./sounds/munach_zakef_katon.wav";
import mercha_tipcha from "./sounds/mercha_tipcha.wav";
import etnachta from "./sounds/etnachta.wav";
import munach_etnachta from "./sounds/munach_etnachta.wav";
import gershayim from "./sounds/gershayim.wav";
import mapach_pashta from "./sounds/mapach_pashta.wav";
import darga_tvir from "./sounds/darga_tvir.wav";
import pazer from "./sounds/pazer.wav";
import sof_aliya from "./sounds/sof_aliya.wav";
import tlisha_gdola from "./sounds/tlisha_gdola.wav";
import tlisha_ktana from "./sounds/tlisha_ktana.wav";
import kadma from "./sounds/kadma.wav";
import pashta from "./sounds/pashta.wav";


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
    root: {
        flexGrow: 1,
    },
    container: {
      padding: "20px",
      textAlign: "center"
    }
  })
);

export default function AppWorkin() {

  const mercha_tipcha_audio = new Audio(mercha_tipcha);
  const munach_audio = new Audio(munach);
  const kadma_vazla_audio = new Audio(kadma_vazla);
  const zakef_gadol_audio = new Audio(zakef_gadol);
  const munach_revii_audio = new Audio(munach_revii);
  const yetiv_audio = new Audio(yetiv);
  const sof_pasuk_audio = new Audio(sof_pasuk);
  const psik_audio = new Audio(psik);
  const munach_zarka_segol_audio = new Audio(munach_zarka_segol);
  const munach_zakef_katon_audio = new Audio(munach_zakef_katon);
  const etnachta_audio = new Audio(etnachta);
  const munach_etnachta_audio = new Audio(munach_etnachta);
  const gershayim_audio = new Audio(gershayim);
  const mapach_pashta_audio = new Audio(mapach_pashta);
  const darga_tvir_audio = new Audio(darga_tvir);
  const pazer_audio = new Audio(pazer);
  const sof_aliya_audio = new Audio(sof_aliya);
  const tlisha_gdola_audio = new Audio(tlisha_gdola);
  const tlisha_ktana_audio = new Audio(tlisha_ktana);
  const kadma_audio = new Audio(kadma);
  const pashta_audio = new Audio(pashta);


  const playSound = audioFile => {
    audioFile.play();
  };

  const classes = useStyles();
  const [flashcards, setFlashcard] = useState(Samples);


  return (



    <ThemeProvider theme={theme}>

      <div className={classes.root}>

        
        <Grid container spacing={3}>

        <body>
            <strong> Welcome Samuel to your special Bar Mitzva practice Website!  </strong>
            <br></br>

           <Countdown date={'2020-09-05T09:00:00'} text='Ki Tavo Bar Mitzva Countdown' />

        <div class= "master_tikkun">
          <img src={master_tikkun} alt="master_tikkun" loading="lazy" width="2000" height="1000"/>
        </div>

        </body>

        

      <player>
        <ul>
              1st Aliya - 26:1-3 (Cohen)
              <div className = "player-item">
                <audio controls src="./sounds/aliya_1.mp3"> </audio>
              </div>
                2nd Aliya 26:4-9 (Levi)
                <div className = "player-item">
                  <audio
                    controls
                    src="./sounds/aliya_2.mp3">
                </audio>
                </div>
                3rd Aliya 26:10-12 (Yisrael)
                <div className = "player-item">
                <audio
                    controls
                    src="./sounds/aliya_3.mp3">
                </audio>
                </div>
            </ul>
          </player>
        <div className={classes.container}>
          <p>
        --------------------------------------------------------------- <br></br>
        Press any trope below to hear the recording and view transliteration. <br></br>
        Pay special attention to the shapes of the tropes! <br></br>
        ---------------------------------------------------------------
        </p>
        <br></br>

        <FlashcardList flashcards = {flashcards} />

        <ro
          color="primary"
          fontSize="large" 
          onClick={() => playSound(mercha_tipcha_audio)}
        >
            <span class="mercha_tipcha_e">Mercha Tipcha</span>
            <span class="mercha_tipcha_h">מֵרְכָ֥א טִפְחָ֖א</span>
        </ro>
      </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(munach_audio)}
          >
            <span class="munach_e">Munach</span>
            <span class="munach_h">מֻנַּ֣ח</span>
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(munach_zakef_katon_audio)}
          >
        <span class="munach_zakef_katon_e">Munach Zakef Katon</span>
        <span class="munach_zakef_katon_h"> מֻנַּ֣ח זָקֵף קָטָ֔ן</span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(kadma_vazla_audio)}
          >
        <span class="kadma_vazla_e">Kadma V'azala</span>
        <span class="kadma_vazla_h"> קַדְמָ֨א וְאַזְלָא֜ </span>
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(tlisha_ktana_audio)}
          >
        <span class="tlisha_ktana_e">Telisha Ketana</span>
        <span class="tlisha_ktana_h"> תְּלִישָא קְטַנָּה֩ </span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(tlisha_gdola_audio)}
          >
        <span class="tlisha_gdola_e">Telisha Gedola</span>
        <span class="tlisha_gdola_h">תְּ֠לִישָא גְדוֹלָה </span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(kadma_audio)}
          >
        <span class="kadma_e"> Kadma</span>
        <span class="kadma_h"> קַדְמָ֨א </span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(pashta_audio)}
          >
        <span class="pashta_e"> Pashta</span>
        <span class="pashta_h"> פַּשְׁטָא֙ </span>

          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(sof_pasuk_audio)}
          >
        <span class="sof_pasuk_e"> Sof Pasuk</span>
        <span class="sof_pasuk_h"> : סוֹף פָּסֽוּק </span>
         
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            fontSize="large" 
            onClick={() => playSound(munach_etnachta_audio)}
          >
           <span class="munach_etnachta_h"> מֻנַּ֣ח אֶתְנַחְתָּ֑א </span>
           <span class="munach_etnachta_e">  Munach Etnachta </span>

          </ro>
        </div>


        <div className={classes.container}>
          <ro
            color="primary"
            fontSize="large" 
            onClick={() => playSound(etnachta_audio)}
          >
           <span class="etnachta_h">  אֶתְנַחְתָּ֑א </span>
           <span class="etnachta_e">  Etnachta </span>

          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(zakef_gadol_audio)}
          >
           <span class="zakef_gadol_h">  זָקֵף גָּד֕וֹל </span>
           <span class="zakef_gadol_e">  Zakef Gadol </span>
            
            
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(munach_revii_audio)}
          >
            <span class="munach_revii_h">  מֻנַּ֣ח רְבִ֗יע  </span>
           <span class="munach_revii_e">  Munach Reviyi </span>
        
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(gershayim_audio)}
          >
                 <span class="gershayim_h">  גֵּרְשַׁ֞יִם   </span>
           <span class="gershayim_e">  Gershayim </span>
         
          </ro>
        </div>

        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(mapach_pashta_audio)}
          >
         <span class="mapach_pashta_h">   מַהְפַּ֤ך פַּשְׁטָא֙    </span>
           <span class="mapach_pashta_e">  Mapach Pashta </span>
         
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(yetiv_audio)}
          >
            <span class="yetiv_h">  יְ֚תִיב   </span>
           <span class="yetiv_e">  Yetiv </span>
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            onClick={() => playSound(munach_zarka_segol_audio)}
          >
            <span class="munach_zarka_segol_h">  מֻנַּ֣ח זַרְקָא֮ מֻנַּ֣ח סֶגּוֹל֒    </span>
           <span class="munach_zarka_segol_e">  Munach Zarka Munach Segol </span>
               
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            size="large"
            onClick={() => playSound(darga_tvir_audio)}
          >
         <span class="darga_tvir_h">   דַּרְגָּ֧א תְּבִ֛יר   </span>
           <span class="darga_tvir_e">  Darga Tvir </span>
          </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            size="large"
            onClick={() => playSound(psik_audio)}
          >
            <span class="psik_h"> פָּסֵ֣ק׀   </span>
           <span class="psik_e">  Pasek </span>
           </ro>
        </div>
        <div className={classes.container}>
          <ro
            color="primary"
            size="large"
            onClick={() => playSound(pazer_audio)}
          >
            <span class="pazer_h"> פָּזֵ֡ר   </span>
           <span class="pazer_e">  Pazer </span>
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

        </Grid>
          
          <parsha_1> 

            א וְהָיָה֙ כִּֽי־תָב֣וֹא אֶל־הָאָ֔רֶץ אֲשֶׁר֙ יְהוָ֣ה אֱלֹהֶ֔יךָ נֹתֵ֥ן לְךָ֖ נַֽחֲלָ֑ה וִֽירִשְׁתָּ֖הּ וְיָשַׁ֥בְתָּ בָּֽהּ׃
            <div> ב וְלָֽקַחְתָּ֞ מֵֽרֵאשִׁ֣ית ׀ כָּל־פְּרִ֣י הָֽאֲדָמָ֗ה אֲשֶׁ֨ר תָּבִ֧יא מֵֽאַרְצְךָ֛ אֲשֶׁ֨ר יְהוָ֧ה אֱלֹהֶ֛יךָ נֹתֵ֥ן לָ֖ךְ וְשַׂמְתָּ֣ בַטֶּ֑נֶא וְהָֽלַכְתָּ֙ אֶל־הַמָּק֔וֹם אֲשֶׁ֤ר יִבְחַר֙ יְהוָ֣ה אֱלֹהֶ֔יךָ לְשַׁכֵּ֥ן שְׁמ֖וֹ שָֽׁם׃
            </div><div> ג וּבָאתָ֙ אֶל־הַכֹּהֵ֔ן אֲשֶׁ֥ר יִֽהְיֶ֖ה בַּיָּמִ֣ים הָהֵ֑ם וְאָֽמַרְתָּ֣ אֵלָ֗יו הִגַּ֤דְתִּי הַיּוֹם֙ לַֽיהוָ֣ה אֱלֹהֶ֔יךָ כִּי־בָ֨אתִי֙ אֶל־הָאָ֔רֶץ אֲשֶׁ֨ר נִשְׁבַּ֧ע יְהוָ֛ה לַֽאֲבֹתֵ֖ינוּ לָ֥תֶת לָֽנוּ׃
            </div><div>      
            </div><div> ד וְלָקַ֧ח הַכֹּהֵ֛ן הַטֶּ֖נֶא מִיָּדֶ֑ךָ וְהִ֨נִּיח֔וֹ לִפְנֵ֕י מִזְבַּ֖ח יְהוָ֥ה אֱלֹהֶֽיךָ׃
            </div><div>  ה וְעָנִ֨יתָ וְאָֽמַרְתָּ֜ לִפְנֵ֣י ׀ יְהוָ֣ה אֱלֹהֶ֗יךָ אֲרַמִּי֙ אֹבֵ֣ד אָבִ֔י וַיֵּ֣רֶד מִצְרַ֔יְמָה וַיָּ֥גָר שָׁ֖ם בִּמְתֵ֣י מְעָ֑ט וַֽיְהִי־שָׁ֕ם לְג֥וֹי גָּד֖וֹל עָצ֥וּם וָרָֽב׃
            </div><div> ו וַיָּרֵ֧עוּ אֹתָ֛נוּ הַמִּצְרִ֖ים וַיְעַנּ֑וּנוּ וַיִּתְּנ֥וּ עָלֵ֖ינוּ עֲבֹדָ֥ה קָשָֽׁה׃
            </div><div> ז וַנִּצְעַ֕ק אֶל־יְהוָ֖ה אֱלֹהֵ֣י אֲבֹתֵ֑ינוּ וַיִּשְׁמַ֤ע יְהוָה֙ אֶת־קֹלֵ֔נוּ וַיַּ֧רְא אֶת־עָנְיֵ֛נוּ וְאֶת־עֲמָלֵ֖נוּ וְאֶת־לַֽחֲצֵֽנוּ׃
            </div><div>  
            </div><div> ח וַיּֽוֹצִאֵ֤נוּ יְהוָה֙ מִמִּצְרַ֔יִם בְּיָ֤ד חֲזָקָה֙ וּבִזְרֹ֣עַ נְטוּיָ֔ה וּבְמֹרָ֖א גָּדֹ֑ל וּבְאֹת֖וֹת וּבְמֹֽפְתִֽים׃
            </div><div> ט וַיְבִאֵ֖נוּ אֶל־הַמָּק֣וֹם הַזֶּ֑ה וַיִּתֶּן־לָ֨נוּ֙ אֶת־הָאָ֣רֶץ הַזֹּ֔את אֶ֛רֶץ זָבַ֥ת חָלָ֖ב וּדְבָֽשׁ׃
            </div><div>  י וְעַתָּ֗ה הִנֵּ֤ה הֵבֵ֨אתִי֙ אֶת־רֵאשִׁית֙ פְּרִ֣י הָֽאֲדָמָ֔ה אֲשֶׁר־נָתַ֥תָּה לִּ֖י יְהוָ֑ה וְהִנַּחְתּ֗וֹ לִפְנֵי֙ יְהוָ֣ה אֱלֹהֶ֔יךָ וְהִֽשְׁתַּחֲוִ֔יתָ לִפְנֵ֖י יְהוָ֥ה אֱלֹהֶֽיךָ׃
            </div> יא וְשָֽׂמַחְתָּ֣ בְכָל־הַטּ֗וֹב אֲשֶׁ֧ר נָֽתַן־לְךָ֛ יְהוָ֥ה אֱלֹהֶ֖יךָ וּלְבֵיתֶ֑ךָ אַתָּה֙ וְהַלֵּוִ֔י וְהַגֵּ֖ר אֲשֶׁ֥ר בְּקִרְבֶּֽךָ׃
            <br></br>
        </parsha_1>
       
       <parsha_2>
  1 When you enter the land that the LORD your God is giving you as a heritage, and you possess it and settle in it,
  <br></br>2 you shall take some of every first fruit of the soil, which you harvest from the land that the LORD your God is giving you, put it in a basket and go to the place where the LORD your God will choose to establish His name.
  <br></br>3 You shall go to the priest in charge at that time and say to him, “I acknowledge this day before the LORD your God that I have entered the land that the LORD swore to our fathers to assign us.”
  <br></br>4 The priest shall take the basket from your hand and set it down in front of the altar of the LORD your God.
  <br></br> 5 You shall then recite as follows before the LORD your God: “My father was a fugitive Aramean. He went down to Egypt with meager numbers and sojourned there; but there he became a great and very populous nation.
  <br></br> 6 The Egyptians dealt harshly with us and oppressed us; they imposed heavy labor upon us.
  <br></br>7 We cried to the LORD, the God of our fathers, and the LORD heard our plea and saw our plight, our misery, and our oppression.
  <br></br>8 The LORD freed us from Egypt by a mighty hand, by an outstretched arm and awesome power, and by signs and portents.
  <br></br>9 He brought us to this place and gave us this land, a land flowing with milk and honey.
  <br></br>10 Wherefore I now bring the first fruits of the soil which You, O LORD, have given me.” You shall leave it before the LORD your God and bow low before the LORD your God.
  <br></br>11 And you shall enjoy, together with the Levite and the stranger in your midst, all the bounty that the LORD your God has bestowed upon you and your household.
          
      </parsha_2>
       
       <div>
            -- Work In Progress -- from EFFIE

        </div>
      </div>

    </ThemeProvider>
  );


}
