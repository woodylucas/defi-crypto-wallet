import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { MaterialIcons, Entypo } from "@expo/vector-icons";
import {
  TransactionItemContainer,
  TransactionItemTitle,
  TransactionItemOpacity,
  TransactionInfo,
  TransactionType,
  TransactionDate,
  TransactionAmount,
  TextAmount,
} from "./TransactionHistory.styles";

type Transaction = {
  id: string;
  type: "send" | "receive";
  amount: number;
  currency: string;
  date: string;
  address: string;
};

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "send",
    amount: 0.5,
    currency: "ETH",
    date: "2024-07-20",
    address: "0x1234...5678",
  },
  {
    id: "2",
    type: "receive",
    amount: 100,
    currency: "USDT",
    date: "2024-07-19",
    address: "0xabcd...efgh",
  },
  {
    id: "3",
    type: "send",
    amount: 1.2,
    currency: "BTC",
    date: "2024-07-18",
    address: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
  },
];

function TransactionItem({ item }: { item: Transaction }) {
  return (
    <TransactionItemOpacity>
      <MaterialIcons name="compare-arrows" size={30} color="#f973fe" />
      <TransactionInfo>
        <TransactionType>
          {item.type === "send" ? "Sent" : "Received"}
        </TransactionType>
        <TransactionDate>{item.date}</TransactionDate>
      </TransactionInfo>
      <TransactionAmount>
        <TextAmount
          style={[
            styles.amountText,
            { color: item.type === "send" ? "#EB5757" : "#27AE60" },
          ]}
        >
          {item.type === "send" ? "-" : "+"}
          {item.amount} {item.currency}
        </TextAmount>
      </TransactionAmount>
      <View
        style={{ flexDirection: "row", height: "100%", alignItems: "center" }}
      >
        <Entypo name="chevron-small-right" size={24} color="#0E0E0E" />
      </View>
    </TransactionItemOpacity>
  );
}

export default function TransactionHistory() {
  return (
    <TransactionItemContainer>
      <TransactionItemTitle>Transaction History</TransactionItemTitle>
      <FlatList
        data={mockTransactions}
        renderItem={({ item }) => <TransactionItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{ width: "100%", height: 1, backgroundColor: "#fff4fe" }}
            ></View>
          );
        }}
      />
    </TransactionItemContainer>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 12,
  },

  amountText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
