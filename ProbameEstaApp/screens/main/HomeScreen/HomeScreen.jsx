import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.homescreen}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Iniciaste sesion!</Text>
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
});
export default HomeScreen