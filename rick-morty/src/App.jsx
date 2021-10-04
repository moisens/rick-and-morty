import { useState } from 'react'
import './App.scss'
import Header from './components/header/Header';
import Aside from './components/aside/Aside';

function App() {

  return (
    <div className='app-container'>
      <Header />
      <Aside />
    </div>
  )
}

export default App;
