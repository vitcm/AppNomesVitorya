import React from "react";

import {
  Container,
  TitleWrapper,
  Title,
  Header,
  Body,
  Lista,
  NomeWrapper,
  Nome,
} from "./style";
import { ButtonAdd } from "../../components/ButtonAdd";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>teste</Title>
        </TitleWrapper>
      </Header>
      <Body>
        <Lista>
          <NomeWrapper>
            <Nome>Nome</Nome>
          </NomeWrapper>
          <NomeWrapper>
            <Nome>Nome</Nome>
          </NomeWrapper>
          <NomeWrapper>
            <Nome>Nome</Nome>
          </NomeWrapper>
          <NomeWrapper>
            <Nome>Nome</Nome>
          </NomeWrapper>
        </Lista>
      </Body>
    </Container>
  );
}
