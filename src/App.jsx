import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './Search'


function App() {
  apiKey = process.env.REACT_APP_WORDS_API

  return (
    <>
      <Search api={apiKey}/>
    </>
  )
}

export default App
