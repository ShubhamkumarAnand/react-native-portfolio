import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, Alert } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Pressable onPress={() => Alert.alert("Welcome to the Portfolio!")}>
        <Text className="font-bold text-xl button p-3 bg-teal-300 rounded-xl">
          Portfolio
        </Text>
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}