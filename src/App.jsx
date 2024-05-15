import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Body from './Body/Body'
function App({toggleColor}) {

  return (
    <>
      <Header toggleColor={toggleColor}/>
      <Body />
    </>
  )
}

export default App
