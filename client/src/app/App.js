import './App.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home/Home'
import { Settings } from '../pages/Settings/Settings'
import { Navbar } from '../components/Navbar/Navbar'

export const App = () => {
  // This data is mocked until we can pull these files organically
  const servers = [
    {
      name: "Server 1",
      mainDirectory: "A:\\SteamLibrary\\steamapps\\common\\Ark_ASA"
    },
    {
      name: "Server 2",
      mainDirectory: "C:\\SteamLibrary\\steamapps\\common\\Ark_ASA"
    },
    {
      name: "Server 3 Has A Really Long Server Title",
      mainDirectory: "Z:\\SteamLibrary\\steamapps\\common\\Ark_ASA"
    }
  ]

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  const [selectedServer, setSelectedServer] = useState(servers[0]);
  const onServerSelect = () => {
    const chosenServer = document.querySelectorAll('.nav-server-select option:checked')[0].innerHTML;
    const server = servers.find(server => server.name === chosenServer);
    setSelectedServer(server);
    setTimeout(() => {
      toggleSidebar();
    }, 150)
  }

  useEffect(() => {
    // Here we can use selectedServer to grab the correct file from the system
    // Note: selectedServer currently returns an object with a name and mainDirectory
  }, [selectedServer])

  return (
    <div className="app">
        <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} servers={servers} onServerSelect={onServerSelect} />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home server={selectedServer} />} />
            <Route path="/Settings" element={<Settings server={selectedServer} />} />
          </Routes>
        </div>
    </div>
  )
}