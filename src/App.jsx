import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import "./css/style.css";

import Header from "./components/Header";
import TesteUseEfffect from "./components/useEffect";

function App() {

  return (
    <>
      <Header />
      <TesteUseEfffect />
    </>
  )
}

export default App
