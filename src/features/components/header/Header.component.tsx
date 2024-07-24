import { Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TrendingItem from "../trending-item/TrendingItem.component";
import { TrendingCurrency } from "../../../utils/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../utils/navigationTypes";

import {
  HeaderContainer,
  NotificationContainer,
  NotificationButton,
  BalanceContainer,
  BalanceTitle,
  Amount,
  TrendingContainer,
  TrendingTitle,
} from "./Header.styles";

type HeaderProps = {
  balance: string | null;
  change: string | null;
  isLoading: boolean;
  trendingCurrencies: TrendingCurrency[];
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

function Header({
  balance,
  change,
  isLoading,
  trendingCurrencies,
  navigation,
}: HeaderProps) {
  return (
    <HeaderContainer>
      <NotificationContainer>
        <NotificationButton
          onPress={() => console.log("Notification on press")}
        >
          <Ionicons name="notifications-outline" size={24} color="#7d7d7d" />
        </NotificationButton>
      </NotificationContainer>
      <BalanceContainer>
        <BalanceTitle>Your Portfolio Balance</BalanceTitle>
        <Amount>{isLoading ? "Loading..." : `$${balance}`}</Amount>
        {!isLoading && (
          <Text
            style={[
              styles.changeText,
              { color: parseFloat(change) >= 0 ? "#27AE60" : "#EB5757" },
            ]}
          >
            {parseFloat(change) >= 0 ? "+" : ""}
            {change}% (24h)
          </Text>
        )}
      </BalanceContainer>
      <TrendingContainer>
        <TrendingTitle>Trending</TrendingTitle>
        <FlatList
          data={trendingCurrencies}
          renderItem={({ item }) => (
            <TrendingItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </TrendingContainer>
    </HeaderContainer>
  );
}

const styles = StyleSheet.create({
  changeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
