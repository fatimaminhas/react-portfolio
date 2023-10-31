import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Nav from './components/Nav'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomePage /> */}
      {/* <Nav /> */}
      <Router>  
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
      </Router> 
    </>
  )
}

export default App
