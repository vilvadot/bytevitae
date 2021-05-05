import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Repo from './Repo'
import PanelHeader from '../../PanelHeader'
import EmptyState from '../../EmptyState'
import { repoTypes } from './types'
import { Spacer } from '../../../../../ui'

const Repositories = ({ values, isActive }) => {
  const countActiveRepos = (repos) => {
    const visibleRepos = repos.filter(repo => repo.isVisible)
    return visibleRepos.length
  }

  const [items, setItems] = useState(values.repositories)

  const updateValues = (updatedValues) => {
    setItems(updatedValues)
    values.repositories = updatedValues // eslint-disable-line
  }

  const handleActivation = (id) => {
    const updated = items.slice()
    updated.splice(id, 1, { ...updated[id], isVisible: !updated[id].isVisible })
    const count = countActiveRepos(updated)
    if (count <= 6) {
      updateValues(updated, count)
    }
  }

  if (!isActive) return null

  return (
    <>
      <PanelHeader
        title={`Repositories (${countActiveRepos(items)}/6)`}
        tooltip="This includes all your own repositories plus the ones you contributed to. By default only pinned ones are visible, but you can select up to 6 repos you want to show in your cv."
      />
      {items.map((repo, id) => (
        <Repo key={repo.name} repo={repo} onToggle={() => handleActivation(id)} />
      ))}
      {items.length && <Spacer height={40} />}
      {!items.length && (
        <EmptyState>
          Share your Open Source contributions in your CV (only public repos will appear here)
        </EmptyState>
      )}
    </>
  )
}

Repositories.defaultProps = {
  values: {
    repositories: [],
  },
  isActive: PropTypes.bool,
}

Repositories.propTypes = {
  values: PropTypes.shape({
    repositories: PropTypes.arrayOf(repoTypes),
  }),
  isActive: PropTypes.bool,
}

export default Repositories
