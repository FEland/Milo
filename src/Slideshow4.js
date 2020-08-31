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
import RenderSmoothImage from './RenderSmoothImage';

function importAll(r) {
  return r.keys().map(r);
}

function sizeofAll(r) {
  return r.keys().map(r).length + ' slides';
}

// const lol = [importAll(require.context("./Slides3/*/", false, /^\.\/.*\.jpg$/)), "Mitzvas", './Slides3/Mitzvas/Mitzvas.pdf', sizeofAll(require.context("./Slides3/Mitzvas/", false, /^\.\/.*\.jpg$/)), 1];

const Mitzvas = [importAll(require.context("./Slides3/Mitzvas/", false, /^\.\/.*\.jpg$/)), "Mitzvas", './Slides3/Mitzvas/Mitzvas.pdf', sizeofAll(require.context("./Slides3/Mitzvas/", false, /^\.\/.*\.jpg$/)), 1];
const Neshama = [importAll(require.context("./Slides3/Neshama/", false, /^\.\/.*\.jpg$/)), "Neshama", './Slides3/Neshama/Neshama.pdf', sizeofAll(require.context("./Slides3/Neshama/", false, /^\.\/.*\.jpg$/)), 2];
const Abraham = [importAll(require.context("./Slides3/Abraham/", false, /^\.\/.*\.jpg$/)), "Abraham", './Slides3/Abraham/Abraham.pdf', sizeofAll(require.context("./Slides3/Abraham/", false, /^\.\/.*\.jpg$/)), 3];
const Bereishit = [importAll(require.context("./Slides3/Bereishit/", false, /^\.\/.*\.jpg$/)), "Creation", './Slides3/Bereishit/Creation.pdf', sizeofAll(require.context("./Slides3/Bereishit/", false, /^\.\/.*\.jpg$/)), 4];
const Brachas = [importAll(require.context("./Slides3/Brachas/", false, /^\.\/.*\.jpg$/)), "Brachot", './Slides3/Brachas/Brachas.pdf', sizeofAll(require.context("./Slides3/Brachas/", false, /^\.\/.*\.jpg$/)), 5];
const YomYeru = [importAll(require.context("./Slides3/YomYeru/", false, /^\.\/.*\.jpg$/)), "Israel", './Slides3/YomYeru/YomYeru.pdf', sizeofAll(require.context("./Slides3/YomYeru/", false, /^\.\/.*\.jpg$/)), 6];
const Tishbav = [importAll(require.context("./Slides3/Tishbav/", false, /^\.\/.*\.jpg$/)), "Tisha B'av", './Slides3/Tishbav/Tishbav.pdf', sizeofAll(require.context("./Slides3/Tishbav/", false, /^\.\/.*\.jpg$/)), 7];
const Shema = [importAll(require.context("./Slides3/Shema/", false, /^\.\/.*\.jpg$/)), "Shema", './Slides3/Shema/Shema.pdf', sizeofAll(require.context("./Slides3/Shema/", false, /^\.\/.*\.jpg$/)), 8];
const Mezuza = [importAll(require.context("./Slides3/Mezuzah/", false, /^\.\/.*\.jpg$/)), "Mezuzah", './Slides3/Mezuzah/Mezuzah.pdf', sizeofAll(require.context("./Slides3/Mezuzah/", false, /^\.\/.*\.jpg$/)), 9];
const Sefira = [importAll(require.context("./Slides3/Sefira/", false, /^\.\/.*\.jpg$/)), "The Omer", './Slides3/Sefira/Sefira.pdf', sizeofAll(require.context("./Slides3/Sefira/", false, /^\.\/.*\.jpg$/)), 10];
const Vocab = [importAll(require.context("./Slides3/Vocab/", false, /^\.\/.*\.jpg$/)), "Vocabulary", './Slides3/Vocab/Vocab.pdf', sizeofAll(require.context("./Slides3/Vocab/", false, /^\.\/.*\.jpg$/)), 11];
const TenCommandments = [importAll(require.context("./Slides3/TenCommandments/", false, /^\.\/.*\.jpg$/)), "Ten Commandments", './Slides3/TenCommandments/TenCommandments.pdf', sizeofAll(require.context("./Slides3/TenCommandments/", false, /^\.\/.*\.jpg$/)), 12];
const AlephBet2 = [importAll(require.context("./Slides3/AlephBet2/", false, /^\.\/.*\.jpg$/)), "Alep Bet 2", './Slides3/AlephBet2/AlephBet2.pdf', sizeofAll(require.context("./Slides3/AlephBet2/", false, /^\.\/.*\.jpg$/)), 13];
const HebrewBasics1 = [importAll(require.context("./Slides3/HebrewBasics1/", false, /^\.\/.*\.jpg$/)), "Hebrew Basics", './Slides3/HebrewBasics1/HebrewBasics1.pdf', sizeofAll(require.context("./Slides3/HebrewBasics1/", false, /^\.\/.*\.jpg$/)), 14];
const Months = [importAll(require.context("./Slides3/Months/", false, /^\.\/.*\.jpg$/)), "Jewish Calendar", './Slides3/Months/Months.pdf', sizeofAll(require.context("./Slides3/Months/", false, /^\.\/.*\.jpg$/)), 14];
const slideshows = [Vocab, Mitzvas, Abraham, Neshama, Brachas, Months, Shema, AlephBet2, TenCommandments, Mezuza, Sefira, YomYeru, Tishbav, Bereishit, HebrewBasics1];


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
    cover: {
      height: "100%",
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
  
const IndividualCover = ({image}) => {
    const [loaded, setLoaded] = useState(false);

    function handleImageLoad() {
        setLoaded(true);
      }

    return (

            <div>
                <img src={image} alt={image} width='150%' onLoad={handleImageLoad} style={loaded ? {} : {display: 'none'}} />
                {!loaded ? <img src="/Slides3/loadin.gif" alt="icon" width='250%' position="absolute" /> : ''}
            </div>

  );
};

const IndividualSlide = ({image}) => {
  const [loaded, setLoaded] = useState(false);

  function handleImageLoad() {
      setLoaded(true);
    }

  return (

          <Slide
          media={
          <div>
            {/* <img src={image} alt={image} width='150%' loading="lazy" onLoad={handleImageLoad} style={loaded ? {} : {display: 'none'}} /> */}
            {/* {!loaded ? <img src="/Slides3/loadin.gif" alt="icon" position="absolute" /> : ''} */}
          
          <RenderSmoothImage src={image}></RenderSmoothImage>

          </div>

          }
                 
          // <img src={image} alt={image} width='150%' style={loaded ? {} : {display: 'none'}} onLoad={() => setLoad(true)}/>
      
          // media={<img src={image} alt={image} onLoad={handleImageLoad} width='150%'/>}
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{backgroundColor: red[600]}}
          >

              </Slide>
);
};

