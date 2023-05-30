import React from "react";

import {
  Container,
  TitleWrapper,
  Title,
  Header,
  Body,
  TitleBody,
  TitleFooter,
  Footer,
} from "./style";
import { Button } from "../../components/Button";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>teste</Title>
        </TitleWrapper>
      </Header>
      <Body>
        <TitleBody> TESTE </TitleBody>
      </Body>
      <Footer>
        <Button />
      </Footer>
    </Container>
  );
}
