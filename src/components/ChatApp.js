import React, { useState } from 'react';
import Sidebar from './Sidebar';

import ChatArea from './ChatArea';

import '../styles/ChatApp.css';


function ChatApp() {
  const [currentChat, setCurrentChat] = useState('Contact 1');

  return (
    <div className="chat-app">
      <Sidebar setCurrentChat={setCurrentChat} />
      <ChatArea currentChat={currentChat} />
    </div>
  );
}

export default ChatApp;
