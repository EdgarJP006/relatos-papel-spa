import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import ProtectedRoute from '../components/ProtectedRoute'

import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Home from '../pages/Home'
import BookDetail from '../pages/BookDetail'
import Checkout from '../pages/Checkout'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'

function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/book/:id" element={<BookDetail />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default AppRouter