import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import MobileScreen from './MobileScreen'

const View = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Content = styled.main`
  height: 100%;
`

export const Layout = ({ children }) => {
  const isMobile = window.innerWidth <= 425

  return (
    <View>
      <Navbar />
      {!isMobile && <Content>{children}</Content>}
      {isMobile && <MobileScreen />}
    </View>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
