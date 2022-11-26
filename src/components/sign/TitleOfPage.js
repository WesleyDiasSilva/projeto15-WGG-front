import React from 'react'
import styled from 'styled-components'

export default function TitleOfPage() {
  return (
    <Title>
      W<span>GG</span>
    </Title>
  )
}

const Title = styled.h1`
  font-family: 'Russo One', sans-serif;
  font-size: 4rem;
  color: #343838;
  font-weight: 500;
  span{
    color: #00DFFC;
  }
`