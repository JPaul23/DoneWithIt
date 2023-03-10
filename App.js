import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { AppStateProvider } from './app/components/AppContext';

import SettingStackScreen from './app/screens/SettingStackScreen';
import { HomeStackScreen } from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';

const Tab = createBottomTabNavigator();
export default function App() {

  return (

    <AppStateProvider>
      <SafeAreaProvider>

        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline'
                    }
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Settings') {
                return (
                  <Ionicons
                    name={focused ? 'settings' : 'settings-outline'}
                    size={size}
                    color={color}
                  />
                );
              }
              else if (route.name === 'Login') {
                return (
                  <Ionicons
                    name={focused ? 'finger-print' : 'finger-print-outline'}
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
          })}>


            <Tab.Screen name="Home" component={HomeStackScreen} options={{
              tabBarBadge: 3,
            }} />
            <Tab.Screen name="Settings" component={SettingStackScreen} />
            {<Tab.Screen name="Login" component={LoginScreen} />}
          </Tab.Navigator>
        </NavigationContainer>

      </SafeAreaProvider >
    </AppStateProvider>

  );
}

