import React, { useState } from 'react';
import '../styles/ChatArea.css';
import profileImage from '../assets/profile.JPG'; 

const ChatArea = ({ currentChat }) => {
  const [messages, setMessages] = useState([
    { text: 'Hi there!', sender: 'received' },
    { text: 'Hello!', sender: 'sent' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'sent' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-area">
      <div className="chat-header">
        <div className="profile-photo">
        <img src={profileImage} alt="Profile" />
        </div>
        <h3>{currentChat}</h3>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message message-${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
