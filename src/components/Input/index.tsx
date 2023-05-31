import React, { useState } from "react";
import { TextInput } from "react-native";

import { Container, Insercao } from "./style";

export function Input({ onChange }: { onChange: (text: string) => void }) {
  const [name, setName] = useState("");

  const handleInputChange = (text: string) => {
    setName(text);
    onChange(text);
  };
  return (
    <Container>
      <Insercao>
        <TextInput
          placeholder=""
          value={name}
          onChangeText={handleInputChange}
          style={{ marginLeft: 15 }}
        />
      </Insercao>
    </Container>
  );
}
