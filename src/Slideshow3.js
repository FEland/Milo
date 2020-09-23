// TODO: mess w/ BackdropProps? to get backdrop of carosel darker

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red } from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AutoRotatingCarousel from './AutoRotatingCarousel'; //https://github.com/TeamWertarbyte/material-auto-rotating-carousel
import Slide2 from './Slides'; //https://github.com/TeamWertarbyte/material-auto-rotating-carousel
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RenderSmoothImage from './RenderSmoothImage';
import Dialog from '@material-ui/core/Dialog';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function importAll(r) {
  return r.keys().map(r);
}

function sizeofAll(r) {
  return r.keys().map(r).length + ' slides';
}

const Mitzvas = [importAll(require.context("./Slides3/Mitzvas/", false, /^\.\/.*\.jpg$/)), "Mitzvas", './Slides3/Mitzvas/Mitzvas.pdf', sizeofAll(require.context("./Slides3/Mitzvas/", false, /^\.\/.*\.jpg$/)), 1];
const Neshama = [importAll(require.context("./Slides3/Neshama/", false, /^\.\/.*\.jpg$/)), "Neshama", './Slides3/Neshama/Neshama.pdf', sizeofAll(require.context("./Slides3/Neshama/", false, /^\.\/.*\.jpg$/)), 2];
const Abraham = [importAll(require.context("./Slides3/Abraham/", false, /^\.\/.*\.jpg$/)), "Abraham", './Slides3/Abraham/Abraham.pdf', sizeofAll(require.context("./Slides3/Abraham/", false, /^\.\/.*\.jpg$/)), 3];
const Bereishit = [importAll(require.context("./Slides3/Bereishit/", false, /^\.\/.*\.jpg$/)), "Creation", './Slides3/Bereishit/Creation.pdf', sizeofAll(require.context("./Slides3/Bereishit/", false, /^\.\/.*\.jpg$/)), 4];
const Brachas = [importAll(require.context("./Slides3/Brachas/", false, /^\.\/.*\.jpg$/)), "Brachot", './Slides3/Brachas/Brachas.pdf', sizeofAll(require.context("./Slides3/Brachas/", false, /^\.\/.*\.jpg$/)), 5];
const YomYeru = [importAll(require.context("./Slides3/YomYeru/", false, /^\.\/.*\.jpg$/)), "Jerusalem Day", './Slides3/YomYeru/YomYeru.pdf', sizeofAll(require.context("./Slides3/YomYeru/", false, /^\.\/.*\.jpg$/)), 6];
const Tishbav = [importAll(require.context("./Slides3/Tishbav/", false, /^\.\/.*\.jpg$/)), "Tisha B'av", './Slides3/Tishbav/Tishbav.pdf', sizeofAll(require.context("./Slides3/Tishbav/", false, /^\.\/.*\.jpg$/)), 7];
const Shema = [importAll(require.context("./Slides3/Shema/", false, /^\.\/.*\.jpg$/)), "Shema", './Slides3/Shema/Shema.pdf', sizeofAll(require.context("./Slides3/Shema/", false, /^\.\/.*\.jpg$/)), 8];
const Mezuza = [importAll(require.context("./Slides3/Mezuzah/", false, /^\.\/.*\.jpg$/)), "Mezuzah", './Slides3/Mezuzah/Mezuzah.pdf', sizeofAll(require.context("./Slides3/Mezuzah/", false, /^\.\/.*\.jpg$/)), 9];
const Sefira = [importAll(require.context("./Slides3/Sefira/", false, /^\.\/.*\.jpg$/)), "Sefirat HaOmer", './Slides3/Sefira/Sefira.pdf', sizeofAll(require.context("./Slides3/Sefira/", false, /^\.\/.*\.jpg$/)), 10];
const Vocab = [importAll(require.context("./Slides3/Vocab/", false, /^\.\/.*\.jpg$/)), "Vocabulary", './Slides3/Vocab/Vocab.pdf', sizeofAll(require.context("./Slides3/Vocab/", false, /^\.\/.*\.jpg$/)), 11];
const TenCommandments = [importAll(require.context("./Slides3/TenCommandments/", false, /^\.\/.*\.jpg$/)), "Ten Commandments", './Slides3/TenCommandments/TenCommandments.pdf', sizeofAll(require.context("./Slides3/TenCommandments/", false, /^\.\/.*\.jpg$/)), 12];
const AlephBet2 = [importAll(require.context("./Slides3/AlephBet2/", false, /^\.\/.*\.jpg$/)), "AlephBet Revisited", './Slides3/AlephBet2/AlephBet2.pdf', sizeofAll(require.context("./Slides3/AlephBet2/", false, /^\.\/.*\.jpg$/)), 13];
const HebrewBasics1 = [importAll(require.context("./Slides3/HebrewBasics1/", false, /^\.\/.*\.jpg$/)), "Hebrew Basics", './Slides3/HebrewBasics1/HebrewBasics1.pdf', sizeofAll(require.context("./Slides3/HebrewBasics1/", false, /^\.\/.*\.jpg$/)), 14];
const Months = [importAll(require.context("./Slides3/Months/", false, /^\.\/.*\.jpg$/)), "Jewish Calendar", './Slides3/Months/Months.pdf', sizeofAll(require.context("./Slides3/Months/", false, /^\.\/.*\.jpg$/)), 14];
const HighHolidays = [importAll(require.context("./Slides3/HighHolidays/", false, /^\.\/.*\.jpg$/)), "High Holidays", './Slides3/HighHolidays/HighHolidays.pdf', sizeofAll(require.context("./Slides3/HighHolidays/", false, /^\.\/.*\.jpg$/)), 16];
const Tefilin = [importAll(require.context("./Slides3/Tefilin/", false, /^\.\/.*\.jpg$/)), "Tefillin", './Slides3/Tefilin/Tefilin.pdf', sizeofAll(require.context("./Slides3/Tefilin/", false, /^\.\/.*\.jpg$/)), 16];
const JewishHistory = [importAll(require.context("./Slides3/JewishHistory/", false, /^\.\/.*\.jpg$/)), "Jewish History", './Slides3/JewishHistory/JewishHistory.pdf', sizeofAll(require.context("./Slides3/JewishHistory/", false, /^\.\/.*\.jpg$/)), 16];

