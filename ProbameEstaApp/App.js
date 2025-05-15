import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { MainStack, AuthStack } from './navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  return (
    // <View style={styles.container}>
    //   <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 80}}>ProbameEstaApp</Text>
    //   <View style={styles.loginContainer}>
    //     <LoginScreen/>
    //   </View>
    // </View>
    <NavigationContainer>
      {isLoggedIn ? <MainStack setIsLoggedIn={setIsLoggedIn} /> : <AuthStack setIsLoggedIn={setIsLoggedIn} />}
    </NavigationContainer>
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
