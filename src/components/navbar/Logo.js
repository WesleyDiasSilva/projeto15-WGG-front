import React from 'react'
import styled from 'styled-components'
import logo from "../../assets/img/WGG.png"

function Logo() {
  return (
    <ImageLogo src={logo}>
      
    </ImageLogo>
  )
}

export default Logo

const ImageLogo = styled.img`
  width: 10%;
`