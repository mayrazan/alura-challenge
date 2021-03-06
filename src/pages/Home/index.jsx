import Header from "../../components/Header";
import { ContainerStyled } from "./style";
import Main from "../../components/Main";

const Home = () => {
  return (
    <ContainerStyled>
      <Header />
      <Main />
    </ContainerStyled>
  );
};

export default Home;
