import React from 'react'
import styled from 'styled-components'
import Label from './Label'

function Checkbox({ label, setOnlyAvailable }) {
  return (
    <ContainerCheckbox>
      <Label>
        {label}
      </Label>
      <Check
        onChange={({ target }) =>
          setOnlyAvailable(target.checked)}
          type="checkbox"
      />
    </ContainerCheckbox>
  )
}

export default Checkbox

const Check = styled.input`

`

const ContainerCheckbox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`