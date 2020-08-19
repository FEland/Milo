import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import ReactColorPicker from '@super-effective/react-color-picker'; //https://github.com/super-effective/react-color-picker
import Tooltip from '@material-ui/core/Tooltip';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import IconButton from "@material-ui/core/Button";
// import { visitFunctionBody } from 'typescript';
// import ColorLensTwoToneIcon from '@material-ui/icons/ColorLensTwoTone';
// import debounce from 'lodash';
// import throttle from 'lodash';



// function throttle2 (func, limit) {
//   var wait = false;                  // Initially, we're not waiting
//   return function () {  
//     // We return a throttled function
//       if (!wait) {                   // If we're not waiting
//           func.apply(this, arguments);
//           wait = true;               // Prevent future invocations
//           setTimeout(function () {   // After a period of time
//               wait = false;          // And allow future invocations
//           }, limit);
//       }
//   }

// }


// export function microtaskDebounce(fn) {
//   let called = false
//   return () => {
//     if (called) {
//       return
//     }
//     called = true
//     window.Promise.resolve().then(() => {
//       called = false
//       fn()
//     })
//   }
// }

// export function taskDebounce(fn) {
//   let scheduled = false;
//   return () => {
//     if (!scheduled) {
//       scheduled = true;
//       setTimeout(() => {
//         scheduled = false;
//         fn();
//       }, timeoutDuration);
//     }
//   };
// }

export default function ColorModal({callBack}) {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [color, setColor] = useState('white');
  
//https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  var onColorChange2 = debounce(function(newColor) {
    handleColor(newColor);
  }, 150);


  // const onColorChange = (updatedColor) => {
  //   throttle2(handleColor(updatedColor), 200);
  // }

  function handleColor(newColor){
    callBack(newColor);
    setColor(newColor);
    // setTimeout( () => {console.log(newColor)}, 800);
  }

  
  return (
    <>
      <Tooltip title="Adjust Text Color" arrow placement="right">

        <IconButton backgroundColor= 'rgb(151, 155, 137)' onClick={handleOpen}> 
               {/* <ColorLensTwoToneIcon  style={{color: color}} fontSize="large"/>  */}
               <FormatColorTextIcon  style={{color: color}} fontSize="large"/> 

          </IconButton>
      </Tooltip> 
        <Modal open={open} onClose={handleClose} style = {{ "width" : "215px", "height" : "215px", "margin" : "auto"}}>

                  <ReactColorPicker style = {{"width" : "200px", "height" : "200px",
                                              "padding" : "15px 5px", "border" : "1px solid #ccc",
                                              "borderRadius" : "10px", "backgroundColor": 'rgb(151, 155, 137)',
                                              }}
                      showHex = {false} showSwatch = {false}
                      color={color} onChange={onColorChange2} 
                  />
        </Modal>
    </>
  );
}