import React, { useState, useEffect } from 'react';
import './Conversation.scss';
import io from 'socket.io-client';
import jwtDecode from 'jwt-decode';
import { Button, Grid } from '@mui/material';
import {
  SmartToyOutlined,
  CommentsDisabledOutlined,
  WifiCallingOutlined,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import formatMessage from '../../../utility/message';

const useStyles = makeStyles(() => ({
  join: {
    color: 'limegreen !important',
    border: '1px solid limegreen !important',
    marginTop: '2rem !important',
    marginRight: '2rem !important',
    alignContent: 'center',
  },
  leave: {
    color: 'red !important',
    border: '1px solid red !important',
    marginRight: '2rem !important',
    alignContent: 'center',
  },
  joinIcon: {
    color: 'limegreen',
    marginRight: '1rem',
  },
  leaveIcon: {
    color: 'red',
    marginRight: '1rem',
  },
  conversation: {
    display: 'flex !important',
    alignItems: 'center',
    padding: '2rem 0 2rem 0',
    marginTop: '10rem',
    flexDirection: 'column !important',
    // background: #e9e9e9;
  },
  conversationImg: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '20px',
  },
  conversationName: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#1565c0',
    textAlign: 'center',
  },
}));

const socket = io.connect('http://localhost:3000');
const token = localStorage.getItem('token');
const { user } = jwtDecode(token);
const username = user.userName;

function Conversations() {
  const classes = useStyles();
  const joinIcon = <WifiCallingOutlined className={classes.joinIcon} />;
  const leaveIcon = <CommentsDisabledOutlined className={classes.leaveIcon} />;
  const chats = document.getElementsByClassName('chatBoxWrapper');
  const data = chats[0];
  console.log(data);
  const [inRoom, setInRoom] = useState(false);
  const welcomeMessage = formatMessage(
    'Ninjas Bot',
    'Welcome to the chat room!'
  );
  const joinRoom = () => {
    socket.emit('joinRoom', { username });
    setInRoom(true);
  };
  const leaveRoom = () => {
    setInRoom(false);
    socket.emit('disconnect');
  };
  useEffect(() => {}, [inRoom]);
  // {
  //   inRoom
  //     ? (chats[0].style.display = 'block')
  //     : (chats[0].style.display = 'none');
  // }
  return (
    <>
      <Grid className={classes.conversation}>
        §
        <SmartToyOutlined
          style={{ height: '50px', width: '50px', color: '#1d97a7' }}
        />
        <span className={classes.conversationName}>
          {welcomeMessage.username}
        </span>
        <h4 className={classes.conversationName}>{welcomeMessage.text}</h4>
        <span className="messageBottom">{welcomeMessage.time}</span>
      </Grid>
      <Grid
        style={{ textAlign: 'center', marginTop: '5rem', marginLeft: '2.5rem' }}
      >
        <Button
          type="button"
          variant="outlined"
          className={inRoom ? classes.leave : classes.join}
          // className="join"
          onClick={inRoom ? leaveRoom : joinRoom}
        >
          {inRoom ? leaveIcon : joinIcon}

          {inRoom ? 'LEAVE ROOM' : 'JOIN ROOM'}
        </Button>
      </Grid>
    </>
  );
}

export default Conversations;
