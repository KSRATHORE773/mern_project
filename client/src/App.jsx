import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router'
import AppLayout from './layout/AppLayout'
import DashboardScreen from './screen/DashboardScreen'
import StudentScreen from './screen/studentScreen'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<DashboardScreen/>}/>
            <Route path='student'element={<StudentScreen/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
