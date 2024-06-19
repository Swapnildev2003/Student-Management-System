import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{
            border: "0px solid white", backgroundColor: "white", maxHeight: 50
          }}
        >
          <MenuItem value={10}>none</MenuItem>
          <MenuItem value={20}>Physics</MenuItem>
          <MenuItem value={30}>Chemistry</MenuItem>
          <MenuItem value={40}>Maths</MenuItem>
          <MenuItem value={50}>English</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
