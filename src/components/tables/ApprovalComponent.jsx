import React, { useEffect, useState } from 'react';
import { getTrip, getProfile } from '../../api/tripApi';
import ProfileModal from '../ProfileModal';

function ApprovalComponent(props) {
  const { tripId } = props;
  const [trip, setTrip] = useState({});
  const [hasProfile, setHasProfile] = useState(false);
  const [profile, setProfile] = useState({});
  const [modalOn, setModalOn] = useState(false);
  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await getTrip(tripId);
        setTrip(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrip();
  }, []);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile('d53e3469-661e-40c0-a2bb-d66e0e5fa16e');
        const { data } = response;
        setProfile(data);
        console.log(profile);
        if (response) {
          setHasProfile(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);
  const tripData = { ...trip.data };
  const data = { ...tripData.data };
  const accomodation = { ...data.Accomodation };
  const accomodationName = accomodation.name;
  const { departure, destination, dateOfTravel, dateOfReturn, createdAt, travelReason } = data;
  const dateOfTravelString = new Date(dateOfTravel).toDateString();
  const dateOfReturnString = new Date(dateOfReturn).toDateString();
  const createdAtString = new Date(createdAt).toDateString();
  const viewProfile = () => {
    if (!hasProfile) {
      console.log('This user has no profile');
      return;
    }
    setModalOn(true);
  };
  return (
    <div className=" flex flex-col w-full mx-72 mt-6">
      <h1 className="text-3xl bg-primary font-medium text-center font-semibold p-1 rounded-lg">
        Trip request Approval
      </h1>
      <h1 className="text-center text-2xl p-2 font-medium">Requester Information</h1>
      <div className="flex flex-col mx-12">
        <span className="flex flex-row justify-between p-2 border-primary">
          <h2>Names:</h2>
          <h2>Mugabo John</h2>
        </span>
        <span className="flex flex-row justify-between p-2">
          <h2>Location:</h2>
          <h2>Kigali Nyarugenge</h2>
        </span>
        <button
          type="button"
          className="bg-primary w-40 mx-auto my-4 rounded-md font-medium p-1 hover:bg-white hover:text-primary"
          onClick={viewProfile}
        >
          View Profile
        </button>
      </div>
      <h1 className="text-center text-2xl p-2 font-medium">Trip Information</h1>
      <div className="mx-12">
        <span className="flex flex-row justify-between p-1">
          <h2>accomodation:</h2>
          <h2>{accomodationName}</h2>
        </span>
        <span className="flex flex-row justify-between p-1">
          <h2>Departure:</h2>
          <h2>{departure}</h2>
        </span>
        <span className="flex flex-row  justify-between p-1">
          <h2>Destination:</h2>
          <h2>{String(destination)}</h2>
        </span>

        <span className="flex flex-row  justify-between p-1">
          <h2>Date of Travel:</h2>
          <h2>{dateOfTravelString}</h2>
        </span>
        <span className="flex flex-row  justify-between p-1">
          <h2>Date of Return:</h2>
          {console.log(dateOfReturn)}
          <h2>{dateOfReturnString}</h2>
        </span>
        <span className="flex flex-row justify-between p-1">
          <h2>Date trip requested:</h2>
          <h2>{createdAtString}</h2>
        </span>
        <span className="flex flex-row justify-between p-1">
          <h2>Travel Reason:</h2>
          <h2>{travelReason}</h2>
        </span>
        <div className="flex flex-row items-center mx-auto w-96">
          <button
            type="button"
            className="bg-green w-40  mx-auto my-4 rounded-md font-medium p-1 hover:bg-clrBackground hover:text-green"
          >
            Approve
          </button>
          <button
            type="button"
            className="bg-red w-40 mx-auto my-4 rounded-md font-medium p-1 hover:bg-clrBackground hover:text-red"
          >
            Reject
          </button>
        </div>
      </div>
      {modalOn && (
        <div className="bg-clrBackground  mx-auto h-full opacity-100 absolute inset-0 flex justify-center z-30">
          <ProfileModal data={profile} setModalOn={setModalOn} />
        </div>
      )}
    </div>
  );
}

export default ApprovalComponent;