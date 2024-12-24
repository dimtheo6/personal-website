import { useState } from 'react'
import Header from './Header'
import Home from './Home'

function App() {

  return (
    <div className='container flex flex-col w-screen'>
      <Header/>
      <Home/>
      <div className='h-screen w-screen'></div>
    </div>
  )
}

export default App
