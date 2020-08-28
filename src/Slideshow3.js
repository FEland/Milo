// TODO: mess w/ BackdropProps? to get backdrop of carosel darker

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red } from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AutoRotatingCarousel from './AutoRotatingCarousel'; //https://github.com/TeamWertarbyte/material-auto-rotating-carousel
import Slide from './Slides'; //https://github.com/TeamWertarbyte/material-auto-rotating-carousel
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RenderSmoothImage from './RenderSmoothImage';

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
const slideshows = [Vocab, Mitzvas, Abraham, Neshama, Brachas, Months, Shema, AlephBet2, TenCommandments, Mezuza, Sefira, YomYeru, Tishbav, Bereishit, HebrewBasics1];

let backDropColor = 'brown';

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
    const [handleFullScreen, setHandleFullScreen] = useState({ fullScreen: false });
    const matches = useMediaQuery("(max-width:600px)");
    const classes = useStyles();
  
    return (
        <div>

        <Card className={classes.root} style={{backgroundColor: backDropColor}} >

            <div class="lecture-cover" onClick={() => setHandleOpen({ open: true })} >
              <RenderSmoothImage src={lesson[0][0]} ></RenderSmoothImage>
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

                        <Grid item >
                          {lesson[3]}
                        </Grid>
                      </Grid>
                  <AutoRotatingCarousel
                    label = {lesson[1]} open={handleOpen.open}
                    onClose={() => setHandleOpen({ open: false })}
                    onStart={() => setHandleOpen({ open: false })}
                    onFullScreen={() => setHandleFullScreen({ fullScreen: false})}
                    autoplay={false} mobile={matches} fullScreen={handleFullScreen.fullScreen}
                    style={{ position: 'absolute', width: '100%', height: 900, footer: false}}
                  >
                      {lesson[0].map(image => { return (
                                  <Slide
                                    // media={<img src={image} alt={image} width='150%'/>}
                                    media={<RenderSmoothImage src={image}></RenderSmoothImage>}
                                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                                    style={{backgroundColor: red[600]}}
                                  />)})}
                  </AutoRotatingCarousel>
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
