import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Modal from './Modal';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ConfirmBox from './ConfirmBox';
import DummyObject from './newUserClass';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const columns = [
  {
    id: 'id',
    label: 'ID',
    minWidth: 170
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 100
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 100,
    align: 'center',
  },
];

export default function ColumnGroupingTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(false);
  const [list, setList] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [clickUpdate, setClickUpdate] = useState(false);
  const [updateInput, setUpdateInput] = useState({});
  const [indexPassing, setIndexPassing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [dummyObj, setDummyObj] = useState(new DummyObject());


  const notifyError = () => toast.error("Deleted Successfully", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
  });

  const notifySuccess = () => toast.success("User Added Successfully", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
  });

  const notifySuccessUpdate = () => toast.success("User Updated Successfully", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "light",
  });

  const handleOpenConfirm = (index, key) => {
    setOpenConfirm(true);
    setIndexPassing(index);
    setUserId(key)
  };


  const rows = list.map((item) => ({
    _id: item._id,
    id: item.id,
    name: item.name,
    email: item.email,
    phone: item.phone,
  }));

  const handleOpen = (condition) => {
    setOpen(true);
    setModalTitle(condition);
  };


  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/get`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const resData = await res.json();
        setList(resData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);// Set loading to false regardless of success or failure

      }
    };
    fetchdata();
  }, [refreshData]);

  const Deletedata = async (user_id) => {
    try {
      const res = await fetch(`http://localhost:3001/api/deleteUser/${user_id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (res.ok) {
        // Response status is in the 2xx range
        const data = await res.json(); // Log the response data
      } else {
        // Response status is not in the 2xx range, handle error
        throw new Error('Failed to delete user');
      }
    } catch (error) {
      console.error("Error in deleting the data:", error);
    }
  };

  const deleteCurrent = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
    Deletedata(userId)
  };

  function updateInputFunc(index, id) {
    const selectedObject = list.find((_, i) => i === index);
    setUpdateInput(selectedObject);
    setUserId(id)
  }

  const addUser = async (dummyObj) => {
    const res = await fetch(`http://localhost:3001/api/create`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: dummyObj.id,
        name: dummyObj.name,
        email: dummyObj.email, // Use the message state instead
        phone: dummyObj.phone,

      }),
    });
    const resData = await res.json();
  }

  const updateUser = async (dummyObj) => {
    const res = await fetch(`http://localhost:3001/api//update/${userId}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: dummyObj.id ? dummyObj.id : updateInput.id,
        name: dummyObj.name ? dummyObj.name : updateInput.name,
        email: dummyObj.email ? dummyObj.email : updateInput.email, // Use the message state instead
        phone: dummyObj.phone ? dummyObj.phone : updateInput.phone,
      }),
    });
    const resData = await res.json();
  }

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440, scrollbarWidth: "none" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                BCA First Year
              </TableCell>
              <TableCell align="right" colSpan={3}>
                <Button onClick={() => { handleOpen(false); setClickUpdate(false) }} color="secondary">Add Student</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'actions'
                            ? <TableCell sx={{display: "flex", justifyContent: "center", border: "none", margin: 0, padding:0}}>


                              <Button onClick={() => {
                                handleOpenConfirm(index, row._id);
                                setUpdateInput(false);
                              }} style={{ marginRight: "12px" }} variant="outlined" startIcon={<DeleteIcon />} />

                              <Button onClick={() => { handleOpen(true); updateInputFunc(index, row._id); setClickUpdate(true); }} variant="contained" endIcon={<EditOutlinedIcon />} />
                            </TableCell>
                            : column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                        </TableCell>
                      );
                    })}
                    {/* Add buttons in the last column */}

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Modal open={open} setOpen={setOpen} modalTitle={modalTitle} dummyObj={dummyObj} setDummyObj={setDummyObj} setRefreshData={setRefreshData} notifySuccess={notifySuccess} addUser={addUser} updateUser={updateUser} clickUpdate={clickUpdate} updateInput={updateInput} userId={userId} notifySuccessUpdate={notifySuccessUpdate} />

      <ConfirmBox openConfirm={openConfirm} handleOpenConfirm={handleOpenConfirm} setOpenConfirm={setOpenConfirm} indexPassing={indexPassing} deleteCurrent={deleteCurrent} notifyError={notifyError} list={list} userId={userId} />
      <ToastContainer />
    </Paper>
  );
}
