import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function App() {

  return (
    <div className='container flex flex-col  w-screen gap-14'>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
