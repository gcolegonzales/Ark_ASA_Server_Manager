import './Layout.scss'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Navbar } from '../Navbar/Navbar'

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
  
  return (
    <div className="app">
      <Navbar />
    </div>
  );
}