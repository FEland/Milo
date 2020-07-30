// TODO: mess w/ BackdropProps? to get backdrop of carosel darker

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue} from "@material-ui/core/colors";
// import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AutoRotatingCarousel from './AutoRotatingCarousel';
import Slide from './Slides';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function importAll(r) {
  return r.keys().map(r);
}

// const down = (lesson) => {
//   return <a href={lesson[2]} download="bla.pdf">Download</a>
// }



// function createImageList(folder) {
//   let a = importAll(require.context(folder, false, /^\.\/.*\.jpg$/));
//   return a;
// }


// const Mitzvas = importAll(require.context("./Slides/Mitzvas/", false, /^\.\/.*\.jpg$/));
// const Neshama = importAll(require.context("./Slides/Neshama/", false, /^\.\/.*\.jpg$/));
// const Abraham = importAll(require.context("./Slides/Abraham/", false, /^\.\/.*\.jpg$/));
// const Bereishit = importAll(require.context("./Slides/Bereishit/", false, /^\.\/.*\.jpg$/));
// const Brachas = importAll(require.context("./Slides/Brachas/", false, /^\.\/.*\.jpg$/));
// const YomYeru = importAll(require.context("./Slides/YomYeru/", false, /^\.\/.*\.jpg$/));
// const Tishbav = importAll(require.context("./Slides/Tishbav/", false, /^\.\/.*\.jpg$/));
// const Shema = importAll(require.context("./Slides/Shema/", false, /^\.\/.*\.jpg$/));
// const Mezuza = importAll(require.context("./Slides/mezuza/", false, /^\.\/.*\.jpg$/));
// const Sefira = importAll(require.context("./Slides/Sefira/", false, /^\.\/.*\.jpg$/));

const Mitzvas = [importAll(require.context("./Slides/Mitzvas/", false, /^\.\/.*\.jpg$/)), "Mitzvas", './Slides/Mitzvas/Mitzvas.pdf'];
const Neshama = [importAll(require.context("./Slides/Neshama/", false, /^\.\/.*\.jpg$/)), "Neshama", './Slides/Neshama/Neshama.pdf'];
const Abraham = [importAll(require.context("./Slides/Abraham/", false, /^\.\/.*\.jpg$/)), "Abraham", './Slides/Abraham/Abraham.pdf'];
const Bereishit = [importAll(require.context("./Slides/Bereishit/", false, /^\.\/.*\.jpg$/)), "Creation", './Slides/Bereishit/Creation.pdf'];
const Brachas = [importAll(require.context("./Slides/Brachas/", false, /^\.\/.*\.jpg$/)), "Brachot", './Slides/Brachas/Brachas.pdf'];
const YomYeru = [importAll(require.context("./Slides/YomYeru/", false, /^\.\/.*\.jpg$/)), "Jerusalem Day", './Slides/YomYeru/YomYeru.pdf'];
const Tishbav = [importAll(require.context("./Slides/Tishbav/", false, /^\.\/.*\.jpg$/)), "Tisha B'av", './Slides/Tishbav/Tishbav.pdf'];
const Shema = [importAll(require.context("./Slides/Shema/", false, /^\.\/.*\.jpg$/)), "Shema", './Slides/Shema/Shema.pdf'];
// const Mezuza = [importAll(require.context("./Slides/Mezuza/", false, /^\.\/.*\.jpg$/)), "Mezuza", './Slides/Mezuza/Mezuza.pdf'];
const Sefira = [importAll(require.context("./Slides/Sefira/", false, /^\.\/.*\.jpg$/)), "Sefirat HaOmer", './Slides/Sefira/Sefira.pdf'];

// const slideshows = [Mitzvas, Abraham, Neshama, Brachas, Shema, Mezuza, Sefira, YomYeru, Bereishit, Tishbav];
const slideshows = [Mitzvas, Abraham, Neshama, Brachas, Shema, Sefira, YomYeru, Bereishit, Tishbav];


