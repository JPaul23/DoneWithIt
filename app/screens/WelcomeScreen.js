import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../config/colors';
import { log } from '../config/logging';
import { DetailsScreen } from './SettingStackScreen';
import ViewImageScreen from './ViewImageScreen';

const HomeStack = createNativeStackNavigator();
export default function WelcomeScreen({ navigation }) {
    const handleNavigate = () => {
        navigation.navigate('Image', { name: 'Chair' })
        log.info("Navigated on Image with Chair");
    }
    const handleNavigateDetails = () => {
        navigation.navigate('Details')
        log.info("Navigated on Details screen");
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
            <View style={styles.registerButton}>
                <Button title='View Details' onPress={handleNavigateDetails}
                />
            </View>
        </ImageBackground>
    )
}

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="Welcome" component={WelcomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
            <HomeStack.Screen name="Image" component={ViewImageScreen} />
        </HomeStack.Navigator>
    );
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
});
