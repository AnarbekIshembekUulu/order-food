import React from "react";
import styled from "styled-components";

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border-style: none;
  background: #8a2b06;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    background: #7e2a0a;
  }
`;
