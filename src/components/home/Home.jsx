/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDarkMode,
  setLightMode,
  selectBackgroundColor,
} from '../../redux/features/color/colorSlice';
import {
  changeVisibility,
  selectVisibility,
} from '../../redux/features/visibility/visibilitySlice';
import './home.scss';

function Home() {
  const backgroundColor = useSelector(selectBackgroundColor);
  const visibility = useSelector(selectVisibility);
  const dispatch = useDispatch();

  return (
    <div className="welcome" style={{ backgroundColor }}>
      <b>
        Welcome to <i>BAREFOOT NOMAD.</i>
      </b>
      <button
        onClick={() => {
          dispatch(setDarkMode());
          dispatch(changeVisibility());
        }}
        type="button"
        autoFocus={visibility}
      >
        Dark mode
      </button>
      <button
        onClick={() => {
          dispatch(setLightMode());
          dispatch(changeVisibility());
        }}
        type="button"
        autoFocus={!visibility}
      >
        Light mode
      </button>
    </div>
  );
}

export default Home;
