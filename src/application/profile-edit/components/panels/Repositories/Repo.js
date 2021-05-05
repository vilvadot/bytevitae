import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'
import { Flex } from '../../../../../ui'
import { repoTypes, empty } from './types'

const Row = styled(Segment)`
  margin: 0;
  margin-bottom: 16px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
`

const RemoveButton = styled(Button)`
  &&& {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Name = styled.h4`
  text-align: left;
  margin: 0;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  padding-right: 8px;
  font-size: var(--size-m);
  svg {
    margin-right: 4px;
    font-size: 8px;
  }
`

const Star = ({ count }) => (
  <Icon>
    <FontAwesomeIcon icon={faStar} />
    {count}
  </Icon>
)

Star.propTypes = {
  count: PropTypes.number.isRequired,
}

const Repo = ({ repo, onToggle }) => (
  <Row>
    <Flex direction="column" justify="center">
      <Name>
        <Star count={repo.stars} />
        {repo.name}
        {repo.isOwner && '*'}
      </Name>
      <p>{repo.description}</p>
    </Flex>
    <div>
      <RemoveButton
        type="button"
        size="tiny"
        onClick={onToggle}
        circular
        positive={repo.isVisible}
        basic
      >
        {repo.isVisible ? (
          <FontAwesomeIcon icon={faEye} />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} />
        )}
      </RemoveButton>
    </div>
  </Row>
)

Repo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  repo: repoTypes,
}

Repo.defaultProps = {
  repo: empty,
}

export default Repo
