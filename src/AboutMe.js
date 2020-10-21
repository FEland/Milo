import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import AllTropesBox from './AllTropesBox';

export default function AboutMe() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    // <div>
    //   <Checkbox
    //     checked={checked}
    //     // color="primary"
    //     onChange={handleChange}
    //     // size="small"
    //     // inputProps={{ 'aria-label': 'checkbox with small size' }}
    //   />
    // </div>
    <>
    <frontpage>
      <h5 style={{color: 'white', wordWrap: 'break-word', fontFamily: "ShlomosemiStam"}}>
      My name is Effie Landau. I'm a born and raised in Manhattan and a product of a great modern-orthodox
      Yeshiva education at the Ramaz School. To know how to teach, means to have been taught by the best.
      Fortunately I can say that. For my Bar Mitzvah I learned from the late Cantor Sherwood Goffin of 
      Lincoln Square Synagogue, known affectionaly as "The Chaz." Ever since the Chaz opened my eyes
      to the majesty of reading from the Torah and the incredible honor and responsiblity that is leading Prayer services 
      for the community, I have 
      </h5>
      </frontpage>
      </>
  );
}
