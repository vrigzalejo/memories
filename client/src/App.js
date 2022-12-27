import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import PostDetails from './components/PostDetails/PostDetails'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
import { GoogleOAuthProvider } from '@react-oauth/google'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Navigate replace to="/posts" />} />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" exact element={<PostDetails />} />
            <Route
              path="/auth"
              exact
              element={!user ? <Auth /> : <Navigate replace to="/posts" />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
