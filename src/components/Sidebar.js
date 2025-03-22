import React from 'react';
import '../styles/Sidebar.css';


const Sidebar = ({ setCurrentChat }) => {
  return (
    <div className="sidebar">
      <div className="header">
        <h2>ChatApp</h2>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="contacts">
        <ul>
          <li onClick={() => setCurrentChat('Notifications')}>
            <i className="fa fa-bell"></i> Notifications
          </li>
          <li onClick={() => setCurrentChat('Archived Chats')}>
            <i className="fa fa-archive"></i> Archived Chats
          </li>
          <li onClick={() => setCurrentChat('Help Center')}>
            <i className="fa fa-question-circle"></i> Help Center
          </li>
          <li onClick={() => setCurrentChat('Puspanjali Neupane')}>
            <i className="fa fa-user"></i> Puspanjali 
          </li>
          <li onClick={() => setCurrentChat('Shreya Niraula')}>
            <i className="fa fa-user"></i> Shreya
          </li>
          <li onClick={() => setCurrentChat('Group 1')}>
            <i className="fa fa-users"></i> Family
          </li>
          <li onClick={() => setCurrentChat('Group 2')}>
            <i className="fa fa-users"></i> Friends
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
