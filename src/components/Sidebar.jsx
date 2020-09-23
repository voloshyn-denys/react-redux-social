import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__list__item">
          <a className="sidebar__link sidebar__link--active" href="/profile">Profile</a> 
        </li>
        <li className="sidebar__list__item">
          <a className="sidebar__link" href="/messages">Dialogs</a> 
        </li>
        <li className="sidebar__list__item">
          <a className="sidebar__link" href="/news">News</a> 
        </li>
        <li className="sidebar__list__item">
          <a className="sidebar__link" href="/music">Music</a> 
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;