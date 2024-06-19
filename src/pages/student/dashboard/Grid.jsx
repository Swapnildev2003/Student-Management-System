import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
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

      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
          <AlarmOffIcon color="primary" />
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
          <div style={{ fontWeight: "bold" }}>{props.title}</div>
          <div>{props.value}</div>
        </div>
      </div>
    </div>
  );
}
