/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import './Table.scss';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const renderState = async () => {
      const config = {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJlbWFpbCI6InJlcXVlc3RlckBnbWFpbC5jb20iLCJyb2xlSWQiOjF9LCJ0b2tlbklkIjoxNjUzOTI5MDQ4OTYwLCJpYXQiOjE2NTM5MjkwNDgsImV4cCI6MTY1NDAyOTA0OH0.WuY7JHmakg48RjmAepzAzbs3NNpc_iHoRdKlKzruito',
        },
      };
      const response = await axios.get(
        'http://localhost:3000/api/trip/request/list',
        config
      );
      setData(response.data.trips);
      console.log('This is response ---->>>>>>', response.data.trips);
    };
    renderState();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90, color: 'blue' },
    {
      field: 'Accommodation',
      headerName: 'Accommodation',
      width: 180,
      cellClassName: 'accomodation-column',
      valueFormatter: (params) => params.value.name,
    },
    {
      field: 'Destination',
      headerName: 'Destination',
      width: 150,
      valueFormatter: (params) => params.value.city,
    },
    { field: 'departureDate', headerName: 'Departure Date', width: 110 },
    { field: 'returnDate', headerName: 'Return Date', width: 110 },
    { field: 'travel_reason', headerName: 'Travel Reason', width: 110 },
    { field: 'tripType', headerName: 'Trip Type', width: 110 },
    {
      field: 'manager',
      headerName: 'Manager',
      width: 180,
      valueFormatter: (params) => params.value.email,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      border: '1 solid black',
    },
    // {
    //   field: 'actions',
    //   headerName: 'Actions',
    //   width: 110,
    //   cellRenderer: 'editButton',
    // },
  ];

  return (
    <>
      <div className="container" style={{ height: 475, width: '85%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}

export default Table;
