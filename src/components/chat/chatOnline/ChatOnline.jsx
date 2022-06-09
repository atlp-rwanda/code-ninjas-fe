import React from 'react';
import './ChatOnline.scss';
import io from 'socket.io-client';
import jwtDecode from 'jwt-decode';

const socket = io.connect('http://localhost:3000');
const token = localStorage.getItem('token');
const { user } = jwtDecode(token);
const username = user.userName;

function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/Free-Whatsapp-Dp-Profile-Pics-images.png"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{username}</span>
      </div>
    </div>
  );
}

export default ChatOnline;
