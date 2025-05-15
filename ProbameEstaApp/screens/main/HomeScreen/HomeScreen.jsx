import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ setIsLoggedIn }) => {

    const handleLogout = () => {
        setIsLoggedIn(false)
    };

    return (
        <View style={styles.homescreen}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Iniciaste sesion!</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={20} color="white" />
                <Text style={styles.logoutText}>Cerrar cesión</Text>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
	homescreen: {
		flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
	},
    logoutButton: {
        marginTop: 30,
        flexDirection: 'row',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        gap: 10,
    },
    logoutText: {
        color: 'white',
        fontSize: 16,
    },
});
export default HomeScreen