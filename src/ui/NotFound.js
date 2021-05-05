import React from 'react'
import styled from 'styled-components'

const ErrorView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -200px;
  }
  h1 {
    font-size: 5rem;
  }
  p {
    text-align: center;
    max-width: 200px;
  }
`

export const NotFound = () => (
  <ErrorView>
    <div>
      <h2>Oops!</h2>
      <h1>404</h1>
      <p>The page you are looking for does not exist anymore or never existed</p>
    </div>
  </ErrorView>
)