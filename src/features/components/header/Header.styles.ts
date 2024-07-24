import styled from "styled-components/native";
import { View, TouchableOpacity, Text } from "react-native";

const HeaderContainer = styled(View)`
  width: 100%;
  height: 290px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.15;
  shadow-radius: 8px;
  elevation: 3;
`;

const NotificationContainer = styled(View)`
  margin-top: ${(props) => props.theme.space.at(-2)};
  width: 100%;
  align-items: flex-end;
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

const NotificationButton = styled(TouchableOpacity)`
  width: ${(props) => props.theme.space[4]};
  height: ${(props) => props.theme.space[4]};
  align-items: center;
  justify-content: center;
`;

const BalanceContainer = styled(View)`
  align-items: center;
  justify-content: center;
`;

const BalanceTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin-top: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.monospace};
`;

const Amount = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const TrendingContainer = styled(View)`
  position: absolute;
  bottom: -20%;
`;

const TrendingTitle = styled(Text)`
  margin-left: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export {
  HeaderContainer,
  NotificationContainer,
  NotificationButton,
  BalanceContainer,
  BalanceTitle,
  Amount,
  TrendingContainer,
  TrendingTitle,
};
