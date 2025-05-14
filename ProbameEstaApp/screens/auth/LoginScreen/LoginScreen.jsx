import React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.loginscreen}>
            <Text style={{fontSize: 20, fontWeight: 'bold', mmarginBottom: 20}}>Login</Text>
            <TextInput placeholder="Email" style={styles.input}/>
            <TextInput placeholder="Password" secureTextEntry style={styles.input}/>
            <Pressable style={{backgroundColor: 'blue', padding: 10, borderRadius: 11}}>
                <Text style={{fontSize: 18, fontWeight: 400, color: 'white'}}>Login</Text>
            </Pressable>

            <Text style={{fontSize: 14, fontWeight: 400, marginTop: 20, textDecorationLine: 'underline'}}>Registrarse</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
	loginscreen: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: '60%',
        height: '100%',
        marginTop: -40
	},
    input: {
        padding: 10,
        width: '100%',
        borderWidth: 1,
        borderRadius: 11
    }
});
export default LoginScreen