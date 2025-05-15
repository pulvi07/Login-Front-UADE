import React, { useState } from 'react';
import users from '../../../data/users.json';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // BUG: comprueba cualquier contraseña q exista
    const user = users.find(u => u.password === password);

    if (user) {
      Alert.alert('Login Correcto!', `Bienvenido, ${user.email}`);
    } else {
      Alert.alert('Error', 'Credenciales inválidas');
    }
  };


  return (
    <View style={styles.loginscreen}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}> Login </Text>
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail}/>
      <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword}/>
      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 11 }} onPress={handleLogin} >
        <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}> Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 20, textDecorationLine: 'underline', }}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  loginscreen: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    width: '60%',
    height: '100%',
    marginTop: -40,
  },
  input: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: 11,
  },
});

export default LoginScreen;