const slideshows = [Vocab, Mitzvas, Abraham, Neshama, JewishHistory, Brachas, HighHolidays, Months, Shema, AlephBet2, Tefilin, TenCommandments, Mezuza, Sefira, YomYeru, Tishbav, Bereishit, HebrewBasics1];

let backDropColor = 'brown';

function getButtonStyle() {

  return {
    position: 'absolute',
    // position: '-webkit-sticky',
    // position: 'sticky',
    top: 0,
    right: 0,
    color: 'red',
    fontSize: '1.5vw'

    // alignSelf: 'flex-start'

  };
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      flexGrow: 1,
      flexDirection: 'col',
    },
    container: {
      padding: "20px",
      textAlign: "center",
      // backgroundColor: '#835d16'

      
    },
    cover: {
      height: "100%",
      backgroundColor: backDropColor
    },
    content: {
      backgroundColor: backDropColor
    },
    grid: {
      // // padding: theme.spacing(2),
      // width: 500,
      // height: 450,
      // direction: "row",
      // justify: "center",
      // alignItems: "center",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: 'blue',
      backgroundColor: 'green'
    },

  }));
  
  const Yalla = ({lesson}) => {
    const [handleOpen, setHandleOpen] = useState({ open: false });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    // const [openModal, setModalOpen] = useState(false);

    const [handleFullScreen, setHandleFullScreen] = useState({ fullScreen: false });
    const [buttonStyle] = React.useState(getButtonStyle);

    const matches = useMediaQuery("(max-width:600px)");
    const classes = useStyles();
  
    // const Transition = React.forwardRef(function Transition(props, ref) {
    //   return <img direction="up" ref={ref} {...props} />;
    // });

    return (
        <div>

        <Card className={classes.root} style={{backgroundColor: backDropColor}} >

            <div class="lecture-cover" onClick={() => setHandleOpen({ open: true })} >
              {/* <infoHover> */}
              <RenderSmoothImage src={lesson[0][0]} ></RenderSmoothImage>
              {/* </infoHover> */}
              {/* <StuTe></StuTe> */}
            </div>
                  <CardContent className={classes.content} >
                      <Grid container spacing={2} justify="space-between" alignItems="center"> 
                        <Grid item >
                          <Button variant="contained" color="primary" style={{fontSize: '1.5vw' }} 
                            onClick={() => setHandleOpen({ open: true })} startIcon={<OpenInNewIcon />}> 
                            {lesson[1]} 
                          </Button>
                        </Grid>

                        <Grid item >
                          <Button variant="contained" color="secondary" >
                            <a href={lesson[2]} download={lesson[1]}>
                              <CloudDownloadIcon style={{ color: '#8eacbb', fontSize: '2.5vw' }} />
                            </a>
                          </Button>
                        </Grid>

                        {/* <Grid item >
                          {lesson[3]}
                        </Grid> */}
                      </Grid>
                  <AutoRotatingCarousel
                    label = {
                      <Button variant="contained" color="primary">
                        <ExitToAppIcon color="secondary" style={{transform: "rotate(-180deg)"}}/>
                      </Button>
                    } 
                    label2 = {
                      <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        <ZoomOutMapIcon color="secondary"/>
                      </Button>
                    }
                    open={handleOpen.open}
                    onClose={() => setHandleOpen({ open: false })}
                    onStart={() => setHandleOpen({ open: false })}
                    onFullScreen={() => setHandleFullScreen({ fullScreen: false})}
                    autoplay={false} 
                    // mobile={matches} 
                    mobile={(!!navigator.maxTouchPoints || matches)}
                    fullScreen={handleFullScreen.fullScreen}
                    style={{ position: 'absolute', width: '100%', height: 900, footer: false}}
                  >
                      {lesson[0].map(image => { return (
                                  <Slide2
                                    // media={<img src={image} alt={image} width='150%'/>}
                                    media={<RenderSmoothImage src={image}></RenderSmoothImage>}
                                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                                    style={{backgroundColor: red[600]}}
                                  />
                                  )
                                  
                                  })}
                                  
                  </AutoRotatingCarousel>


                  <div>

                  {/* <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}> */}
                  
                <Dialog fullScreen open={open} onClose={handleClose} PaperProps={{style: {backgroundColor: red[600],boxShadow: 'none'}}} >

                  {lesson[0].map(image => { return (<RenderSmoothImage src={image}/>)})}
                  
                  <button style={buttonStyle} onClick={() => {handleClose(); setHandleOpen({ open: false });}} >x</button> 
                  
                  <Button variant="contained" color="primary" style={{fontSize: '1.5vw' }} onClick={() => {handleClose(); setHandleOpen({ open: false });}}>Exit</Button>
                  </Dialog>
                  </div>

              </CardContent>

          </Card>

        </div>
    );
}

export default function Slideshow(){

  const classes = useStyles();
  
  return (

    <div className={classes.root}>
        <div style={{color: 'white' }}> 
              <h1>Review the Lectures!</h1>
        </div> 
      <div>
      <Grid container spacing={4} justify="space-between" alignItems="center"> 
        {slideshows.map(lesson => { return (
              <Grid item sm={4} xs={6}>
                <Yalla lesson = {lesson}/>
              </Grid>
          )})}
      </Grid>

      </div>

    </div>

  );
}
