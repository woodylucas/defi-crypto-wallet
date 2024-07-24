import React from "react";
import { Text, StyleSheet } from "react-native";
import { TrendingCurrency } from "../../../utils/types";

import {
  TrendingItemTouchable,
  DetailsItem,
  Row,
  AssetNameText,
  AssetSymbolText,
  PriceChangeContainer,
  AssetPriceText,
} from "./TrendingItem.styles";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../utils/navigationTypes";

type TrendingItemProps = {
  item: TrendingCurrency;
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

function TrendingItem({ item, navigation }: TrendingItemProps) {
  return (
    <TrendingItemTouchable
      onPress={() =>
        navigation.navigate("AssetDetails", {
          currency: item,
        })
      }
    >
      <Row>
        <DetailsItem>
          <AssetNameText>{item.name}</AssetNameText>
          <AssetSymbolText>{item.symbol}</AssetSymbolText>
        </DetailsItem>
      </Row>
      <PriceChangeContainer>
        <AssetPriceText>{item.price}</AssetPriceText>
        <Text
          style={[
            styles.change,
            { color: parseFloat(item.change) >= 0 ? "#27AE60" : "#EB5757" },
          ]}
        >
          {parseFloat(item.change) >= 0 ? "+" : ""}
          {item.change}%
        </Text>
      </PriceChangeContainer>
    </TrendingItemTouchable>
  );
}

const styles = StyleSheet.create({
  change: {
    fontWeight: 700,
  },
});

export default TrendingItem;
