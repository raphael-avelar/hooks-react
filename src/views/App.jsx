import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import DataContext, { data } from '../data/DataContext'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import Store from '../data/Store'

const App = props => {
  const [state, setState] = useState(data)

  return (
    <Store>
      <DataContext.Provider value={{state, setState}}>
        <div className='app'>
          <BrowserRouter>
            <Menu />
            <Content />
          </BrowserRouter>
        </div>
      </DataContext.Provider>
    </Store>
  )
}

export default App