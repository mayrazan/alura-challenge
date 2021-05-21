import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const ContainerMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .text-link {
    text-decoration: none;
    color: ${colors.text};
  }
`;
