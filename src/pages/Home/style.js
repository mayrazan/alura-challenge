import styled from "styled-components";
import { device } from "../../styles/medias";

export const ContainerStyled = styled.div`
  padding: 2rem 2rem 0;
  height: 100%;
  width: 100%;

  @media ${device.maxXs} {
    padding: 1rem 1rem 0;
  }
`;
