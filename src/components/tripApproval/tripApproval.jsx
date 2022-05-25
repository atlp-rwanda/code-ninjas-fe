import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import api from '../../utility/api';
import './tripApproval.scss';

const useStyles = makeStyles(() => ({
  typographies: {
    margin: '1rem 0 !important',
  },
  actions: {
    padding: '2rem 0 0 0',
    marginLeft: '-2.2rem !important',
    marginBottom: '1rem !important',
    display: 'flex',
    width: '25rem',
    justifyContent: 'space-around !important',
  },
  save: {
    width: '8rem',
    color: 'limegreen !important',
    border: '1px solid limegreen !important',
  },
  cancel: {
    width: '8rem',
    color: 'red !important',
    border: '1px solid red !important',
  },
  container: {
    padding: '4rem',
    position: 'relative',
    left: '70%',
    width: '100%',
  },
  desc: {
    fontWeight: 'bold',
    fontSize: '15',
  },
  data: {
    color: '#3f51b5',
    fontSize: '15',
  },
}));

function Approval({ data }) {
  const [status, setStatus] = useState('');
  useEffect(() => {}, [status]);
  const approveRequest = async () => {
    await api
      .patch(`/api/trip/request/approve/${data.id}`, {
        status: 'approved',
      })
      .then(() => {
        toast.success('Trip approved successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setStatus('approved');
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      })
      .catch((error) => {
        toast.error(
          `Error while approving trip ${error.response.data.response}`,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };
  const handleCancel = () => {
    window.location.reload();
  };
  const rejectRequest = async () => {
    await api
      .patch(`/api/trip/request/reject/${data.id}`, {
        status: 'rejected',
      })
      .then(() => {
        toast.success('Trip Rejected successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setStatus('rejected');
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      })
      .catch((error) => {
        toast.error(
          `Error while rejecting trip ${error.response.data.response}`,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      });
  };
  const classes = useStyles();
  useEffect(() => {
    const renderState = async () => {
      const response = await api.get(`/api/trip/request/${data?.id}`);
      setData(response.data.response);
    };
    renderState();
  }, []);
  const obj = Object.entries(data);
  const departurePlace = obj[6][1];
  const destination = obj[7][1];
  const manager = obj[8][1];
  const accomodation = obj[9][1];
  return (
    <>
      <Card
        className={classes.container}
        sx={{
          maxWidth: 345,
          height: '28rem',
          position: 'absolute',
          left: '80%',
          background: '#fafafa',
          boxShadow: '2px 2px 12px black',
          zIndex: 100,
        }}
      >
        <CardContent sx={{ padding: ' 0px 0px 15px 15px !important' }}>
          <Grid>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              <u>TRIP INFORMATION</u>
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.typographies}>
              <span className={classes.desc}> Accomodation: </span>
              <span className={classes.data}> {accomodation?.name}</span>
              <span className={classes.data}> - {accomodation?.type}</span>
              <span className={classes.data}> - {accomodation?.address}</span>
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.typographies}>
              <span className={classes.desc}> Trip type: </span>
              <span className={classes.data}>{data?.tripType}</span>
            </Typography>
            <Typography className={classes.typographies}>
              <span className={classes.desc}> Departure Place: </span>
              <span className={classes.data}>{departurePlace?.city}</span>
            </Typography>
            <Typography className={classes.typographies}>
              <span className={classes.desc}> Destination: </span>
              <span className={classes.data}>{destination?.city}</span>
            </Typography>
            <Typography className={classes.typographies}>
              <span className={classes.desc}> Departure date: </span>
              <span className={classes.data}>{data?.departureDate}</span>
            </Typography>
            <Typography className={classes.typographies}>
              <span className={classes.desc}> Return date: </span>
              <span className={classes.data}>{data?.returnDate}</span>
            </Typography>
            <Typography className={classes.typographies}>
              <span className={classes.desc}> Manager: </span>
              <span className={classes.data}>
                {manager?.firstName} {manager?.lastName}
              </span>
            </Typography>
            <Typography className={classes.typographies}>
              <span className={classes.desc}> Status: </span>
              <span className={classes.data}>{data?.status}</span>
            </Typography>
          </Grid>
          {(data?.status === 'pending' && (
            <Grid className={classes.actions}>
              <Button className={classes.save} onClick={approveRequest}>
                Approve
              </Button>
              <Button className={classes.cancel} onClick={rejectRequest}>
                Reject
              </Button>
            </Grid>
          )) || (
            <Grid className={classes.actions}>
              <Button className={classes.cancel} onClick={handleCancel}>
                Cancel
              </Button>
            </Grid>
          )}
        </CardContent>
      </Card>
    </>
  );
}
export default Approval;
