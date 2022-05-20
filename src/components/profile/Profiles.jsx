import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  makeStyles,
  Radio,
  RadioGroup,
  Select,
} from '@material-ui/core';
import TextField from '@mui/material/TextField';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  userName: '',
  gender: '',
  dob: '',
  nationality: '',
  department: '',
  preferredCurrency: '',
  preferredLanguage: '',
  address: '',
  phoneNumber: '',
};

function Profiles() {
  const [isComplete, setIsComplete] = useState(false);
  const [data, setData] = useState([]);
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [department, setDepartment] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [maritalStatus, setMaritalstatus] = useState('');
  const [lineManager, setLinemanager] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDateofbirth] = useState('');
  const [preferredCurrency, setPreferredcurrency] = useState('');
  const [preferredLanguage, setPreferredlanguage] = useState('');

  useEffect(() => {
    const renderState = async () => {
      const config = {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJlbWFpbCI6Im5ld2NoZWNrQG1hbmFnZXIuY29tIiwicm9sZUlkIjoyfSwidG9rZW5JZCI6MTY1NDA5NTc0MTY3NiwiaWF0IjoxNjU0MDk1NzQxLCJleHAiOjE2NTQxOTU3NDF9.QAWVYu5NQkxisJ6KtuWuNDOPIqAzwqTV4enf9QAVoMg',
        },
      };
      const response = await axios.get(
        'http://localhost:3000/api/users/profile',
        config
      );
      setIsComplete(response.data.body.isComplete);
      console.log(
        'This is response for profile status ---->>>>>>',
        response.data.body.isComplete
      );
      setData(response.data.body);
      console.log('This is response for data ---->>>>>>', response.data.body);
    };
    renderState();
  }, []);

  const convertToDate = (date, value) => ({
    target: {
      date,
      value,
    },
  });

  const [values, setValues] = useState(initialValues);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleUpdate = async () => {
    try {
      const config = {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGVJZCI6NH0sInRva2VuSWQiOjE2NTM4OTU3NTgwOTMsImlhdCI6MTY1Mzg5NTc1OCwiZXhwIjoxNjUzOTk1NzU4fQ.MxQNtQMD4CGYT7tedMo3EzdcLiM-1ni_VcD6TPgK5b4',
        },
      };
      const response = await axios.patch(
        'http://localhost:3000/api/users/profile/update',
        {
          gender,
          nationality,
          maritalStatus,
          phoneNumber,
          preferredCurrency,
          preferredLanguage,
          department,
          dob,
          address,
          lineManager,
        },
        config
      );
      console.log('This is response for update ---->>>>>>', response);

      // clear state and controlled inputs
      // need value attrib on inputs for this
      setGender('');
      setNationality('');
      setDepartment('');
      setPhonenumber('');
      setMaritalstatus('');
      setLinemanager('');
      setAddress('');
      setDateofbirth('');
      setPreferredcurrency('');
      setPreferredlanguage('');
      window.location.reload();
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 422) {
        setErrMsg('Validation Error');
      } else {
        setErrMsg('Profile update Failed');
      }
      errRef.current.focus();
    }
  };
  console.log('This is values ---->>>>>>', values);
  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            // label="First Name"
            name="firstName"
            value={data.firstName}
          />
          <TextField
            variant="standard"
            // label="Email"
            name="email"
            value={data.email}
            type="email"
          />
          <TextField
            variant="standard"
            label="Nationality"
            name="nationality"
            value={data.nationality}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            label="Preferred Language"
            name="preferredLanguage"
            value={values.preferredLanguage}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            pattern="[0-9]{10}"
            value={values.phoneNumber}
            onChange={handleInputChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="standard"
              format="yyyy-MM-dd"
              min="1900-12-31"
              max="2010-12-31"
              name="dob"
              value={values.dob}
              onChange={(date) => handleInputChange(convertToDate('dob', date))}
            />
          </MuiPickersUtilsProvider>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="prefer not say"
                control={<Radio />}
                label="Prefer not say"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            // label="Last Name"
            name="lastName"
            value={data.lastName}
          />
          <TextField
            variant="standard"
            label="Department"
            name="department"
            value={values.department}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            label="Line Manager"
            name="lineManager"
            value={values.lineManager}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            label="Preferred Currency"
            name="preferredCurrency"
            value={values.preferredCurrency}
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            label="Address"
            name="address"
            value={values.address}
            onChange={handleInputChange}
          />
          <FormControl variant="standard">
            <InputLabel>Marital Status</InputLabel>
            <Select
              name="maritalStatus"
              label="Marital Status"
              value={values.maritalStatus}
              onChange={handleInputChange}
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Widowed">Widowed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div className="button">
        <button type="submit" className="update" onClick={handleUpdate}>
          Save
        </button>
        <button type="submit" className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Profiles;
