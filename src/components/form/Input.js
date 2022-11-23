import React from 'react'
import styled from 'styled-components'


function Input({label, type, onChange, name }) {

  return (
      <InputElement 
      placeholder={label}
      type={type}
      name={name}
      onChange={onChange}
      />
  )
}

export default Input

const InputElement = styled.input`
  font-family: Inter;
  width: 60%;
  border: none;
  margin-top: 10px;
  font-size: 17px;
  font-weight: bold;
  padding: 10px;
  box-sizing: border-box;
  color: #000;
  &::placeholder{
    font-family: Inter;
    color: #000
  }&:focus{
    border: none;
  }
`
