import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import ScrollToTop from '@shared/ScrollToTop'
import Navbar from '@shared/Navbar'
import HomePage from '@pages/Home'
import SigninPage from '@pages/Signin'
import SignupPage from '@pages/Signup'
import CardPage from '@pages/Card'
import PrivateRoute from '@components/auth/PrivateRoute'
import ApplyPage from '@pages/Apply'
import ApplyDone from '@pages/ApplyDone'
import TestPage from '@pages/Test'
import MyPage from './pages/My'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/card/:id" Component={CardPage} />
        <Route
          path="/apply/:id"
          element={
            <PrivateRoute>
              <Suspense fallback={<></>}>
                <ApplyPage />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/apply/done"
          element={
            <PrivateRoute>
              <ApplyDone />
            </PrivateRoute>
          }
        />
        <Route
          path="/my"
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
        <Route path="/test" Component={TestPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
