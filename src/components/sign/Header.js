import React from 'react'
import styled from 'styled-components'
import TitleOfPage from './TitleOfPage'


export default function Header({children}){
    return(
        <TopBox>
            <TitleOfPage />
            <ion-icon name="person-circle-outline"></ion-icon>
        </TopBox>
    )
}
const TopBox = styled.div`
    position: fixed;
    height: 130px;
    width: 100%;
    background-color: #696969;
    display: flex;
    justify-content: space-around;
    align-items: center;
    ion-icon{
       width: 200px;
       height: 200px;
    }
`