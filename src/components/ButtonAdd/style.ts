import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 50%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.azul_claro};
  border-color: ${({ theme }) => theme.colors.azul};
  border-width: 5px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.preto};
  font-size: ${RFValue(20)}px;
`;
