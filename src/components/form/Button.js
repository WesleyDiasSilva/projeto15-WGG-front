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
  height: 40px;
  background-color: #00B4CC;
  border-radius: 20px;
  border: none;
  font-family: Inter;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  :hover{
    cursor: pointer;
  }
 `
