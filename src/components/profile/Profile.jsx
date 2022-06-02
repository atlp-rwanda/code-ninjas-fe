/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  CardActions,
  Button,
  MenuItem,
  TextField,
  Select,
  InputLabel,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfileData,
  thisUser,
} from '../../redux/features/profile/profileSlice';
import { updateProfileData } from '../../redux/features/profile/updateProfile';
import api from '../../utility/api';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  actions: {
    justifyContent: 'center',
    padding: '2rem',
    marginTop: theme.spacing(2),
  },
  save: {
    width: '8rem',
    marginRight: theme.spacing(12),
    border: '1px solid #3f51b5',
  },
  cancel: {
    width: '8rem',
    marginRight: theme.spacing(12),
    border: '1px solid #f50057',
  },
  container: {
    backgroundColor: '#fafafa',
    padding: '4rem',
    position: 'relative',
    top: '5%',
    left: '17%',
    width: '76%',
  },
}));

function FormikForm() {
  const dispatch = useDispatch();
  const [isCompleted, setIsComplete] = useState(false);

  useEffect(() => {
    const renderState = async () => {
      api.get('http://localhost:3000/api/users/profile').then((res) => {
        const profile = res.data.body;

        dispatch(getProfileData(profile));
        setIsComplete(res.data.body.isComplete);
        console.log(
          'This is response for profile status ---->>>>>>',
          res.data.body.isComplete
        );
      });
    };
    renderState();
  }, []);

  if (isCompleted) {
    document.getElementById('save').innerText = 'UPDATE';
  }

  const { profile } = useSelector(thisUser);
  console.log('This is redux data ---->>>>>>', profile);

  const handleChange = (e) => {
    console.log('This is new redux data ---->>>>>>', profile);
    dispatch(
      getProfileData({
        ...profile.payload,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleReset = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleComplete = async () => {
    const {
      gender,
      nationality,
      department,
      preferredLanguage,
      preferredCurrency,
      lineManager,
      address,
      phoneNumber,
      maritalStatus,
      dob,
    } = profile.payload;
    try {
      const response = api.put(
        'http://localhost:3000/api/users/profile/complete',
        {
          gender,
          nationality,
          department,
          preferredLanguage,
          preferredCurrency,
          lineManager,
          address,
          phoneNumber,
          maritalStatus,
          dob,
        }
      );
      console.log('This is response for complete ---->>>>>>', response.data);
      dispatch(updateProfileData(response.data));
      window.alert('Profile Completed Successfully!');
    } catch (err) {
      if (!err?.response) {
        console.log('No Server Response', err);
      } else if (err.response?.status === 422) {
        console.log('Validation Error');
      } else {
        console.log('Profile update Failed');
      }
    }
  };

  const handleUpdate = async () => {
    const {
      gender,
      nationality,
      department,
      preferredLanguage,
      preferredCurrency,
      lineManager,
      address,
      phoneNumber,
      maritalStatus,
      dob,
    } = profile.payload;
    try {
      const response = api.patch(
        'http://localhost:3000/api/users/profile/update',
        {
          gender,
          nationality,
          department,
          preferredLanguage,
          preferredCurrency,
          lineManager,
          address,
          phoneNumber,
          maritalStatus,
          dob,
        }
      );
      console.log('This is response for update ---->>>>>>', response.data);

      dispatch(updateProfileData(response.data));
      window.alert('Profile Updated Successfully');
    } catch (err) {
      const { error } = err.response.data;
      const displayError = document.getElementsByClassName('displayer');
      displayError[0].innerText = error;
      if (!err?.response) {
        console.log('No Server Response', err.response);
      } else if (err.response?.status === 422) {
        console.log('Validation Error');
      } else {
        console.log('Profile update Failed');
      }
    }
  };

  const FORM_COMPLETE_VALIDATION = yup.object().shape({
    gender: yup
      .mixed()
      .oneOf(['male', 'female', 'prefer not say'])
      .required('Please Fill all the fields!'),
    nationality: yup.string().required('Please Fill all the fields!'),
    department: yup.string().required('Please Fill all the fields!'),
    address: yup.string().required('Please Fill all the fields!'),
    lineManager: yup.string().required('Please Fill all the fields!'),
    preferredLanguage: yup.string().required('Please Fill all the fields!'),
    preferredCurrency: yup.string().required('Please Fill all the fields!'),
    phoneNumber: yup
      .number()
      .integer()
      .typeError('Please enter a valid number')
      .required('Please Fill all the fields!'),
    maritalStatus: yup
      .mixed()
      .oneOf(['Single', 'Married', 'Widowed'])
      .required('Please Fill all the fields!'),
    dob: yup
      .date()
      .min('12-31-1800')
      .max('12-31-2010')
      .required('Please Fill all the fields!'),
  });

  const FORM_VALIDATION = yup.object().shape({
    gender: yup.mixed().oneOf(['male', 'female', 'prefer not say']),
    nationality: yup.string(),
    department: yup.string(),
    address: yup.string(),
    lineManager: yup.string(),
    preferredLanguage: yup.string(),
    preferredCurrency: yup.string(),
    phoneNumber: yup
      .number()
      .integer()
      .typeError('Please enter a valid number'),
    maritalStatus: yup.mixed().oneOf(['Single', 'Married', 'Widowed']),
    dob: yup.date().min('12-31-1800').max('12-31-2010'),
  });

  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={{ ...profile }}
        validationSchema={
          isCompleted ? FORM_COMPLETE_VALIDATION : FORM_VALIDATION
        }
        onSubmit={!isCompleted ? handleComplete : handleUpdate}
      >
        <Form className={classes.container}>
          <Typography className="displayer" />
          <Grid
            container
            spacing={2}
            sx={{
              color: 'red',
              '& .MuiGrid-container': { with: '300rem', color: 'red' },
            }}
          >
            <Grid item xs={12}>
              <Typography>Account Details</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="firstName"
                value={profile.payload.firstName}
                label="First Name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="lastName"
                value={profile.payload.lastName}
                label="Last Name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="email"
                value={profile.payload.email}
                label="Email"
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="Gender"> Gender </InputLabel>
              <Select
                defaultValue={`${profile.payload.gender}`}
                name="gender"
                onChange={handleChange}
                variant="outlined"
                labelId="Gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="prefer not say">Prefer not say</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="nationality"
                label="Nationality"
                defaultValue={`${profile.payload.nationality}`}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="department"
                label="Department"
                defaultValue={`${profile.payload.department}`}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="preferredLanguage"
                label="Preferred Language"
                defaultValue={`${profile.payload.preferredLanguage}`}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="preferredCurrency"
                label="Preferred Currency"
                defaultValue={`${profile.payload.preferredCurrency}`}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="lineManager"
                label="Line Manager"
                defaultValue={`${profile.payload.lineManager}`}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="address"
                label="Address"
                defaultValue={`${profile.payload.address}`}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="Marital-Status"> Marital Status</InputLabel>
              <Select
                defaultValue={`${profile.payload.maritalStatus}`}
                name="maritalStatus"
                onChange={handleChange}
                variant="outlined"
                id="Marital-Status"
                labelId="Marital-Status"
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
                <MenuItem value="Widowed">Widowed</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="phoneNumber"
                label="Phone Number"
                defaultValue={`${profile.payload.phoneNumber}`}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="date"
                label="Date of Birth"
                type="date"
                name="dob"
                defaultValue={`${profile.payload.dob}`}
                format="yyyy/MM/dd"
                min="1900-12-31"
                max="2010-12-31"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} center>
              <CardActions className={classes.actions}>
                {/* <SubmitButton
                  type="submit"
                  color="primary"
                  className={classes.save}
                >
                  SAVE
                </SubmitButton> */}

                <Button
                  id="save"
                  typeof="submit"
                  color="primary"
                  variant="contained"
                  className={classes.save}
                  onClick={isCompleted ? handleUpdate : handleComplete}
                >
                  COMPLETE
                </Button>

                <Button
                  typeof="button"
                  color="secondary"
                  className={classes.cancel}
                  onClick={handleReset}
                >
                  CANCEL
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </>
  );
}

export default FormikForm;
