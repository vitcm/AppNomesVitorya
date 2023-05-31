import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  /* align-items: center;
  justify-content: center; */
`;

export const Insercao = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cinza_claro};
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  margin-top: 10px;
`;
