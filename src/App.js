import styled from "styled-components";
import Basket from "./componenets/basket/Basket";
import Header from "./componenets/header/Header";
import Meals from "./componenets/meals/Meals";
import Summary from "./componenets/summary/Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Summary />
        <Meals />
        <Basket />
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
  
`;
