import React from 'react'
import styled from 'styled-components'

function ContainerData({children}) {
  return (
    <ContainerLogin>
      <ContainerDataLogin>
        {children}
      </ContainerDataLogin>
    </ContainerLogin>
  )
}

export default ContainerData

const ContainerLogin = styled.div`
  width: 60%;
  height: auto;
  padding: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: rgb(105, 105, 105, 0.89);
`

const ContainerDataLogin = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 25px;
`
