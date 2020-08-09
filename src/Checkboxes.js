import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        // color="primary"
        onChange={handleChange}
        // size="small"
        // inputProps={{ 'aria-label': 'checkbox with small size' }}
      />
    </div>
  );
}
