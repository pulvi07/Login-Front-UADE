import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 80}}>ProbameEstaApp</Text>
      <View style={styles.loginContainer}>
        <LoginScreen/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
