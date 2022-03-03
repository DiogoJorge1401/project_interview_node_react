import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRepositoryContext } from '../../context/RepositoryContext'
import { api } from '../../services/api'
import './style.css'

export const LoginPage = () => {
  const { setUser } = useRepositoryContext()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleChangeFormData = (ev) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [ev.target.name]: ev.target.value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const { data } = await api.post('/sessions', formData)
      const { token, user } = data
      setUser(user)
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/')
    } catch (err) {}
  }

  return (
    <div className="container">
      <div className="login">
        <h1 className="login__title">Login</h1>
        <form className="login__form">
          <section className="login__form-field">
            <label htmlFor="email" className="login__form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="login__form-input"
              id="email"
              placeholder="Ex. jhondoe@mail.com"
              onChange={handleChangeFormData}
            />
          </section>

          <section className="login__form-field">
            <label htmlFor="password" className="login__form-label">
              Senha
            </label>
            <input
              type="password"
              name="password"
              className="login__form-input"
              id="password"
              placeholder="********"
              onChange={handleChangeFormData}
            />

            <section className="login__action">
              <button
                onClick={handleSubmit}
                type="button"
                className="login__action-button"
              >
                Entrar
              </button>
            </section>
          </section>
        </form>
      </div>
    </div>
  )
}
