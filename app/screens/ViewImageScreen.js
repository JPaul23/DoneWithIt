import React from 'react';
import { View, Text, Image, StyleSheet, Button, ImageBackground } from 'react-native';

import colors from '../config/colors';
import { log } from '../config/logging';

export const ViewImageScreen = ({ navigation }) => {

    log.info("The Image screen");
    const handleNavigate = () => {
        navigation.navigate('Welcome')
        log.info("Navigated to Welcome Screen");
    }

    const handleBack = () => {
        navigation.goBack();
        log.info("Navigated using Go Back");
    }


    return (
        <View style={styles.container}>

            <ImageBackground resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} >
                <View style={styles.closeIcon}>
                    <Button title='Go Back' onPress={handleBack} />
                </View>

                <View style={styles.deleteIcon}>
                    <Button title='Go Home' onPress={handleNavigate} />
                </View>


            </ImageBackground>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        top: 1,
    },
    closeIcon: {
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 2,
        left: 30
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 2,
        right: 30
    },
    image: {
        flex: 1,
        justifyContent: "center",
    }
});

export default ViewImageScreen;