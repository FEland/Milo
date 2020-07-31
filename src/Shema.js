import React from 'react';
import Player from './Player'
import Player2 from './Player2'
import Player3 from './Player3'
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export default function Shema() {

  const [state, setState] = React.useState({
    toggle: false,
    toggleTranslation: false,
    toggleTrope: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  const PurpleSwitch = withStyles({
    switchBase: {
      color: 'white',
      '&$checked': {
        color: purple[500],
      },
      '&$checked + $track': {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    
    <div >

       <div style={{ color: 'white' }}> 
          <h1>Practice the Shema!</h1>
        </div>


        <Grid container spacing={2} justify="center" alignItems="center"> 
            <Grid item  > <Player /> </Grid>
            <Grid item  > <Player2 /> </Grid>
            <Grid item  > <Player3 /> </Grid>
        </Grid>

      <Switch
        checked={state.toggle}
        onChange={handleChange}
        name="toggle"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />

        <PurpleSwitch
                checked={state.toggleTrope}
                onChange={handleChange}
                name="toggleTrope"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />


      <Switch
        checked={state.toggleTranslation}
        onChange={handleChange}
        color="primary"
        name="toggleTranslation"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

{!state.toggleTranslation ? 
      <quiz style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} >
        {state.toggleTrope ? <>
      שְׁמַ֖ע יִשְׂרָאֵ֑ל יְהוָ֥ה אֱלֹהֵ֖ינוּ יְהוָ֥ה ׀ אֶחָֽד׃<br/>
      <i> (בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד)<br/></i>
      וְאָ֣הַבְתָּ֔ אֵ֖ת יְהוָ֣ה אֱלֹהֶ֑יךָ בְּכָל־לְבָבְךָ֥ וּבְכָל־נַפְשְׁךָ֖ וּבְכָל־מְאֹדֶֽךָ׃
      וְהָי֞וּ הַדְּבָרִ֣ים הָאֵ֗לֶּה אֲשֶׁ֨ר אָנֹכִ֧י מְצַוְּךָ֛ הַיּ֖וֹם עַל־לְבָבֶֽךָ׃
      וְשִׁנַּנְתָּ֣ם לְבָנֶ֔יךָ וְדִבַּרְתָּ֖ בָּ֑ם בְּשִׁבְתְּךָ֤ בְּבֵיתֶ֙ךָ֙ וּבְלֶכְתְּךָ֣ בַדֶּ֔רֶךְ וּֽבְשָׁכְבְּךָ֖ וּבְקוּמֶֽךָ׃
      וּקְשַׁרְתָּ֥ם לְא֖וֹת עַל־יָדֶ֑ךָ וְהָי֥וּ לְטֹטָפֹ֖ת בֵּ֥ין עֵינֶֽיךָ׃
      וּכְתַבְתָּ֛ם עַל־מְזוּזֹ֥ת בֵּיתֶ֖ךָ וּבִשְׁעָרֶֽיךָ׃
      </>: <>
      שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד׃ <br/>
      <i> (בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד)<br/></i>
        וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל־לְבָבְךָ וּבְכָל־נַפְשְׁךָ וּבְכָל־מְאֹדֶךָ׃
        וְהָיוּ הַדְּבָרִים הָאֵלֶּה אֲשֶׁר אָנֹכִי מְצַוְּךָ הַיּוֹם עַל־לְבָבֶךָ׃
        וְשִׁנַּנְתָּם לְבָנֶיךָ וְדִבַּרְתָּ בָּם בְּשִׁבְתְּךָ בְּבֵיתֶךָ וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ׃
        וּקְשַׁרְתָּם לְאוֹת עַל־יָדֶךָ וְהָיוּ לְטֹטָפֹת בֵּין עֵינֶיךָ׃
        וּכְתַבְתָּם עַל־מְזוּזֹת בֵּיתֶךָ וּבִשְׁעָרֶיךָ׃
      </>}
      </quiz>:
      <quiz style= { { 'font-family': 'Times New Roman'} } >

      Hear, O Israel! The LORD is our God, the LORD is One.<br/>
        <i>(Blessed be the name of the glory of His kingdom forever and ever).</i><br/>
      {/* You shall love the LORD your God with all your heart and with all your soul and with all your might.
      Take to heart these instructions with which I charge you this day.
      Impress them upon your children. Recite them when you stay at home and when you are away, when you lie down and when you get up.
      Bind them as a sign on your hand and let them serve as a symbol on your forehead;
      inscribe them on the doorposts of your house and on your gates. */}

      You shall love the LORD your God with all your heart, with all your soul, and with all your might. 
      And these words which I command you today shall be upon your heart. 
      You shall teach them [deeply] to your children, 
      and you shall speak of them when you sit in your house and when you walk on the road, when you lie down and when you rise. 
      You shall bind them as a sign upon your hand, and they shall be for a reminder between your eyes [Tefillin]. 
      And you shall write them upon the doorposts of your house and upon your gates [Mezuzot].
      </quiz>
}
{!state.toggleTranslation ? 
      <quiz style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} >
        {state.toggleTrope ? <>

      וְהָיָ֗ה אִם־שָׁמֹ֤עַ תִּשְׁמְעוּ֙ אֶל־מִצְוֺתַ֔י אֲשֶׁ֧ר אָנֹכִ֛י מְצַוֶּ֥ה אֶתְכֶ֖ם הַיּ֑וֹם לְאַהֲבָ֞ה אֶת־יְהוָ֤ה אֱלֹֽהֵיכֶם֙ וּלְעָבְד֔וֹ בְּכָל־לְבַבְכֶ֖ם וּבְכָל־נַפְשְׁכֶֽם׃
וְנָתַתִּ֧י מְטַֽר־אַרְצְכֶ֛ם בְּעִתּ֖וֹ יוֹרֶ֣ה וּמַלְק֑וֹשׁ וְאָסַפְתָּ֣ דְגָנֶ֔ךָ וְתִֽירֹשְׁךָ֖ וְיִצְהָרֶֽךָ׃
וְנָתַתִּ֛י עֵ֥שֶׂב בְּשָׂדְךָ֖ לִבְהֶמְתֶּ֑ךָ וְאָכַלְתָּ֖ וְשָׂבָֽעְתָּ׃
הִשָּֽׁמְר֣וּ לָכֶ֔ם פֶּ֥ן יִפְתֶּ֖ה לְבַבְכֶ֑ם וְסַרְתֶּ֗ם וַעֲבַדְתֶּם֙ אֱלֹהִ֣ים אֲחֵרִ֔ים וְהִשְׁתַּחֲוִיתֶ֖ם לָהֶֽם׃
וְחָרָ֨ה אַף־יְהוָ֜ה בָּכֶ֗ם וְעָצַ֤ר אֶת־הַשָּׁמַ֙יִם֙ וְלֹֽא־יִהְיֶ֣ה מָטָ֔ר וְהָ֣אֲדָמָ֔ה לֹ֥א תִתֵּ֖ן אֶת־יְבוּלָ֑הּ וַאֲבַדְתֶּ֣ם מְהֵרָ֗ה מֵעַל֙ הָאָ֣רֶץ הַטֹּבָ֔ה אֲשֶׁ֥ר יְהוָ֖ה נֹתֵ֥ן לָכֶֽם׃
וְשַׂמְתֶּם֙ אֶת־דְּבָרַ֣י אֵ֔לֶּה עַל־לְבַבְכֶ֖ם וְעַֽל־נַפְשְׁכֶ֑ם וּקְשַׁרְתֶּ֨ם אֹתָ֤ם לְאוֹת֙ עַל־יֶדְכֶ֔ם וְהָי֥וּ לְטוֹטָפֹ֖ת בֵּ֥ין עֵינֵיכֶֽם׃
וְלִמַּדְתֶּ֥ם אֹתָ֛ם אֶת־בְּנֵיכֶ֖ם לְדַבֵּ֣ר בָּ֑ם בְּשִׁבְתְּךָ֤ בְּבֵיתֶ֙ךָ֙ וּבְלֶכְתְּךָ֣ בַדֶּ֔רֶךְ וּֽבְשָׁכְבְּךָ֖ וּבְקוּמֶֽךָ׃
וּכְתַבְתָּ֛ם עַל־מְזוּז֥וֹת בֵּיתֶ֖ךָ וּבִשְׁעָרֶֽיךָ׃
לְמַ֨עַן יִרְבּ֤וּ יְמֵיכֶם֙ וִימֵ֣י בְנֵיכֶ֔ם עַ֚ל הָֽאֲדָמָ֔ה אֲשֶׁ֨ר נִשְׁבַּ֧ע יְהוָ֛ה לַאֲבֹתֵיכֶ֖ם לָתֵ֣ת לָהֶ֑ם כִּימֵ֥י הַשָּׁמַ֖יִם עַל־הָאָֽרֶץ׃
</>: <>


וְהָיָה אִם־שָׁמֹעַ תִּשְׁמְעוּ אֶל־מִצְוֺתַי אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם הַיּוֹם לְאַהֲבָה אֶת־יְהוָה אֱלֹהֵיכֶם וּלְעָבְדוֹ בְּכָל־לְבַבְכֶם וּבְכָל־נַפְשְׁכֶם׃
וְנָתַתִּי מְטַר־אַרְצְכֶם בְּעִתּוֹ יוֹרֶה וּמַלְקוֹשׁ וְאָסַפְתָּ דְגָנֶךָ וְתִירֹשְׁךָ וְיִצְהָרֶךָ׃
וְנָתַתִּי עֵשֶׂב בְּשָׂדְךָ לִבְהֶמְתֶּךָ וְאָכַלְתָּ וְשָׂבָעְתָּ׃
הִשָּׁמְרוּ לָכֶם פֶּן יִפְתֶּה לְבַבְכֶם וְסַרְתֶּם וַעֲבַדְתֶּם אֱלֹהִים אֲחֵרִים וְהִשְׁתַּחֲוִיתֶם לָהֶם׃
וְחָרָה אַף־יְהוָה בָּכֶם וְעָצַר אֶת־הַשָּׁמַיִם וְלֹא־יִהְיֶה מָטָר וְהָאֲדָמָה לֹא תִתֵּן אֶת־יְבוּלָהּ וַאֲבַדְתֶּם מְהֵרָה מֵעַל הָאָרֶץ הַטֹּבָה אֲשֶׁר יְהוָה נֹתֵן לָכֶם׃
וְשַׂמְתֶּם אֶת־דְּבָרַי אֵלֶּה עַל־לְבַבְכֶם וְעַל־נַפְשְׁכֶם וּקְשַׁרְתֶּם אֹתָם לְאוֹת עַל־יֶדְכֶם וְהָיוּ לְטוֹטָפֹת בֵּין עֵינֵיכֶם׃
וְלִמַּדְתֶּם אֹתָם אֶת־בְּנֵיכֶם לְדַבֵּר בָּם בְּשִׁבְתְּךָ בְּבֵיתֶךָ וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ׃
וּכְתַבְתָּם עַל־מְזוּזוֹת בֵּיתֶךָ וּבִשְׁעָרֶיךָ׃
לְמַעַן יִרְבּוּ יְמֵיכֶם וִימֵי בְנֵיכֶם עַל הָאֲדָמָה אֲשֶׁר נִשְׁבַּע יְהוָה לַאֲבֹתֵיכֶם לָתֵת לָהֶם כִּימֵי הַשָּׁמַיִם עַל־הָאָרֶץ׃
</>}

      </quiz> :

      <quiz style= { { 'font-family': 'Times New Roman'} } >

      {/* If, then, you obey the commandments that I enjoin upon you this day, loving the LORD your God and serving Him with all your heart and soul,
      I will grant the rain for your land in season, the early rain and the late. You shall gather in your new grain and wine and oil—
      I will also provide grass in the fields for your cattle—and thus you shall eat your fill.
      Take care not to be lured away to serve other gods and bow to them.
      For the LORD’s anger will flare up against you, and He will shut up the skies so that there will be no rain and the ground will not yield its produce; and you will soon perish from the good land that the LORD is assigning to you.
      Therefore impress these My words upon your very heart: bind them as a sign on your hand and let them serve as a symbol on your forehead,
      and teach them to your children—reciting them when you stay at home and when you are away, when you lie down and when you get up;
      and inscribe them on the doorposts of your house and on your gates—
      to the end that you and your children may endure, in the land that the LORD swore to your fathers to assign to them, as long as there is a heaven over the earth.
       */}
      And it will be, if you will diligently obey My commandments which I instruct you this day, 
      to love the Lord your God and to serve Him with all your heart and with all your soul, 
      I will give rain for your land at the proper time, the early rain and the late rain, 
      and you will gather in your grain, your wine and your oil. 
      And I will give grass in your fields for your cattle, and you will eat and be sated. 
      Take care lest your heart be lured away, and you turn astray and worship alien gods and bow down to them. 
      For then the Lord's wrath will flare up against you, and He will close the heavens 
      so that there will be no rain and the earth will not yield its produce, 
      and you will swiftly perish from the good land which the Lord gives you. 
      Therefore, place these words of Mine upon your heart and upon your soul,
       and bind them for a sign on your hand, and they shall be for a reminder between your eyes. 
       You shall teach them to your children, to speak of them when you sit in your house and when you walk on the road, 
       when you lie down and when you rise. 
       And you shall inscribe them on the doorposts of your house and on your gates -
       so that your days and the days of your children may be prolonged 
       on the land which the Lord swore to your fathers to give to them for as long as the heavens are above the earth.

      </quiz>
}
{!state.toggleTranslation ? 
      <quiz style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} >
        {state.toggleTrope ? <>

      וַיֹּ֥אמֶר יְהוָ֖ה אֶל־מֹשֶׁ֥ה לֵּאמֹֽר׃
דַּבֵּ֞ר אֶל־בְּנֵ֤י יִשְׂרָאֵל֙ וְאָמַרְתָּ֣ אֲלֵהֶ֔ם וְעָשׂ֨וּ לָהֶ֥ם צִיצִ֛ת עַל־כַּנְפֵ֥י בִגְדֵיהֶ֖ם לְדֹרֹתָ֑ם וְנָֽתְנ֛וּ עַל־צִיצִ֥ת הַכָּנָ֖ף פְּתִ֥יל תְּכֵֽלֶת׃
וְהָיָ֣ה לָכֶם֮ לְצִיצִת֒ וּרְאִיתֶ֣ם אֹת֗וֹ וּזְכַרְתֶּם֙ אֶת־כָּל־מִצְוֺ֣ת יְהוָ֔ה וַעֲשִׂיתֶ֖ם אֹתָ֑ם וְלֹֽא־תָתֻ֜רוּ אַחֲרֵ֤י לְבַבְכֶם֙ וְאַחֲרֵ֣י עֵֽינֵיכֶ֔ם אֲשֶׁר־אַתֶּ֥ם זֹנִ֖ים אַחֲרֵיהֶֽם׃
לְמַ֣עַן תִּזְכְּר֔וּ וַעֲשִׂיתֶ֖ם אֶת־כָּל־מִצְוֺתָ֑י וִהְיִיתֶ֥ם קְדֹשִׁ֖ים לֵֽאלֹהֵיכֶֽם׃
:אֲנִ֞י יְהוָ֣ה אֱלֹֽהֵיכֶ֗ם אֲשֶׁ֨ר הוֹצֵ֤אתִי אֶתְכֶם֙ מֵאֶ֣רֶץ מִצְרַ֔יִם לִהְי֥וֹת לָכֶ֖ם לֵאלֹהִ֑ים אֲנִ֖י יְהוָ֥ה אֱלֹהֵיכֶֽם
</>: <>

וַיֹּאמֶר יְהוָה אֶל־מֹשֶׁה לֵּאמֹר׃
דַּבֵּר אֶל־בְּנֵי יִשְׂרָאֵל וְאָמַרְתָּ אֲלֵהֶם וְעָשׂוּ לָהֶם צִיצִת עַל־כַּנְפֵי בִגְדֵיהֶם לְדֹרֹתָם וְנָתְנוּ עַל־צִיצִת הַכָּנָף פְּתִיל תְּכֵלֶת׃
וְהָיָה לָכֶם לְצִיצִת וּרְאִיתֶם אֹתוֹ וּזְכַרְתֶּם אֶת־כָּל־מִצְוֺת יְהוָה וַעֲשִׂיתֶם אֹתָם וְלֹא־תָתֻרוּ אַחֲרֵי לְבַבְכֶם וְאַחֲרֵי עֵינֵיכֶם אֲשֶׁר־אַתֶּם זֹנִים אַחֲרֵיהֶם׃
לְמַעַן תִּזְכְּרוּ וַעֲשִׂיתֶם אֶת־כָּל־מִצְוֺתָי וִהְיִיתֶם קְדֹשִׁים לֵאלֹהֵיכֶם׃
אֲנִי יְהוָה אֱלֹהֵיכֶם אֲשֶׁר הוֹצֵאתִי אֶתְכֶם מֵאֶרֶץ מִצְרַיִם לִהְיוֹת לָכֶם לֵאלֹהִים אֲנִי יְהוָה אֱלֹהֵיכֶם׃
</>}

      </quiz>:
  <quiz style= { { 'font-family': 'Times New Roman'} } >
{/* 
  Speak to the Children of Israel and say to them that the spies who brought them disaster did so because they had gone after their own hearts, and after their own eyes. Therefore tell them to make Tzitzit—fringes on the corners of their garments throughout their generations and that they shall put on the Tzitzit, the fringe, of each corner of the garment a thread of blue wool to remind them of the blue sky and of the miraculous acts of the Eternal Who is above the heavens.
  This blue thread shall serve you as an indication; when you will see it, you will be reminded of all the commandments of the Eternal, and follow them, and you will not be enticed by the vain desires of your heart, and by the superficial look of your eyes, after which you follow, and become faithless to Me.
  The fringes of the Tallith shall serve that you will remember and follow all My commandments, and become holy to your Almighty.
  I am the Eternal Your Almighty, Who brought you out in a miraculous manner from the land of Egypt to be the Almighty to you. I am the Eternal, Your Almighty and shall be through all the times to come.
   */}
  The Lord spoke to Moses, saying: Speak to the children of Israel
   and tell them to make for themselves fringes on the corners of their garments throughout their generations, 
   and to attach a thread of blue on the fringe of each corner. They shall be to you as tzizit.
   And you shall look upon them and remember all the commandments of the Lord and fulfill them, 
   and you will not follow after your heart and after your eyes by which you go astray - 
   so that you may remember and fulfill all My commandments and be holy to your God. 
   I am the Lord your God who brought you out of the land of Egypt to be your God; 
   I, the Lord, am your God. True.
  
  </quiz>
}

    </div>

  );


}
