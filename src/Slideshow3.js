// TODO: mess w/ BackdropProps? to get backdrop of carosel darker

// import React, { useState, useEffect } from "react";
import React, { useState } from "react";

import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red } from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AutoRotatingCarousel from './AutoRotatingCarousel'; //https://github.com/TeamWertarbyte/material-auto-rotating-carousel
import Slide2 from './Slides'; //https://github.com/TeamWertarbyte/material-auto-rotating-carousel
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import RenderSmoothImage from './RenderSmoothImage';
import Dialog from '@material-ui/core/Dialog';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {Slideshows} from './Lectures';
// import { NewReleases } from "@material-ui/icons";
import useKeyPress from './useKeyPress';

import Hidden from '@material-ui/core/Hidden';


// function importAll(r) {
//   return r.keys().map(r);
// }

// function sizeofAll(r) {
//   return r.keys().map(r).length + ' slides';
// }

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
  
  function detectDevice(){
    let detectObj = {
      // account: user,
      device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
      orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape',
      browser: navigator.vendor.includes('Apple')? 'safari' : 'chrome',
    }
    return detectObj
  }

  function makeResp(downloadedFile) {
        var body = {"message": downloadedFile + ", " + detectDevice().device + " , " +  detectDevice().orientation + " , " +  detectDevice().browser +  ", " + new Date() }
    // var body = {"message": detectDevice.account + ", " + downloadedFile + ", " + detectDevice().device + " , " +  detectDevice().orientation + " , " +  detectDevice().browser +  ", " + new Date() }
    var headers = new Headers()
    headers.append("Content-Type", "application/json")
    var options = {method: "POST", headers, mode: "cors", body: JSON.stringify(body),}
    return options;
  }

  const fetchData = async (downloadedFile) => {
      try {await fetch("https://76103417c60b0ff306268dcb81ecf967.m.pipedream.net", makeResp(downloadedFile));} 
      catch(err) {// console.log('failed webhook')
      }
  };

  var info1 = 0;

  function doIt(downloadedFile) {
    fetch('https://ipapi.co/json/')
    .then( res => res.json())
    .then(response => {
        info1 = JSON.stringify(response);
        fetchData(downloadedFile + ", " + info1 );
      })
    .catch((data, status) => {
        console.log('Request failed');
    })
  }

//   const handleEsc = (event) => {
//     if (event.keyCode === 27) {
//     console.log('Close')
//   }
// };
// window.addEventListener('keydown', handleEsc);

