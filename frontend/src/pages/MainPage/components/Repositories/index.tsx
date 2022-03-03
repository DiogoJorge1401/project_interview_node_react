import { useEffect } from 'react'
import { MdClear } from 'react-icons/md'
import { useRepositoryContext } from '../../../../context/RepositoryContext'
import {
  getRepositoryFromUrl,
  getUserFromUrl,
} from '../../../../utils/userRepository.utils'
import './style.css'

export const Repositories = () => {
  const {
    repositories,
    getMyRepositories,
    deleteRepository,
    globalLoading,
    user,
  } = useRepositoryContext()

  useEffect(() => {
    getMyRepositories()
  }, [])

  const handleDeleteReposiory = (repoId: string) => {
    const response = confirm('Tem certeza que deseja excluir o repositório')
    if (!response) return
    deleteRepository(repoId)
  }

  return (
    <div className="repositories">
      {globalLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h2 className="repositories__title">Repositórios</h2>

          <ul className="repositories__list">
            {repositories.map((repository) => (
              <li key={repository.url} className="repositories__list-item">
                <div className="repositories__list-item-info">
                  <div className="repositories__list-item-info-owner">
                    {getUserFromUrl(repository.url)}
                  </div>
                  <div className="repositories__list-item-info-name">
                    {getRepositoryFromUrl(repository.url)}
                  </div>
                </div>
                {repository.user === user._id && (
                  <button
                    className="repositories__list-item-button"
                    onClick={() => handleDeleteReposiory(repository._id)}
                  >
                    <MdClear className="repositories__list-item-button-icon" />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
