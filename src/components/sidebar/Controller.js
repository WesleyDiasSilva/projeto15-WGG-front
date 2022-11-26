import React from 'react'
import styled from 'styled-components'
import Label from './Label'

function Controller({label, options, setValue}) {

  const optionsForChoose = options?.map(op => <option key={op}>{op}</option>)

  return (
    <ContainerController>
      <Label>{label}</Label>
      <Options onChange={({target}) => setValue(target.value)}>
        <option disabled>Escolha uma nota</option>
      {optionsForChoose}
      </Options>
    </ContainerController>
  )
}

export default Controller

const ContainerController = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  box-sizing: border-box;
`



const Options = styled.select`
  width: 150px;
  height: 30px;
  font-family: Inter;
`