import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes({ row, onChange, status }) {
  const id = row.id;

  const addAttendance = async (id) => {
    try {
      const response = await fetch("http://localhost:3001/api/addAttendence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      });
      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.error("Error adding attendance:", error);
    }
  };

  const removeAttendance = async (id) => {
    try {
      const response = await fetch("http://localhost:3001/api/removeAttendence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      });
      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.error("Error removing attendance:", error);
    }
  };

  const handleCheckboxChange = (id, newStatus) => {
    onChange(id, newStatus);
    if (newStatus === "present") {
      addAttendance(id);
    } else if (newStatus === "absent") {
      removeAttendance(id);
    }
  };

  return (
    <div>
      <Checkbox
        checked={status === "present"}
        onChange={() => handleCheckboxChange(id, "present")}
        {...label}
        color="success"
      />
      <Checkbox
        checked={status === "absent"}
        onChange={() => handleCheckboxChange(id, "absent")}
        {...label}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}
