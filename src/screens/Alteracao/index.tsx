import React from "react";

import {
  Container,
  TitleWrapper,
  Title,
  Header,
  Body,
  Insercao,
  TitleInput,
  TitleInputDois,
  Footer,
} from "./style";
import { Input } from "../../components/Input";

export function Alteracao() {
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
          <TitleInputDois>*Apenas em caso de alteração</TitleInputDois>
        </Insercao>
      </Body>
      <Footer></Footer>
    </Container>
  );
}
