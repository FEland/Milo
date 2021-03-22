// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const drawerWidth = 240;


// const useStyles = makeStyles((theme) => ({

//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     color: "primary",
//     backgroundColor: 'secondary',
//     width: "80%",
//     position: "absolute",
//     left: '50%',

//     // position: 'center'
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(80% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     // position: "80%",
//     // marginRight: 36,
//     // position: 'center'


//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   hide: {
//     display: 'none',
//   },
  
//   drawer: {
//     position: 'absolute',
//     // position: 'relative',
//     left: '50%',
//     // left: '1',
//     // right: '500',
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     // position: 'relative',
//     // left: '-143',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: theme.spacing(7) + 1,
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing(9) + 1,
//     },
//     // position: 'relative',
//     // left: '-143',
//   },
//   toolbar: {
//     // width: "80%",
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     backgroundColor: 'yellow',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     color: 'green',
//   },
// //   grid: {
// //     width: 500,
// //     height: 450,
// //     direction: "row",
// //     justify: "center",
// //     alignItems: "center",
// //   },
//   paper: {
//     padding: theme.spacing(1),
//     justifyContent: 'space-around',
//     border: '8px double',
//     color: 'white',
//     backgroundColor: 'brown',
//   },
// }));

// export default function MiniDrawer() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       {/* <CssBaseline /> */}
//       <div style={{ color: 'white' }}> 
//                     <h1>Prayers & Blessings</h1>
//                     {/* <Button  onClick={() => { fetchData()}} > Br </Button>  */}
//       </div>
//       <br/><br/>
//       <AppBar className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className={clsx(classes.menuButton, {[classes.hide]: open, })}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             Select Prayer / Blessing
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Drawer variant="permanent"
//         className={clsx(classes.drawer, {[classes.drawerOpen]: open, [classes.drawerClose]: !open,})}
//         classes={{paper: clsx({[classes.drawerOpen]: open,[classes.drawerClose]: !open,}),}}
//       >
//         <div className={classes.toolbar}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <div className={classes.content}>
//         <div className={classes.toolbar} />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//           ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
//           facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
//           gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
//           donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
//           Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
//           imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
//           arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
//           donec massa sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
//           facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
//           tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
//           consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
//           vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
//           hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
//           tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
//           nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
//           accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import Player from './Player_uno';


function TabPanel(props) {
    const classes = useStyles();
    const { children, value, index, } = props;

  return (
    // <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`}  {...other}> 
    <div>
    {value === index && (
        <Box p={5}> 
            <div className={classes.paper}>
                <Typography>{children}</Typography> 
            </div>
         </Box>
      )}
      </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function PlayerPanel(props) {
    // const classes = useStyles();
    const { name, song, value, index, ytbe, } = props;

  return (
    <>

        {value === index && (ytbe !== "skip" && <iframe title = {name} src = {ytbe} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picturefull-screen" allowfullscreen="allowfullscreen"></iframe> )}
        {value === index && (song !== "skip" && <Player icon={<PlayCircleFilled/>} label = {name} title = {name} song = {song}/> )}

    </>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.secondary,

    },
    menu: {
        // flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
        color: "primary",
        display: 'flex',
        height: '40vw',
        justifyContent: 'space-around',

        // height: 224,
  },
  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.secondary.main,
    color: "white"
  },
  paper: {
    padding: theme.spacing(2),
    border: '8px double',
    color: 'white',
    backgroundColor: 'brown',
    fontSize: '4vw',
    fontFamily: 'Times New Roman',
    
    // width: 500,
    height: '40vw',
    overflow: 'auto',
    },
  grid: {
    width: 500,
    height: 450,
    direction: "row",
    justify: "center",
    alignItems: "center",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <div className={classes.root}>
    <div>

       <div style={{ color: 'white' }}> 
                     <h1>Prayers & Blessings</h1>
                     {/* <Button  onClick={() => { fetchData()}} > Br </Button>  */}


       </div>
                           <div className={classes.root}>

       <Grid container spacing={3} justify="center">
            
                <Grid item >
                    <br></br>

                <div className={classes.menu}>

                <Tabs
                    orientation="vertical" variant="scrollable" scrollButtons="on"
                    value={value} onChange={handleChange}
                    className={classes.tabs}
                >
                    <Tab label="Torah Blessing - Before Aliyah " {...a11yProps(0)} />
                    <Tab label="Torah Blessing - After Aliyah" {...a11yProps(1)} />
                    <Tab label="Modeh Ani" {...a11yProps(2)} />
                    <Tab label="Friday Night Kiddush" {...a11yProps(3)} />
                    <Tab label="Saturday Lunch Kiddush" {...a11yProps(4)} />
                    <Tab label="Havdala" {...a11yProps(5)} />
                    <Tab label="Adon Olam" {...a11yProps(6)} />
                    <Tab label="Shehechiyanu" {...a11yProps(7)} />
                    <Tab label="Asher Yatzar" {...a11yProps(8)} />
                    {/* <Tab label="Alenu" {...a11yProps(9)} /> */}
                    {/* <Tab label="Amidah / Shemona Esrei - The Silent Prayer" {...a11yProps(10)} /> */}

                </Tabs>
                </div>
            </Grid>
            <Grid item xs={6}> 
            {/* <Grid item > */}

                <TabPanel value={value} index={0}>
                    <h3>Torah Blessing - Before Aliyah </h3>

                    <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >

                    <b>בָּרְכוּ אֶת ה' הַמְבֹרָך</b> <br/>
                    <span style={  { 'opacity': '.7'} } > בָּרוּךְ ה' הַמְבֹרָךְ לְעוֹלָם וָעֶד</span >  <br/>
                    בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם<br/>
                    אֲשֶׁר בָּחַר בָּנוּ מִכָּל הָעַמִּים וְנָתַן לָנוּ אֶת תּוֹרָתוֹ<br/>
                    ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ<br/>
                    
                    <br/>

                    <b>Bless Hashem, the blessed One.</b><br/>
                    <span style={  { 'opacity': '.7'} } > Blessed is Hashem, the blessed One, for all eternity. </span >  <br/>
                    Blessed are You, <i>Hashem</i>, our God, King of the universe, <br/>
                    That you chose us from all the Nations, and gave us your Torah <br/>
                    Blessed are You <i>Hashem</i>, who <i>[continuously]</i> gives us the Torah
                    </span >

                </TabPanel>
                <TabPanel value={value} index={1}>
                    <h3>Torah Blessing - After Aliyah</h3>

                    <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >

                        בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם<br/>
                        אֲשֶׁר נָתַן לָנוּ תּוֹרַת אֱמֶת וְחַיֵי עוֹלָם נָטַע בְּתוֹכֵנוּ<br/>
                        ה‎בָּרוּךְ אַתָּה ה׳ נוֹתֵן הַתּוֹרָ<br/>
                        
                        <br/>
                        Blessed are You, <i>Hashem</i>, our God, King of the universe, <br/>
                        Who gave us the Torah of Truth, <br/>
                        and planted eternal life within us <br/>
                        Blessed are You <i>Hashem</i>, Giver of the Torah
                    </span >    

                </TabPanel>
                <TabPanel value={value} index={2}>
                <h3>Modeh Ani</h3>
                    <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >

                    מוֹדֶה אֲנִי לְפָנֶיךָ מֶלֶךְ חַי וְקַיָם<br/>
                    שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה, רַבָּה אֱמוּנָתֶךָ<br/>
                        <br/>
                        Grateful am I to You, O living and eternal King <br/>
                        for You have returned my soul within me with compassion <br/>
                        abundant is Your loyalty + faithfulness [in me]!
                        </span >    

                </TabPanel>

                <TabPanel value={value} index={3}>
                    <h3>Friday Night Kiddush</h3>
                    <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >

                    (וַיְהִי עֶֽרֶב וַיְהִי בֹֽקֶר)<br/>
                    .יוֹם הַשִׁשִׁי. וַיְכֻלוּ הַשָּׁמַיִם וְהָאָרֶץ וְכָל צְבָאָם<br/>
                    .וַיְכַל אֱלֹהִים בַּיוֹם הַשִׁבִיעִי מְלַאכְתּוֹ אֲשֶׁר עָשָׂה<br/>
                    .וַיִשְׁבֹּת בַּיוֹם הַשְׁבִיעִי מִכָּל מְלַאכְתּוֹ אֲשֶׁר עָשָׂה<br/>
                    .וַיְבָרֶךְ אֱלֹהִים אֶת יוֹם הַשְׁבִיעִי, וַיְקַדֵּשׁ אֹתוֹ<br/>
                    כִּי בוֹ שָׁבַת מִכָּל מְלַאכְתּוֹ<br/>
                    .אֲשֶׁר בָּרָא אֱלֹהִים לַעֲשׂוֹת<br/>
                    </span >    

<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } >      
    It was evening and it was morning. The sixth day. The heavens and the earth and all their hosts were completed. God finished by the Seventh Day His work which He had done, and He rested on the Seventh Day from all His work which He had done. God blessed the Seventh Day and made it holy, because on it He ceased from all His creative work, which God had created to fulfill its purpose.<br/>
</span>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
                <br/>
                בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם
    בּוֹרֵא פְּרִי הַגָּפֶן<br/>
</span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } >      
     Blessed are You, <i>Hashem</i>, our God, King of the universe, who creates the fruit of the vine. (Amen) <br/>
</span>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >

<br/>
,בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם<br/>
,אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְרָצָה בָנוּ<br/>
וְשַׁבַּת קָדְשׁוֹ בְּאַהֲבָה וּבְרָצוֹן הִנְחִילָנוּ  <br/>
.זִכָּרוֹן לְמַעֲשֵׂה בְרֵאשִׁית<br/>
,כִּי הוּא יוֹם תְּחִלָּה לְמִקְרָאֵי קֹדֶש<br/>
.זֵכֶר לִיצִיאַת מִצְרָֽיִם<br/>
.כִּי בָנוּ בָחַרְתָּ, וְאוֹתָנוּ קִדַּשְׁתָּ מִכָּל הָעַמִּים<br/>
.וְשַׁבַּת קָדְשְׁךָ בְּאַהֲבָה וּבְרָצוֹן הִנְחַלְתָּנוּ<br/>
בָּרוּךְ אַתָּה ה׳, מְקַדֵּשׁ הַשַׁבָּת<br/>
</span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } >  
Blessed are You, <i>Hashem</i>, our God, King of the universe, who made us holy with His commandments, has desired us, and has given us, in love and goodwill, His holy Shabbos as a heritage, as a reminder of the Creation. It [Shabbos] is the first day of the holy festivals, commemorating the Exodus from Egypt. For You [God] have chosen us and sanctified us from among all the nations, and with love and goodwill given us Your holy Shabbos as a heritage. Blessed are You Lord, who makes the Shabbos holy. (Amen)<br/>
</span>

<img src="./images/Vachulu.png" alt="icon" loading="lazy" position="right"/>
<img src="./images/Vachulu2.png" alt="icon" loading="lazy" position="right"/>
<iframe title="kdsh" width="560" height="315" src="https://docs.google.com/document/d/e/2PACX-1vSOJTrrB3rkBcyt7EGEXpREx2tSlj9StbSsn8rEWljSuPeKYSxvgFNbE1MySxhPjz6iE49hmCmxPBZh/pub?embedded=true" allowfullscreen="allowfullscreen"></iframe>


                </TabPanel>
                <TabPanel value={value} index={4}>
                    <h3>Saturday Lunch Kiddush</h3>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
,וְשָׁמְרוּ בְנֵי יִשְׂרָאֵל אֶת הַשַׁבָּת
 לַעֲשׂוֹת אֶת הַשַׁבָּת לְדֹרֹתָם
 בְּרִית עוֹלָם.
 בֵּינִי וּבֵין בְּנֵי יִשְׂרָאֵל
 אוֹת הִיא לְעֹלָם.
 כִּי שֵׁשֶׁת יָמִים עָשָׂה ה׳
 אֶת הַשָׁמַיִם וְאֶת הָאָרֶץ,
וּבַיוֹם הַשְׁבִיעִי שָׁבַת וַיִנָּפַשׁ.<br/>
</span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } >  
The people of Israel shall keep Shabbat,
observing Shabbat throughout the ages as a covenant for all time.
It shall be a sign for all time between Me and the people of Israel,
for in six days I, <i>Hashem</i> made heaven and earth,
and on the seventh day I ceased from work and was refreshed.
<br/>
</span>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
עַל כֵּן בֵּרַךְ ה׳ אֶת יוֹם הַשַׁבָּת וַיְקַדְּשֵׁהוּ<br/>
</span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } >  
Therefore <i>Hashem</i> blessed the day of Shabbat and sanctified it
<br/>

</span>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ,
 מֶֽלֶךְ הָעוֹלָם בּוֹרֵא פְּרִי הַגָּפֶן <br/>
 </span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } >  
