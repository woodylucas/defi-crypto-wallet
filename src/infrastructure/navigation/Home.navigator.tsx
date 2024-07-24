import HomeScreen from "../../features/screens/Home.screen";
import AssetDetailsScreen from "../../features/screens/AssetDetailsScreen.screen";

import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../../utils/navigationTypes";

const HomeStack = createStackNavigator<RootStackParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="AssetDetails" component={AssetDetailsScreen} />
    </HomeStack.Navigator>
  );
}
