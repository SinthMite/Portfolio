import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Body from './Body/Body'
import Project from './Project/Project'
function App({toggleColor}) {

  return (
    <>
      <Header toggleColor={toggleColor}/>
      <Body />
      <Project />
    </>
  )
}

export default App
