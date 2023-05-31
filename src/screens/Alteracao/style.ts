import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;
  /* height: ${RFValue(120)}px; */
  background-color: ${({ theme }) => theme.colors.rosa};
`;

export const TitleWrapper = styled.View`
  align-items: flex-end;
  margin-right: 20px;
  flex: 1;
  justify-content: flex-end;
  margin-bottom: -25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_bold};
  font-size: ${RFValue(60)}px;
  color: ${({ theme }) => theme.colors.branco};
`;

export const Body = styled.View`
  width: 100%;
  height: 80%;
  /* height: ${RFValue(500)}px; */
  background-color: ${({ theme }) => theme.colors.cinza};
  align-items: center;
  border-left-color: ${({ theme }) => theme.colors.amarelo};
  border-left-width: 20px;
`;

export const Insercao = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;

export const TitleInput = styled.Text`
  /* margin-left: 15px; */
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.preto};
`;

export const TitleInputDois = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.preto};
`;

export const Footer = styled.View`
  bottom: 100px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;
