import { FlatList } from "react-native";
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
  margin-bottom: -25;
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
  /* justify-content: center; */
  border-left-color: ${({ theme }) => theme.colors.amarelo};
  border-left-width: 20px;
`;

export const Lista = styled.View`
  /* background-color: ${({ theme }) => theme.colors.amarelo}; */
  width: 90%;
  margin-top: 40px;
`;
// export const Lista = styled(FlatList).attrs({
//   // attrs: adiciona propriedades
//   contentContainerStyle: {
//     padding: 24,
//   },
//   showVerticalScrollIndicator: false,
// })``

export const NomeWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.cinza_claro};
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Nome = styled.Text`
  margin-left: 15px;
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.preto};
`;
