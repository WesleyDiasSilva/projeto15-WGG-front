import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { API } from "../../API";
import { ContextUser } from "../../contexts/ContextUser";

function ConfirmLogout({ setModalLogout, modalLogout }) {
  const navigate = useNavigate();
  const user = useContext(ContextUser);
  const token = user.user.token;

  function confirmLogout() {
    const request = axios.delete(`${API}/session`, {
      headers: { authorization: token },
    });
    request.then(() => {
      localStorage.removeItem("token");
      navigate("/sign-in");
    });
    request.catch((err) => console.log(err));
  }

  return (
    <Confirm>
      <Text>Do you want to leave?</Text>
      <ContainerButtons>
        <Button onClick={confirmLogout} fontColor="#fff" color="red">
          Yes
        </Button>
        <Button
          onClick={() => setModalLogout(false)}
          color="gray"
          fontColor="#fff"
        >
          No
        </Button>
      </ContainerButtons>
    </Confirm>
  );
}

export default ConfirmLogout;

const Confirm = styled.div`
  position: absolute;
  background-color: #fff;
  width: 180px;
  height: 100px;
  bottom: -105px;
  right: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  border-radius: 5px;
`;

const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Text = styled.span`
  font-family: Inter;
  font-weight: bold;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontColor};
  cursor: pointer;
`;
