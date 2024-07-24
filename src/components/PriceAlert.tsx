import { TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";

const PriceAlertOpacity = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-top: ${24 * 4.5}px;
  margin-horizontal: ${(props) => props.theme.space[4]};
  padding-vertical: ${(props) => props.theme.space[4]};
  padding-horizontal: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 12px;
`;

const PriceAlertContainer = styled(View)`
  flex: 1;
  margin-left: 12px;
`;

const SetPriceText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const NotifiedText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`;

export default function PriceAlert() {
  return (
    <PriceAlertOpacity>
      <MaterialIcons name="notifications-active" size={24} color="#f973fe" />
      <PriceAlertContainer>
        <SetPriceText>Set Price Alert</SetPriceText>
        <NotifiedText>Get notified when your coins are moving</NotifiedText>
      </PriceAlertContainer>

      <Entypo name="chevron-small-right" size={24} color="#f973fe" />
    </PriceAlertOpacity>
  );
}
