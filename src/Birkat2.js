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
import Hidden from '@material-ui/core/Hidden';

function TabPanel(props) {
    const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    // <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
    <div>
    {value === index && (
        // <Box p={5}> 
            <div className={classes.paper}>
                <Typography>{children}</Typography> 
            </div>
        // </Box>
      )}
      </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


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
    },
    menu: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
        color: "primary",
        display: 'flex',
        height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.secondary.main,
    color: "white"
  },
  paper: {
    padding: theme.spacing(1),
    border: '8px double',
    color: 'white',
    backgroundColor: 'brown',
    },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

       <div style={{ color: 'white' }}> 
                     <h1>Prayers & Blessings</h1>
                     {/* <Button  onClick={() => { fetchData()}} > Br </Button>  */}
        <br/><br/>
        <br/><br/>

       </div>

        <div className={classes.menu}>
        <br/><br/>
        <br/><br/>

        <Tabs
            orientation="vertical" variant="scrollable" scrollButtons="on"
            value={value} onChange={handleChange}
            className={classes.tabs}
        >
            <Tab label="Torah Blessing - Before Aliyah" {...a11yProps(0)} />
            <Tab label="Torah Blessing - After Aliyah" {...a11yProps(1)} />
            <Tab label="Modeh Ani" {...a11yProps(2)} />
            <Tab label="Adon Olam" {...a11yProps(3)} />
            <Tab label="Shehechiyanu" {...a11yProps(4)} />
            <Tab label="Birkot HaShachar" {...a11yProps(5)} />
            <Tab label="Amidah / Shemona Esrei - The Silent Prayer" {...a11yProps(6)} />
            <Tab label="Alenu" {...a11yProps(7)} />
            <Tab label="Friday Night Kiddush" {...a11yProps(8)} />
            <Tab label="Saturday Lunch Kiddush" {...a11yProps(9)} />
            <Tab label="Havdala" {...a11yProps(10)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            Torah Blessing - Before Aliyah

            <Hidden smDown>
                <span > 
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

        </TabPanel>
        <TabPanel value={value} index={1}>
            Torah Blessing - After Aliyah
        </TabPanel>
        <TabPanel value={value} index={2}>
            Modeh Ani
        </TabPanel>
        <TabPanel value={value} index={3}>
            Adon Olam
        </TabPanel>
        <TabPanel value={value} index={4}>
            Shehechiyanu
        </TabPanel>
        <TabPanel value={value} index={5}>
            Birkot HaShachar
        </TabPanel>
        <TabPanel value={value} index={6}>
            Amidah / Shemona Esrei - The Silent Prayer
        </TabPanel>
        <TabPanel value={value} index={7}>
            Alenu
        </TabPanel>
        <TabPanel value={value} index={8}>
            Friday Night Kiddush
        </TabPanel>
        <TabPanel value={value} index={9}>
            Saturday Lunch Kiddush
        </TabPanel>
        <TabPanel value={value} index={10}>
            Havdala
        </TabPanel>
        </div>
</div>

  );
}