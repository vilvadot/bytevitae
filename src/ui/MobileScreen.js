import React from 'react'
import styled from 'styled-components'

const Screen = styled.div`
  padding: 3rem;
  padding-top: 10rem;
  text-align: center;
  span{
    font-size: 100px;
    margin-bottom: 100px;
  }
`

const MobileLock = () => (
  <Screen>
    <span role="img" aria-label="tear face">😢</span>
    <h1>Device size not supported</h1>
    <p>
Byte Vitae is currently not optimized to be used on small screens.
    Please try it on a tablet, laptop or desktop computer.
    You won&apos;t regret it! Sorry for the inconvenience.
    </p>
  </Screen>
)

export default MobileLock
