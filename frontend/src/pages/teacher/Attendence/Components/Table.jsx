import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Dropdown from './Dropdown'

const columns = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'firstName', headerName: 'First name', width: 230 },
  { field: 'lastName', headerName: 'Last name', width: 230 },
  {
    field: 'age',
    headerName: 'Age',
    width: 130,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
    valueGetter: (params) => {
      const { firstName, lastName } = params.row;
      return `${firstName || ''} ${lastName || ''}`;
    },
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 170,
    renderHeader: () => (
      <div style={{ textAlign: 'center' }}>
        <Dropdown style={{ width: 10 }} />
      </div>
    ),
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 170,
    renderHeader: () => (
      <div style={{ textAlign: 'center' }}>
        <Dropdown style={{ width: 10 }} />
      </div>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
