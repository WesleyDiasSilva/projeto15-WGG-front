import React from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
import Controller from './Controller'

function Sidebar({setRating, setOnlyAvailable}) {
  return (
    <Side>
      <Controller setValue={setRating} label="Nota" options={[1,2,3,4,5]}/>
      <Checkbox setOnlyAvailable={setOnlyAvailable} label="Apenas jogos com estoque"/>
    </Side>
  )
}

export default Sidebar

const Side = styled.aside`
  background-color: #696969;
  height: 100vh;
  width: 200px;
`