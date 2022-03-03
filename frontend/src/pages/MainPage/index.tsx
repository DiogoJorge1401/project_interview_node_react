import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRepositoryContext } from '../../context/RepositoryContext'
import { Navbar, NewRepository, Repositories, Search } from './components'
import './style.css'

export const MainPage = () => {
  const { defineUser, error } = useRepositoryContext()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) navigate('/login')
    defineUser()
    console.log(error)

    if (error) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      navigate('/login')
    }
  }, [error])

  return (
    <main className="main">
      <Navbar />
      <Search />
      <Repositories />
      <NewRepository />
    </main>
  )
}
