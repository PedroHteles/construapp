import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import	 Profile from "./src/pages/Profile/index"
import PreviousRequests from "./src/pages/PreviousRequests/index"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <Profile></Profile> */}
      <PreviousRequests></PreviousRequests>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
