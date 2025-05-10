import { Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-900">
      <Text className="text-white text-2xl animate-blink">Blink NativeWind ⚡ </Text>
    </View>
  );
}
