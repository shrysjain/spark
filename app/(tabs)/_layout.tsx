import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

// Pages
import HomeScreen from "./index";
import SettingsScreen from "./settings";
import EmotionsScreen from "./emotions";
import FoodScreen from "./food";
import FruitScreen from "./fruit";
import VegetableScreen from "./vegetables";
import DessertScreen from "./dessert";

type TabParamList = {
  Home: undefined;
  Settings: undefined;
  Emotions: undefined;
  Food: undefined;
  Fruit: undefined;
  Vegetable: undefined;
  Dessert: undefined;
};

type FoodParamList = {
  Fruit: undefined;
  Vegetable: undefined;
  Dessert: undefined;
};

const TabParamListValues = ["Home", "Emotions", "Food"];
const FoodParamListValues = ["Fruit", "Vegetable", "Dessert"];

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Emotions"
        component={EmotionsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Fruit"
        component={FruitScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Vegetable"
        component={VegetableScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Dessert"
        component={DessertScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
}

export { TabParamList, TabParamListValues, FoodParamList, FoodParamListValues };
