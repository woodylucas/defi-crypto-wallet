import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { theme } from "./src/infrastructure/theme";
import { RouteProp } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeArea } from "./src/components/utily/SafeArea.component";
import Navigation from "./src/infrastructure/navigation";

enum RouteNames {
  Home = "Home",
  Portfolio = "Portfolio",
  Prices = "Prices",
  Settings = "Settings",
}

type IoniconsNames = "home" | "pie-chart" | "bar-chart" | "settings";

type TabIconType = {
  [key in RouteNames]: IoniconsNames;
};

const TAB_ICON: TabIconType = {
  [RouteNames.Home]: "home",
  [RouteNames.Portfolio]: "pie-chart",
  [RouteNames.Prices]: "bar-chart",
  [RouteNames.Settings]: "settings",
};

type RootStackParamList = {
  Home: undefined;
  Portfolio: undefined;
  Prices: undefined;
  Settings: undefined;
};

type ScreenOptionsProps = {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

const createScreenOptions = ({
  route,
}: ScreenOptionsProps): BottomTabNavigationOptions => {
  const iconName = TAB_ICON[route.name as RouteNames];

  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#f973fe",
    tabBarInactiveTintColor: "#7d7d7d",
    headerShown: false,
  };
};

const Tab = createBottomTabNavigator<RootStackParamList>();

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

function PricesScreen() {
  return (
    <SafeArea>
      <Text>Prices!</Text>
    </SafeArea>
  );
}

function PortfolioScreen() {
  return (
    <SafeArea>
      <Text>Portfolio!</Text>
    </SafeArea>
  );
}

export default function App() {
  const [interLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!interLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
