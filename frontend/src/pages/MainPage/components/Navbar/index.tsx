import { useNavigate } from 'react-router-dom'
import { useRepositoryContext } from '../../../../context/RepositoryContext'
import './style.css'

export const Navbar = () => {
  const { getMyRepositories } = useRepositoryContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  const handleHome = (ev) => {
    ev.preventDefault()
    getMyRepositories()
  }

  return (
    <nav className="nav">
      <h1 className="logo">
        <a href="" onClick={handleHome}>
          RepSys
        </a>
      </h1>
      <button type="button" className="exit-button" onClick={handleLogout}>
        Sair
      </button>
    </nav>
  )
}
