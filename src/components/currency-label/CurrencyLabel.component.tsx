import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

type CurrencyLabelProps = {
  icon?: string;
  currency: string;
  code: string;
};

const LabelContainer = styled(View)`
  flex-direction: row;
`;

const LabelImage = styled(Image).attrs({
  resizeMode: "cover",
})`
  width: 25;
  height: 25;
  margin-top: ${(props) => props.theme.space[1]};
`;

const Container = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
`;

const CurrencyText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`;

const CurrencyCode = styled(Text)`
  colors: ${(props) => props.theme.colors.text.disabled};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export default function CurrencyLabel({
  icon,
  currency,
  code,
}: CurrencyLabelProps) {
  return (
    <LabelContainer>
      {/* <LabelImage source={icon} /> */}
      <CurrencyText>{currency}</CurrencyText>
      <CurrencyCode>{code}</CurrencyCode>
    </LabelContainer>
  );
}
