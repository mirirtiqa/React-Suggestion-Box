import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './Search'


function App() {
 
const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      <Search api ={apiKey}/>
    </>
  )
}

export default App
