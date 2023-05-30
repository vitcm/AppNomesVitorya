import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;
  background-color: ${({ theme }) => theme.colors.rosa};
`;

export const TitleWrapper = styled.View`
  align-items: flex-end;
  margin-top: 63px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_bold};
  font-size: ${RFValue(60)}px;
  color: ${({ theme }) => theme.colors.branco};
`;

export const Body = styled.View`
  width: 100%;
  height: ${RFValue(500)}px;
  background-color: ${({ theme }) => theme.colors.cinza};
  align-items: center;
  justify-content: center;
`;

export const TitleBody = styled.Text``;

export const Footer = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;
  background-color: ${({ theme }) => theme.colors.amarelo};
  align-items: center;
  justify-content: center;
  bottom: 0;
`;

export const TitleFooter = styled.Text``;
