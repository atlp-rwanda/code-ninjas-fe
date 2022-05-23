import React from 'react';

function ProfileModal(props) {
  const { data } = props;
  const { setModalOn } = props;
  const { gender, language, currency, birthdate, location } = data;
  const birthdateString = new Date(birthdate).toDateString();
  const close = () => {
    setModalOn(false);
  };
  return (
    <div className="bg-gray">
      <div className=" flex flex-col w-auto h-screen my-4">
        <h1 className="text-3xl bg-primary font-medium text-center font-semibold p-1 rounded-lg">
          Requester Profile
        </h1>
        <div className="flex flex-col">
          <span className="flex flex-row justify-between p-1 mx-12">
            <h2>Gender:</h2>
            <h2>{gender}</h2>
          </span>
          <span className="flex flex-row  justify-between p-1 mx-12">
            <h2>Language:</h2>
            <h2>{language}</h2>
          </span>

          <span className="flex flex-row  justify-between p-1 mx-12">
            <h2>Currency:</h2>
            <h2>{currency}</h2>
          </span>
          <span className="flex flex-row  justify-between p-1 mx-12">
            <h2>Date of Birth:</h2>
            <h2>{birthdateString}</h2>
          </span>
          <span className="flex flex-row justify-between p-1 mx-12">
            <h2>Location:</h2>
            <h2>{location}</h2>
          </span>
          <div className="flex flex-row items-center mx-auto w-96" />
          <button
            type="button"
            onClick={close}
            className="bg-primary flex justify-center w-40 p-1 mx-auto rounded-md"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
