import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { logger } from "react-native-logs";

import colors from '../config/colors';

const ViewImageScreen = ({ navigation }) => {
    const log = logger.createLogger({
        transportOptions: {
            colors: {
                info: "blueBright",
                warn: "yellowBright",
                error: "redBright",
                debug: "white",
            },
        },
    });

    log.info("The Image screen");
    const handleNavigate = () => {
        navigation.navigate('Home')
        log.info("Navigated Home");
    }

    const handleBack = () => {
        navigation.goBack();
        log.info("Navigated using Go Back");
    }


    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <Button title='Go Back' onPress={handleBack} />
            </View>

            <View style={styles.deleteIcon}>
                <Button title='Go Home' onPress={handleNavigate} />
            </View>


            <Image
                style={styles.image}
                source={require('../assets/chair.jpg')}
                resizeMode='contain'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        top: 40,
    },
    closeIcon: {
        backgroundColor: colors.primary,
        position: 'absolute',
        top: -5,
        left: 30
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 2,
        right: 30
    },

    image: {
        width: '100%',
        height: '100%',
    }
});

export default ViewImageScreen;