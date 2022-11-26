import React from "react";
import styled from "styled-components";

function Input({ label, type = "text", onChange, name, value }) {
  return (
    <InputElement
      placeholder={label}
      type={type}
      name={name}
      onChange={({ target }) => onChange(target.value)}
      value={value}
    />
  );
}

export default Input;

const InputElement = styled.input`
  width: 60%;
  height: 50px;
  border: 0;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 4px 20px 0;
  font-size: 18px;

  :focus{
  outline: none;
}
  /* width: 60%;
  border: none;
  margin-top: 10px;
  font-size: 17px;
  font-weight: bold;
  padding: 10px;
  box-sizing: border-box;
  color: #000;
  &::placeholder {
    font-family: Inter;
    color: #000;
  }
  &:focus {
    border: none;
  }
`;
