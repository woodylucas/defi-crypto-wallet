import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

const ChartContainer = styled(ScrollView)`
  flex: 1;
  padding-bottom: ${(props) => props.theme.space[3]};
`;

const ChartCard = styled(View)`
  margin-top: ${(props) => props.theme.space[2]};
  margin-horizontal: ${(props) => props.theme.space[2]};
  align-items: center;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export default function AssetVisulization() {
  return (
    <ChartContainer>
      <ChartCard></ChartCard>
    </ChartContainer>
  );
}
