import React from 'react'
// ---------css-App---------
import './App.css'
// --------react-Route---------
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// ---------import-files---------
import {Head, Header, Navbar, Container, Headers, Footer} from './Component/index'
import {Home, About, Contact} from './Pages/index'

function App() {
  return (
    <>
      <Router>
        <Headers>
          <Head />
          <Header />
          <Navbar />
        </Headers>

        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
        </Container>
      </Router>

      <Footer/>
    </>
  )
}

export default App