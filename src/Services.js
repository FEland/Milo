import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Services() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
        <frontpage>

      <h5 style={{color: 'white', wordWrap: 'break-word', fontFamily: "ShlomosemiStam"}}>
      Absolute Beginner? Hebrew School Student? 
      Regular Synogogue goer? Once-a-year Shul goers?
      Jewish Day School students? Summer Camp participants?
      Orthodox? Conservative? Reform? Chabad? All Welcome!

      Every Jew is unique. So too every Bar and Bat Mitzvah is unique.
      
      I believe the best Bar/Bat Mitzvah preparation courses are those
      that are tailored specially to the interests of my students and their families.
      
      As such I work hard to build a special curriculum and learning plan for you!

      In this age of virtual lessons, I built a proprietary tutoring application to 
      teach my students the ins-and-outs of how to chant the cantilliation notes (called Ta'amim / Trope in hebrew)
      to read their Parsha and/or Haftorah beautifully on their big day.

      In each lesson I incorporate stories from the Torah, Midrash, Talmud and Jewish history
      to inspire my students with Jewish values and role models.

      Additionally we will cover some of the prayers and how to lead services.

      Lastly I offer help in writing your child's Bar/Bat Mitzvah speech.


      

      
      </h5>
      </frontpage>
      </>

  );
}
