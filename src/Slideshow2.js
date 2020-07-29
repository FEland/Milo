import React from 'react';

// import {Creation} from './Slides'

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context("./Slides/Neshama/", false, /^\.\/.*\.jpg$/));
const imageArray = images.map(function(image) {
    return <img key={image} src={image} />;
});

const Slideshow = () => {
//   const images = [
//     'images/slide_2.jpg',
//     'images/slide_3.jpg',
//     'images/slide_4.jpg'
//   ];
  
  const zoomOutProperties = {
    indicators: true,
    scale: 0.4
  }
  return (
    <div>
        { imageArray.map((each) => <div>{each}</div>) }

        {/* { imageArray.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />) } */}
    </div>
  )
}

export default Slideshow;




// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import "react-slideshow-image/dist/styles.css"

// const slideImages = [
//   'Slides/Neshama/00.jpg',
//   'Slides/Neshama/01.jpg',
//   'Slides/Neshama/02.jpg'
// ];

// const Slideshow = () => {
//     return (
//       <div>
//         {/* <Slide> */}
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
//               <span>Slide 1</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
//               <span>Slide 2</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
//               <span>Slide 3</span>
//             </div>
//           </div>
//         {/* </Slide> */}
//       </div>
//     )
// };

// export default Slideshow;