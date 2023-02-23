import React from "react";
import Modal from "../UI/Modal";
import TotalAmount from "./TotalAmount";
import styled from "styled-components";
import BasketItem from "./BasketItem";
// import { BasketContext } from "../store/BasketContext";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBasketItem,
  updateBasketItem,
} from "../store/basket/basketReducer";

function Basket({ onClose }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.basket.items);
  console.log(items,"gggggg");

  const getTotalPrice = () => {
    return items.reduce((sum, { price, amount }) => sum + amount * price, 0);
  };

  const decrementAmount = (id, amount) => {
    if (amount > 0) {
      dispatch(updateBasketItem({ amount: amount - 1, id }));
      console.log("decrement");
    } else {
      dispatch(deleteBasketItem(id));
    }
  };

  const inrementAmount = (id, amount) => {
    dispatch(updateBasketItem({ amount: amount + 1, id }));
  };

  // const closesnacbarHandler = () => {};

  return (
    <>
      <Modal onClose={() => {}}>
        <Content>
          {items.length ? (
            <FixedHeightContainer>
              {items.map((item) => {
                return (
                  <BasketItem
                    key={item._id}
                    decrementAmount={() =>
                      decrementAmount(item._id, item.amount)
                    }
                    incrementAmount={
                      () => 
                      inrementAmount(item._id, item.amount)
                    }
                    deleteBasketItem={() => deleteBasketItem(item._id)}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  />
                );
              })}
            </FixedHeightContainer>
          ) : null}

          <TotalAmount
            price={getTotalPrice()}
            onClose={onClose}
            onOrder={() => []}
            onCloseModal={onClose}
          />
        </Content>
      </Modal>
    </>
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
