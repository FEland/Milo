import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import ReactColorPicker from '@super-effective/react-color-picker'; //https://github.com/super-effective/react-color-picker
import Tooltip from '@material-ui/core/Tooltip';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import IconButton from "@material-ui/core/Button";
// import ColorLensTwoToneIcon from '@material-ui/icons/ColorLensTwoTone';
// import debounce from 'lodash';




export default function ColorModal({callBack}) {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [color, setColor] = useState('white');
  
  // const onChangeDebounced = (e) => {
  //   (console.log(e, "e" );
  //   , 3000);
  // }

  const onColorChange = (updatedColor) => {
    // debounce();
    // onChangeDebounced(updatedColor);
    // _debounce(onChangeDebounced, 2000);
    setColor(updatedColor);
    callBack(updatedColor);
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
                      color={color} onChange={onColorChange} 
                  />
        </Modal>
    </>
  );
}