import { TrendingCurrency } from "./types";

export type RootStackParamList = {
  Home: undefined;
  AssetDetails: { currency: TrendingCurrency };
};
