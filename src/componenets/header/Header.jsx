import React from "react";
import styled from "styled-components";
// import Button from "../UI/Button";
import BasketButton from "./BasketButton";

function Header() {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  z-index: 10;
  height: 101px;
  background: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;
  position: fixed;
  top: 0;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
`;
