import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid, ClickAwayListener } from '@mui/material';
import { PublishedWithChanges } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { getTripRequests } from '../../redux/features/trip/tripSlice';
import api from '../../utility/api';
import Approval from '../tripApproval/tripApproval';
import '../../styles/Table.scss';

function Table() {
  const [data, setData] = useState([]);
  const [managerData, setManagerData] = useState([]);
  const [selectedData, setSelectedData] = useState('');
  const [changeStatus, setChangeStatus] = useState(false);
  const [changeView, setChangeView] = useState(false);
  const dispatch = useDispatch();

  const token = jwtDecode(localStorage.getItem('token'), { header: 'jwt' });
  const { roleId } = token.user;

  useEffect(() => {
    const renderState = async () => {
      api.get('/api/trip/request/list/manager').then((res) => {
        setManagerData(res.data.response);
        dispatch(getTripRequests(res.data.response));
      });
    };
    renderState();
  }, []);

  const handleStatus = () => {
    localStorage.setItem('tripId', data.id);
    setChangeStatus(true);
  };

  const handleClickAway = () => {
    setChangeStatus(false);
  };

  const requesterColumns = [
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
      className: 'approved',
      valueFormatter: (params) => params.value.status,
    },
  ];
  const managerColumns = [
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
      className: 'approved',
      cellClassName: 'status-column',
      valueFormatter: (params) => params.value.status,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 100,
      hide: changeView,
      className: 'actions',
      renderCell: () => (
        <div>
          <Button className="cellAction" onClick={handleStatus}>
            <PublishedWithChanges />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <>
      {changeStatus ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Grid>
            <Approval data={selectedData} />
          </Grid>
        </ClickAwayListener>
      ) : null}
      {changeStatus ? null : (
        <Grid
          className="container"
          data-testid="request-table"
          style={{
            height: '700px',
            width: '98%',
            backgroundColor: 'white',
            margin: ' 4rem 0 0 2rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <DataGrid
            data-testid="request-table"
            rows={roleId === 1 ? data : managerData}
            columns={roleId === 1 ? requesterColumns : managerColumns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onSelectionModelChange={(id) => {
              const selectedRowData = managerData.filter((row) => row.id == id);
              setSelectedData(selectedRowData[0]);
            }}
            style={{
              zIndex: 0,
            }}
            sx={{
              height: '70%',
              width: '100%',
              '& .MuiDataGrid-columnHeaderTitle': {
                color: '#f5f5f5',
              },
              '& .MuiDataGrid-columnHeadersInner': {
                backgroundColor: '#1565c0',
                fontWeight: 'bold',
                textAlign: 'center',
              },
              '& .MuiDataGrid-columnHeaderTitleContainerContent': {
                paddingLeft: '10px',
              },
              '& .MuiToolbar-root': {
                color: '#1565c0',
              },
              '& .MuiDataGrid-selectedRowCount': {
                color: '#1565c0',
              },
              '& .css-d3ri6l-MuiStack-root': {
                display: 'grid',
                flexDirection: 'column !important',
                alignItems: 'start',
              },
              '& .cellAction': {
                justifyContent: 'center',
                color: '#4cd964',
                cursor: 'pointer',
              },
              '& .approved': {
                color: '#4cd964',
                padding: '2px',
                border: '1px solid #4cd964',
              },
            }}
          />
        </Grid>
      )}
    </>
  );
}

export default Table;
