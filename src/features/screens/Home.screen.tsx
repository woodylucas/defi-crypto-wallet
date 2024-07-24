import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import PriceAlert from "../../components/PriceAlert";
import TransactionHistory from "../components/transaction-history/TransactionHistory";
import { SafeArea } from "../../components/utily/SafeArea.component";
import Header from "../components/header/Header.component";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/navigationTypes";

import { TrendingCurrency, PortfolioData } from "../../utils/types";
import Notice from "../../components/notice/Notice.component";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const getDummyData = (): Promise<PortfolioData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        balance: (Math.random() * 100).toFixed(2),
        change: (Math.random() * 10 - 5).toFixed(2),
      });
    }, 1000);
  });
};

const getDummyTrendingCurrencies = (): Promise<TrendingCurrency[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Bitcoin",
          symbol: "BTC",
          price: "34,567.89",
          change: "2.5",
          image: "https://example.com/btc.png",
        },
        {
          id: "2",
          name: "Ethereum",
          symbol: "ETH",
          price: "2,345.67",
          change: "-1.2",
          image: "https://example.com/eth.png",
        },
        {
          id: "3",
          name: "Cardano",
          symbol: "ADA",
          price: "1.23",
          change: "5.7",
          image: "https://example.com/ada.png",
        },
        {
          id: "4",
          name: "Dogecoin",
          symbol: "DOGE",
          price: "0.34",
          change: "-3.1",
          image: "https://example.com/doge.png",
        },
      ]);
    }, 1000);
  });
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [balance, setBalance] = useState<string | null>(null);
  const [change, setChange] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trendingCurrencies, setTrendingCurrencies] = useState<
    TrendingCurrency[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [portfolioResult, trendingResult] = await Promise.all([
          getDummyData(),
          getDummyTrendingCurrencies(),
        ]);
        setBalance(portfolioResult.balance);
        setChange(portfolioResult.change);
        setTrendingCurrencies(trendingResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeArea>
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: 130, backgroundColor: "#fff" }}>
          <Header
            balance={balance}
            change={change}
            isLoading={isLoading}
            trendingCurrencies={trendingCurrencies}
            navigation={navigation}
          />
          <PriceAlert />
          <Notice />
          <TransactionHistory />
        </View>
      </ScrollView>
    </SafeArea>
  );
}
