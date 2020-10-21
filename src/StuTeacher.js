import React, {Fragment} from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link, Route, Switch, HashRouter } from "react-router-dom";

import Practice from './Practice';
import ChromeSite from './ChromeSite';

import Ropes from './Ropes_8';
import Fresh from './Fresh';
import Shema from './Shema_4';
import Master from './Master';
import Slideshow from './Slideshow3';

import AboutMe from './AboutMe';
import Services from './Services';
import Contact from './Contact';
import References from './References';

// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: 'brown',
//     // position: 'center'
//   },
//   avatar: {
//     // margin: theme.spacing(5),
//     margin: theme.spacing(3, 0, 2),

//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

export default function StuTeacher({}) {

    const [studentOn, setStudent] = React.useState(false);
    const [teacherOn, setTeacher] = React.useState(false);

    // const [state, setState] = React.useState({
    //     student: false,
    //     teacher: false,
    //   });
    
    //   const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    //   };
//   const classes = useStyles();

// const handleChange = (event) => {
//     if (event.target.value.toLowerCase() === pwd){
//         handleResult(true);
//     }
//   };

  
  

return (
    <>
    <div class='bottomLeft'>
      <div class="cylinder">
        <div class="cylinder2"></div>
        <div class='torahBack1'></div>
        <div class="cylinder3">
        </div>
      </div>
    </div>
    {/* <div class='torahBack1'></div> */}

            {/* <div class='torahBackUp1'></div> */}

        <div class='torahBack2'></div>

    <div class='bottomRight'>
    <div class="cylinder">
      <div class="cylinder2">
        </div>
        {/* <div class='torahBack2'></div> */}

        <div class="cylinder3">
        </div>
      </div>
      
    </div>

    </>
  );
}

//   return (
//     <>
//         <HashRouter>

//         <Route
//         path="/"
//         render={({ location }) => (
//             <>
//             {/* <Fragment variant="dense" > */}
//         {!studentOn && <div class="panels">
//             <div class="panels__container">
//                 <a href="#" class="panel">
//                 <br/>

//                     <div class="panel__content" style={{backgroundImage: "url(https://breakingmatzo.com/wp-content/uploads/BBM_girl_boy.jpg)", height: "60%"}}>
//                         <br/><br/><br/><br/><br/><br/>
//                         <br/><br/><br/>
//                         <Link to="/StudentPage">
//                             <p class="panel__title" onClick = {() => {setStudent(true)}} >For <br/>Students</p>
//                         </Link>
//                         <br/><br/><br/><br/><br/><br/>
//                         <br/><br/><br/>
//                     </div>
//                 </a>
//                 <a href="#" class="panel">
//                 <br/>

//                     <div class="panel__content" style={{backgroundImage: "url(https://image.shutterstock.com/image-vector/male-female-teacher-school-university-260nw-1245012277.jpg)", height: "140%"}}>
//                     <br/><br/><br/><br/><br/><br/>
//                     <br/><br/><br/>

//                         <p class="panel__title" onClick = {() => {setTeacher(true)}} >For <br/>Teachers</p>
//                     </div><br/><br/><br/><br/><br/>
//                     <br/><br/><br/>
//                 </a>
//             </div>
//         </div>
//         }
//         <div>
//                         <Route path="/StudentPage" render={() =>  <div><ChromeSite/></div>} />

//         </div>

//         {/* </Fragment> */}
//         </>
//         )} />
//         </HashRouter>
//         <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> 
//         Copyright © 2020 Year13 Productions. All Rights Reserved.
//         Built by Effie Landau. No recordings or lectures may be shared without my written consent.
//         </h6>
    

//     </>
//   );
// }