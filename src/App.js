import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage' 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} /> 
      </Routes>
      <Routes>
        <Route path="register" element={<RegistrationPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
