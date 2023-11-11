import React from 'react'
import { Routes, Route } from 'react-router-dom'
import path from './utils/path'
import { Home, PublicLayout } from './pages/public'

function App() {

  return (
    <div className=''>
      <Routes>
          <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
              <Route path={path.HOME} element={<Home />}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
