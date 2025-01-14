import { Redirect, Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { theme } from "@/theme";


const HAS_FINISHED_ONBOARDING = true;

export default function Layout() {

  if(!HAS_FINISHED_ONBOARDING) return <Redirect href="onboarding" />
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarShowLabel: false, tabBarIcon: ({size, color}) => <Entypo name="leaf" size={size} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile",  tabBarShowLabel: false, tabBarIcon: ({size, color}) => <Feather name="user" size={size} color={color} /> }} />
    </Tabs>
  );
}