// const imageArray = images.map(function(image) {
//     return <img key={image} src={image} />;
// });

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      flexGrow: 1,
      // backgroundColor: 'brown',
      // display: 'flex',
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

    // details: {
    //   display: 'flex',
    //   // color: 'white',
    //   flexDirection: 'col',
      
  
    // },
    // content: {
    //   // flex: '1 0 auto',
    //   color: 'white',
    //   width: '70%',
    //   position: 'left',
    //   display: 'flex'
    // },
    // cover: {
    //   width: '50%',
    //   position: 'center',
    //   display: 'flex',
    // },

  }));
  

const AutoRotatingCarouselModal = ({isMobile, lesson }) => {
    const [handleOpen, setHandleOpen] = useState({ open: false });
    // const handleClick = (name) => {
    //   setHandleOpen({ open: true });
    // };

    // const down = (pdf, title) => {
    //   return <a href={pdf} download={title}>hi</a>
    // }


    return (
      <div>
            
          {/* <a href={haftorah} download={torah}>Download</a> */}
        {/* <Button
        href={lesson[2]}
        color="transparent"
        target="_blank"
        download={lesson[1]}>jols</Button> */}
        {/* <Button> asd {down(lesson[2] , lesson[1])} </Button> */}
        <div>
        <Grid container spacing={4} justify="space-between" alignItems="center"> 
            <Grid item >
              <Button variant="contained" color="primary" 
              style={{fontSize: 20 }} 
              onClick={() => setHandleOpen({ open: true })} 
              startIcon={<OpenInNewIcon />}> 
                {lesson[1]} 
              </Button>
            {/* <CloudDownloadIcon style={{ color: green[500], fontSize: 40 }} onClick={() => {down(lesson[2] , lesson[1])} }>
            {down(lesson[2] , lesson[1])}
            </CloudDownloadIcon>  */}
            {/* <CloudDownloadIcon onClick={() => { console.log("jes"); down(lesson[2] , lesson[1])} }/>  */}
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
          // label="Get started"
          // label2={<Button> asd {down(lesson[1])} </Button>}
         
          // label2={    <Button
          //   href={haftorah}
          //   color="transparent"
          //   target="_blank"
          //   download={lesson[1]}>jols</Button>}

          label = {lesson[1]}
          // label={<Link to={torah} target="_blank" download>Download</Link>}

          // label={<a href={haftorah} download={torah}>Download</a>}
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
                        // title={<a href={torah} download="Haftora.pdf">Download</a>}
                        // subtitle={<div>YE {down(lesson[1])}</div>}
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
        {/* <h1 >Review the Lectures!</h1> */}
        <div style={{color: 'white' }}> 
              <h1>Review the Lectures!</h1>
        </div> 
      <div>
      <Grid container spacing={4} justify="space-between" alignItems="center"> 
        {slideshows.map(lesson => { return (
              // <Grid item xs={3} sm={6}>
              <Grid item xs={3} sm={4}>

                  <Card className={classes.root} >

                  <CardMedia
                      component="img" className={classes.cover} image={lesson[0][0]} 
                      // position='right'
                      onClick={() => {down(lesson[2] , lesson[1])} }
                      // resize='both'
                    />

                  <CardContent className={classes.content}>

                  {/* <CardContent className={classes.content} onClick={() => {{down(lesson[2] , lesson[1])}} }> */}
                    <AutoRotatingCarouselModal isMobile={matches} lesson={lesson} 
                          modalProps={{
                            BackdropProps: {
                              backgroundColor: 'green'
                            }
                          }}
                        // modalProps={{backgroundColor: 'green'}}
                    />
                  </CardContent>

                  {/* <Button href={lesson[2]} ="_blank" download={lesson[1]}>jols</Button> */}
                  </Card>


              </Grid>
          )})}
      </Grid>
      </div>
    </div>

  );
}
