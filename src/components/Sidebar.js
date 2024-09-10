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
          <li onClick={() => setCurrentChat('Contact 1')}>
            <i className="fa fa-user"></i> Contact 1
          </li>
          <li onClick={() => setCurrentChat('Contact 2')}>
            <i className="fa fa-user"></i> Contact 2
          </li>
          <li onClick={() => setCurrentChat('Group 1')}>
            <i className="fa fa-users"></i> Group 1
          </li>
          <li onClick={() => setCurrentChat('Group 2')}>
            <i className="fa fa-users"></i> Group 2
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