Blessed are You, <i>Hashem</i>,our God, King of the universe, Creator of the fruit of the vine.
</span>

                </TabPanel>
                <TabPanel value={value} index={5}>
                    <h3>Havdala</h3>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
הִנֵּה אֵל יְשׁוּעָתִי, אֶבְטַח וְלֹא אֶפְחָד <br/>
כִּי עָזִי וְזִמְרָת יָהּ, ה׳, וַיְהִי לִי לִישׁוּעָה<br/>
וּשְׁאַבְתֶּם מַֽיִם בְּשָׂשׂוֹן, מִמַּעַיְנֵי הַיְשׁוּעָה<br/>
לַייָ הַיְשׁוּעָה, עַל עַמְּךָ בִרְכָתֶךָ סֶּלָה<br/>
ה׳ צְבָאוֹת עִמָּנוּ, מִשְׂגָּב לָנוּ אֱלֹהֵי יַעֲקֹב סֶלָה<br/>
.ה׳ צְבָאוֹת, אַשְֹרֵי אָדָם בֹּטֵחַ בָּךְ<br/>
ה׳ הוֹשִׁיעָה, הַמֶּלֶךְ יַעֲנֵנוּ, בְּיוֹם קָרְאֵנוּ<br/>
לַיְּהוּדִים הָיְתָה אוֹרָה וְשִׂמְחָה וְשָׂשׂוֹן וִיקָר<br/>
כֵּן תִּהְיֶה לָּנוּ. כּוֹס יְשׁוּעוֹת אֶשָּׂא, וּבְשֵׁם ה׳ אֶקְרָא<br/>
</span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } >  
Behold! God is my deliveran​​​​ce, I trust in Him and I am not afraid. God is my strength and song, He will be my deliveran​​​​ce. You shall draw water in joy from the waters of deliveran​​​​ce. Deliveran​ce is God's, for His nation that is his praise, Selah.
The Lord of Hosts is with us, He is our support, the God of Jacob, Selah.
The Lord of Hosts, praisewor​thy is the one who trusts in Him. The Lord will save, the King will answer on the day that we call. There was light, joy, gladness and honor for the Jews, so there be for us.
I will raise up the cup of deliveran​​​​ce, and call in the name the Lord.
</span>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
<br/>
בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶֽלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן<br/>
</span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } >  
Blessed are You, <i>Hashem</i>, King of the universe,​​​​ Who creates the fruit of the vine. <br/>
</span>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
<br/>
בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶֽלֶךְ הָעוֹלָם, בּוֹרֵא מִינֵי בְּשָׂמִים<br/>
</span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } > 
Blessed are You, <i>Hashem</i>, King of the universe,​​​​ Who creates fragrant species.<br/>

