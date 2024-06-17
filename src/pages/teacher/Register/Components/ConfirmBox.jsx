import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import 'react-toastify/dist/ReactToastify.css';



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
    padding: "10px",
    outlineColor: "#40A2E3",
}

export default function BasicModal({ openConfirm, setOpenConfirm, indexPassing, deleteCurrent, notifyError }) {
    const handleCloseConfirm = () => setOpenConfirm(false);

    

    return (
        <>
            <Modal
                open={openConfirm}
                onClose={handleCloseConfirm}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ width: "100%" }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Confirm Delete User ?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Button autoFocus onClick={handleCloseConfirm}>
                                Cancel
                            </Button>
                            <Button onClick={()=>{handleCloseConfirm();
                                deleteCurrent(indexPassing);
                                notifyError();
                                }}>Delete</Button>
                        </Typography>
                    </div>
                </Box>
            </Modal>
        </>
    );
}