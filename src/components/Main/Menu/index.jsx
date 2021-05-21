import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { ContainerMenuStyled } from "./style";

export default function Menu() {
  return (
    <ContainerMenuStyled>
      <Typography>Menu</Typography>
      <NavLink to="/" className="text-link">
        Editor de Código
      </NavLink>
      <NavLink to="/comunidade" className="text-link">
        Comunidade
      </NavLink>
    </ContainerMenuStyled>
  );
}
