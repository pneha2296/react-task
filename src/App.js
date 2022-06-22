import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import MenuOne from './pages/MenuOne'
import MenuTwo from './pages/MenuTwo'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<MenuOne />} />
        <Route path='/menu-two' element={<MenuTwo />} />
      </Route>
    </Routes>
  );
}

export default App;