const AutoRotatingCarouselModal = ({isMobile, lesson }) => {
    const [handleOpen, setHandleOpen] = useState({ open: false });

    return (
      <div>

        <div>
        <Grid container spacing={2} justify="space-between" alignItems="center"> 
            <Grid item >
              <Button variant="contained" color="primary" 
              style={{fontSize: '1.5vw' }} 
              onClick={() => setHandleOpen({ open: true })} 
              startIcon={<OpenInNewIcon />}> 
                {lesson[1]} 
              </Button>
            </Grid>
            <Grid item >

              <Button variant="contained" color="secondary" >
              <a href={lesson[2]} download={lesson[1]}>
              <CloudDownloadIcon style={{ color: blue[500], fontSize: '2.5vw' }} />
              </a>
              </Button>
            </Grid>
            <Grid item >
              {lesson[3]}
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
          landscape={true}
          style={{ position: 'absolute', width: '100%', height: 900, footer: false}}
        >
            {lesson[0].map(image => {
                        return (
                            <IndividualSlide image={image}/>

                        )
                    })}
        </AutoRotatingCarousel>
      </div>
    );
  };

export default function Slideshow(){

  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  const [loaded, setLoaded] = useState(false);

  function handleImageLoad() {
      setLoaded(true);
    }

  const down = (pdf, title) => {
    return <a href={pdf} download={title}>Downloading...</a>
  }
  
  return (

    <div className={classes.root}>
        <div style={{color: 'white' }}> 
              <h1>Review the Lectures!</h1>
        </div> 
      {/* <slidesOnScreen> */}

      <div>
      <Grid container spacing={4} justify="space-between" alignItems="center"> 
        {slideshows.map(lesson => { return (
              <Grid item sm={4} xs={6}>

                  {/* <Card className={classes.root} > */}
                  <Card  >

                  {/* <CardMedia
                      component="img" className={classes.cover} image={lesson[0][0]} 
                      onClick={() => {down(lesson[2] , lesson[1])} } 
                    /> */}

                {/* <img src={lesson[0][0]} alt={lesson[0][0]} width='100%' onLoad={handleImageLoad} style={loaded ? {} : {display: 'none'}} />
                {!loaded ? <img src="/Slides3/loadin.gif" alt="icon" width='200%' position="absolute" /> : ''}
 */}

                  <IndividualCover image={lesson[0][0]} />

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
      {/* </slidesOnScreen> */}

    </div>

  );
}
