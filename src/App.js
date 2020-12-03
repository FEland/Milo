import React from 'react';
import ChromeSite from './ChromeSite'
import SafariSite from './SafariSite'
import Login from "./Login";

// import Intro from "./Intro";
// import Torah4 from "./Torah4";
// import Landing from "./Landing"

export default function Final(props) {
  
  let Safari = navigator.vendor.includes('Apple');
  let Chrome = navigator.vendor.includes('Google');
  // function detectDevice(){
  //   // console.log(!!navigator.maxTouchPoints)
  //   return !!(navigator.maxTouchPoints) 
  // }


  // if (Safari){
  //   return (
  //     // <SafariSite/>
  //     <ChromeSite/>

  //   );
  // }
  // if (Chrome){
  //   return (
  //     <ChromeSite/>
  //   );
  // }
  const pwd = ["13", "2020", "Torah", "torah", "Harrison", "Weinstock", "Steinmetz", "FE"];
  const [validLogin, setValidLogin] = React.useState(false);
  const [currentUser, setUser] = React.useState("guest");

  const handleResult = (...val) => {
    setValidLogin(val);
  }

  const passBackUser = (...val) => {
    setUser(val);
  }

  if (Safari || Chrome){
    return (
      <>
      {/* {!validLogin && <Intro/>} */}
      {/* {!validLogin && <Torah4/>} */}

      {!validLogin &&  <Login handleResult={handleResult} passBackUser={passBackUser} pwd={pwd}/> }
      {validLogin && <ChromeSite user={currentUser}/>}

      {/* {!validLogin && <div style={{ position: 'center' , display: 'center'}}> <Login handleResult={handleResult} pwd={pwd}/> </div>} */}
      {/* {!validLogin && <Landing/>} */}

      {/* {!validLogin &&  <ChromeSite/> } */}

      </>
    );
  }
  else {
    return (
      <div>
        <SafariSite/>
      <h6 style={{backgroundColor: 'white', color: 'black',position: 'flex' }}> Copyright © 2020 Year13 Productions. All Rights Reserved.
      Built by Effie Landau. No recordings or lectures may be shared without my written consent.</h6>
      </div>
    );
  }
}
