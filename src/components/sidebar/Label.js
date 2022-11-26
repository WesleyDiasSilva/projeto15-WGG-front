import React from 'react'
import styled from 'styled-components'

function Label({children}) {
  return (
    <LabelText>
      {children}
    </LabelText>
  )
}

export default Label


const LabelText = styled.span`
  font-family: Inter;
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 10px;
`