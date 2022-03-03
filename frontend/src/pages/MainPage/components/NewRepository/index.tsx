import { useState } from 'react'
import { useRepositoryContext } from '../../../../context/RepositoryContext'
import './style.css'

export const NewRepository = () => {
  const {createRepository} = useRepositoryContext()

  const [repositoryUrl, setRepositoryUrl] = useState('')

  const handleSubmitRepository = () => {
    createRepository(repositoryUrl)
    setRepositoryUrl('')
  }

  return (
    <div className="newRepositories">
      <label className="newRepositories__title" htmlFor="repositoryName">
        Novo Repo
      </label>
      <input
        id="repositoryName"
        type="text"
        className="newRepositories__input"
        placeholder="https://github.com/user/repository"
        value={repositoryUrl}
        onChange={(ev) => setRepositoryUrl(ev.target.value)}
      />
      <button
        className="newRepositories__button"
        onClick={handleSubmitRepository}
      >
        Adicionar
      </button>
    </div>
  )
}
