import React from "react";

import {
  Container,
  TitleWrapper,
  Title,
  Header,
  Body,
  Insercao,
  TitleInput,
  Footer,
} from "./style";

import { ButtonAdd } from "../../components/ButtonAdd";
import { Input } from "../../components/Input";

export function Cadastro() {
  const handleNameChange = (name: string) => {
    console.log("Nome inserido:", name);
  };
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>teste</Title>
        </TitleWrapper>
      </Header>
      <Body>
        <Insercao>
          <TitleInput>Digite o nome:</TitleInput>
          <Input onChange={handleNameChange} />
        </Insercao>
      </Body>
      <Footer>
        <ButtonAdd />
      </Footer>
    </Container>
  );
}
