import React from 'react';
import './Message.scss';

function Message({ own }) {
  return (
    <>
      <div className={own ? 'message own' : 'message'}>
        <div className="messageTop">
          <img
            className="messageImg"
            src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/Free-Whatsapp-Dp-Profile-Pics-images.png"
            alt=""
          />
          <p className="messageText">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="messageBottom">
          <span className="sender">roberti</span> 1 hour ago
        </div>
      </div>
    </>
  );
}

export default Message;
