import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

import colors from '../config/colors';

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What You Don't Need!</Text>
            </View>
            <TouchableNativeFeedback onPress={() => navigation.navigate('Image', { name: 'Chair' })}>

                <View style={styles.loginButton}>
                    <Text>

                        View Image
                    </Text>
                </View>
            </TouchableNativeFeedback>
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