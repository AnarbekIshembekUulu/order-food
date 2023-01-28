import React from "react";
import styled from "styled-components";
import MealItem from "./meal-item/MealItem";

const dummiMeals = [
  {
    id: Date.now().toString(),
    title: "Sushi",
    description: "Finest fish and veggies ",
    price: 22.99,
  },
  {
    id: Date.now().toString(),
    title: "Schnitzel",
    description: "A german specialty! ",
    price: 16.0,
  },
  {
    id: Date.now().toString(),
    title: "Burger",
    description: "American, raw, meaty ",
    price: 12.99,
  },
  {
    id: Date.now().toString(),
    title: "Green Bowl",
    description: "Healthy...and green... ",
    price: 19.99,
  },
];

function Meals() {
  return (
    // <Card>
    <Card>
      {dummiMeals.map((meal) => {
        return (
          <MealItem
            title={meal.title}
            id={meal.id}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </Card>
    /* </Card> */
  );
}

export default Meals;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 64.9375rem;
  margin: 40px auto;
  padding: 40px 40px 36px 40px;
`;
