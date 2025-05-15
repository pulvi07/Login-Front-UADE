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
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // BUG: comprueba cualquier contraseña q exista
    const user = users.find(u => u.password.toLowerCase() === password.toLowerCase());

    if (user) {
        setIsLoggedIn(true);
    } else {
      Alert.alert('Error', 'Email o contraseña incorrectos. Inténtalo de nuevo');
    }
  };


  return (
    <View style={styles.loginscreen}>
      <View style={{justifyContent: 'center', alignItems: 'center', gap: 20, width: '70%', height: '100%',}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}> Inicia sesión </Text>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail}/>
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Ingresa tu contraseña"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ backgroundColor: email.trim() === '' || password.trim() === '' ? 'gray' : 'blue', padding: 10, borderRadius: 11, marginTop: '5'}} disabled={email.trim() === '' || password.trim() === ''} onPress={handleLogin}>
          <Text style={{ fontSize: 18, fontWeight: '400', color: 'white', paddingHorizontal: '20' }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 20, textDecorationLine: 'underline', }}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  loginscreen: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flex: 1
  },
  input: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: 11,
    marginTop: -15,
    color: '#000000'
  },
  passwordContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 11,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: -15
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    color: '#000000'
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginTop: '-10',
  },
});

export default LoginScreen;

