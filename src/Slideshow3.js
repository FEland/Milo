// TODO: mess w/ BackdropProps? to get backdrop of carosel darker

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue} from "@material-ui/core/colors";
// import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AutoRotatingCarousel from './AutoRotatingCarousel'; //https://github.com/TeamWertarbyte/material-auto-rotating-carousel
import Slide from './Slides'; //https://github.com/TeamWertarbyte/material-auto-rotating-carousel
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function importAll(r) {
  return r.keys().map(r);
}

const Mitzvas = [importAll(require.context("./Slides/Mitzvas/", false, /^\.\/.*\.jpg$/)), "Mitzvas", './Slides/Mitzvas/Mitzvas.pdf'];
const Neshama = [importAll(require.context("./Slides/Neshama/", false, /^\.\/.*\.jpg$/)), "Neshama", './Slides/Neshama/Neshama.pdf'];
const Abraham = [importAll(require.context("./Slides/Abraham/", false, /^\.\/.*\.jpg$/)), "Abraham", './Slides/Abraham/Abraham.pdf'];
const Bereishit = [importAll(require.context("./Slides/Bereishit/", false, /^\.\/.*\.jpg$/)), "Creation", './Slides/Bereishit/Creation.pdf'];
const Brachas = [importAll(require.context("./Slides/Brachas/", false, /^\.\/.*\.jpg$/)), "Brachot", './Slides/Brachas/Brachas.pdf'];
const YomYeru = [importAll(require.context("./Slides/YomYeru/", false, /^\.\/.*\.jpg$/)), "Jerusalem Day", './Slides/YomYeru/YomYeru.pdf'];
const Tishbav = [importAll(require.context("./Slides/Tishbav/", false, /^\.\/.*\.jpg$/)), "Tisha B'av", './Slides/Tishbav/Tishbav.pdf'];
const Shema = [importAll(require.context("./Slides/Shema/", false, /^\.\/.*\.jpg$/)), "Shema", './Slides/Shema/Shema.pdf'];
const Mezuza = [importAll(require.context("./Slides/Mezuzah/", false, /^\.\/.*\.jpg$/)), "Mezuzah", './Slides/Mezuzah/Mezuzah.pdf'];
const Sefira = [importAll(require.context("./Slides/Sefira/", false, /^\.\/.*\.jpg$/)), "Sefirat HaOmer", './Slides/Sefira/Sefira.pdf'];
const Vocab = [importAll(require.context("./Slides/Vocab/", false, /^\.\/.*\.jpg$/)), "Vocabulary", './Slides/Vocab/Vocab.pdf'];
const TenCommandments = [importAll(require.context("./Slides/TenCommandments/", false, /^\.\/.*\.jpg$/)), "Ten Commandments", './Slides/TenCommandments/TenCommandments.pdf'];
const AlephBet2 = [importAll(require.context("./Slides/AlephBet2/", false, /^\.\/.*\.jpg$/)), "AlephBet Revisited", './Slides/AlephBet2/AlephBet2.pdf'];

const slideshows = [Vocab, Mitzvas, Abraham, Neshama, Brachas, Shema, AlephBet2, TenCommandments, Mezuza, Sefira, YomYeru, Bereishit, Tishbav];


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
      textAlign: "center"
    },
    grid: {
      padding: theme.spacing(2),
      width: 500,
      height: 450,
      direction: "row",
      justify: "center",
      alignItems: "center",
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: 'blue',
      backgroundColor: 'green'
    },

  }));
  

const AutoRotatingCarouselModal = ({isMobile, lesson }) => {
    const [handleOpen, setHandleOpen] = useState({ open: false });

    return (
      <div>

        <div>
        <Grid container spacing={4} justify="space-between" alignItems="center"> 
            <Grid item >
              <Button variant="contained" color="primary" 
              style={{fontSize: 20 }} 
              onClick={() => setHandleOpen({ open: true })} 
              startIcon={<OpenInNewIcon />}> 
                {lesson[1]} 
              </Button>
            </Grid>
            <Grid item >

              <Button variant="contained" color="secondary" >
              <a href={lesson[2]} download={lesson[1]}>
              <CloudDownloadIcon style={{ color: blue[500], fontSize: 30 }} />
              </a>
              </Button>
            </Grid>
          </Grid>
        </div>
        <AutoRotatingCarousel
          label = {lesson[1]}
          open={handleOpen.open}
          onClose={() => setHandleOpen({ open: false })}
          onStart={() => setHandleOpen({ open: false })}
          autoplay={false}
          mobile={isMobile}
          style={{ position: 'absolute', width: '100%', height: 900, footer: false}}
        >
            {lesson[0].map(image => {
                        return (
                        <Slide
                        media={<img key={image} src={image} alt={image} width='150%'/>}
                        mediaBackgroundStyle={{ backgroundColor: red[400] }}
                        style={{backgroundColor: red[600]}}
                        />
                        )
                    })}
        </AutoRotatingCarousel>
      </div>
    );
  };

export default function Slideshow(){

  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  const down = (pdf, title) => {
    console.log("HIT IMAGE");
    return <a href={pdf} download={title}>aasdfas</a>
  }
  
  return (

    <div className={classes.root}>
        <div style={{color: 'white' }}> 
              <h1>Review the Lectures!</h1>
        </div> 
      <div>
      <Grid container spacing={4} justify="space-between" alignItems="center"> 
        {slideshows.map(lesson => { return (
              <Grid item xs={3} sm={4}>

                  <Card className={classes.root} >

                  <CardMedia
                      component="img" className={classes.cover} image={lesson[0][0]} 
                      onClick={() => {down(lesson[2] , lesson[1])} }
                    />

                  <CardContent className={classes.content}>

                    <AutoRotatingCarouselModal isMobile={matches} lesson={lesson} 
                          modalProps={{
                            BackdropProps: {
                              backgroundColor: 'green'
                            }
                          }}
                    />
                  </CardContent>

                  </Card>


              </Grid>
          )})}
      </Grid>
      </div>
    </div>

  );
}
