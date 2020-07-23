// import React from "react";

// export default function Player ( ) {

//     return (
//         <player>
//         <ul>
//               1st Aliya - 26:1-3 (Cohen)
//               <div className = "player-item">
//                 <audio controls src="./sounds/aliya_1.mp3"> </audio>
//               </div>
//                 2nd Aliya 26:4-9 (Levi)
//                 <div className = "player-item">
//                   <audio
//                     controls
//                     src="./sounds/aliya_2.mp3">
//                 </audio>
//                 </div>
//                 3rd Aliya 26:10-12 (Yisrael)
//                 <div className = "player-item">
//                 <audio
//                     controls
//                     src="./sounds/aliya_3.mp3">
//                 </audio>
//                 </div>
//             </ul>
//           </player>
//     );
// }



import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

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

export default function Player() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        1st Shema Paragraph
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
            <ul>
            <ListItemText primary="1st Paragraph - just Hebrew" />
            <div className = "player-item">
                <audio color="primary" controls src="./sounds/1-plain.mp3" />
            </div>
            </ul>
        </StyledMenuItem>
        <StyledMenuItem>
            <ul>
            <ListItemText primary="1st Paragraph - with Trope" />
            <div className = "player-item">
                <audio color="primary" controls src="./sounds/1-trope.mp3" />
            </div>
            </ul>
        </StyledMenuItem>


      </StyledMenu>
    </div>
  );
}