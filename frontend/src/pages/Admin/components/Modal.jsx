import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: "5px",
  width: 500,
  bgcolor: 'background.paper',
  border: '1px #000',
  boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  height: "30px",
  width: "250px",
  marginTop: "-3px",
  backgroundColor: "#EEEDEB",
  border: "none",
  borderRadius: "5px",
  padding: "3px 10px 10px 10px",
  outlineColor: "#40A2E3",
  overflow: "hidden",
  resize: "none",
  fontFamily: ""
}

export default function BasicModal({ open, setOpen, modalTitle, dummyObj, setDummyObj, setRefreshData, addUser, notifySuccess, clickUpdate, updateInput,updateUser, notifySuccessUpdate }) {


  const handleClose = () => setOpen(false);
  // const showUser = () => {
  //   console.log(dummyObj)
  // }

  


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{
            width: "100%",
            height: "2rem",
            marginTop: "-10px",
            padding: "0",
            display: "flex",
            justifyContent: "flex-end",
          }}>
            <Button size="small" onClick={handleClose} style={{ marginRight: "-25px" }}><CloseIcon /></Button>
          </div>
          <div style={{ width: "100%" }}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalTitle ? "Update" : "Register"}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Box style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
                <Typography level="h4">Id</Typography>
                <textarea
                  placeholder="Your id"
                  variant="soft"
                  style={inputStyle}
                  onChange={e => setDummyObj({ ...dummyObj, id: e.target.value })}
                >{clickUpdate ? updateInput.id : ""}</textarea>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
                <Typography level="h4">Name:</Typography>
                <textarea
                  placeholder="Your Name"
                  variant="soft"
                  style={inputStyle}
                  onChange={e => {
                    setDummyObj({ ...dummyObj, name: e.target.value });
                    console.log(dummyObj)
                  }}
                >{clickUpdate ? updateInput.name : ""}</textarea>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
                <Typography level="h4">Email:</Typography>
                <textarea
                  placeholder="Email..."
                  variant="soft"
                  type="email"
                  style={inputStyle}
                  onChange={e => setDummyObj({ ...dummyObj, email: e.target.value })}
                >{clickUpdate ? updateInput.email : ""}</textarea>
              </Box>
              <Box style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
                <Typography level="h4">Mobile :</Typography>
                <textarea
                  placeholder="Mobile..."
                  variant="soft"
                  style={inputStyle}
                  className="appearance-none"
                  onChange={e => setDummyObj({ ...dummyObj, phone: e.target.value })}
                >{clickUpdate ? updateInput.phone : ""}</textarea>
              </Box>
              <div onClick={() => { handleClose(); }} style={{ marginTop: "25px", display: "flex", justifyContent: "center" }}>
                {clickUpdate ? <Button onClick={() => {
                  updateUser(dummyObj);
                  notifySuccessUpdate();
                  setRefreshData(prev => !prev);
                }} variant="contained" color="success">
                  Update
                </Button> : <Button onClick={() => {
                  addUser(dummyObj);
                  notifySuccess();
                  setRefreshData(prev => !prev);
                }} variant="contained" color="success">
                  Register
                </Button>}
              </div>
            </Typography>
          </div>
        </Box>
      </Modal>
    </>
  );
}
