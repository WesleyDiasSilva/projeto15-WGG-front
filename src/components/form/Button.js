import React from 'react'
import styled from 'styled-components'

function Button({text, onClick}) {
  return (
    <ButtonElement onClick={onClick}>
      {text}
    </ButtonElement>
  )
}

export default Button

const ButtonElement = styled.button`
  width: 30%;
  background-color: #00B4CC;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-family: Inter;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`