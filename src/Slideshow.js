import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


function importAll(r) {
  return r.keys().map(r);
}

// function createImageList(folder) {
//   let a = importAll(require.context(folder, false, /^\.\/.*\.jpg$/));
//   return a;
// }


const Mitzvas = importAll(require.context("./Slides/Mitzvas/", false, /^\.\/.*\.jpg$/));
const Neshama = importAll(require.context("./Slides/Neshama/", false, /^\.\/.*\.jpg$/));
const Abraham = importAll(require.context("./Slides/Abraham/", false, /^\.\/.*\.jpg$/));
const Bereishit = importAll(require.context("./Slides/Bereishit/", false, /^\.\/.*\.jpg$/));
const Brachas = importAll(require.context("./Slides/Brachas/", false, /^\.\/.*\.jpg$/));
const YomYeru = importAll(require.context("./Slides/YomYeru/", false, /^\.\/.*\.jpg$/));
const Tishbav = importAll(require.context("./Slides/Tishbav/", false, /^\.\/.*\.jpg$/));
const Shema = importAll(require.context("./Slides/Shema/", false, /^\.\/.*\.jpg$/));
const Mezuza = importAll(require.context("./Slides/mezuza/", false, /^\.\/.*\.jpg$/));
const Sefira = importAll(require.context("./Slides/Sefira/", false, /^\.\/.*\.jpg$/));

// const Mitzvas = (importAll(require.context("./Slides/Mitzvas/", false, /^\.\/.*\.jpg$/)), "Mitzvas");
// const Neshama = (importAll(require.context("./Slides/Neshama/", false, /^\.\/.*\.jpg$/)), "Neshama");
// const Abraham = (importAll(require.context("./Slides/Abraham/", false, /^\.\/.*\.jpg$/)), "Abraham");
// const Bereishit = (importAll(require.context("./Slides/Bereishit/", false, /^\.\/.*\.jpg$/)), "Bereishit");
// const Brachas = (importAll(require.context("./Slides/Brachas/", false, /^\.\/.*\.jpg$/)), "Brachas");
// const YomYeru = (importAll(require.context("./Slides/YomYeru/", false, /^\.\/.*\.jpg$/)), "YomYeru");
// const Tishbav = (importAll(require.context("./Slides/Tishbav/", false, /^\.\/.*\.jpg$/)), "Tishbav");
// const Shema = (importAll(require.context("./Slides/Shema/", false, /^\.\/.*\.jpg$/)), "Shema");
// const Mezuza = (importAll(require.context("./Slides/mezuza/", false, /^\.\/.*\.jpg$/)), "Mezuza");
// const Sefira = (importAll(require.context("./Slides/Sefira/", false, /^\.\/.*\.jpg$/)), "Sefira");

const slides = [Mitzvas, Abraham, Bereishit, Neshama, Brachas, Shema, Mezuza, Sefira, YomYeru, Tishbav];


// const imageArray = images.map(function(image) {
//     return <img key={image} src={image} />;
// });

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    grid: {
      width: 500,
      height: 450,
      direction: "row",
      justify: "center",
      alignItems: "center",
    },
  }));

// const imageArray = images.map(function(image) {
//   return <img key={image} src={image} />;


// const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile, lesson }) => {

    
//   return (

//     <>

//             <AutoRotatingCarousel
//                 label="Get started"
//                 open={handleOpen.open}
//                 onClose={() => setHandleOpen({ open: false })}
//                 onStart={() => setHandleOpen({ open: false })}
//                 autoplay={false}
//                 mobile={isMobile}
//                 style={{ position: "absolute" }}
//             >
//                     {lesson.map(image => {
//                     return (<div> HI </div>);
//                 })}


//             </AutoRotatingCarousel>
//     </>


//       )})}
//   );
// };

const AutoRotatingCarouselModal = ({isMobile, lesson }) => {
    const [handleOpen, setHandleOpen] = useState({ open: false });
    const handleClick = (name) => {
      setHandleOpen({ open: true });
    };

    return (
      <div>
        <Button onClick={() => setHandleOpen({ open: true })}>{lesson}</Button>
        <AutoRotatingCarousel
          label="Get started"
          open={handleOpen.open}
          onClose={() => setHandleOpen({ open: false })}
          onStart={() => setHandleOpen({ open: false })}
          autoplay={false}
          mobile={isMobile}
          style={{ position: "absolute" }}
        >
            {lesson.map(image => {
                        return (
                            <Slide
                            media={<img key={image} src={image} />}
                            mediaBackgroundStyle={{ backgroundColor: red[400] }}
                            style={{ backgroundColor: red[600] }}
                            title="This is a very cool feature"
                            subtitle="Just using this will blow your mind."
                        />
                        )
                    })}
        </AutoRotatingCarousel>
      </div>
    );
  };

export default function Slideshow(){
//   const [handleOpen, setHandleOpen] = useState({ open: false });
//   const handleClick = (name) => {
//     setHandleOpen({ open: true });
//   };
  const matches = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  
  return (

    <div className={classes.root}>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <Grid container spacing={3}> 
      {slides.map(lesson => { return (
        <div>
            <Grid item xs={3} >
                {/* <Button onClick={e=>{ this.handleClick(e, lesson)}}>Open carousel</Button> */}

                {/* <Button onClick={handleClick}>Open carousel</Button> */}
                <AutoRotatingCarouselModal isMobile={matches} 
                    lesson={lesson}> 
                </AutoRotatingCarouselModal>
            </Grid>
        </div>
        )})}
      </Grid>
    </div>

  );
}
