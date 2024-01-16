import './Layout.scss'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Navbar } from '../Navbar/Navbar'

//Added addition imports to include the routes, home, and settings
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Settings } from '../../pages/Settings/Settings';

export const Layout = () => {
  const [selectData, setSelectData] = useState([
    {
      "id": -1,
      "name": "Testing",
      "username": "Tester"
    }
  ]);

  const axiosFetchUsers = async(processing) => {
    await axios.get('http://localhost:4000/users').then(res => {
      setSelectData(res.data)
    }).catch((err) => console.log(err))
  };

  useEffect(() => {
    axiosFetchUsers()
  }, [])

  // added routes to return so that routes would return depending on menu item selected.
  return (
    <div className="app">
      <Navbar selectData={selectData} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </div>
  );
};