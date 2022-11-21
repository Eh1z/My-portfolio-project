import React from 'react'
import { Navbar } from './components';

import './App.scss';

import { About, Footer, Header, Skills, Work, Testimonial } from './container';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App;