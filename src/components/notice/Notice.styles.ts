import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const NoticeContainer = styled(View)`
  margin-top: ${(props) => props.theme.space[4]};
  margin-left: ${(props) => props.theme.space[4]};
  margin-right: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[3]};
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  shadow-color: ${(props) => props.theme.colors.ui.primary};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text.inverse};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Content = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  margin-top: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.secondary};
  line-height: ${(props) => props.theme.lineHeights.copy};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`;

const NoticeButton = styled(TouchableOpacity)`
  margin-top: 8px;
`;

const NoticeText = styled(Text)`
  text-decoration-line: underline;
  color: ${(props) => props.theme.colors.text.inverse};
  font-size: ${(props) => props.theme.fontSizes.button};
  font-family: ${(props) => props.theme.fonts.body};
`;

export { NoticeContainer, Title, Content, NoticeButton, NoticeText };
