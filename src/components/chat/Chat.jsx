import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import './Chat.scss';
import jwtDecode from 'jwt-decode';
import io from 'socket.io-client';
import { Formik, Form } from 'formik';
import { TextField, Button, Grid } from '@material-ui/core';
import Conversation from './conversations/Conversations';
import Message from './message/Message';
import ChatOnline from './chatOnline/ChatOnline';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const socket = io.connect('http://localhost:3000');
// const token = localStorage.getItem('token');
// const { user } = jwtDecode(token);
// const username = user.userName;
// socket.emit('joinRoom', { username });

function Chat() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageData, setMessageData] = useState('');
  const [messageList, setMessageList] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();

    // Get message text
    let msg = currentMessage;

    msg = msg.trim();

    if (!msg) {
      return false;
    }

    // Emit message to server
    socket.emit('chatMessage', msg);

    // Clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
  };

  useEffect(() => {}, [socket]);

  const classes = useStyles();
  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <h4 className="chatMenuInput"> Barefoot Nomad Live Chat </h4>
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own />
              <Message />
              <Message own />
              <Message />
              <Message own />
              <Message />
              <Message own />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <Formik onSubmit={sendMessage}>
                <Form className={classes.container}>
                  <Grid container spacing={1}>
                    <Grid item xs={10}>
                      <TextField
                        variant="outlined"
                        name="message"
                        placeholder="Type a message..."
                        fullWidth
                        onChange={(e) => setCurrentMessage(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={sendMessage}
                        style={{
                          height: '3.4rem',
                          width: '5rem',
                        }}
                      >
                        SEND
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <h4 className="chatMenuInput"> Online users </h4>
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
