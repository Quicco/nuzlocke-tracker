import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import LevelCapPage from './pages/LevelCapPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/games/:id' element={<LevelCapPage />}/>
    </Routes>
  )
}

export default App