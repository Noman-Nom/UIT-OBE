import React, { useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import List from './Pages/List/List'
import New from './Pages/New/New'
import Single from './Pages/Single/Single'
import { userInputs } from './formSource'
import './App.css'

import './Style/Dark.scss'
import { DarkModeContext } from './Context/darkModeContext'

const App = () => {

  const {darkMode} = useContext(DarkModeContext)
  // const [dark, setDark] = useState(false)  not efficient for dark mode
  return (
    <div className={darkMode? "app dark" : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='user' >
              <Route index element={<List />} />
              <Route path='new' element={<New inputs={userInputs} title="Add New User" />} />
              <Route path=':userId' element={<Single />} />
            </Route>
            <Route path='courses'>
              <Route index element={<List />} />
              <Route path='new' element={<New />} />
              <Route path=':courseId' element={<Single />} />
            </Route>
            <Route path='students'>
              <Route index element={<List />} />
              <Route path='new' element={<New />} />
              <Route path=':studentsId' element={<Single />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App