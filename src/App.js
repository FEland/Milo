import React from 'react';
import ChromeSite from './ChromeSite'
import SafariSite from './SafariSite'

export default function Final(props) {
  
  let Safari = navigator.vendor.includes('Apple');
  let Chrome = navigator.vendor.includes('Google');

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
  if (Safari || Chrome){
    return (
      <ChromeSite/>

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
