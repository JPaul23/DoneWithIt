import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { AppStateContext } from '../components/AppContext';
import { log } from '../config/logging';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userInfo = useContext(AppStateContext);

    const handleShowContext = () => {
        log.info("Context function Running");
        log.info(`Context sign in  ===> ${userInfo}`);
        log.info(`Context Token  ===> ${userInfo.token}`);
    }

    return (

        <View style={styles.container}>
            <Text style={styles.formLabel}> Login Form </Text>
            <View>
                <TextInput
                    placeholder="Enter Email" style={styles.inputStyle}
                    onChangeText={setUsername}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    style={styles.inputStyle}
                    onChangeText={setPassword}
                />

                <View>
                    <Text>You username: {username}</Text>
                    <Text>You Password: {password}</Text>

                </View>

                <View className=" flex-1 items-center justify-center">
                    <Text>User Token:{userInfo.token}</Text>
                    <Button
                        onPress={handleShowContext}
                        title='Show Context'
                    />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },

    formLabel: {
        fontSize: 20,
        color: '#fff',
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC',
    }
});

export default LoginScreen;