import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Toast from './utils/Toast';
import { ToastContext } from './utils/toastContext';

const ToastNotification = (props) => {
  const [position, setPosition] = useState('top-right');
  const { state, dispatch } = useContext(ToastContext);

  const handleButtonSelect = (type, message) => {
    switch (type) {
      case 'SUCCESS':
        return dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: uuidv4(),
            type,
            title: 'success',
            message,
          },
        });
      case 'INFO':
        return dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: uuidv4(),
            type,
            title: 'Info',
            message,
          },
        });
      case 'WARNING':
        return dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: uuidv4(),
            type,
            title: 'warning',
            message,
          },
        });
      case 'DANGER':
        return dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            id: uuidv4(),
            type,
            title: 'Danger',
            message,
          },
        });
      default:
    }
  };

  return (
    <div>
      <div className="main-content">
        <props.componentType
          onClick={() => handleButtonSelect(props.notificationType, props.notificationMessage)}
        >
          {props.componentLabel}
        </props.componentType>
      </div>
      <Toast position={position} autoDeleteInterval={5000} />
    </div>
  );
};

export default ToastNotification;
