import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        teacher: 'Kumud Patel',
        Section: 'A',
        Period: 3,
        subject: "BEC-101",
        day: "Monday"
      },
      {
        teacher: 'SP Singh',
        Section: 'B',
        Period: 1,
        subject: "BIT-201",
        day: "Thursday"
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [backColor, setBackColor] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }}}>
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell align="center">{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="center">{row.carbs}</TableCell>
        <TableCell align="center">{row.protein}</TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {setOpen(!open); setBackColor(!open)}}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} >
          <Collapse in={open} timeout="auto" unmountOnExit >
            <Box sx={{ padding: 1 }} style={{backgroundColor: "#EEEDEB"}}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell ><b>Teacher Name</b></TableCell>
                    <TableCell ><b>Subject</b></TableCell>
                    <TableCell ><b>Section</b></TableCell>
                    <TableCell align="center"><b>Period</b></TableCell>
                    <TableCell align="center"><b>Day</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.teacher}>
                      <TableCell component="th" scope="row">
                        {historyRow.teacher}
                      </TableCell>
                      <TableCell>{historyRow.subject}</TableCell>
                      <TableCell style={{paddingLeft: 35}}>{historyRow.Section}</TableCell>
                      <TableCell align="center">{historyRow.Period}</TableCell>
                      <TableCell align="center">
                        {historyRow.day}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('BTech', 'Computer Science', 3, '4th', 178, 3.99),
  createData('BTech', 'Information Technology', 1, '4th', 91, 4.99),
  createData('MBA', 'MBA', 2, '2nd', 78, 3.79),
  createData('MCA', 'MCA', 1, '1st', 82, 2.5),
  createData('BTech', 'Civil', 3, '4th', 89, 1.5),
  createData('BTech', 'Chemical', 2, '4th', 125, 1.5),
  createData('MSC', 'MSC', 1, '2nd', 85, 1.5),
  createData('BTech', 'Electrical', 2, '4th', 131, 1.5),
  createData('BTech', 'Electronics and Comm.', 3, '4th', 121, 1.5),
];

export default function CollapsibleTable() {
  return (
    // <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell style={{backgroundColor: "#3FA2F6"}}>Courses</TableCell>
            <TableCell align="center" style={{backgroundColor: "#3FA2F6"}}>Branch</TableCell>
            <TableCell align="center" style={{backgroundColor: "#3FA2F6"}}>Total Sections</TableCell>
            <TableCell align="center" style={{backgroundColor: "#3FA2F6"}}>Course Year</TableCell>
            <TableCell align="center" style={{backgroundColor: "#3FA2F6"}}>Total Student</TableCell>
            <TableCell align="center" style={{backgroundColor: "#3FA2F6"}}>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    // </TableContainer>
  );
}
