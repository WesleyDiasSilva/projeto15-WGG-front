import React from 'react'
import styled from 'styled-components'

function TitleOfPage({children}) {
  return (
    <Title>
      {children}
    </Title>
  )
}

export default TitleOfPage

const Title = styled.h1`
  font-family: Inter;
  font-size: 2rem;
  color: #00DFFC;
  font-weight: 500;
`