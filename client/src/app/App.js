import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../pages/Home/Home'
import { Settings } from '../pages/Settings/Settings'

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Settings' element={<Settings />} />
      </Routes>
    </Layout>
  )
}