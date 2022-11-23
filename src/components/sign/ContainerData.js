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
  height: 70%;
  background-color: #555555;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
