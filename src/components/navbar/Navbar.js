import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import logoutImage from "../../assets/img/Vector.svg"
import defaultUserImage from "../../assets/img/avatardefault.svg"
import ConfirmLogout from './ConfirmLogout'

function Navbar({ value, setValue }) {
  const [modalLogout, setModalLogout] = React.useState(false)

  function openLogout() {
    setModalLogout(true)
  }


  return (
    <NavContainer>
      <Logo />
      <Search placeholder='Search' value={value} onChange={({ target }) => setValue(target.value)} />
      <UserContainer>
        <Username>Wesley</Username>
        <ImageUser src={defaultUserImage} />
        <Logout onClick={openLogout} src={logoutImage} />
        {modalLogout && <ConfirmLogout setModalLogout={setModalLogout} modalLogout={modalLogout} />}
      </UserContainer>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.header`
  background-color: #696969;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 40px;
`

const Search = styled.input`
  height: 25px;
  border: none;
  border-radius: 5px;
  width: 30%;
  &::placeholder{
    color: #000;
    padding: 10px;
  }
  &:focus{
    border: none;
  }
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  box-sizing: border-box;
  position: relative;
`

const Username = styled.span`
  font-family: Inter;
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
`

const ImageUser = styled.img`
  width: 50px;
`

const Logout = styled.img`
  width: 40px;
  cursor: pointer;
`