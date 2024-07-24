import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import styled from "styled-components/native";

type HeaderBarProps = {
  right: boolean;
};

const HeaderBarContainer = styled(View)`
  flex-direction: row;
  align-items: start;
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

const BackButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled(Text)`
  margin-left: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.button};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text.secondary};
`;

const IconContainer = styled(View)`
  flex: 1;
  align-items: flex-end;
`;

const IconButton = styled(TouchableOpacity)``;

export default function HeaderBar({ right }: HeaderBarProps) {
  const navigation = useNavigation();
  return (
    <HeaderBarContainer>
      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#f973fe" />
        <ButtonText>Back</ButtonText>
      </BackButton>
      <IconContainer>
        <IconButton>
          <AntDesign name="staro" size={24} color="#f973fe" />
        </IconButton>
      </IconContainer>
    </HeaderBarContainer>
  );
}
