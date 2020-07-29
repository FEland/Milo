import React from 'react'; 
import Ropes from './Ropes'
import Player from './Player'
import Player2 from './Player2'
import Player3 from './Player3'
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { Slide } from "react-slideshow-image";



export default function Final() {

  const [state, setState] = React.useState({
    toggle: false,
    toggleTranslation: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  

  return (
    <div className="App">
       <div style={{backgroundColor: 'black', color: 'white' }}> 
          <h1>Special Trope Practice Site for Harrison!</h1>
        </div>
        <Ropes />

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

      <Switch
        checked={state.toggleTranslation}
        onChange={handleChange}
        color="primary"
        name="toggleTranslation"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

{!state.toggleTranslation ? 
      <quiz style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} >

      שְׁמַ֖ע יִשְׂרָאֵ֑ל יְהוָ֥ה אֱלֹהֵ֖ינוּ יְהוָ֥ה ׀ אֶחָֽד׃<br/>
      ( :בָּרוּךְ שֵׁם כְּבוד מַלְכוּתו לְעולָם וָעֶד)<br/>
      וְאָ֣הַבְתָּ֔ אֵ֖ת יְהוָ֣ה אֱלֹהֶ֑יךָ בְּכָל־לְבָבְךָ֥ וּבְכָל־נַפְשְׁךָ֖ וּבְכָל־מְאֹדֶֽךָ׃
      וְהָי֞וּ הַדְּבָרִ֣ים הָאֵ֗לֶּה אֲשֶׁ֨ר אָנֹכִ֧י מְצַוְּךָ֛ הַיּ֖וֹם עַל־לְבָבֶֽךָ׃
      וְשִׁנַּנְתָּ֣ם לְבָנֶ֔יךָ וְדִבַּרְתָּ֖ בָּ֑ם בְּשִׁבְתְּךָ֤ בְּבֵיתֶ֙ךָ֙ וּבְלֶכְתְּךָ֣ בַדֶּ֔רֶךְ וּֽבְשָׁכְבְּךָ֖ וּבְקוּמֶֽךָ׃
      וּקְשַׁרְתָּ֥ם לְא֖וֹת עַל־יָדֶ֑ךָ וְהָי֥וּ לְטֹטָפֹ֖ת בֵּ֥ין עֵינֶֽיךָ׃
      וּכְתַבְתָּ֛ם עַל־מְזוּזֹ֥ת בֵּיתֶ֖ךָ וּבִשְׁעָרֶֽיךָ׃
      </quiz>:
      <quiz style= { { 'font-family': 'Times New Roman'} } >

      Hear, O Israel! The LORD is our God, the LORD is One.
      You shall love the LORD your God with all your heart and with all your soul and with all your might.
      Take to heart these instructions with which I charge you this day.
      Impress them upon your children. Recite them when you stay at home and when you are away, when you lie down and when you get up.
      Bind them as a sign on your hand and let them serve as a symbol on your forehead;
      inscribe them on the doorposts of your house and on your gates.
      </quiz>
}
{!state.toggleTranslation ? 
      <quiz style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} >

      וְהָיָ֗ה אִם־שָׁמֹ֤עַ תִּשְׁמְעוּ֙ אֶל־מִצְוֺתַ֔י אֲשֶׁ֧ר אָנֹכִ֛י מְצַוֶּ֥ה אֶתְכֶ֖ם הַיּ֑וֹם לְאַהֲבָ֞ה אֶת־יְהוָ֤ה אֱלֹֽהֵיכֶם֙ וּלְעָבְד֔וֹ בְּכָל־לְבַבְכֶ֖ם וּבְכָל־נַפְשְׁכֶֽם׃
וְנָתַתִּ֧י מְטַֽר־אַרְצְכֶ֛ם בְּעִתּ֖וֹ יוֹרֶ֣ה וּמַלְק֑וֹשׁ וְאָסַפְתָּ֣ דְגָנֶ֔ךָ וְתִֽירֹשְׁךָ֖ וְיִצְהָרֶֽךָ׃
וְנָתַתִּ֛י עֵ֥שֶׂב בְּשָׂדְךָ֖ לִבְהֶמְתֶּ֑ךָ וְאָכַלְתָּ֖ וְשָׂבָֽעְתָּ׃
הִשָּֽׁמְר֣וּ לָכֶ֔ם פֶּ֥ן יִפְתֶּ֖ה לְבַבְכֶ֑ם וְסַרְתֶּ֗ם וַעֲבַדְתֶּם֙ אֱלֹהִ֣ים אֲחֵרִ֔ים וְהִשְׁתַּחֲוִיתֶ֖ם לָהֶֽם׃
וְחָרָ֨ה אַף־יְהוָ֜ה בָּכֶ֗ם וְעָצַ֤ר אֶת־הַשָּׁמַ֙יִם֙ וְלֹֽא־יִהְיֶ֣ה מָטָ֔ר וְהָ֣אֲדָמָ֔ה לֹ֥א תִתֵּ֖ן אֶת־יְבוּלָ֑הּ וַאֲבַדְתֶּ֣ם מְהֵרָ֗ה מֵעַל֙ הָאָ֣רֶץ הַטֹּבָ֔ה אֲשֶׁ֥ר יְהוָ֖ה נֹתֵ֥ן לָכֶֽם׃
וְשַׂמְתֶּם֙ אֶת־דְּבָרַ֣י אֵ֔לֶּה עַל־לְבַבְכֶ֖ם וְעַֽל־נַפְשְׁכֶ֑ם וּקְשַׁרְתֶּ֨ם אֹתָ֤ם לְאוֹת֙ עַל־יֶדְכֶ֔ם וְהָי֥וּ לְטוֹטָפֹ֖ת בֵּ֥ין עֵינֵיכֶֽם׃
וְלִמַּדְתֶּ֥ם אֹתָ֛ם אֶת־בְּנֵיכֶ֖ם לְדַבֵּ֣ר בָּ֑ם בְּשִׁבְתְּךָ֤ בְּבֵיתֶ֙ךָ֙ וּבְלֶכְתְּךָ֣ בַדֶּ֔רֶךְ וּֽבְשָׁכְבְּךָ֖ וּבְקוּמֶֽךָ׃
וּכְתַבְתָּ֛ם עַל־מְזוּז֥וֹת בֵּיתֶ֖ךָ וּבִשְׁעָרֶֽיךָ׃
לְמַ֨עַן יִרְבּ֤וּ יְמֵיכֶם֙ וִימֵ֣י בְנֵיכֶ֔ם עַ֚ל הָֽאֲדָמָ֔ה אֲשֶׁ֨ר נִשְׁבַּ֧ע יְהוָ֛ה לַאֲבֹתֵיכֶ֖ם לָתֵ֣ת לָהֶ֑ם כִּימֵ֥י הַשָּׁמַ֖יִם עַל־הָאָֽרֶץ׃
      </quiz> :

      <quiz style= { { 'font-family': 'Times New Roman'} } >

      If, then, you obey the commandments that I enjoin upon you this day, loving the LORD your God and serving Him with all your heart and soul,
      I will grant the rain for your land in season, the early rain and the late. You shall gather in your new grain and wine and oil—
      I will also provide grass in the fields for your cattle—and thus you shall eat your fill.
      Take care not to be lured away to serve other gods and bow to them.
      For the LORD’s anger will flare up against you, and He will shut up the skies so that there will be no rain and the ground will not yield its produce; and you will soon perish from the good land that the LORD is assigning to you.
      Therefore impress these My words upon your very heart: bind them as a sign on your hand and let them serve as a symbol on your forehead,
      and teach them to your children—reciting them when you stay at home and when you are away, when you lie down and when you get up;
      and inscribe them on the doorposts of your house and on your gates—
      to the end that you and your children may endure, in the land that the LORD swore to your fathers to assign to them, as long as there is a heaven over the earth.
      </quiz>
}
{!state.toggleTranslation ? 
      <quiz style= { !state.toggle ? { 'font-family': 'Times New Roman'} : { }} >

      וַיֹּ֥אמֶר יְהוָ֖ה אֶל־מֹשֶׁ֥ה לֵּאמֹֽר׃
דַּבֵּ֞ר אֶל־בְּנֵ֤י יִשְׂרָאֵל֙ וְאָמַרְתָּ֣ אֲלֵהֶ֔ם וְעָשׂ֨וּ לָהֶ֥ם צִיצִ֛ת עַל־כַּנְפֵ֥י בִגְדֵיהֶ֖ם לְדֹרֹתָ֑ם וְנָֽתְנ֛וּ עַל־צִיצִ֥ת הַכָּנָ֖ף פְּתִ֥יל תְּכֵֽלֶת׃
וְהָיָ֣ה לָכֶם֮ לְצִיצִת֒ וּרְאִיתֶ֣ם אֹת֗וֹ וּזְכַרְתֶּם֙ אֶת־כָּל־מִצְוֺ֣ת יְהוָ֔ה וַעֲשִׂיתֶ֖ם אֹתָ֑ם וְלֹֽא־תָתֻ֜רוּ אַחֲרֵ֤י לְבַבְכֶם֙ וְאַחֲרֵ֣י עֵֽינֵיכֶ֔ם אֲשֶׁר־אַתֶּ֥ם זֹנִ֖ים אַחֲרֵיהֶֽם׃
לְמַ֣עַן תִּזְכְּר֔וּ וַעֲשִׂיתֶ֖ם אֶת־כָּל־מִצְוֺתָ֑י וִהְיִיתֶ֥ם קְדֹשִׁ֖ים לֵֽאלֹהֵיכֶֽם׃
אֲנִ֞י יְהוָ֣ה אֱלֹֽהֵיכֶ֗ם אֲשֶׁ֨ר הוֹצֵ֤אתִי אֶתְכֶם֙ מֵאֶ֣רֶץ מִצְרַ֔יִם לִהְי֥וֹת לָכֶ֖ם לֵאלֹהִ֑ים אֲנִ֖י יְהוָ֥ה אֱלֹהֵיכֶֽם
      </quiz>:
  <quiz style= { { 'font-family': 'Times New Roman'} } >

  Speak to the Children of Israel and say to them that the spies who brought them disaster did so because they had gone after their own hearts, and after their own eyes. Therefore tell them to make Tzitzit—fringes on the corners of their garments throughout their generations and that they shall put on the Tzitzit, the fringe, of each corner of the garment a thread of blue wool to remind them of the blue sky and of the miraculous acts of the Eternal Who is above the heavens.
  This blue thread shall serve you as an indication; when you will see it, you will be reminded of all the commandments of the Eternal, and follow them, and you will not be enticed by the vain desires of your heart, and by the superficial look of your eyes, after which you follow, and become faithless to Me.
  The fringes of the Tallith shall serve that you will remember and follow all My commandments, and become holy to your Almighty.
  I am the Eternal Your Almighty, Who brought you out in a miraculous manner from the land of Egypt to be the Almighty to you. I am the Eternal, Your Almighty and shall be through all the times to come.
  </quiz>
}


    <h4 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Built by Effie </h4>
    </div>

  );


}
