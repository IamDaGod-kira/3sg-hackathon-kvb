import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-xl font-bold text-amber-200 bg-slate-900">Welcome to the Basic Page!</Text>
      <StatusBar style="auto" />
    </View>
  );
};
