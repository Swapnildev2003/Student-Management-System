import * as React from "react";
import Grid from "../components/Grid";
import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NoticeBoard from "../components/NoticeBoard"
import HomeDiscriptionModel from "../components/HomeDiscriptionModel"
import '../style/scrollBar.css'

const style = {
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
}

const Home = () => {

  return (
    <>
      {/* <div className="min-h-screen"><HomeDiscriptionModel /></div> */}

      <Box>
        <section style={{ display: "flex", gap: "5px" }} >
          <div style={style} onClick={(prev) => !prev}><Grid title={"Total Student"} value={"0"} /></div>
          <div style={style} onClick={() => con(2)}><Grid title={"Total Classes"} value={"0"} /></div>
          <div style={style} onClick={() => con(3)}><Grid title={"Total Teachers"} value={"0"} /></div>
          <div style={style} onClick={() => con(4)}><Grid title={"Complain Raised"} value={"0"} /></div>
        </section>
        <section
          className="notice-board"
          style={{
            margin: "15px",
            width: "100%",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            fontSize: "1.5em",
            fontWeight: "bold",
            height: "20em",
            overflow: "scroll",
            overflowX: "hidden",
            marginLeft: "18px"
          }}>
          <div
            style={{
              width: "100%",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              position: 'sticky',
              top: 0,
              backdropFilter: "blur(10px)"
            }}>
            <span>Notice Board</span>
            <Button
              style={{ maxWidth: "35px", minWidth: "35px", cursor: "pointer" }}
              color="primary"
              variant="contained"
            >
              <AddIcon />
            </Button>
          </div>
          <div >
            <NoticeBoard />
          </div>
        </section>
      </Box>
    </>
  );
}

export default Home;
