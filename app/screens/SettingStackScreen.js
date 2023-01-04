import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

export const DetailsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}
export const SettingsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const SettingsStack = createNativeStackNavigator();

const SettingStackScreen = () => {
    return (
        <SettingsStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <SettingsStack.Screen name="Setting" component={SettingsScreen} />
            {<SettingsStack.Screen name="Details" component={DetailsScreen} />}
        </SettingsStack.Navigator>
    );
}

export default SettingStackScreen;

const styles = StyleSheet.create({})