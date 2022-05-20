/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { UserData } from './ProfileData';
import './Navbar.scss';
import './Profile.scss';

function Profile() {
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
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const renderState = async () => {
      const config = {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGVJZCI6NH0sInRva2VuSWQiOjE2NTM4OTU3NTgwOTMsImlhdCI6MTY1Mzg5NTc1OCwiZXhwIjoxNjUzOTk1NzU4fQ.MxQNtQMD4CGYT7tedMo3EzdcLiM-1ni_VcD6TPgK5b4',
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

  const body = {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleComplete = async () => {
    try {
      const config = {
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGVJZCI6NH0sInRva2VuSWQiOjE2NTM4OTU3NTgwOTMsImlhdCI6MTY1Mzg5NTc1OCwiZXhwIjoxNjUzOTk1NzU4fQ.MxQNtQMD4CGYT7tedMo3EzdcLiM-1ni_VcD6TPgK5b4',
        },
      };
      const response = await axios.put(
        'http://localhost:3000/api/users/profile/complete',
        body,
        config
      );
      console.log('This is response for complete ---->>>>>>', response);

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
        body,
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

  return (
    <main>
      <div className="container">
        <h1>
          <u>Welcome to your profile</u>
        </h1>
        <div className="image-container">
          <img className="profile-image" src={data.imageUrl} alt="profile" />
        </div>
        <button className="image-btn">change picture</button>
        <span>{data.userName}</span>
        <form className="info" id="profile-form" onSubmit={handleSubmit}>
          <>
            <div className="firstname">
              <label htmlFor="firstname">Firstname:</label>
              <input
                name="firstname"
                type="text"
                value={data.firstName}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="lastname">
              <label htmlFor="lastname">LastName:</label>
              <input
                name="lastname"
                type="text"
                value={data.lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="gender">
              <label htmlFor="gender">Gender:</label>
              <select
                name="maritalStatus"
                form="profile-form"
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option selected>{data.gender}</option>
                <option>female</option>
                <option>male</option>
                <option>prefer not say</option>
              </select>
            </div>
            <div className="nationality">
              <label htmlFor="nationality">Nationality:</label>
              <input
                name="nationality"
                type="text"
                placeholder={data.nationality}
                onChange={(e) => setNationality(e.target.value)}
                required
              />
            </div>
            <div className="department">
              <label htmlFor="department">Department:</label>
              <input
                name="department"
                type="text"
                placeholder={data.department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </div>
            <div className="preferredCurrency">
              <label htmlFor="preferredCurrency">Preferred Currency:</label>
              <input
                name="preferredCurrency"
                type="text"
                placeholder={data.preferredCurrency}
                onChange={(e) => setPreferredcurrency(e.target.value)}
                required
              />
            </div>
            <div className="preferredLanguage">
              <label htmlFor="preferredLanguage">Preferred Language:</label>
              <input
                name="preferredLanguage"
                type="text"
                placeholder={data.preferredLanguage}
                onChange={(e) => setPreferredlanguage(e.target.value)}
                required
              />
            </div>
            <div className="lineManager">
              <label htmlFor="lineManager">Line Manager:</label>
              <input
                name="lineManager"
                type="text"
                placeholder={data.lineManager}
                onChange={(e) => setLinemanager(e.target.value)}
                required
              />
            </div>
            <div className="address">
              <label htmlFor="address">Address:</label>
              <input
                name="address"
                type="text"
                placeholder={data.address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="maritalStatus">
              <label htmlFor="maritalStatus">Marital Status:</label>
              <select
                name="maritalStatus"
                form="profile-form"
                onChange={(e) => setMaritalstatus(e.target.value)}
                required
              >
                <option value={data.maritalStatus} selected>
                  {data.maritalStatus}
                </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
            <div className="dob">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                name="dob"
                min="1900-12-31"
                max="2010-12-31"
                type="date"
                placeholder={data.dob}
                onChange={(e) => setDateofbirth(e.target.value)}
                required
              />
            </div>
            <div className="phoneNumber">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                name="phoneNumber"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder={data.phoneNumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                required
              />
            </div>
          </>
          <div className="button">
            <button className="update" onClick={handleUpdate}>
              Update
            </button>
            <button hidden className="update" onClick={handleComplete}>
              Update
            </button>
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
