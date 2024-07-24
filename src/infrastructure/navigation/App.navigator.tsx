import { Text } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { SafeArea } from "../../components/utily/SafeArea.component";
import HomeNavigator from "./Home.navigator";

import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

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

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name={RouteNames.Home} component={HomeNavigator} />
        <Tab.Screen name={RouteNames.Portfolio} component={PortfolioScreen} />
        <Tab.Screen name={RouteNames.Prices} component={PricesScreen} />
        <Tab.Screen name={RouteNames.Settings} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
