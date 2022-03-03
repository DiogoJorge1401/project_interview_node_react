import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RepositoryContextProvider } from '../context/RepositoryContext'
import { LoginPage } from './LoginPage'
import { MainPage } from './MainPage'

export const AppRoutes = () => (
  <RepositoryContextProvider>
    <Router>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<MainPage />} path="/" />
      </Routes>
    </Router>
  </RepositoryContextProvider>
)
