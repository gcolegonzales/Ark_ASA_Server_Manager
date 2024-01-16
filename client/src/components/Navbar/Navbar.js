import './Navbar.scss';
import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

export const Navbar = ({ sidebar, toggleSidebar, servers, onServerSelect }) => {
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={toggleSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            {/* These menu items will probably be more like a search filter that onlyshows specificpanels or something maybe. */}
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={toggleSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='nav-server-select'>
              <select onChange={(e) => onServerSelect()}>
                {servers.map((server) => (
                  <option key={server.name}>{server.name}</option>
                ))}
              </select>
            </li>
            <li className='nav-text' onClick={toggleSidebar}>
              <Link to='/'>
                <AiIcons.AiFillHome />
                <span>Home</span>
              </Link>
            </li>
            <li className='nav-text' onClick={toggleSidebar}>
              <Link to='/Settings'>
                <AiIcons.AiFillSetting />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}