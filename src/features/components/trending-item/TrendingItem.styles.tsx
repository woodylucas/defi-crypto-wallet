import styled from "styled-components/native";
import { TouchableOpacity, Text, View } from "react-native";

const TrendingItemTouchable = styled(TouchableOpacity)`
  width: 160px;
  padding-vertical: ${(props) => props.theme.space[3]};
  padding-horizontal: ${(props) => props.theme.space[3]};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[2]};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  shadow-color: ${(props) => props.theme.colors.ui.primary};
  shadow-offset: 0px 2px;
`;

const DetailsItem = styled(TouchableOpacity)`
  margin-left: 8px;
`;

const AssetNameText = styled(Text)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

const AssetSymbolText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.disabled};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const PriceChangeContainer = styled(View)`
  margin-top: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
`;

const AssetPriceText = styled(Text)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.monospace};
`;

const Row = styled(View)`
  flex-direction: row;
`;

export {
  TrendingItemTouchable,
  DetailsItem,
  AssetNameText,
  AssetSymbolText,
  PriceChangeContainer,
  AssetPriceText,
  Row,
};
