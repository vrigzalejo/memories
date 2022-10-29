import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import { GoogleOAuthProvider } from '@react-oauth/google'

const App = () => (
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </GoogleOAuthProvider>
)

export default App
