import React from 'react'
import styled, { css } from 'styled-components'
import {
  faUserCircle,
  faSchool,
  faLaptopCode,
  faBriefcase,
  faLanguage,
  faTools,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MenuBar = styled.div`
  border-right: 1px solid var(--grey-light);
  height: 100%;
  overflow-y: scroll;
  min-width: 130px;
`

const Item = styled.div`
  border-bottom: 1px solid var(--grey-light);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--grey-dark);
  svg {
    font-size: 20px;
    margin-bottom: 8px;
  }
  &:hover {
    cursor: pointer;
    color: var(--primary-color);
  }
  ${({ isActive }) => isActive
    && css`
      color: var(--primary-color);
      font-weight: bold;
    `};
`

const MenuItem = ({
  icon, children, isActive, route,
}) => (
  <Link to={route}>
    <Item isActive={isActive}>
      <FontAwesomeIcon icon={icon} />
      {children}
    </Item>
  </Link>
)

MenuItem.propTypes = {
  icon: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  route: PropTypes.string.isRequired,
}

MenuItem.defaultProps = {
  isActive: false,
}

const Menu = ({ activePane }) => (
  <MenuBar>
    <MenuItem route="/profile/edit/basic" icon={faUserCircle} isActive={activePane === 'basic'}>
      Basic info
    </MenuItem>
    <MenuItem
      route="/profile/edit/languages"
      icon={faLanguage}
      isActive={activePane === 'languages'}
    >
      Languages
    </MenuItem>
    <MenuItem route="/profile/edit/education" icon={faSchool} isActive={activePane === 'education'}>
      Education
    </MenuItem>
    <MenuItem
      route="/profile/edit/experience"
      icon={faBriefcase}
      isActive={activePane === 'experience'}
    >
      Experience
    </MenuItem>
    <MenuItem
      route="/profile/edit/repositories"
      icon={faLaptopCode}
      isActive={activePane === 'repositories'}
    >
      Repositories
    </MenuItem>
    <MenuItem
      route="/profile/edit/skills"
      icon={faTools}
      isActive={activePane === 'skills'}
    >
      Skills
    </MenuItem>
  </MenuBar>
)

Menu.propTypes = {
  activePane: PropTypes.string.isRequired,
}

export default Menu
