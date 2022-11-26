import React from "react";
import styled from "styled-components";

function Input({ label, type = "text", onChange, name, value }) {
  return (
    <InputElement
      placeholder={label}
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
}`