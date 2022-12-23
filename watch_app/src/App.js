import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/home'

const App = () => {
  return (
      <div className='main'>
        <div className="header"></div>
        <Header/>
        <div className="home"></div>
        <Home/>
      </div>



  )
}

export default App