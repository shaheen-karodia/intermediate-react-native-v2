import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  return (
    <View style={styles.container}>
      <PlantlyButton onPress={toggleHasOnboarded} title="Back to onboarding" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
