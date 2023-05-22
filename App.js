import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import	 Profile from "./src/pages/Profile/index"
import PreviousRequests from "./src/pages/PreviousRequests/index"
import LoginScreen from "./src/pages/LoginScreen/index"
import RegisterScreen  from "./src/pages/RegisterScreen/index"


export default function App() {
  return (

      <RegisterScreen></RegisterScreen>
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
