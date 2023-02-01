import { useState } from "react";
import styled from "styled-components";
import Basket from "./componenets/basket/Basket";
import Header from "./componenets/header/Header";
import Meals from "./componenets/meals/Meals";
import { BasketProvider } from "./componenets/store/BasketContext";
import Summary from "./componenets/summary/Summary";

function App() {
  const [isBasketVisible, setBasketVisible] = useState(false);

  const showBasketHandler = () => {
    console.log("ddddddddddddddddddddd");
    setBasketVisible((prevState) => !prevState);
  };
  return (
    <BasketProvider>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
      </Content>
    </BasketProvider>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;

/* 
GET /foods
Headers: { UserID: "your_name"  } 

GET /basket
Headers: { UserID: "your_name"  } 

POST /foods/:foodId/addToBasket
BODY: { amount: number }
Headers: { UserID: "your_name"  } 
DELETE /basketItem/:id/delete
Headers: { UserID: "your_name"  }

PUT /basketItem/:id/update
BODY: { amount: number }
Headers: { UserID: "your_name"  }
*/
