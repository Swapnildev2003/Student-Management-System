import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import CheckBox from './Checkbox';
import { Link, Route, Routes } from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';

const columns = [
  {
    id: 'id',
    label: 'ID',
    minWidth: 120
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
    id: 'attendance',
    label: 'Attendance',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
    render: (value, row, index, handleCheckboxChange, statuses) => (
      <div><CheckBox row={row} onChange={handleCheckboxChange} status={statuses[row.id]} /></div>
    )
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
    render: (value) => (
      <span style={{ color: value === 'present' ? 'green' : value === 'absent' ? 'red' : 'black' }}>

        {value}
      </span>
    )
  },
];

export default function ColumnGroupingTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statuses, setStatuses] = useState({});
  const [dashboardId, setDashboardId] = useState();

  const rows = list.map((item) => ({
    _id: item._id,
    id: item.id,
    name: item.name,
    email: item.email,
    phone: item.phone,
    attendance: Array.isArray(item.attendance) ? item.attendance.join(', ') : '', // Check if 'attendance' is an array
    status: statuses[item.id] || "pending", // Use status from state or default to "pending"
  }));

  dashboardId && console.log(dashboardId);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCheckboxChange = (id, status) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: status,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
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
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 555, scrollbarWidth: "none" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6}>
                BCA First Year
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} onClick={() => {
                          setDashboardId(row)
                        }}>
                          {column.render
                            ? column.render(value, row, index, handleCheckboxChange, statuses)
                            : column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                        </TableCell>
                      );
                    })}
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
      <Routes>
          <Route path="/dashboard" element={<Dashboard open={open} />} />
        </Routes>
    </Paper>
  );
}
