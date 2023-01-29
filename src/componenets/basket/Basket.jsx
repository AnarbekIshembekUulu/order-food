import React from "react";
import Modal from "../UI/Modal";
import TotalAmount from "./TotalAmount";
import styled from "styled-components";
import BasketItem from "./BasketItem";

function Basket() {
  const items = [
    {
      id: Date.now().toString(),
      title: "Sushi",
      price: 22.99,
      amount: 1,
    },
    {
      id: Date.now().toString(),
      title: "Schnitzel",
      price: 16.0,
      amount: 1,
    },
    {
      id: Date.now().toString(),
      title: "Burger",
      price: 12.99,
      amount: 1,
    },
    {
      id: Date.now().toString(),
      title: "Green Bowl",
      price: 19.99,
      amount: 1,
    },
  ];

  return (
    <Modal onClose={() => {}}>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })}
          </FixedHeightContainer>
        ) : null}

        <TotalAmount price={200.5034} onClose={() => {}} onOrder={() => []} />
      </Content>
    </Modal>
  );
}

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;