import * as React from 'react';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import { Typography } from '@mui/material';
export default function ComplexGrid(props) {
  return (
    <div
      style={{
        margin: 'auto',
        minHeight: 100,
        maxWidth: 250,
        flexGrow: 1,
        backgroundColor: "#EEF5FF",
        border: "none",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
          <AlarmOffIcon />
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
          <Typography style={{fontWeight: "bold"}} noWrap component="div">
            {props.title}
          </Typography>
          <Typography noWrap component="div">
            {props.value}
          </Typography>
        </div>
      </div>
    </div>
  );
}
