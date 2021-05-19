import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { ContainerStyled } from "./style";

const Home = () => {
  return (
    <ContainerStyled>
      <Header />
      <Menu />
    </ContainerStyled>
  );
};

export default Home;