</span>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
<br/>
בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶֽלֶךְ הָעוֹלָם, בּוֹרֵא מְאוֹרֵי הָאֵשׁ<br/>
</span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } >
Blessed are You, <i>Hashem</i>, King of the universe,​​​​ Who created the light of the flame.<br/>

</span>
<span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
<br/>  
בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶֽלֶךְ הָעוֹלָם, הַמַּבְדִיל בֵּין קֹֽדֶשׁ לְחוֹל, בֵּין אוֹר לְחֹֽשֶׁךְ, בֵּין יִשְׂרָאֵל לָעַמִּים,
בֵּין יוֹם הַשְּׁבִיעִי לְשֵׁשֶׁת יְמֵי הַמַּעֲשֶׂה<br/>
בָּרוּךְ אַתָּה ה׳, הַמַּבְדִיל בֵּין קֹדֶשׁ לְחוֹל
<br/>
</span>
<span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } > 
Blessed are You, <i>Hashem</i>, King of the universe,​​​​ Who distingui​​shes between sacred and profane, light and darkness,​ Israel and the nations, between the Seventh Day and the six days of creation.​ Praised are you, Lord, who distingui​​shes between sacred and profane.
</span>

                </TabPanel>

                <TabPanel value={value} index={6}>
                                    <h3>Adon Olam</h3>

                                    <img src="./images/AdonOlamTransliterated.png" alt="icon" loading="lazy" height="100" position="right"/>

                {/* <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
                אֲדוֹן עוֹלָם אֲשֶׁר מָלַךְ,
                בְּטֶרֶם כָּל יְצִיר נִבְרָא                    <br/>
                לְעֵת נַעֲשָׂה בְחֶפְצוֹ כֹּל,
                אֲזַי מֶלֶךְ שְׁמוֹ נִקְרָא
                </span>
                <span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } > 
                <br/>

                He is Master, who reigned befere any creature yet was formed:
                At the time when all things were made by his desire, then was his name proclaime​d King.
                <br/>
                </span>

                <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
                וְאַחֲרֵי כִּכְלוֹת הַכֹּל,
                לְבַדוֹ יִמְלוֹךְ נוֹרָא                    <br/>
                וְהוּא הָיָה, וְהוּא הֹוֶה,
                וְהוּא יִהְיֶה, בְּתִפְאָרָה
                </span>
                <span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } > 
                <br/>

                And after all things shall have had an end, he alone, the dreaded one, shall reign;
                Who was, who is, and who will be in glory.
                <br/>
                </span>

                <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
                וְהוּא אֶחָד וְאֵין שֵׁנִי,
                לְהַמְשִׁיל לוֹ לְהַחְבִּירָה                    <br/>
                בְּלִי רֵאשִׁית בְּלִי תַכְלִית,
                וְלוֹ הָעֹז וְהַמִּשְׂרָה
                </span>
                <span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } > 
                <br/>

                And he is One, and there is no second to compare to him, to consort with him:
                Witho​ut beginning​, without end: to him belong strength and dominion.​
                <br/>
                </span>

                <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
                וְהוּא אֵלִי וְחַי גֹּאֲלִי,
                וְצוּר חֶבְלִי בְּעֵת צָרָה                    <br/>
                וְהוּא נִסִי וּמָנוֹס לִי,
                מְנָת כּוֹסִי בְּיוֹם אֶקְרָא
                </span>
                <span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } > 
                <br/>

                And he is my God—my Redeemer liveth and—a rock in my travail in time of distress;​
                And he is my banner and my refuge, the portion of my cup on the day when I call.
                <br/>
                </span>

                <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >
                בְּיָדוֹ אַפְקִיד רוּחִי,
                בְּעֵת אִישַׁן וְאָעִירָה                    <br/>
                וְעִם רוּחִי גְּוִיָּתִי,
                ה׳ לִי וְלֹא אִירָא
                </span>
                <span style={  { 'fontSize' : '1vw', 'lineHeight' : '.5'} } > 
                <br/>

                Into his hand I commend my spirit, when I sleep and when I wake;
                And with my spirit, my body also: <i>Hashem</i> is with me, and I will not fear.
                <br/> */}
{/* 
                nivra < yetzir < kol < b'terem < melech < asher < olam < adon
                nikra < shimo < melech < azai < kol < bi-chef-zo < na'aseh < l'ate
                nora < yimloch < l'vado < hakol < kich-lote < vi'acharei
                b'tifara < yee-hi-yeh < vihu < hoveh < vihu < hayah < vihu
                l'hach-bira < lo < l'hom-sheelo < shaynee < v'ayn < echad < vihu
                v'hamees-ra < ha'oz < vilo < tach-leet < bilee < reisheet < bilee
                tzara < b'ate < chev-li < v'tzur < go-ali < v'chai < eli < vihu 
                ekra < b'yom < kosi < minat < li < u-ma-nos < neesee < vihu
                v'ah-eera < eeshan < b'ate < roo-chi < off-keed < b'yado
                eera < v'lo < li < ado-nai < g'vee-yah-ti < roo-chi < v'eem

                 */}
                {/* </span> */}

                </TabPanel>
                
                <TabPanel value={value} index={7}>
                    <h3>Shehechiyanu</h3>
                    <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >

                בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה
                    <br/>
                    <br/>


                    Blessed are You, <i>Hashem</i> our God, King of all, who has kept us alive, sustained us, and brought us to this season.
                    </span>


                </TabPanel>
                <TabPanel value={value} index={8}>
                    <h3>Asher Yatzar</h3>
                    <span style={  { 'fontSize' : '2vw', 'font-family':  'Times New Roman'} } >

                    בָּרוּךְ אַתָּה ה’ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר יָצַר אֶת הָאָדָם בְּחָכְמָה, וּבָרָא בוֹ נְקָבִים נְקָבִים חֲלוּלִים חֲלוּלִים .גָּלוּי וְיָדוּעַ לִפְנֵי כִסֵּא כְבוֹדֶךָ, שֶׁאִם יִפָּתֵחַ אֶחָד מֵהֶם, אוֹ יִסָתֵם אֶחָד מֵהֶם, אִי אֶפְשַׁר לְהִתְקַיֵּם וְלַעֲמוֹד לְפָנֶיךָ אַפִלּוּ שָׁעָה אֶחָת
                    <br/>בָּרוּךְ אַתָּה ה׳, רוֹפֵא כָל בָּשָׂר וּמַפְלִיא לַעֲשׂוֹת

                    <br/>
                    <br/>

                    Blessed are You, <i>Hashem</i>, our God, King of the universe, who formed man with wisdom and created within him many openings and many hollow spaces. It is obvious and known before Your Seat of Honor that if even one of them would be opened, or if even one of them would be sealed, it would be impossible to survive and to stand before You even for one hour. Blessed are You, <i>Hashem</i>, who heals all flesh and acts wondrously.
                    </span>

                </TabPanel>
                {/* <TabPanel value={value} index={9}>
                    <h3>Alenu</h3>
                </TabPanel> */}
                {/* <TabPanel value={value} index={10}>
                    <h3>Amidah / Shemona Esrei - The Silent Prayer</h3>
                </TabPanel> */}
               
                
            </Grid>
            <Grid item xs={2}>
                    <br></br>

                <PlayerPanel value={value} index={0} name={'Torah Blessing - Before Aliyah'} song={'./sounds/opening.m4a'} ytbe = {'skip'} />
                <PlayerPanel value={value} index={1} name={'Torah Blessing - After Aliyah'} song={'./sounds/closing.m4a'} ytbe = {'skip'} />
                <PlayerPanel value={value} index={2} name={'Modeh Ani'} song={'./sounds/ModehAni.m4a'} ytbe = {'skip'}/>
                <PlayerPanel value={value} index={3} name={'Friday Night Kiddush'} song={'./sounds/Fri-kiddush2.m4a'} ytbe = {'https://www.youtube.com/embed/7Byb1GQuuhE'}/>
                {value === 3 && <iframe src="https://docs.google.com/document/d/e/2PACX-1vSOJTrrB3rkBcyt7EGEXpREx2tSlj9StbSsn8rEWljSuPeKYSxvgFNbE1MySxhPjz6iE49hmCmxPBZh/pub?embedded=true"></iframe>}
                <PlayerPanel value={value} index={4} name={'Saturday Lunch Kiddush'} song={'./sounds/Sat-Kiddush.m4a'} ytbe = {'skip'}/>
                <PlayerPanel value={value} index={5} name={'Havdala'} song={'./sounds/Havdala-song.m4a'} ytbe = {'skip'} />
                <PlayerPanel value={value} index={6} name={'Adon Olam'} song={'skip'} ytbe = {"https://www.youtube.com/embed/KWhOUzOrbpM"}/>
                {/* {value === 6 && <img src="./images/AdonOlamTransliterated.png" alt="icon" loading="lazy" height="100" position="right"/>} */}
                <PlayerPanel value={value} index={7} name={'Shehechiyanu'} song={'skip'} ytbe = {'https://www.youtube.com/embed/-ynpfKLTp0g?start=4'} />
                <PlayerPanel value={value} index={8} name={'Asher Yatzar'} song={'skip'} ytbe = {'https://www.youtube.com/embed/6MOw4E72i9I'}/>
                {/* <PlayerPanel value={value} index={9} name={'Alenu'} song={'https://www.youtube.com/embed/RVMRKLKVgSw'} /> */}
                {/* <PlayerPanel value={value} index={10} name={'Amidah / Shemona Esrei - The Silent Prayer'} song={'./sounds/ModehAni.m4a'} /> */}
             </Grid>

        {/* </div> */}

        </Grid>
        </div>
</div>

  );
}