import { TouchableOpacity, View, Text } from "react-native";

import styled from "styled-components/native";

const TransactionItemContainer = styled(View)`
  margin-top: ${(props) => props.theme.space[3]};
  margin-horizontal: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  shadow-color: ${(props) => props.theme.colors.ui.primary};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

const TransactionItemTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: ${(props) => props.theme.space[3]};
  font-text: ${(props) => props.theme.fonts.body};
`;

const TransactionItemOpacity = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${(props) => props.theme.space[3]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.brand.muted};
`;

const TransactionInfo = styled(View)`
  flex: 1;
  margin-left: ${(props) => props.theme.space[2]};
`;

const TransactionType = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-familty: ${(props) => props.theme.fonts.monospace};
`;

const TransactionDate = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-top: ${(props) => props.theme.sizes[1]};
  color: ${(props) => props.theme.colors.text.disabled};
`;

const TransactionAmount = styled(View)`
  align-items: flex-end;
`;

const TextAmount = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weights: ${(props) => props.theme.fontWeights.body};
  font-family: ${(props) => props.theme.fonts.body};
`;

export {
  TransactionItemContainer,
  TransactionItemTitle,
  TransactionItemOpacity,
  TransactionInfo,
  TransactionType,
  TransactionDate,
  TransactionAmount,
  TextAmount,
};
