import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Footer />
        <Home />
      </div>
    </>
  )
}

export default App