let selected = -1;


  const Yalla = ({lesson}) => {

    const [modalOpen, setModalOpen] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [revealDate, setRevealDate] = React.useState(false);

    const handleModalOpen = () => {
      selected = lesson.id;
      setModalOpen(true);
      console.log("selected", selected, "name", lesson.name);
    };

    const handleModalClose = () => {
      setModalOpen(false);
      selected = -1;

    };

    const handleClickOpen = () => {
      console.log("handlingClickOpenb", selected, "name", lesson.name, lesson.id);
      selected = lesson.id;
      setOpen(true);
      console.log("handlingClickOpena", selected, "name", lesson.name, lesson.id);

    };

    const handleClose = () => {
      setOpen(false);
      selected = -1;
    };

    const [handleFullScreen, setHandleFullScreen] = useState({ fullScreen: false });
    const [buttonStyle] = React.useState(getButtonStyle);

    const matches = useMediaQuery("(max-width:600px)");
    const classes = useStyles();

    //BUGGY -- when resorting the list, the open state on modal launches wrong lesson/selected..
    useKeyPress('f', () => {
      console.log("f", selected, lesson.id, lesson.name);

      if(lesson.id === selected){
        handleClickOpen();
      }
    });
  

    return (
        <div>

        <Card className={classes.root} style={{backgroundColor: backDropColor}} >
            <div class="lecture-cover" onClick={() => {handleModalOpen(); doIt(lesson.name + "Opend-imgclk")}} onMouseOver={() => {setRevealDate(!revealDate)}}>
              {/* <infoHover> */}
              <RenderSmoothImage src={lesson.images_path[0]} ></RenderSmoothImage>
              {/* </infoHover> */}
              {/* <StuTe></StuTe> */}
            </div>
                  <CardContent className={classes.content} >
                      <Grid container spacing={2} justify="space-between" alignItems="center"> 
                        <Grid item >
                        <Tooltip title="Preview Slides" arrow placement="up">

                          <Button variant="contained" color="primary" style={{fontSize: '1.5vw' }} 
                            onClick={() => {handleModalOpen(); doIt(lesson.name + "Opend-btnclk")}} startIcon={<OpenInNewIcon />}> 
                            {lesson.name} 
                          </Button>
                          </Tooltip>
                        </Grid>

                        <Grid item >
                        {/* <Tooltip title="Download pdf" arrow placement="up">

                          <Button variant="contained" color="secondary" onClick={() => doIt(lesson.name + "Dwnlod")} >
                            <a href={lesson.pdf} download={lesson.name} >
                              <CloudDownloadIcon style={{ color: '#8eacbb', fontSize: '2.5vw' }}/>
                            </a>
                          </Button>
                          </Tooltip> */}
                        </Grid>

                        <Grid item >
                        {/* {revealDate && <h8 style = {{color: 'white'}}>{lesson.date}</h8>} */}
                        <h8 style = {{color: 'white'}}>{lesson.date}</h8>

                        </Grid>
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
                    open={modalOpen}
                    onClose={() => handleModalClose()}
                    onStart={() => handleModalClose()}
                    onFullScreen={() => setHandleFullScreen({ fullScreen: false})}
                    autoplay={false} 
                    // mobile={matches} 
                    mobile={(!!navigator.maxTouchPoints || matches)}
                    fullScreen={handleFullScreen.fullScreen}
                    style={{ position: 'absolute', width: '100%', height: 900, footer: false}}
                  >
                      {lesson.images_path.map(image => { return (
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
                  
                <Dialog fullScreen open={open} onClose={handleClose} PaperProps={{style: {backgroundColor: red[600],boxShadow: 'none'}}} >
                  {lesson.images_path.map(image => { return (<RenderSmoothImage src={image}/>)})}
                  
                  <button style={buttonStyle} onClick={() => {handleClose(); handleModalClose();}} >x</button> 
                  
                  <Button variant="contained" color="primary" style={{fontSize: '1.5vw' }} onClick={() => {handleClose(); handleModalClose();}}>Exit</Button>
                  
                  </Dialog>
                  </div>

              </CardContent>

          </Card>

        </div>
    );
}


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

// Defaults to sorting by date of lesson
let sorted = [...Slideshows].sort((a, b) => (new Date(b.date)) - (new Date(a.date)));

export default function Slideshow(){

  const classes = useStyles();
  const [sortType, setSortType] = useState('date');
  const [data, setData] = useState(sorted);
  const [asc, setAsc] = useState(1);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    setAnchorEl(null);
  };


  const handleChange = (type) => {

    if (sortType === type){
      setAsc(-1*asc);
    }
    else{
      setAsc(1);
    }

    switch (type) {
      case 'asc':
        setAsc(-1*asc);
        handleChange(sortType);
        return;
      case 'desc':
        setAsc(1);
        handleChange(sortType);
        return;
      case 'date':
        sorted = [...Slideshows].sort((a, b) => (asc * (new Date(a.date))) - (asc * (new Date(b.date))));
        break;
      case 'name':
          sorted = [...Slideshows].sort((a, b) =>  asc * (a.name).localeCompare(b.name));
          break;
      case 'size':
        sorted = [...Slideshows].sort((a, b) => (asc * b.images_path.length) - (asc * a.images_path.length));
        break;
      case 'id':
        sorted = [...Slideshows].sort((a, b) =>  (asc * b.id) -  (asc * a.id));
        break;
    }
    setSortType(type);
    setData(sorted);
    handleClose();
    doIt("sortedSlides");
  };
  
  return (

    <div className={classes.root}>
      {/* INVISIBLE BUTTON SO THE LAYOUT WILL LOOK GOOD */}
      <Hidden smDown>

        <div style={{visibility: 'hidden' }}><h1>
          <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" >
                  Sort By: {sortType} 
          </Button>
          </h1>
        </div>
      </Hidden>
        <div style={{color: 'white' }}> 
            <h1>Review the Lectures!</h1>
        </div> 
      <Hidden smDown>

        <div > 
        <h1>
        <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
                Sort By: {sortType} 
                {(asc!==1) ? <ExpandLessIcon onClick={() => handleChange('asc')}/> : <ExpandMoreIcon onClick={() => handleChange('desc')}/>}
        </Button>
        </h1>
        </div> 
      </Hidden>

      <div>
        
      <Hidden mdUp>
        <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
                Sort By: {sortType} 
                {(asc!==1) ? <ExpandLessIcon onClick={() => handleChange('asc')}/> : <ExpandMoreIcon onClick={() => handleChange('desc')}/>}
        </Button>
        <br/><br/><br/>

      </Hidden>

      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <StyledMenuItem onClick={() => handleChange('date')}>
            Date 
            {(sortType === 'date') ?
              (asc!==1) ? <ExpandLessIcon onClick={() => handleChange('asc')}/> : <ExpandMoreIcon onClick={() => handleChange('desc')}/>
              :
              ''
            }
              </StyledMenuItem>
          <StyledMenuItem onClick={() => handleChange('name')}>
            Name 
            {(sortType === 'name') ?
              (asc!==1) ? <ExpandLessIcon onClick={() => handleChange('asc')}/> : <ExpandMoreIcon onClick={() => handleChange('desc')}/>
              :
              ''
            }
          </StyledMenuItem>
          {/* <StyledMenuItem onClick={() => handleChange('size')}>
            Size 
              {(sortType === 'size') ?
                (asc!==1) ? <ExpandLessIcon onClick={() => handleChange('asc')}/> : <ExpandMoreIcon onClick={() => handleChange('desc')}/>
                :
                ''
              }
        </StyledMenuItem> */}
      </StyledMenu>
      
      <Grid container spacing={4} justify="space-between" alignItems="center"> 
        {data.map(lesson => { return (
              <Grid item sm={4} xs={6}>
                <Yalla lesson = {lesson}/>
              </Grid>
          )})}
      </Grid>

      </div>

    </div>

  );
}
