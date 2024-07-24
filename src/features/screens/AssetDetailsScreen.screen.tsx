import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeArea } from "../../components/utily/SafeArea.component";
import HeaderBar from "../../components/header-bar/HeaderBar.component";
import CurrencyLabel from "../../components/currency-label/CurrencyLabel.component";

export default function AssetDetailsScreen() {
  return (
    <SafeArea>
      <HeaderBar right />
      <CurrencyLabel currency="Ethereum" code="ETH" />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
