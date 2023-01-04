import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

import colors from '../config/colors';
import { log } from '../config/logging';

export default function WelcomeScreen({ navigation }) {
    const handleNavigate = () => {
        navigation.navigate('Image', { name: 'Chair' })
        log.info("Navigated on Image with Chair");
    }

    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What You Don't Need!</Text>
            </View>

            <View style={styles.loginButton}>
                <Button title='View Image' onPress={handleNavigate}
                />
            </View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    }
})